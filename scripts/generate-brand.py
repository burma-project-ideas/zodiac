"""Generate Zodiac branding from wwwroot/brand/logo.svg. Requires Pillow."""
from pathlib import Path
import xml.etree.ElementTree as ET
import shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / "BlazorWasm.Zodiac" / "wwwroot"
BRAND = WEB / "brand"
MASTER = BRAND / "logo.svg"
svg = MASTER.read_text(encoding="utf-8")
root = ET.fromstring(svg)
PURPLE = root.attrib["color"]


def mark(size, ink=PURPLE):
    scale = size * 4 / 64
    canvas = Image.new("RGBA", (size * 4, size * 4))
    draw = ImageDraw.Draw(canvas)
    # shortcut: supports this master's geometric elements; use an SVG renderer if new element types are added.
    for element in root:
        tag = element.tag.split("}")[-1]
        attrs = element.attrib
        if tag == "title":
            continue
        width = max(1, round(float(attrs.get("stroke-width", 1)) * scale))
        if tag == "circle":
            cx, cy, radius = (float(attrs[key]) * scale for key in ("cx", "cy", "r"))
            draw.ellipse((cx-radius, cy-radius, cx+radius, cy+radius), fill=ink if "fill" in attrs else None, outline=ink if "stroke" in attrs else None, width=width)
        elif tag in ("polygon", "polyline"):
            points = [tuple(float(value) * scale for value in pair.split(",")) for pair in attrs["points"].split()]
            if tag == "polygon":
                draw.polygon(points, fill=ink)
            else:
                draw.line(points, fill=ink, width=width, joint="curve")
                for x, y in points:
                    draw.ellipse((x-width/2, y-width/2, x+width/2, y+width/2), fill=ink)
        else:
            raise ValueError(f"Unsupported master element: {tag}")
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def tile(size, background=PURPLE, ink="white"):
    canvas = Image.new("RGBA", (size, size), background)
    symbol = mark(round(size * 0.72), ink)
    canvas.alpha_composite(symbol, ((size-symbol.width)//2, (size-symbol.height)//2))
    return canvas


BRAND.mkdir(exist_ok=True)
for name, ink in (("logo-dark.svg", "#b692f6"), ("logo-white.svg", "#ffffff")):
    (BRAND / name).write_text(svg.replace(PURPLE, ink), encoding="utf-8")
for size in (16, 32, 48, 64, 128, 256, 512, 1024):
    mark(size).save(BRAND / f"logo-{size}.png")
mark(512).save(WEB / "logo.png")
for size in (192, 512):
    tile(size).save(WEB / f"icon-{size}.png")
tile(180).save(WEB / "apple-touch-icon.png")
tile(512).save(BRAND / "icon-maskable-512.png")
mark(48).save(WEB / "favicon.ico", sizes=[(16,16), (32,32), (48,48)])
# Keep the SVG favicon on a purple tile so it stays legible in either browser theme.
(BRAND / "favicon.svg").write_text(svg.replace('<title>', '<rect width="64" height="64" rx="14" fill="#7f56d9"/><title>').replace('color="#7f56d9"', 'color="#ffffff"'), encoding="utf-8")

# Dedicated branded URLs avoid reusing browser-cached template icon paths.
for source, target in (("favicon.ico", "favicon.ico"), ("icon-192.png", "app-icon-192.png"), ("icon-512.png", "app-icon-512.png"), ("apple-touch-icon.png", "apple-touch-icon.png")):
    shutil.copyfile(WEB / source, BRAND / target)

font_root = Path("C:/Windows/Fonts")
def font(size, bold=False):
    for path in (font_root / ("segoeuib.ttf" if bold else "segoeui.ttf"), Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")):
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size=size)

social = Image.new("RGB", (1200,630), "#f9f5ff")
draw = ImageDraw.Draw(social)
for x in range(0,1200,80): draw.line((x,0,x,630), fill="#eee6fa")
for y in range(0,630,80): draw.line((0,y,1200,y), fill="#eee6fa")
social.paste(mark(192), (76,148), mark(192))
draw.text((310,160), "Zodiac", font=font(96,True), fill="#181d27")
draw.text((315,293), "A little closer to understanding you.", font=font(34), fill="#535862")
draw.text((80,488), "BURMA PROJECT IDEAS", font=font(21,True), fill=PURPLE)
draw.text((80,530), "blazor-zodiac.vercel.app", font=font(23), fill="#535862")
social.save(BRAND / "social-card.png")

proof = Image.new("RGB", (1200,600), "#ffffff")
draw = ImageDraw.Draw(proof)
draw.rectangle((600,0,1200,600), fill="#181d27")
proof.paste(mark(240), (180,75), mark(240))
proof.paste(mark(240,"#b692f6"), (780,75), mark(240,"#b692f6"))
for offset, color in ((0,"#181d27"),(600,"#ffffff")):
    draw.text((offset+215,340), "Zodiac", font=font(42,True), fill=color)
    for index, size in enumerate((16,32,48,64)):
        symbol=mark(size, PURPLE if not offset else "#b692f6")
        proof.paste(symbol,(offset+140+index*85,440),symbol)
proof.save(BRAND / "brand-preview.png")

for size in (16,32,48,64,128,256,512,1024):
    image=Image.open(BRAND / f"logo-{size}.png")
    assert image.size==(size,size) and image.mode=="RGBA"
    assert image.getpixel((0,0))[3]==0, "Master derivatives must remain transparent"
assert Image.open(BRAND / "social-card.png").size==(1200,630)
for file,size in (("icon-192.png",192),("icon-512.png",512),("apple-touch-icon.png",180)):
    assert Image.open(WEB / file).size==(size,size)
print("Generated and checked transparent marks, favicon, app icons, social card, and theme preview.")
