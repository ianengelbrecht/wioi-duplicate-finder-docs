---
title: Famoahana Lahatahiry
description: Mianara manondrana santiona voatahiry ho CSV ary mampifanaraka ny lohateny amin'ny endrika Darwin Core na BRAHMS.
---

Rehefa vita ny fitahirizana ny santiona amin'ny fizarana iray, dia afaka mamoaka ny angon-drakitrao ho fisie Comma Separated Values (CSV) mahazatra ianao. Ity fisie CSV ity dia voarafitra mba hampidirina mivantana ao amin'ny rafitra fitantanana tahirin-java-maniry lehibe misy anao, toy ny BRAHMS na Excel.

---

## Fomba Famoahana Lahatahiry

1. Safidio ny fizarana sary voaray mba hanokafana ny toeram-piasana fitahirizana.
2. Eo amin'ny zorony ambony havanana, tsindrio ny bokotra maitso **Hamoaka CSV**.

![Bokotra Hamoaka CSV ao amin'ny Toeram-piasana](/wioi-duplicate-finder-docs/export-button.png)

3. Hiseho ny takelaka fitahirizana fisie ao amin'ny solosainao.
4. Safidio ny lahatahiry tianao hitahirizana ilay fisie CSV.
5. Tsindrio ny **Hitahiry**.

### Anaran'ny Fisie Soso-kevitra
Ny fampiharana dia mamorona anarana mahazatra ho azy amin'ny alalan'ny fampiasana ny anaran'ny fizarana mandeha sy ny fotoana eo an-toerana mba hisorohana ny fanoloana ny famoahana teo aloha (ohatra, `Malvaceae_Cupboard_2_20260620_160000.csv`). Azonao ovaina io anarana io araka izay ilainao.

---

## Ny Endrika CSV & Fampifanarahana ny Faritra

Ny lohatenin'ny tsanganana ao amin'ny CSV navoaka dia tsy mitovy arakaraka ny **Fomba Famoahana Lahatahiry** nofidiana ao amin'ny [Fametrahana ny Fampiharana](settings).

### 1. Endrika Darwin Core (DwC)
Ny endrika Darwin Core dia mampifanaraka ireo faritra voatahiry amin'ny lohateny DwC mahazatra. Indro ny tari-dalana momba izany:

| Lohateny Darwin Core CSV | Faritry ny Takelaka Fampiharana | Antsipirian'ny Fampifanarahana |
| :--- | :--- | :--- |
| `dwc:collectionCode` | Tahirin-java-maniry fototra | Fenoina mialoha avy amin'ny fametrahana. |
| `dwc:catalogNumber` | Kaody famantarana | Kaody famantarana miavaka (barcode) amin'ny taratasy. |
| `duplicates` | Dika mitovy | Lisitra sarahan'ny faingo. |
| `dwc:recordNumber` | Laharana | Laharana voasoratry ny mpanangona. |
| `dwc:recordedBy` | Mpanangona fototra & fanampiny | Akamban'ny faingo-faingana (o.hat. Mpanangona fototra; Fanampiny 1; Fanampiny 2). |
| `dwc:verbatimEventDate` | Daty voasoratra | Daty araka ny nanoratana azy teo amin'ny etikety. |
| `dwc:year`, `dwc:month`, `dwc:day` | Taona, Volana, Andro | Ny ampahany amin'ny daty amin'ny isa. |
| `dwc:country` | Firenena | Anaran'ny firenena mahazatra. |
| `dwc:stateProvince` | Admin 2 (faritany/faritra) | Faritra voalohany. |
| `dwc:county` | Admin 3 (kaominina/distrika) | Faritra faharoa. |
| `dwc:municipality` | Admin 4 | Zana-paritra eo an-toerana. |
| `dwc:locality` | Toerana | Famaritana mazava ny toerana. |
| `dwc:locationRemarks` | Teti-toerana fanampiny | Fanamarihana; manampy `; volena` raha voamarika. |
| `dwc:verbatimCoordinates` | Mari-toerana voasoratra | Lahatsoatra misy mari-toerana GPS voasoratra. |
| `dwc:decimalLatitude` | Decimal Latitude | Latituda desimaly voakajy. |
| `dwc:decimalLongitude` | Decimal Longitude | Longituda desimaly voakajy. |
| `dwc:verbatimElevation` | Haambo voasoratra | Lahatsoatra momba ny haambo voasoratra. |
| `minElevation`, `maxElevation` | Haambo voasoratra | Ny fetran'ny haambo ambany sy ambony voakajy avy amin'ny haambo. |
| `elevation` | Haambo voasoratra | Sanda mahazatra amin'ny metatra ho an'ny haambo. |
| `elevationUncertainty` | Haambo voasoratra | Ny elanelana tsy azo antoka voakajy (raha voavaky). |
| `dwc:habitat` | Toeram-paniry | Lahatsoratra momba ny tontolo iainana. |
| `dwc:occurrenceRemarks` | Fanamarihana ankapobeny | Fanamarihana ankapobeny momba ny santiona. |
| `dwc:fieldNotes` | Famaritana ny zavamaniry | Famaritana ny zavamaniry. |
| `dwc:typeStatus` | Sokajy Type | Holotype, isotype, syntype, sns. |
| `dwc:identificationQualifier` | Mari-pamaritana | Mari-pamaritana namantarana (cf., aff., nr.). |
| `dwc:family` | Fianakaviana | Fianakaviana ara-tsokajy hita. |
| `dwc:scientificName` | Anarana Ara-tsiansa | Anaran'ny sokajy (taxon). |
| `dwc:identifiedBy` | Mpamantatra | Anaran'ireo manam-pahaizana nakamban'ny faingo-faingana. |
| `dwc:dateIdentified` | Taona/Volana/Andro Ident. | Daty amin'ny endrika mahazatra (YYYY-MM-DD). |
| `dwc:identificationRemarks` | Fanamarihana namantarana | Fanamarihana momba ny famantarana. |
| `dwc:taxonID` | Kaody Taxon | Kaody famantarana mifandray avy amin'ny lisitra WCVP. |
| `cultivated` | Zavamaniry Volena | Mamoaka `true` na `false`. |

---

### 2. Endrika BRAHMS
Ny endrika BRAHMS dia mizara sy mampifanaraka ny sanda mba hifanaraka amin'ny tabilao BRAHMS mahazatra (toy ny RND, LATDEC, gazetteer, alt, and parsed taxonomy components).

| Lohateny BRAHMS CSV | Faritry ny Takelaka Fampiharana | Antsipirian'ny Fampifanarahana |
| :--- | :--- | :--- |
| `tag` | Tsy misy | Avela ho banga. |
| `del` | Tsy misy | Avela ho banga. |
| `barcode` | Kaody famantarana | Kaody famantarana miavaka (barcode) amin'ny taratasy. |
| `dups` | Tahirin-java-maniry fototra & Dika mitovy | Akambana (o.hat. TAN, P, K). |
| `collector` | Mpanangona fototra | Ny anaran'ny mpanangona voalohany ihany. |
| `addcol` | Mpanangona fanampiny | Anarana fanampiny nakamban'ny faingo-faingana. |
| `prefix`, `number`, `suffix` | Laharana | Zaraina avy amin'ny laharan'ny mpanangona (o.hat., Raza 124a -> prefix Raza, number 124, suffix a). |
| `dd`, `mm`, `yy` | Andro, Volana, Taona | Daty nanangonana amin'ny isa. |
| `family` | Fianakaviana | Fianakaviana ara-tsokajy hita. |
| `type category` | Sokajy Type | Ny toeran'ny famaritana Type. |
| `genus`, `sp1`, `author1`, `rank1`, `sp2`, `author2` | Anarana Ara-tsiansa | Ny singa voazara avy amin'ny anarana ara-tsiansa. |
| `detby` | Mpamantatra | Anaran'ny mpamantatra voalohany. |
| `detdd`, `detmm`, `detyy` | Andro/Volana/Taona Ident. | Ny ampahany amin'ny daty namantarana amin'ny isa. |
| `detstatus` | Mari-pamaritana | Mari-pamaritana namantarana (cf., aff., nr.). |
| `country` | Firenena | Anaran'ny firenena. |
| `majorarea` | Admin 2 (faritany/faritra) | Faritra voalohany. |
| `minorarea` | Admin 3 (kaominina/distrika) | Faritra faharoa. |
| `gazetteer` | Admin 4 & Toerana | Manambatra ny Admin 4 sy ny Toerana. |
| `lat`, `long` | Decimal Lat / Long | Ny latituda sy ny longituda amin'ny isa desimaly. |
| `ns`, `ew` | Decimal Lat / Long | Ny fitarihana na famantarana (N, S, E, W). |
| `llunit` | Tsy misy | Apetraka ho DD (Degre Desimaly). |
| `qds` | Voakajy | **Ampidirina ihany raha voamarika ao amin'ny fametrahana.** Mikajy ny kaody Quarter Degree Square. |
| `alt` | Haambo voasoratra | Sanda mahazatra amin'ny metatra ho an'ny haambo. |
| `altunit` | Tsy misy | Avela ho banga. |
| `locality notes` | Teti-toerana fanampiny & Famantarana | Manambatra ny teti-toerana fanampiny, ny soratra momba ny volena, ny mari-toerana voasoratra, ary ny antsipirian'ny haambo voasoratra. |
| `habitat/site description` | Toeram-paniry | Lahatsoratra momba ny tontolo iainana. |
| `plant description` | Famaritana ny zavamaniry | Mombamomba ny zavamaniry. |
| `cultivated` | Zavamaniry Volena | Mamoaka `true` na `false`. |
| `general notes` | Remarks | Manambatra ny fanamarihana ankapobeny sy ny fanamarihana namantarana. |

### Endrika hafa

Raha te-hamoaka ny angon-drakitrao amin'ny endrika hafa ianao, dia mamorona [olana ao amin'ny GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues) mba hampahafantarana anay ary afaka miara-miasa izahay mba hanomezana anao izay ilainao. 

