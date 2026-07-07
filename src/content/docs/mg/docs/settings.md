---
title: Fametrahana ny Fampiharana
description: Hamarino ny kaodin'ny fitambaram-bokatra, ny famoahana lahatahiry, ary ny toerana fitahirizana ny tahiry data.
---

Ny pejin'ny fametrahana dia ahafahanao mahita ny antsipirian'ny tahirin-kevitra fototra ampiasainao ankehitriny, ary manitsy ny safidy mahazatra eo an-toerana, ny fomba famoahana lahatahiry, ary ny safidin'ny backup an'ny tahirin-kevitra.

Raha te hiditra amin'ny fametrahana:
1. Midira amin'ny fampiharana.
2. Eo amin'ny tabilao, tsindrio ny bokotra **Fametrahana ny Fampiharana** ao amin'ny tontonana fitetezana ankavia.

![Tontonana Fametrahana ny Fampiharana](/wioi-duplicate-finder-docs/settings-tab.png)

---

## Tahirin-kevitra fototra

### Firaketana dika mitovy

Ny Fikarohana Dika Mitovy dia mampiasa tahirin-kevitra fototra misy firaketana santionan-java-maniry voaomana avy amin'ny GBIF, ho an'ny faritra sy tahirin-java-maniry fototra niaviana manokana. Ohatra, raha fantatrao fa manana dika mitovy maro any amin'ny Kew ny fitambaran-tsantionanao, dia ny tahirin-kevitra GBIF avy any amin'ny Kew ho an'ny firenenao na ny faritra misy anao no hampiasainao.

Ireo tahirin-kevitra azo ampiasaina dia voatanisa ao amin'ny pejy [Fametrahana](./installation). Raha mila tahirin-kevitra ho an'ny faritra na firenenao ianao, dia mamorona olana (issue) ao amin'ny tahiry GitHub an'ity fitaovana ity azafady. Mitaky asa be ny fanomanana tahirin-kevitra satria tsy tonga lafatra ny angon-drakitra avy amin'ny GBIF (mila ampanarahina fenitra ny anaran'ny mpamory sy ny kaodin'ny tahirin-java-maniry, ohatra). Ny fandaharana (scripts) ho an'ny fanomanana ny tahirin-kevitra dia hita ao amin'ny tahiry GitHub ihany koa raha te hanomana izany ianao.

Raha vantany vao manana tahirin-kevitra vonona hafarana ianao, dia azonao atao ny manindry ny bokotra Hampiditra Tahirin-kevitra Vaovao (Load New Dataset), ary hisy safidy hisafidianana ny fisie hafarana. Mariho fa ny fanafarana dia hamafa ireo firaketana fototra efa misy ao amin'ny tahirin-kevitrao ka hanolo azy ireo amin'ny angon-drakitra vaovao. Haharitra minitra vitsy ny fanafarana, ary aorian'izay dia azonao ampiasaina ilay tahirin-kevitra vaovao amin'ny fitahirizana ny santionanao.

### Firaketana ara-tsokajy WCVP

Ny Fikarohana Dika Mitovy dia mampiasa ny World Checklist of Vascular Plants ho toy ny tahiry ara-tsokajy fototra (taxon backbone). Havaozina indroa isan-taona ny WCVP ary ny dikan-teny farany indrindra dia azo <a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">alaina amin'ity rohy ity</a>. Raha te hanavao ny tahirin-kevitra WCVP ao amin'ny fampiharanao ianao, alao ny fisie farany amin'io rohy io (`wcvp.zip`), vahao ny ao anatiny (unzip), ary avy eo ao amin'ny Fikarohana Dika Mitovy, tsindrio ny bokotra Hampiditra/Hanavao ny WCVP (Import/Update WCVP), ary fidio ny fisie `wcvp_names.csv`. Ataovy azo antoka fa havaozina tsara ny laharan’ny kinovan’ny WCVP, izay hita ao amin’ilay rakitra metadata miaraka amin’ny fisintomanao.

## Ny Fametrahana

### Kaodin'ny Fitambaram-bokatra miasa
- **Inona izany**: Ny fanafohezan-teny mahazatra ekena eo amin'ny sehatra iraisam-pirenena ho an'ny tahirin-java-maniry fototra misy anao (ohatra, ny tahirin-java-maniry izay ampidiranao ny santiona, o.hat. `TAN` ho an'ny Tahirin-java-manirin'i Tsimbazaza, `NU` ho an'ny Tahirin-java-manirin'ny Anjerimanontolon'i KwaZulu-Natal, `PRE` ho an'ny Tahirin-java-maniry Nasionaly any Pretoria).
- **Ahoana ny fiasany**: Ny fampidirana kaody eto dia mitahiry izany ho kaodin'ny fitambaram-bokatra mahazatra. Isaky ny mitahiry na mifidy santiona ianao, dia voarakitra ho an'ny andrim-panjakana fototra misy ilay santiona io sanda io.
- Indray mandeha ihany ianao no mila mampiditra ity sanda ity, rehefa manomboka mampiasa ny fampiharana.

