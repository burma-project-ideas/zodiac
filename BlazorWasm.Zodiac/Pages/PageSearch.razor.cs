using BlazorWasm.Zodiac.Data;
using BlazorWasm.Zodiac.Models;
using Microsoft.JSInterop;

namespace BlazorWasm.Zodiac.Pages;

public partial class PageSearch
{
    private string _date = "";
    private int _index = 0;
    private bool _isSearch = false;
    private ZodiacSignModel _zodiacSign;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await BindDatePicker();
        }
    }

    async Task BindDatePicker()
    {
        await _JsRuntime.InvokeVoidAsync("setDatePicker", "txtChooseDate");
    }

    async Task SearchDate()
    {
        _date = await _JsRuntime.InvokeAsync<string>("getDatePicker", "txtChooseDate");
        if (string.IsNullOrEmpty(_date)) return;
        string[] dateArr = _date.Split("-");
        DateTime dt = Convert.ToDateTime($"{dateArr[2]}-{dateArr[1]}-{dateArr[0]}");
        var horoscope = _ZodiacService.GetHoroscope(dt);
        var chinese = _ZodiacService.GetChineseZodiac(dt.Year);
        await Sign(horoscope.ToString());
    }

    private async Task Sign(string name)
    {
        (_index, _zodiacSign) = JsonData.FindZodiacSign(name);
        if (_zodiacSign == null) return;
        _isSearch = true;
        StateHasChanged();
        await SetChart();
        await _JsRuntime.InvokeVoidAsync("scollTop0");
    }

    private async Task SetChart()
    {
        await Task.Delay(TimeSpan.FromMilliseconds(200));
        var data = _zodiacSign.Traits.Select(x => new ChartModel
        {
            data = x.Percentage,
            label = x.Name,
        }).ToList();
        await _JsRuntime.InvokeVoidAsync
        (
            "radarChart",
            "#chart",
            "Personality Traits",
            data
        );
    }

    async Task Back()
    {
        _date = "";
        _isSearch = false;
        await Task.Delay(TimeSpan.FromMilliseconds(200));
        await BindDatePicker();
    }
}