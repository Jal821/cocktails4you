

## Vyhodnotenie novych fotiek a videi

### Fotky (3 kusy) -- vsetky su vynikajuce a pouzitelne:

1. **`IMG-20260303-WA0005.jpg`** -- Barman leje z odmerky do poharov s ladom, outdoor zelene pozadie. Profesionalna akcia fotka. **Idealne na Hero pozadie** -- lepsia ako sucasny placeholder. Dynamicky zaber, outdoor prostredie.

2. **`IMG-20260303-WA0008.jpg`** -- Dva elegantne coupe cocktaily s matou, krasne farebne bokeh pozadie. **Idealne do Gallery** sekcie ako "Cocktail Bar" karta -- ukazuje kvalitu napojov.

3. **`IMG-20260303-WA0009.jpg`** -- Barman miesa drink zlatenou lyzikou, dva pohari s ladom. Dalsia skvela akcia fotka. **Vhodna do About sekcie** vedla textu, alebo ako druha fotka v Gallery.

### Videa (4 subory -- 2 parovane formaty mp4+webm):

- **`VID-20240914-WA0002`** a **`VID-20240914-WA0003`** -- Kazde vo formatie .mp4 aj .webm. Tieto sa daju pouzit ako **video pozadie v Hero sekcii** namiesto statickej fotky, co by dodalo stranke premiovejsi, dynamickejsi pocit. Webm format je optimalne pre web.

### Plan implementacie

1. **Hero sekcia** -- Nahradit staticky obrazok za `IMG-20260303-WA0005.jpg` (barman leje drink). Alternativne: pouzit jedno z videi ako looping video pozadie (muted, autoplay) pre wow efekt.

2. **Gallery sekcia** -- Rozsirit z 2 na 4+ polozky:
   - `IMG-20260303-WA0008.jpg` (coupe cocktaily) -- nahrada za placeholder "Cocktail Bar"
   - `IMG-20260303-WA0009.jpg` (miesanie drinku) -- nova polozka
   - Zachovat existujuce fotky z predchadzajuceho uploadu (Borec Gin, MOM bar, Demanovka, atd.)

3. **About sekcia** -- Pridat jednu z barman fotiek vedla textu pre vizualny zaujem

4. **Video element** -- Pridat kratke video do Gallery alebo ako samostatnu sekciu "Nase Eventy v Akcii" s HTML5 `<video>` elementom (muted autoplay loop pre pozadie, alebo s ovladanim pre gallery)

### Technicke detaily

- Skopirovat 3 fotky do `src/assets/`
- Skopirovat 2 webm videa do `public/videos/` (velke subory su lepsie v public/)
- Aktualizovat Hero.tsx, Gallery.tsx, About.tsx s novymi importmi
- Pre video pozadie: `<video autoPlay muted loop playsInline>` s poster fallback obrazkom