### Fomba Famoahana Lahatahiry
- **Inona izany**: Ny endriky ny fisie misy faingo manasaraka (CSV) izay jinjaina rehefa mamoaka ny fizaranao ianao.
- **Safidy**:
  - **Darwin Core (DwC)**: Mampifanaraka ny angon-drakitra amin'ny lohateny DwC mahazatra toy ny `catalogNumber`, `recordedBy`, `decimalLatitude`, sns.
  - **BRAHMS**: Mampifanaraka ny angon-drakitra amin'ny lohateny BRAHMS7 mahazatra toy ny `BARCODE`, `COLLECTOR`, `DAY`, `MONTH`, `YEAR`, sns. (tsara indrindra raha hampidirina mivantana ao amin'ny tahirin-kevitra BRAHMS7).
- Raha manana endrika angon-drakitra hafa tianao hamoahana ianao, toy ny Microsoft Excel, tsidiho azafady ny [pejy Github]() an'ny tetikasa ary mamorona olana (issue) vaovao any miaraka amin'ny fangatahanao.

### Hampiditra ny mari-toerana QDS
- **Inona izany**: Safidy amin'ny alalan'ny fanamarihana (checkbox) mba hikajiana ny kaody Quarter Degree Square (QDS).
- **Ahoana ny fiasany**: Raha voamarika izany, rehefa mamoaka ny santiona voatahiry ianao, ny rafitra dia mikajy ny kaody QDS (Quarter Degree Grid Cell) avy amin'ny mari-toerana GPS (`decimalLatitude` sy `decimalLongitude`) ary mampiditra izany ao amin'ny angon-drakitra navoaka. Ny QDS dia ampiasaina indrindra any amin'ny tahirin-java-maniry any atsimo sy atsinanan'i Afrika, fa raha manana rafitra mari-toerana hafa tianao hampiasaina ianao dia mamorona olana (issue) ao amin'ny Github ihany koa azafady.

---

## Backup ny Tahirin-kevitra

Satria ny santiona sy ny fizarana rehetra voatahiry dia voatahiry ao anaty fisie SQLite ivelan'ny aterineto ao amin'ny kapila mafy (hard drive) eo an-toerana, dia zava-dehibe ny manao backup tsy tapaka mba hiarovana ny asanao amin'ny fahaverezan'ny angon-drakitra na ny fahavoazan'ny kapila mafy. Misy backup miforona ho azy isaky ny manidy ny fampiharana ianao, ary tehirizina ho an'ny andro ankehitriny, iray isan'andro ho an'ny herinandro lasa, iray isan-kerinandro ho an'ny volana lasa, ary iray isam-bolana ho an'ny enim-bolana lasa. Ny backup tsy ilaina intsony dia fafan'ny fampiharana ho azy.

![Backup ny Tahirin-kevitra](/wioi-duplicate-finder-docs/backups.png)

### Toerana fitahirizana ny tahiry data
- **Faritra**: Mampiseho ny lalan'ny fisie mankany amin'ny fampirimana fitahirizana ny backup.
- **Misafidy fampirimana**: Manokatra takelaka fitetezana fisie ahafahanao misafidy lahatahiry iray ao amin'ny solosainao (na kapila ivelany/lahatahiry rahona).

### Backup atao Tanana
- **Hanao Backup Izao**: Tsindrio ity bokotra ity mba hanaovana backup eo no ho eo amin'ny tahirin-kevitrao. Hisy fisie `.db` misy mariky ny fotoana sy misy ny mpampiasa, fizarana ary santiona voatahiry rehetra hiforona ao amin'ny fampirimana backup-nao. Ny fampandrenesana fahombiazana dia hampiseho ny lalan'ny backup voatahiry. Ny backup atao tanana dia tsy fafana ao amin'ny tantaran'ny backup toy ny backup mandeha ho azy. 

### Hamerina ny Backup
- **Hamerina ny Backup**: Tsindrio ity bokotra ity raha mila mamerina ny fampiharanao amin'ny toetrany teo aloha ianao. 
- Hahazo bitsika hisafidy fisie backup `.db` ianao.
- **FAMPITANDREMANA**: Ny famerenana ny backup dia hanolo tanteraka ny tahirin-kevitra eo an-toerana ankehitriny. Ataovy azo antoka fa nanao backup ny angon-drakitra vaovao ianao alohan'ny hanohizana.
- Misy takelaka fanamafisana hiseho mba hisorohana ny fanoloana tsy nahy.

### Fitantanana ny backup-nao
Hevitra tsara ny manao dika mitovy amin'ireo fisie backup-nao sy mitahiry azy ireo amin'ny kapila mafy hafa na mandika azy amin'ny solosaina hafa, raha toa ka simba, angalarina, na iharan'ny loza hafa ny solosaina ankehitriny. Fomba fanao tsara ihany koa ny mitahiry dika faharoa amin'ny backup-nao any amin'ny toerana hafa (off-site). Ny backup an'ny tahirin-kevitra dia dika mitovy fotsiny amin'ny fisie tahirin-kevitra, ka mora tokoa ny manao dika mitovy toy izany. 
