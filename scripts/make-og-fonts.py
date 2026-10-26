"""One-off: build static TTF instances (latin + latin-ext merged) for the OG renderer.
Usage: python3 scripts/make-og-fonts.py   (needs fonttools + brotli)"""
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.merge import Merger
import os

root = "node_modules/@fontsource-variable"
jobs = [
    ("newsreader", "newsreader", 400, "Newsreader-Regular.ttf"),
    ("atkinson-hyperlegible-next", "atkinson-hyperlegible-next", 600, "Atkinson-SemiBold.ttf"),
]
for pkg, base, wght, out in jobs:
    parts = []
    for sub in ("latin", "latin-ext"):
        f = TTFont(f"{root}/{pkg}/files/{base}-{sub}-wght-normal.woff2")
        f.flavor = None
        parts.append(instancer.instantiateVariableFont(f, {"wght": wght}))
    tmp = []
    for i, p in enumerate(parts):
        path = f"/tmp/_og_{i}.ttf"
        p.save(path)
        tmp.append(path)
    merged = Merger().merge(tmp)
    merged.save(os.path.join("scripts/og-fonts", out))
    print("wrote", out)
