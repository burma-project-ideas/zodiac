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
  document.querySelector("#reading").scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
};
window.focusBirthday = function () {
  document.querySelector("#birthday").focus();
};

window.initBirthdayPicker = function () {
  const input = window.jQuery("#birthday");
  input.attr("aria-expanded", "false");
  window.jQuery("#birthday-toggle").attr("aria-expanded", "false");
  const template = ["years", "months", "days"]
    .map((view, index) => {
      const unit = ["years", "year", "month"][index];
      const week =
        view === "days"
          ? '<div class="calendar-week" data-view="week"></div>'
          : "";
      return `<div class="datepicker-panel" data-view="${view} picker"><div class="calendar-nav"><button type="button" data-view="${unit} prev" aria-label="Previous ${unit}">‹</button><button type="button" data-view="${unit} current" aria-live="polite"></button><button type="button" data-view="${unit} next" aria-label="Next ${unit}">›</button></div>${week}<div class="calendar-grid" data-view="${view}"></div></div>`;
    })
    .join("");
  input.datepicker({
    format: "yyyy-mm-dd",
    autoHide: true,
    autoPick: false,
    itemTag: "button",
    trigger: "#birthday-toggle",
    zIndex: 1000,
    offset: 8,
    template: `<div id="birthday-calendar" class="datepicker-container zodiac-datepicker" role="dialog" aria-label="Choose birthday">${template}</div>`,
    show() {
      input.attr("aria-expanded", "true");
      window.jQuery("#birthday-toggle").attr("aria-expanded", "true");
      queueMicrotask(() => {
        const picker = window.jQuery("#birthday-calendar");
        picker.find("button").attr("type", "button");
        picker.find(".calendar-week button").prop("disabled", true);
        picker
          .off(".zodiac")
          .on("keyup.zodiac", (event) => {
            if (event.key === "Tab") event.stopPropagation();
          })
          .on("keydown.zodiac", (event) => {
            if (event.key === "Escape") {
              input[0].focus();
              input.datepicker("hide");
            }
          });
      });
    },
    hide() {
      input.attr("aria-expanded", "false");
      window.jQuery("#birthday-toggle").attr("aria-expanded", "false");
    },
    pick(event) {
      if (event.view === "day")
        queueMicrotask(() => {
          input[0].focus();
          input.datepicker("hide");
        });
    },
  });
  input
    .on("focus.zodiac", () => input.datepicker("show"))
    .on("keydown.zodiac", (event) => {
      if (event.key === "Escape") input.datepicker("hide");
      if (event.key === "ArrowDown") {
        event.preventDefault();
        input.datepicker("show");
        document
          .querySelector('#birthday-calendar [data-view="days"] button.picked')
          ?.focus();
      }
    });
};
window.readBirthday = function () {
  const input = window.jQuery("#birthday");
  input.datepicker("hide");
  return input.val().trim();
};
window.resetBirthdayPicker = function () {
  window.jQuery("#birthday").datepicker("reset").val("");
  window.focusBirthday();
};
window.destroyBirthdayPicker = function () {
  window.jQuery("#birthday").off(".zodiac").datepicker("destroy");
};
