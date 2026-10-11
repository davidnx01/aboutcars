# AboutCars s.r.o. — redizajn webu (neoficiálny návrh)

> Neoficiálny návrh — nie je to oficiálny web podniku. Ukážka redizajnu od [webdavid.sk](https://webdavid.sk); formulár tu nefunguje.

Nový vizuál pre [aboutcars.sk](https://aboutcars.sk). Texty a fotografie sú pôvodné z ich webu (stav 9. 10. 2026), zmenený je dizajn, štruktúra a technika.

Statický web bez build kroku, **rovnaké URL ako dnešný web** (presmerovania pri spustení netreba):
`/` · `/o-nas/` · `/sluzby/` · `/kontakty/` · `/service/preprava-vozidiel/` · `/service/vykladka-namornych-kontajnerov/` · `/service/oprava-pdr/` · `/service/audit-vozidiel/`

## Koncept: dispečerská tabuľa a ložná paluba (tmavý režim)
Druhá verzia redizajnu (11. 10. 2026). Prvá verzia mala rovnaké poradie a typ sekcií ako pôvodný web
(hero, mriežka kariet, proces 01–04, formulár) — menila len farby. Táto verzia mení architektúru stránky.

- **Dráhy (lane) namiesto sekcií s kartami.** Každá sekcia má úzky ľavý pruh so zvislým označením
  („PREPRAVA“, „VÝKLADKA“, „PROCES“, „KONTAKT“) a vlasovou linkou; obsah beží vedľa na celú šírku.
  Žiadne zaoblenia, žiadne tiene, žiadne karty — len vlasové linky a oranžová značka.
- **Hero:** fotka autoprepravníka cez celú plochu pod tmavým závojom, veľká kondenzovaná typografia vľavo a **dispečerská tabuľa služieb** vpravo na polopriehľadnom paneli —
  štyri riadky s kódom trasy (SK · CZ · HU · EÚ, Námorné kontajnery, Bez lakovania, Pred dodaním),
  názvom, popisom a šípkou. Všetky štyri služby sú viditeľné hneď, bez slidera a bez mriežky kariet.
- **Čísla** (10+, 1 000+, 99 %) ležia na spodnom okraji hero fotky ako odpočet na tabuli, nie ako tri boxy.
- **Proces spolupráce ako trasa:** prerušovaná čiara s kosoštvorcovými kilometrovníkmi 01–04
  (číslovanie je ich vlastné). Na mobile sa trasa otočí do zvislej osi.
- **Vlastnosti služieb ako vlasová mriežka štítkov** (nie zaškrtávacie políčka).
- **Kontakt ako volací list dispečingu:** mená, čísla, e-mail a hodiny v riadkoch s linkami,
  formulár s podčiarknutými poľami namiesto rámčekov.
- **Pätička** s obrovským obrysovým nápisom ABOUTCARS.
- Písmo: **Antonio** (nadpisy — úzky, vysoký, „nákladný“ rez) + **Public Sans** (text)
  + **Sometype Mono** (kódy, popisky, číselné údaje). Farby: čierna/grafitová vrstva
  `#0b0d0f → #1e2328`, oranžová z loga `#e4762f` ako jediná farba značky.

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
