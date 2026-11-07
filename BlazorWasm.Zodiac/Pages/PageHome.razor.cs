using BlazorWasm.Zodiac.Data;
using BlazorWasm.Zodiac.Models;
using Microsoft.JSInterop;

namespace BlazorWasm.Zodiac.Pages
{
    public partial class PageHome
    {
        private bool _isLoading = true;

        protected override async Task OnInitializedAsync()
        {
            await Task.Delay(500);
            _isLoading = false;
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if(firstRender)
            {
                // SetChart();
            }
        }
    }
}
