const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const web = path.join(__dirname, '..', 'BlazorWasm.Zodiac', 'wwwroot');
const pngSize = file => {
    const data = fs.readFileSync(path.join(web, file));
    assert.equal(data.subarray(1, 4).toString(), 'PNG');
    return [data.readUInt32BE(16), data.readUInt32BE(20)];
};
const manifest = JSON.parse(fs.readFileSync(path.join(web, 'manifest.json')));
assert.equal(manifest.theme_color, '#7f56d9');
assert.equal(manifest.short_name, 'Zodiac');
for (const icon of manifest.icons) assert.equal(pngSize(icon.src).join('x'), icon.sizes);
assert.ok(manifest.icons.some(icon => icon.purpose === 'maskable'));
assert.deepEqual(pngSize('apple-touch-icon.png'), [180,180]);
assert.deepEqual(pngSize('brand/social-card.png'), [1200,630]);
const ico = fs.readFileSync(path.join(web, 'favicon.ico'));
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 3);
const html = fs.readFileSync(path.join(web, 'index.html'), 'utf8');
assert.ok(html.includes('https://blazor-zodiac.vercel.app/brand/social-card.png'));
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (!/^https?:|^\/$|^_framework\//.test(match[1])) assert.ok(fs.existsSync(path.join(web, match[1])), match[1]);
}
for (const file of ['Pages/PageSearch.razor','Shared/MainLayout.razor']) {
    const text = fs.readFileSync(path.join(web, '..', file),'utf8');
    assert.ok(text.includes('src="brand/logo.svg"'));
    assert.ok(!text.includes('<span class="brand-mark"'));
}
console.log('Brand dimensions, manifest, favicon entries, metadata and UI references passed.');
