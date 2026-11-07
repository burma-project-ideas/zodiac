window.radarChart = function (id, title, traits) {
  if (window.zodiacChart) window.zodiacChart.destroy();
  window.zodiacChart = new ApexCharts(document.querySelector(id), {
    series: [{ name: "Trait", data: traits.map((trait) => trait.data) }],
    chart: {
      height: 225,
      type: "radar",
      fontFamily: "Inter, Arial, sans-serif",
      toolbar: { show: false },
      animations: {
        enabled: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      },
    },
    colors: ["#7f56d9"],
    stroke: { width: 2 },
    fill: { opacity: 0.12 },
    markers: { size: 3, colors: ["#7f56d9"], strokeWidth: 0 },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e9eaeb",
          connectorColors: "#e9eaeb",
          fill: { colors: ["#fff", "#fafafa"] },
        },
      },
    },
    xaxis: {
      categories: traits.map((trait) => trait.label),
      labels: {
        style: { colors: traits.map(() => "#717680"), fontSize: "9px" },
      },
    },
    yaxis: { min: 0, max: 100, tickAmount: 4, show: false },
    tooltip: { y: { formatter: (value) => `${value}%` } },
    responsive: [{ breakpoint: 768, options: { chart: { height: 250 } } }],
  });
  return window.zodiacChart.render();
};
window.scrollToReading = function () {
  document
    .querySelector("#reading")
    .scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
};
window.focusBirthday = function () {
  document.querySelector("#birthday").focus();
};