## Fanokafana ny angon-drakitra navoaka ao amin'ny Excel

Raha te hanokatra fisie CSV navoaka ao amin'ny Excel ianao mba hojerena na hovaina, dia mila mandeha amin'ny dingana fanafarana angon-drakitra (data import) ianao fa tsy manindry indroa fotsiny amin'ilay fisie. Izany dia satria ny angon-drakitra dia mety hisy **sary famantarana manokana** toy ny mariky ny degre sy ny litera misy tsindrim-peo amin'ny anaran'ny mpanangona. Raha sokafana mivantana amin'ny alalan'ny fikitihana indroa ny fisie CSV, dia ho simba ireo sary famantarana ireo satria ny Excel dia mampiasa rafitra litera hafa.

Mba hiantohana fa voafafatra tsara ny litera rehetra:

- Sokafy ny Microsoft Excel.
- Safidio ny tabilao **Data**.
![Excel Data Tab](/wioi-duplicate-finder-docs/excel-import-data-tab.png)
- Tsindrio ny **From Text/CSV**.
- Tadiavo ary safidio ny fisie CSV navoaka.
- Ao amin'ny varavarankely fizahana fanafarana, apetraho amin'ny **65001: Unicode (UTF-8)** ny File Origin (na Encoding) raha tsy mbola izany no voafidy.
![Select UTF8](/wioi-duplicate-finder-docs/excel-import-origin.png)
- Hamarino fa miseho tsara ao amin'ny fizahana ireo sary famantarana manokana.
- Tsindrio ny **Load**.

Izany dia miantoka fa ny lahatsoratra rehetra dia ampidirina amin'ny fampiasana ny fomba UTF-8 marina ary misoroka ny fahapotehan'ny litera. Hiseho ao amin'ny Excel ny angon-drakitrao, matetika miaraka amin'ny fandrafetana miloko. Azonao atao ny manala izany fandrafetana izany amin'ny alalan'ny fikitihana ny lisitra mipoitra Table Style eo amin'ny zorony ambony havanana ary misafidy ny tabilao tsy misy fandrafetana. Ampirisihina ihany koa ny manantona ny andalana voalohany (ny lohatenin'ny faritra) eo ambanin'ny tabilao **View** mandritra ny fiasana amin'ny data mba ho hita foana ireo lohateny ireo. 

![Table formatting](/wioi-duplicate-finder-docs/excel-import-table.png)
