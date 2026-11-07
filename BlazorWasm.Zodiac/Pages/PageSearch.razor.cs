using BlazorWasm.Zodiac.Data;
using BlazorWasm.Zodiac.Models;
using Microsoft.JSInterop;

namespace BlazorWasm.Zodiac.Pages;

public partial class PageSearch
{
    private DateTime? _birthDate;
    private bool _isSearch;
    private bool _renderChart = true;
    private string _error = "";
    private ZodiacSignModel _zodiacSign = JsonData.ZodiacSigns[4];

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!_renderChart) return;
        _renderChart = false;
        var traits = _zodiacSign.Traits.Select(trait => new ChartModel { data = trait.Percentage, label = trait.Name }).ToList();
        await _JsRuntime.InvokeVoidAsync("radarChart", "#chart", "Personality traits", traits);
    }

    private async Task SearchDate()
    {
        if (!_birthDate.HasValue)
        {
            _error = "Choose your birthday to find your sign.";
            return;
        }
        await Sign(_ZodiacService.GetHoroscope(_birthDate.Value).ToString());
    }

    private async Task Sign(string name)
    {
        var (_, sign) = JsonData.FindZodiacSign(name);
        if (sign is null)
        {
            _error = "This reading is unavailable. Please choose another sign.";
            return;
        }
        _zodiacSign = sign;
        _isSearch = true;
        _error = "";
        _renderChart = true;
        await _JsRuntime.InvokeVoidAsync("scrollToReading");
    }

    private async Task Back()
    {
        _birthDate = null;
        _isSearch = false;
        _error = "";
        await _JsRuntime.InvokeVoidAsync("focusBirthday");
    }
}
