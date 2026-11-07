const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const app = path.join(__dirname, '..', 'BlazorWasm.Zodiac');
const source = fs.readFileSync(path.join(app, 'Data', 'JsonData.cs'), 'utf8');
const match = source.match(/private static string Zodiac = @"([\s\S]*?)";/);
assert.ok(match, 'Embedded zodiac dataset exists');
const signs = JSON.parse(match[1].replace(/""/g, '"'));
assert.equal(signs.length, 12);
for (const sign of signs) {
    for (const key of ['ZodiacSignImageUrl', 'ZodiacSign2ImageUrl', 'ElementImageUrl']) {
        const asset = path.join(app, 'wwwroot', sign[key]);
        assert.ok(fs.existsSync(asset), asset);
        assert.ok(fs.readdirSync(path.dirname(asset)).includes(path.basename(asset)), asset);
    }
}
console.log('All 12 signs have existing images with matching filename case.');
