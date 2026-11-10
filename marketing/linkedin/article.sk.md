# Článok na LinkedIn (SK): Prečo by mali nápady rozkvitnúť cez noc

> **Draft — needs native review.** Slovenská verzia článku [article.en.md](article.en.md). Titulný obrázok: `assets/article-cover-1920x1080.sk.png`.

- **Názov:** Prečo by mali nápady rozkvitnúť cez noc
- **SEO názov (≤60):** Prečo by mal AI prototyp trvať jednu noc, nie štvrťrok
- **SEO popis (≤160):** Čo musí platiť, aby sa z nápadu cez noc stal funkčný a otestovaný prototyp, a prečo každé dôležité rozhodnutie stále robí človek.

---

Väčšina nápadov nezlyhá preto, že sú zlé. Zaseknú sa, pretože zistiť, či sú dobré, trvá príliš dlho.

Ten vzorec poznáte. Niekto má nápad: chat nad firemnými dokumentmi, asistenta pre tím podpory, prepojenie dvoch systémov, ktoré spolu nekomunikujú. Znie to sľubne. Potom príde odhad, plánovanie, prioritizácia a čakanie na voľný šprint. Kým si niekto môže na niečo kliknúť, ubehnú týždne, pôvodná otázka sa rozmaže a ten, kto nápad mal, už rieši ďalší.

Viac ako 20 rokov pomáham tímom stavať systémy, ktoré fungujú v produkcii. Najpomalšou časťou zriedka bola samotná stavba. Bol to čas medzi „čo keby“ a „poďme to vyskúšať“.

## Čo sa zmenilo

AI agenti dnes dokážu za jednu noc napísať a otestovať veľké množstvo kódu. Architektmi ich to však nerobí. Ak ich necháte samých, sebavedome stavajú zlým smerom, preskakujú nudné prípady a robia rozhodnutia, ktoré im neprislúchajú.

So smerom a úsudkom okolo nich však menia ekonomiku prvej verzie. Prvá verzia, ktorá kedysi trvala týždne, dnes môže trvať jednu noc, ak platí niekoľko vecí.

## Čo musí platiť

**1. Rozsah sa zmestí do jednej noci.** Prototyp cez noc je jeden jasný nápad s jedným základným postupom, ktorý si viete vyskúšať. Nie produkt, nie platforma. Preto každá noc v Moonbloom začína krátkym večerným rozhovorom, v ktorom nápad zúžime na časť, ktorá odpovie na najdôležitejšiu otázku. Ak je nápad väčší, zvyšok pripadne na ďalšie noci.

**2. Plán je skôr než kód.** Skôr než agenti začnú, z nápadu vznikne písomný plán: čo postaviť, čo znamená „funguje“, čo je mimo rozsahu a ako sa to otestuje. Plán skontroluje skúsený architekt. Väčšina kvality ranného výsledku sa rozhodne práve tu, večer.

**3. Testy sú súčasťou stavby, nie dodatok.** Agenti píšu kód aj testy spolu. Testy sú spôsob, akým agenti vedia, čo funguje, a akým to na druhý deň ráno viete aj vy. Prototyp bez testov je demo, ktorému musíte veriť naslepo.

**4. Agenti nerobia vaše rozhodnutia.** Niektoré voľby by agent o tretej ráno robiť nemal: aký model použiť na skutočné dáta, kto má mať prístup, čo robiť, keď sú dáta nejednoznačné. Tie idú na krátky zoznam otvorených rozhodnutí. Podľa mojej skúsenosti je práve tento zoznam ráno často to najcennejšie na stole.

**5. Všetko dôležité schvaľuje človek.** Večer schválite rozsah, ráno výsledok. Bez schválenia človekom sa nič nenasadí. Nikto stavbu celú noc nesleduje a ani nemusí: na to je plán a testy.

## Čo dostanete ráno

Keď tieto veci platia, ráno vás čakajú štyri veci:

- funkčný prototyp, ktorý si viete preklikať, zavolať alebo vyskúšať;
- jeho automatizované testy;
- krátke demo toho, čo vzniklo, a návod, ako si to vyskúšať;
- otvorené rozhodnutia pripravené na vaše odpovede.

Potom rozhodnete: schválite ho, necháte ho doladiť ďalšiu noc, alebo naplánujeme cestu do produkcie.

## Čo to nie je

Prototyp cez noc nie je hotový produkt a tváriť sa inak by bola strata vášho času. Nebude mať všetky okrajové prípady, zabezpečenú infraštruktúru ani model prístupov, aký potrebuje produkčný systém. Keď si prototyp zaslúži pokračovanie, táto práca príde potom: CI/CD, infraštruktúra ako kód, monitoring, zabezpečenie. Je to pomalšia, premyslená práca a tak to má byť.

Prototyp cez noc vám dá rýchlu a úprimnú odpoveď na otázku, na ktorej záleží najskôr: funguje tento nápad?

## Prečo som založil Moonbloom Labs

Moonbloom Labs som založil, aby bola táto prvá odpoveď lacná. Večer zasadíte nápad a ráno máte niečo, čo si viete vyskúšať, a otázky, na ktoré viete odpovedať iba vy.

Staviame RAG vyhľadávanie nad firemnými dokumentmi, znalostné bázy, chatboty a AI asistentov, gamifikáciu, AI integrácie a DevOps a cloud, ktoré dobré prototypy dostanú do produkcie. Pracujeme po slovensky aj po anglicky.

Ak máte na zozname nápad, ktorý čaká, rád si ho vypočujem: moonbloomlabs.com/sk/.

Nápady rozkvitnú cez noc.

_Michal Maxian, zakladateľ Moonbloom Labs, AI a cloudový architekt_
