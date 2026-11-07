const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
let destroyed = 0, focused = 0, scrolled;
const charts = [];
const window = { matchMedia: () => ({ matches: true }) };
const document = { querySelector: selector => ({ selector, scrollIntoView: options => { scrolled = options; }, focus: () => { focused++; } }) };
class ApexCharts {
    constructor(element, options) { this.options = options; charts.push(this); }
    render() { return Promise.resolve(); }
    destroy() { destroyed++; }
}
vm.runInNewContext(fs.readFileSync('BlazorWasm.Zodiac/wwwroot/js/custom.js', 'utf8'), { window, document, ApexCharts });
const traits = [{ data: 80, label: 'Confident' }, { data: 60, label: 'Creative' }];
window.radarChart('#chart', 'Traits', traits);
assert.equal(charts[0].options.series[0].data.join(','), '80,60');
assert.equal(charts[0].options.xaxis.categories.join(','), 'Confident,Creative');
assert.equal(charts[0].options.chart.animations.enabled, false);
window.radarChart('#chart', 'Traits', traits);
assert.equal(destroyed, 1);
window.scrollToReading();
assert.equal(scrolled.behavior, 'instant');
window.focusBirthday();
assert.equal(focused, 1);
console.log('Chart updates, reduced motion, reading scroll and date focus passed.');
