import coupeCocktails from "@/assets/coupe-cocktails.jpg";
import indoorDemanovka from "@/assets/indoor-demanovka.webp";
import outdoorBorecGin from "@/assets/outdoor-borec-gin.webp";
import purpleCocktails from "@/assets/purple-cocktails.webp";
import mixingDrink from "@/assets/mixing-drink.jpg";

export type BlogCategory = "Svadby" | "Firemné eventy" | "Oslavy & Párty" | "Nápoje & Drinky" | "Tipy & Rady";

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  categories?: BlogCategory[];
  metaTitle: string;
  metaDescription: string;
  readingTime: string;
  cardTitle: string;
  cardExcerpt: string;
  h1: string;
  date: string;
  coverImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ako-vybrat-mobilny-bar-na-svadbu",
    category: "Svadby",
    metaTitle: "Ako vybrať mobilný bar na svadbu? Kompletný sprievodca | Sip & Sparkle",
    metaDescription: "Plánujete svadbu a rozmýšľate nad mobilným barom? Zistite, na čo si dať pozor, koľko to stojí a prečo je barový catering trendom číslo 1 na slovenských svadbách.",
    readingTime: "6 min",
    cardTitle: "Ako vybrať mobilný bar na svadbu? Kompletný sprievodca pre nevesty a ženíchov",
    cardExcerpt: "Mobilný bar na svadbu sa stal štandardom, nie luxusom. Ale ako vybrať toho správneho partnera a na čo si dať pozor?",
    h1: "Ako vybrať mobilný bar na svadbu? Kompletný sprievodca pre nevesty a ženíchov",
    date: "2026-02-15",
    coverImage: coupeCocktails,
    content: `<p class="text-lg text-muted-foreground mb-8 leading-relaxed">Svadba je jeden z najdôležitejších dní vášho života — a nápoje sú jeho neoddeliteľnou súčasťou. Mobilný bar na svadbu sa stal v posledných rokoch na Slovensku štandardom, nie luxusom. Ale ako vybrať toho správneho partnera? Na čo si dať pozor? A koľko to vlastne stojí? V tomto článku vám prezradíme všetko, čo potrebujete vedieť.</p>

<h2>Prečo mobilný bar a nie klasický barman za stolom?</h2>
<p>Klasický barman za barovou pultom mal svoje čaro, no moderný mobilný bar prináša oveľa viac. Je to zároveň dekorácia, show aj funkčný servis v jednom. Hosťom sa nestojí v dlhom rade pri jedinom výdajnom mieste — mobilný bar môže obsluhovať hosťov priamo na tanečnom parkete, v záhrade aj pri svadobnom stole.</p>
<p>Navyše, profesionálny barmanský tím vie prispôsobiť celý dizajn baru vašej svadobnej téme — od rustikálneho dreveného pultu až po elegantnú art deco zostavu.</p>

<h2>Na čo sa pýtať pri výbere barového cateringu?</h2>

<h3>1. Aká je ich skúsenosť so svadbami?</h3>
<p>Rozdiel medzi firmou, ktorá robí firemné eventy, a tou, ktorá sa špecializuje na svadby, je obrovský. Pýtajte sa na referencie, pozrite si ich Instagram a recenzie. Dobrý svadobný barový catering vie koordinovať načasovanie s kuchyňou, orchestrom aj fotografom.</p>

<h3>2. Čo je zahrnuté v cene?</h3>
<p>Niektoré firmy účtujú zvlášť dopravu, zvlášť ľad, zvlášť poháre. Vždy si žiadajte kompletnú cenovú ponuku a pýtajte sa, čo presne dostanete za danú cenu. Ideálny balík zahŕňa: prenájom baru, barmanský tím, všetky ingrediencie, poháre, ľad a upratanie po akcii.</p>

<h3>3. Ponúkajú individuálne svadobné koktaily?</h3>
<p>Signature cocktail pre novomanželský pár je dnes trendom číslo 1. Dobrá firma navrhne špeciálny nápoj pomenovaný podľa vás — napríklad „The Novák Spritz" — a bude ho počas večera servírovať ako váš osobný svadobný drink.</p>

<h3>4. Indoor alebo outdoor — vedia pokryť oboje?</h3>
<p>Mnoho svadieb sa koná čiastočne vonku (fotenie, cocktail hour) a čiastočne vnútri (večera, tanec). Váš mobilný bar musí vedieť fungovať v oboch prostrediach bez kompromisov.</p>

<h2>Koľko stojí mobilný bar na svadbu na Slovensku?</h2>
<p>Ceny sa líšia podľa počtu hostí, dĺžky akcie a rozsahu služieb. Orientačne:</p>
<ul>
<li><strong>Základný balík</strong> (do 50 hostí, 4 hodiny): od 600 €</li>
<li><strong>Štandardný balík</strong> (50–100 hostí, 6 hodín): od 1 000 €</li>
<li><strong>Premium balík</strong> (100+ hostí, celý deň): od 1 800 €</li>
</ul>
<p>Tieto ceny sú orientačné — vždy si vyžiadajte nezáväznú cenovú ponuku prispôsobenú vašej svadbe.</p>

<h2>Aké nápoje sú na svadbe najpopulárnejšie?</h2>
<p>Na základe našich skúseností zo stoviek slovenských svadieb sú toto víťazi:</p>
<ul>
<li><strong>Aperol Spritz</strong> — ľahký aperitív, ideálny na cocktail hour</li>
<li><strong>Hugo</strong> — elderflower, prosecco, mäta — letná klasika</li>
<li><strong>Mojito</strong> — evergreen, ktorý nikdy nesklamie</li>
<li><strong>Wine bar</strong> — kvalitné slovenské vína vždy bodujú u slovenských hostí</li>
<li><strong>Beer tap</strong> — točené pivo pre mužskú časť hostí</li>
</ul>

<h2>Záver: Správny mobilný bar urobí z vašej svadby nezabudnuteľný zážitok</h2>
<p>Mobilný bar nie je len o nápojoch — je o atmosfére, detailoch a úsmevoch vašich hostí. Investícia do kvalitného barového cateringu sa vždy vráti v spomienkach, ktoré budete spolu s hosťami rozprávať roky.</p>`,
  },
  {
    slug: "koktaily-vino-pivo-co-vybrat-na-firemny-event",
    category: "Firemné eventy",
    metaTitle: "Koktaily, víno alebo pivo? Čo vybrať na firemný event | Sip & Sparkle",
    metaDescription: "Firemný event plánujete prvýkrát alebo hľadáte inšpiráciu? Poradíme vám, aký nápojový mix funguje najlepšie na teambuildingy, konferencie a firemné večierky.",
    readingTime: "5 min",
    cardTitle: "Koktaily, víno alebo pivo? Čo vybrať na firemný event",
    cardExcerpt: "Firemný event plánujete prvýkrát alebo hľadáte inšpiráciu? Poradíme, aký nápojový mix funguje najlepšie.",
    h1: "Koktaily, víno alebo pivo? Ako vybrať správny nápojový mix na firemný event",
    date: "2026-02-08",
    coverImage: indoorDemanovka,
    content: `<p class="text-lg text-muted-foreground mb-8 leading-relaxed">Firemné eventy sú príležitosťou posilniť tímového ducha, poďakovať zamestnancom alebo zapôsobiť na klientov. A nápoje hrajú v tejto rovnici väčšiu rolu, ako si väčšina HR manažérov pripúšťa. Správny výber nápojov dokáže rozbiť ľady, uvolniť atmosféru a vytvoriť spomienky. Tu je náš sprievodca.</p>

<h2>Typy firemných eventov a ich nápojové profily</h2>

<h3>Konferencia alebo kongres</h3>
<p>Pri denných konferenciách platí pravidlo: alkohol až po hlavnom programe. Počas dňa stavte na kvalitnú kávu, vodu a nealkoholické drinky. Cocktail hour po skončení programu je ideálny priestor pre networking — tu zabodujú ľahké prosecco, spritz drinky a signature mocktaily.</p>

<h3>Teambuilding</h3>
<p>Tu je voľnosť väčšia. Interaktívne cocktail workshop (kde si tím sám namieša drinky pod vedením barmana) je jeden z najobľúbenejších teambuildingových formátov. Ľudia sa smejú, súťažia a nadväzujú kontakty prirodzenejšie ako pri klasických cvičeniach.</p>

<h3>Firemný večierok / Vianočný večierok</h3>
<p>Toto je príležitosť na plnohodnotný mobilný bar. Kombinujte výčap piva, wine bar a koktailový bar — každý si nájde to svoje. Premium varianta: personalizovaný firemný drink pomenovaný podľa vašej firmy alebo témy večierka.</p>

<h2>Prečo nealkoholický bar nie je nuda</h2>
<p>Mocktail revolution je tu. Moderné nealkoholické drinky sú sofistikované, vizuálne atraktívne a chutné. Na firemných eventoch, kde je mix abstinentov, tehotných kolegýň a šoférov bežný, je nealkoholický bar nielen ohľaduplný, ale aj strategicky múdry. Vaši hostia ocenia, že myslíte na každého.</p>

<h2>5 chýb, ktorých sa firmy dopúšťajú pri organizácii nápojového cateringu</h2>
<ol>
<li><strong>Podcenenie množstva</strong> — zlaté pravidlo: 2–3 drinky na osobu za prvé dve hodiny</li>
<li><strong>Žiadna alternatíva pre nekonzumentov alkoholu</strong></li>
<li><strong>Lacné víno a drahí zákazníci</strong> — nevychádza to</li>
<li><strong>Zabudnutie na logistiku</strong> (kde bude bar, prístup, elektrina)</li>
<li><strong>Booking na poslednú chvíľu</strong> — dobré firmy sú rezervované mesiace dopredu</li>
</ol>

<h2>Záver</h2>
<p>Či plánujete intímny teambuilding pre 20 ľudí alebo gala večer pre 300 hostí, správne nastavený nápojový catering je investícia do zážitku vašich ľudí. A šťastní ľudia sú produktívni ľudia.</p>`,
  },
  {
    slug: "outdoor-vs-indoor-mobilny-bar",
    category: "Tipy & Rady",
    metaTitle: "Outdoor vs. Indoor mobilný bar — čo potrebujete vedieť | Sip & Sparkle",
    metaDescription: "Záhradná párty alebo elegantná sála? Zistite, ako sa líšia požiadavky na mobilný bar pre outdoor a indoor eventy a na čo nezabudnúť pri plánovaní.",
    readingTime: "4 min",
    cardTitle: "Outdoor vs. Indoor mobilný bar — čo potrebujete vedieť pred rezerváciou",
    cardExcerpt: "Záhradná párty alebo elegantná sála? Obidva typy eventov kladú na mobilný bar odlišné nároky.",
    h1: "Outdoor vs. Indoor mobilný bar — čo treba vedieť pred rezerváciou",
    date: "2026-01-25",
    coverImage: outdoorBorecGin,
    content: `<p class="text-lg text-muted-foreground mb-8 leading-relaxed">Miesto konania eventu zásadne ovplyvňuje logistiku celého barového cateringu. Záhradná párty pod holým nebom a elegantná recepcia v historickej vile — oba sú krásne, ale kladú na mobilný bar úplne odlišné nároky. Tu je všetko, čo potrebujete vedieť pred rezerváciou.</p>

<h2>Outdoor mobilný bar — výhody a výzvy</h2>

<h3>Výhody vonkajšieho baru</h3>
<ul>
<li><strong>Fotogenické prostredie</strong> — bar v záhrade, vinici alebo pri bazéne vytvára nádherné fotografie</li>
<li><strong>Priestor pre väčší bar setup</strong> a viac staníc</li>
<li><strong>Relaxovanejšia atmosféra</strong> pre hostí</li>
<li><strong>Možnosť kombinácie</strong> s grilom a food cateringom</li>
</ul>

<h3>Na čo myslieť pri outdoor evente</h3>
<p><strong>Počasie:</strong> Profesionálny barový catering vždy prichádza s Plan B — skladateľným prístreškom alebo gazebo. Nikdy nespoliehajte na počasie bez záložného plánu.</p>
<p><strong>Elektrina:</strong> Výčap piva a chlazenie ingrediencií vyžadujú elektrickú prípojku. Overte si dostupnosť elektriny na mieste alebo sa opýtajte na agregát.</p>
<p><strong>Povrch:</strong> Bar musí stáť stabilne. Tráva po daždi, štrkový povrch alebo nerovná dlažba môžu byť výzva — dobrý tím príde s riešením.</p>

<h2>Indoor mobilný bar — výhody a výzvy</h2>

<h3>Výhody vnútorného baru</h3>
<ul>
<li>Nezávislosť od počasia</li>
<li>Kontrolovaná teplota — dôležitá pre víno aj koktaily</li>
<li>Jednoduchšia logistika elektriny a vody</li>
</ul>

<h3>Na čo myslieť pri indoor evente</h3>
<p><strong>Priestor:</strong> Bar potrebuje minimálne 3×2 metre pracovnej plochy plus priestor pre hostí. Pri menších salónikoch je kompaktný bar správnou voľbou.</p>
<p><strong>Vetranie:</strong> Koktailový bar generuje vône a vlhkosť — uistite sa, že priestor má dostatočné vetranie.</p>
<p><strong>Koordinácia s kuchyňou:</strong> Indoor eventy majú zvyčajne aj catering jedla. Koordinujte timing s kuchárskym tímom, aby výdaj jedla a nápojov nesplýval na jedno miesto.</p>

<h2>Hybridný event — vnútri aj vonku</h2>
<p>Čoraz viac eventov kombinuje oboje — cocktail hour vonku, večera a tanec vnútri. V tomto prípade odporúčame dve barové stanice: ľahší mobilný bar vonku a plný setup vnútri. Náš tím má s takýmito riešeniami bohaté skúsenosti.</p>`,
  },
  {
    slug: "top-10-koktailov-na-slovensku",
    category: "Nápoje & Drinky",
    metaTitle: "Top 10 najobľúbenejších koktailov na eventoch na Slovensku | Sip & Sparkle",
    metaDescription: "Ktoré koktaily si Slováci na eventoch objednávajú najčastejšie? Náš barmanský tím zostavil rebríček Top 10 drinkov, ktoré vždy bodujú.",
    readingTime: "5 min",
    cardTitle: "Top 10 koktailov, ktoré Slováci milujú na eventoch",
    cardExcerpt: "Náš barmanský tím zostavil rebríček drinkov, ktoré vždy bodujú — od cocktail hour až po polnoc.",
    h1: "Top 10 koktailov, ktoré Slováci milujú na eventoch — rebríček nášho barmanského tímu",
    date: "2026-01-18",
    coverImage: purpleCocktails,
    content: `<p class="text-lg text-muted-foreground mb-8 leading-relaxed">Po stovkách eventov od Bratislavy po Košice vieme presne, čo Slováci pijú. Nie to, čo si myslia, že by mali piť — ale to, čo si skutočne objednávajú pri bare o polnoci. Tu je náš nečestný, ale presný rebríček.</p>

<h2>1. Aperol Spritz — nesmrteľný kráľ cocktail hour</h2>
<p>Oranžová farba, bublinkové prosecco a horkastá sviežosť. Aperol Spritz vyhráva každý cocktail hour bez súťaže. Ľahký, fotogenický a neprestáva byť trendy.</p>

<h2>2. Hugo Spritz — slovenský letný hit</h2>
<p>Elderflower cordial, prosecco, mäta a limetka. Hugo je pre mnohých Slovákov "ten môj drink" — a máme ho v milovaných zákazníkoch každú sezónu.</p>

<h2>3. Mojito — evergreen, ktorý nikdy nezklame</h2>
<p>Rum, limetka, mäta, cukrový sirup, sóda. Mojito je istota. Funguje na svadbách, teambuildingy aj záhradných párty. A náš barmanský tím ho robí presne tak, ako má byť — nie sladké blato, ale čerstvý, vyvážený drink.</p>

<h2>4. Espresso Martini — nočný favorit</h2>
<p>Po polnoci, keď večierok vypukne naplno, prichádza čas Espresso Martini. Vodka, kahlúa, čerstvé espresso a pena navrchu. Kofeín plus alkohol — zárukou toho, že sa tancuje až do rána.</p>

<h2>5. Negroni — pre znalcov</h2>
<p>Gin, Campari, sweet vermouth. Negroni je drink pre tých, ktorí vedia, čo chcú. Na firemných eventoch pribúda stále viac ľudí, ktorí si ho objednajú hneď na úvod.</p>

<h2>6. Margarita — klasika s charakterom</h2>
<p>Tequila, cointreau, limetková šťava a soľ na okraji pohára. Margarita má nesmierne fanúšikovskú základňu — a v letnej sezóne patrí do top 3.</p>

<h2>7. Wine Spritzer — pre milovníkov vína</h2>
<p>Nie každý pije klasické koktaily. Wine spritzer — ružové alebo biele víno so sódou a citrusmi — je elegantná alternatíva pre hostí, ktorí preferujú víno, ale chcú niečo ľahšie.</p>

<h2>8. Signature Mocktail domu — prekvapenie eventu</h2>
<p>Každý event má svojho víťaza mocktailov — nealkoholický drink, ktorý prekvapí aj tých, ktorí by si ho nikdy neobjednali. Naše tipy: Elderflower Lemonade s rozmarínom, alebo Cucumber Mint Cooler s tonikom.</p>

<h2>9. Slovak Mule — lokálna variácia</h2>
<p>Moscow Mule s Borovičkou namiesto vodky. Lokálna hrdosť v pohári — a hostia to milujú. Slovak Mule je naša odpoveď na trend "drink so storytellingom."</p>

<h2>10. Šampanské / Prosecco pri príchode — nezabudnuteľný prvý dojem</h2>
<p>Jednoduchosť vyhráva. Hosť vstúpi do sály a čašník mu podá pohár šampanského — tento moment nastavia tón celého večera. Nikdy ho nepodceňujte.</p>`,
  },
  {
    slug: "barmansky-workshop-ako-teambuilding",
    category: "Firemné eventy",
    categories: ["Firemné eventy", "Oslavy & Párty"],
    metaTitle: "Barmanský workshop ako teambuilding — prečo to funguje | Sip & Sparkle",
    metaDescription: "Hľadáte originálny teambuilding pre vašu firmu? Barmanský cocktail workshop je zábavný, interaktívny a ľudia ho milujú. Zistite, ako to celé funguje.",
    readingTime: "4 min",
    cardTitle: "Barmanský workshop ako teambuilding — prečo to funguje lepšie ako lezenie po lane",
    cardExcerpt: "Interaktívny cocktail workshop pre váš tím — zábava, súťaž a drinky na záver. Zistite, ako to celé prebieha.",
    h1: "Barmanský workshop ako teambuilding — prečo to funguje lepšie ako lezenie po lane",
    date: "2026-01-10",
    coverImage: mixingDrink,
    content: `<p class="text-lg text-muted-foreground mb-8 leading-relaxed">Teambuildingy majú zlú povesť. Padanie dozadu do náručia kolegov, lezenie po lane a awkward ice-breaking hry — väčšina ľudí ich toleruje, nie miluje. Barmanský cocktail workshop je iný. Ľudia sa smejú, súťažia, tvoria niečo vlastnými rukami a na konci to vypijú. Tu je dôvod, prečo to funguje.</p>

<h2>Čo je barmanský workshop?</h2>
<p>Náš profesionálny barman príde k vám — do kancelárie, sály alebo záhrady — a prevedie váš tím základmi miešania koktailov. Účastníci sa rozdelia do tímov, každý tím dostane ingrediencie, shaker a výzvu: namixujte najlepší drink. Na konci degustácia a hlasovanie. Trvanie: 1,5–2 hodiny.</p>

<h2>Prečo workshop funguje ako teambuilding</h2>

<h3>Vytvárate spolu niečo hmotného</h3>
<p>Na rozdiel od prezentácií a workshopov o hodnotách firmy, tu tím vytvorí niečo reálne — drink, ktorý môže ochutnať. Fyzická aktivita + výsledok + odmena (drink) = silný zážitok.</p>

<h3>Rovnaké podmienky pre všetkých</h3>
<p>Barmanský workshop nevyžaduje fyzickú kondíciu ani špeciálne zručnosti. Junior programátor aj senior manažér stoja pri bare ako rovní — a to je vzácne.</p>

<h3>Prirodzená komunikácia</h3>
<p>Keď ľudia musia spoločne vyriešiť úlohu (a navyše sa pritom smejú), komunikujú prirodzenejšie ako na meetingu. Workshopy sú skvelý spôsob, ako prepojiť ľudí z rôznych tímov.</p>

<h2>Ako to celé prebieha — krok za krokom</h2>
<ol>
<li><strong>Úvod (15 min):</strong> Barman predstaví základy — techniky, náradie, pravidlá súťaže</li>
<li><strong>Praktická časť (45 min):</strong> Tímy miešajú, experimentujú, tvoria</li>
<li><strong>Finálna prezentácia (20 min):</strong> Každý tím odprezentuje svoj drink s názvom a príbehom</li>
<li><strong>Degustácia a hlasovanie (20 min):</strong> Tajné hlasovanie, víťaz dostáva trofej (alebo fľašu)</li>
<li><strong>Voľný bar (zvyšok večera):</strong> Namiešané drinky + náš mobilný bar pre celý tím</li>
</ol>

<h2>Pre koho je workshop ideálny?</h2>
<ul>
<li>Tímy 10–80 ľudí (väčšie skupiny rozdelíme do paralelných staníc)</li>
<li>Firemné eventy, konferencie, kick-off meetingy</li>
<li>Narodeninové párty, rozlúčky so slobodou</li>
<li>Vianočné večierky s interaktívnym programom</li>
</ul>`,
  },
];

export const blogCategories: BlogCategory[] = [
  "Svadby",
  "Firemné eventy",
  "Oslavy & Párty",
  "Nápoje & Drinky",
  "Tipy & Rady",
];

export const ctaTexts: Record<string, string> = {
  "ako-vybrat-mobilny-bar-na-svadbu": "Získať nezáväznú cenovú ponuku",
  "koktaily-vino-pivo-co-vybrat-na-firemny-event": "Získať ponuku pre firemný event",
  "outdoor-vs-indoor-mobilny-bar": "Poradiť sa zadarmo",
  "top-10-koktailov-na-slovensku": "Zostaviť drink menu pre môj event",
  "barmansky-workshop-ako-teambuilding": "Nezáväzne sa opýtať na workshop",
};
