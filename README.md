# AboutCars s.r.o. — redizajn webu (neoficiálny návrh)

> Neoficiálny návrh — nie je to oficiálny web podniku. Ukážka redizajnu od [webdavid.sk](https://webdavid.sk); formulár tu nefunguje.

Nový vizuál pre [aboutcars.sk](https://aboutcars.sk). Texty a fotografie sú pôvodné z ich webu (stav 9. 10. 2026), zmenený je dizajn, štruktúra a technika.

Statický web bez build kroku, **rovnaké URL ako dnešný web** (presmerovania pri spustení netreba):
`/` · `/o-nas/` · `/sluzby/` · `/kontakty/` · `/service/preprava-vozidiel/` · `/service/vykladka-namornych-kontajnerov/` · `/service/oprava-pdr/` · `/service/audit-vozidiel/`

## Koncept: preberací protokol vozidla, celý web v tmavom režime
- **Tmavý režim na celom webe** (na želanie Davida, nadväzuje na ich pôvodnú `#121212`): vrstvy `#08090b` / `#0e1013` / `#121519` / `#16191e`, text `#eceef0`, oranžová z loga ako farba tlače (`#e0763a` na texty, tlačidlá `#c4561b` kvôli kontrastu bieleho písma).
- **Polia s popiskami** namiesto kariet: hero má tri polia (preprava · výkladka · PDR a audit) položené cez fotku autoprepravníka — všetky tri slajdy pôvodného slidera sú viditeľné naraz.
- **Kontrolné zoznamy so zaškrtnutím** pre vlastnosti služieb (Zmluvná preprava, Bezpečný transport…).
- **Logo ako pečiatka** na fotke autoprepravníka a na fotke v O nás.
- **Jedna ozdoba:** obrys auta zhora s kontrolnými bodmi pri „Oprava PDR a audit vozidiel“.
- Proces spolupráce 01–04 (číslovanie je ich) ako časová os.
- Písmo: **Chakra Petch** (z ich témy — kontinuita) + **IBM Plex Sans** (text). Nadpisy vetnou veľkosťou namiesto verzálok.

## Čo nový web rieši oproti pôvodnému
- Bez slidera a preloaderu — hlavné ponuky sú viditeľné hneď.
- Počítadlá sa dnes animujú od nuly (vyhľadávače a náhľady vidia „1+“, „1 %“) → čísla sú v HTML napevno.
- Z DOM zmizli zvyšky e-shopu z témy („Cart / Your cart is empty / Browse Shop“).
- Titulky stránok a meta description (dnes len „AboutCars“, description chýba), Open Graph, štruktúrované dáta `LocalBusiness` (IČO, DIČ, IČ DPH, adresa, služby).
- Kontakty ako prehľadné polia: adresa s mapou, fakturačné údaje, dispečing, hodiny, e-mail.
- Fotky v kartách služieb (pôvodne len stock ikony z 2022), `prefers-reduced-motion`, `:focus-visible`, 1× H1 na stránku.
- Bez WordPressu, jQuery, reCAPTCHA a WooCommerce: domovská stránka 15 kB HTML + 18 kB CSS + 1 kB JS.

## Zmeny v textoch (preklepy a typografia)
- Audit vozidiel: „kocovému uživatelovi“ → „koncovému užívateľovi“, „indentifikujú“ → „identifikujú“, „prehladnú“ → „prehľadnú“.
- Štatistika: „1,000+“ → „1 000+“, „Prepravených vozidiel. ročne“ → „Prepravených vozidiel ročne“, „99%“ → „99 %“.
- „Hovory prijímame od 7:30 - 17:00“ → „od 7:30 – 17:00“ (pomlčka).
- Nadpisy a otázky FAQ vetnou veľkosťou (pôvodne verzálky). Obsah bez zmeny.

## Pred spustením overiť
- **Rozpor v hodinách:** pätička „Kontakt 24/7 NONSTOP“ vs. kontakty „Hovory prijímame od 7:30 – 17:00“ (bez dní). Zjednotiť s klientom; dovtedy web neukazuje živý stav otvorené/zatvorené.
- Mená kontaktných osôb (P. Pollák, S. Meszárosová) sú prevzaté z ich stránky Kontakty — potvrdiť, že ich chcú ponechať.
- Formulár je v náhľade vypnutý — pri spustení napojiť (e-mail alebo administrácia).

## Fotky (`assets/img/`)
Všetky z aboutcars.sk/wp-content/uploads (WhatsApp fotky z 12.–18. 3. 2026, logo, favicon). Zmenšené a prevedené do WebP. Stock pozadie `page-title-bg.jpg` a ikony z témy (2022) nie sú použité.
