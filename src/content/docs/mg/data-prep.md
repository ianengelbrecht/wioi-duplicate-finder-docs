---
title: Fikarakarana ny tahirin-kevitra
description: Dingana ho an'ny fikarakarana ny tahirin-kevitra specimen (reference datasets) avy amin'ny GBIF
---

Ny Fitaovana Fikarohana Dika Mitovy (Duplicate Finder) dia mampiasa tahirin-kevitra (reference dataset) misy dika mitovy amin'ny specimen avy amin'ny herbaria hafa, azo avy amin'ny GBIF. Ny tahirin-kevitra GBIF dia tsy tonga lafatra: matetika ny herbaria dia mamoaka ny tahirin-kevitra misy azy ireo araka ny misy azy nefa tsy misy fanadiovana (izay tsy olana), ary indraindray dia tsy mampiasa ny fenitra Darwin Core amin'ny fomba mitovy (o.hat. ny laharan'ny mpanangona dia mety ho voatahiry ao amin'ny `dwc:recordedBy` fa tsy ao amin'ny `dwc:recordNumber` na `dwc:fieldNumber`). Noho裝izany antony izany, misy dingana fikarakarana tahirin-kevitra ilaina alohan'ny hampidirana tahirin-kevitra vaovao ao amin'ny fampiharana. Ny dingana eto ambany dia mampiseho ny fizotran'izany, ary efa nanome scripts sy torolàlana izahay mba hanampiana anao amin'ny lalanao.

### Fampidinana tahirin-kevitra avy amin'ny GBIF

Mila maka ny tahirin-kevitra tianao hiasana avy amin'ny GBIF aloha ianao. Mandehana any amin'ny [tranonkala GBIF](https://www.gbif.org/), tsindrio the bokotra `Get data` (Maka tahirin-kevitra) eo ambony, ary fidio ny `Occurrences` (Fisehoana). Ao amin'ny pejy misokatra dia afaka mametraka sivana (filters) amin'ny tahirin-kevitra GBIF ianao mba hikarakarana ny fampidinanao. 

Voalohany, tsindrio ny `Scientific name` (Anarana ara-tsiansa), ampidiro ny 'Tracheo', ary fidio ny safidy ho an'ny `Tracheophyta` (zavamaniry misy fantsona mpitondra ranony — nefa afaka mifidy taksona hafa ianao raha toa ka mifanaraka kokoa amin'ny fanangonanao izany).

![Scientific name](/wioi-duplicate-finder-docs/gbif-scientific-name.png)

Avy eo, tsindrio ny `Country or area` (Firenena na faritra), ary ampidiro sy fidio ny firenena tianao hahazoana tahirin-kevitra. 

![Country](/wioi-duplicate-finder-docs/gbif-country.png)

Manaraka, mandehana any amin'ny `More` (Hafa), tsindrio ny `Basis of record` (Karazana tahirin-kevitra), fidio ny `Preserved Specimen` (Specimen voatahiry), ary tsindrio ny `Apply` (Ampiharo). Ilaina izany mba hanivanana ny karazana fandinihana hafa, toy ny firaketana zavamaniry velona avy amin'ny iNaturalist.

![Basis of Record](/wioi-duplicate-finder-docs/gbif-basis-of-record.png)

Manana safidy hanivana fanangonana loharano manokana ianao avy eo. Aza ampiasaina ny safidy `Collection` (Fanangonana), `Collection code` (Kaodin'ny fanangonana) na `dwc:datasetName` eo ambanin'ny fizarana `Record` (Tahiry) amin'ny sivana `More` — tsy ireo no sahan-kevitra mety ampiasaina eto. Fa kosa, midina mankany amin'ny fizarana `Provenance` (Loharano). Eto ianao dia hahita ny safidy `Dataset` (Vondron-tahirin-kevitra) izay azonao ampiasaina hisafidianana ireo vondron-tahirin-kevitra mifandraika navoaka tao amin'ny GBIF, toy ny Kew, Paris, na Missouri (Tropicos). Tsara ny mijery ireo vondron-tahirin-kevitra misy ao amin'ny GBIF alohan'ny hanombohana ya fampidinanao, mba hahitanao tsara ny anaran'izy ireo. Manoro hevitra izahay hanivana araka ny vondron-tahirin-kevitra toy izany mba hahazoanao fotsiny ny tahirin-kevitra avy amin'ny herbaria izay mety manana dika mitovy amin'ny specimen-nao. Raha tsy manao izany ianao, dia hahazo tahirin-kevitra avy amin'ny loharano maro tsy ilaina (ho hitanao ny vokatr'izany amin'ny dingana momba ny kaodin'ny andrim-panjakana/fanangonana eto ambany). Raha mbola tsy fantatrao izany, dia andramo fantarina hoe iza amin'ireo fanangonana any amin'ny faritra hafa manerana izao tontolo izao no efa nifanakalozan'ny herbarium-nao specimen tamin'ny lasa — ireo no tianao hampidirina ao amin'ny sivana `Dataset`. 

![Dataset](/wioi-duplicate-finder-docs/gbif-dataset.png)

Rehefa voafidinao ny tahirin-kevitra tianao hiasana, tsindrio ny bokotra `Download` (Ampidino) eo amin'ny pejy (misorata anarana na midira raha ilaina). Ao amin'ny fizarana `Darwin Core Archive`, tsindrio ny `Configure` (Ahitsio), ary avy eo `Continue to Terms` (Hanohy amin'ny fepetra) — tsy mila manova safidy ianao. Asio marika ny boaty ho an'ny `Data Use Agreement` (Fifanarahana fampiasana tahirin-kevitra) sy `Data Citation` (Fitanisana tahirin-kevitra) rehefa avy namaky azy ireo ianao, ary tsindrio ny `Create Download` (Hamorona fampidinana). Raha somary vitsy ny tahiry dia afaka miandry minitra vitsy ianao mandritra ny fanomanana ny fampidinana avy amin'ny GBIF (fotoana mety hisotroana dite!). Raha tahirin-kevitra lehibe kokoa izany, dia afaka manao zavatra ola — handefa mailaka miaraka amin'ny rohy fampidinana ny GBIF rehefa vonona izany.

![Dataset](/wioi-duplicate-finder-docs/gbif-configure-continue.png)

Ampidino ao amin'ny lahatahiry iray amin'ny solosainao ilay rakitra, vahao (unzip), ary vonona hanomboka ny dingana fikarakarana tahirin-kevitra ianao. 

### Scripts fikarakarana tahirin-kevitra

Ny dingana sasany amin'ity fizotran'ity dia mampiasa Python scripts mba hanadiovana sy hanavaozana ny tahirin-kevitra nalaina avy amin'ny GBIF. Ireo scripts ireo dia hita ao amin'ny lahatahiry `data-prep` ao amin'ny tahirin'ny fitaovana Duplicate Finder, izay [hita ao amin'ny GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder). Mila mandika (clone) io tahiry io amin'ny solosainao ianao mba handefasana azy ireo. Aza misalasala manontany ny mpanampy AI tianao indrindra raha mila fanampiana amin'ny fandikana tahiry GitHub ianao! Mila manana Python napetraka amin'ny solosainao koa ianao.

### Fandaminana ny vondron-tahirin-kevitra

Ny Darwin Core Archive nalainao dia misy rakitra antsoina hoe `occurrence.txt`. Ity dia rakitra misy tabulations (tab-separated) misy ny tahiry specimen rehetra hiarahanao miasa. Noho ny hamaroan'ny tahirin-kevitra GBIF sy ny fiaviany amin'ny loharano maro, dia mety hisy olana kely amin'ny format na fahadisoana indraindray. Noho izany, ny dingana voalohany dia ny mandamina ny tahirin-kevitra mba hahazoana antoka fa afaka mamaky azy tsara ny Duplicate Finder, ary manivana ireo tahiry misy olana. 

Ao amin'ny lahatahiry `data-prep` ao amin'ilay tahiry nadikanao, dia misy script antsoina hoe `stream_clean.py`. Ity script ity dia mandefa (stream) ny tahiry avy amin'ny `occurrence.txt` ho any amin'ny rakitra vaovao antsoina hoe `occurrence_formatted.csv`. Ity dia rakitra CSV voalamina tsara izay hampiasainao amin'ny dingana manaraka. 

Mba handefasana ilay script, sokafy ny terminal na command prompt ao amin'ny lahatahiry misy ny Darwin Core Archive novahanao ary alefaso:
`python "[chemin du dépôt]/data-prep/stream_clean.py" .`
Ataovy azo antoka fa soloinao amin'ny tena lalan'ny lahatahiry (path) misy ilay tahiry nadikanao ny `[chemin du dépôt]` (ohatra, `C:/projects/duplicate-finder` amin'ny Windows), ary tano ao anaty komity.
Raha mila fampatsiahivana haingana momba ny safidy ho an'ny iray amin'ireo scripts ireo ianao dia afaka mandefa azy ireo miaraka amin'ny `-h` ho solon'ny teboka `.` any amin'ny farany. Ary raha tafahitsoka ianao, dia aza misalasala manontany ny mpanampy AI tianao indrindra!

Haneho ny fivoarany eo amin'ny sary ny script rehefa mandeha. Hamorona rakitra horoscope hafa vitsivitsy misy antsipiriany momba ny tahiry misy olana ihany koa izy. Haneho eo amin'ny sary ny isan'ny tahiry natokana (nesorina). Kely dia kely io isa io matetika, ary tsy mila manao zavatra hafa amin'izy ireo ianao. 

![Data prep formatting output](/wioi-duplicate-finder-docs/data-prep-formatting.png)

### Fanivanana sy fanitsiana ny kaodin'ny herbarium

Zava-dehibe ny fampiasana kaodin'ny herbarium efa nomanina sy ekena amin'ny fomba ofisialy ao amin'in'ny Duplicate Finder: mahatonga azy ho mora ny mahita ny niavian'ny tahiry ary miantoka fa ny sahan'ny dika mitovy dia havaozina tsara. Indrisy anefa fa maro ny tahiry GBIF tsy manana kaodin'ny fanangonana madio (misy aza mampiditra laharana barcode ao amin'ny sahan'ny kaodin'ny fanangonana!), ka mila manadio izany amin'ny vondron-tahirin-kevitrao ianao. Mety ho hitanao ihany koa fa misy tahiry tsy tianao hotanana ao amin'ny fampidinanao. Ny fanadiovana sy ny fandaminana ny kaodin'ny fanangonana dia manampy anao hanivana izany. Dingana tsotra telo izany: ny famoahana ny fitambaran'ny kaodin'ny andrim-panjakana/fanangonana tsy manam-paharoa, ny fanitsiana na fanesorana izay tsy tianao, ary ny fampiharana izany fanovana izany amin'ny vondron-tahirin-kevitra lehibe. 

#### Famoahana ny fitambaran'ny kaodin'ny andrim-panjakana/fanangonana tsy manam-paharoa

Voalohany, avoahy ny fitambaran'ny kaodin'ny andrim-panjakana/fanangonana tsy manam-paharoa rehetra mba hahitanao izay mila havaozina. Nanome script antsoina hoe `unique_inst_coll_codes.py` izahay hanao izany. Alefaso toy ny teo aloha izy:
`python "[chemin du dépôt]/data-prep/unique_inst_coll_codes.py" .`
Hampiseho ny fivoarany izany ary hitahiry ny vokatra ao amin'ny `occurrence_formatted_inst_coll_codes.csv` rehefa vita. Raha mahita fitambarana tsy manam-paharoa an'arivony ianao dia mety ho laharana barcode no voatahiry tsy nahavita tao amin'ny sahan'ny kaodin'ny fanangonana. Aza manahy — hamboarinao amin'ny dingana manaraka izany. 

#### Fanitsiana ny kaody tsy marina sy tsy ilaina

Sokafy ny rakitra `occurrence_formatted_inst_coll_codes.csv` vao noforonina ao amin'ny Excel (na mpanova lahatsoratra toa ny Notepad raha tianao). Ny lisitra dia milahatra araka osan'ny specimen ho an'ny fitambaran'ny kaody tsirairay. Mety ho hitanao avy hatrany fa ny kaodin'ny herbarium sasany dia voatahiry ao amin'ny sahan'ny `institutionCode`, na misy sahan-kevitra banga. 

Voalohany, esory ny tsipika (rows) izay tsy ilainao ao amin'ny tahirin-kevitrao. Azonao atao ny mamafa soa aman-tsara ny tsipika misy tahiry vitsy dia vitsy na avy amin'ny andrim-panjakana izay tsy dia manana dika mitovy amin'ny herbarium-nao. Makà fotoana handinihana osan'ny lisitra. Raha tsy fantatrao ny kaody iray dia afaka mikaroka izany amin'ny aterineto ianao na mikaroka ao amin'ny [Index Herbariorum](https://sweetgum.nybg.org/science/ih/).  

Manaraka, jereo raha marina ny kaodin'ny fanangonana. Raha tsy izany dia apetraho ny kaody marina ao amin'ny tsanganana farany, `corrected`. (Tandremo tsara mba tsy hanova ny tsanganana voalohany amin'ny kaodin'ny andrim-panjakana sy ny fanangonana — ilain'ireo scripts tsy misy fanovana ireo mba hampifandraisana ny fanovana amin'ny tahirin-kevitra lehibe). Ny fanitsiana mahazatra dia ny mandika ny kaodin'ny fanangonana ho ao amin'ny tsanganana `corrected` rehefa napetraka diso tao amin'ny tsanganana andrim-panjakana izany. Ataovy azo antoka fa mampiasa ny kaodin'ny herbarium ofisialy amin'ny litera lehibe (uppercase) ianao mba hisehoany tsara ao amin'ny fampiharana (ohatra, ny `NHMUK` ho an'ny Natural History Museum any Londres dia tokony ho ahitsy ho `BM`). 

Rehefa vita ianao dia tehirizo ilay rakitra. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-codes.png)
<span style="font-size: 80%;">Rakitra misy ny kaodin'ny andrim-panjakana sy ny fanangonana misokatra ao amin'ny Notepad, rehefa avy nesorina ny kaody tsy ilaina ary nampidirina ny fanitsiana.</span>

#### Fanavaozana ny kaodin'ny fanangonana amin'ny vondron-tahirin-kevitra lehibe

Ankehitriny, ampiharo amin'ny vondron-tahirin-kevitra lehibe ireo fanovana ireo amin'ny fampiasana ny script `filter_collections.py`. Alefaso amin'ny:
`python "[chemin du dépôt]/data-prep/filter_collections.py" .`
Raha nanova anarana rakitra ianao dia afaka mandefa ilay script miaraka amin'ny `-h` ho solon'ny teboka `.` mba hahitana ny fomba amaritana anarana rakitra manokana, na mangataka fanampiana amin'ny mpanampy AI. Ity script ity dia mamorona tahirin-kevitra voasivana antsoina hoe `occurrence_formatted_filtered.csv`. Dingana manaraka: ny fandaminana ny mpanangona. 

### Fandaminana ny mpanangona

Tena ilaina ny fandaminana ny anaran'ny mpanangona, satria matetika ianao no mikaroka dika mitovy amin'ny fampiasana ny anarana sy ny laharan'ny mpanangona. Ny tahirin-kevitra GBIF dia matetika misy fiovana sy fahadisoana amin'ny fandikana (toy ny fahadisoana manoratra avy amin'ny mariky ny herbarium); ny fanadiovana izany dia mahatonga ny fikarohana ho azo antoka kokoa. 

Mba hanombohana dia mila lisitry ny fitambaran'ny mpanangona tsy manam-paharoa rehetra avy amin'ny tahirin-kevitra ianao. Ny script dia hamantatra ny mpanangona voalohany (ny anarana voalohany ao amin'ny lisitry ny mpanangona) ho an'ny tahiry tsirairay. Nanome ny script `generate_collectors.py` izahay mba hanangonana ity lisitra ity. Alefaso amin'ny:
`python "[chemin du dépôt]/data-prep/generate_collectors.py" .`
Izany dia mitahiry ny lisitry ny mpanangona tsy manam-paharoa ao amin'ny `occurrence_unique_recorded_by.csv`.

Sokafy ao amin'ny Excel ilay rakitra, ary ataovy azo antoka fa voatahiry ireo litera manokana (afaka manaraka ny torolàlana ao amin'ny [pejy fanondranana tahirin-kevitra](./docs/exporting#opening-exported-data-in-excel) ianao). Alaharo ny tsipika ao amin'ny Excel araka ny `primary_collector_lastname` (anaran'ny mpanangona voalohany) ary avy eo araka ny `record_count` (isan'ny tahiry). Izany dia mamondrona ny fiovan'ny anaran'ny mpanangona iray ary mampiseho ny fanoratana matetika indrindra aloha. Parizo ity lisitra ity mba handaminana ny anarana ao amin'ny tsanganana `primary_collector_lastname`. Azafady, fadio ny mampiditra fanafohezana anarana (initials), tsindrim-peo (accents) na litera manokana — mila anarana madio sy amin'ny litera lehibe ny fampiharana mba hanaovana ny fampifandraisana. Raha nanao fahadisoana ilay script (ohatra, nampiditra fanafohezana anarana ao amin'ny sahan'ny anaran'ny fianakaviana), ahitsio fotsiny amin'ny tanana izany. Azonao atao ny mijery ny tondro na ny lahatahirin'ny mpanangona zavamaniry ao an-toerana ho mpitari-dalana. Ho an'ny vondron-tahirin-kevitra lehibe dia mety handany fotoana ny fanadiovana anarana, saingy manatsara ny fahamarinan'ny fitadiavana dika mitovy azony. Tandremo tsara mba tsy hanova ny tsanganana `recordedBy` voalohany — ilain'ilay script tsy misy fanovana izany mba hampiharana ny fanitsianao amin'ny vondron-tahirin-kevitra lehibe. Rehefa vita ianao dia tehirizo ilay rakitra. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-collectors-excel.png)
<span style="font-size: 80%;">Sokafy ny vokatra ao amin'ny Excel, mandehana any amin'ny tontonana Data, fidio ny Sort ary alaharo araka ny primary_collector_lastname sy record_count, tahaka ny amin'ity sary ity.</span>

### Fanavaozana ny vondron-tahirin-kevitra lehibe

Rehefa vonona ny lisitry ny mpanangona nodiovinao, dia afaka mamorona ny rakitra farany ho an'ny fanafarana ianao. Nanome ny `stream_finalize.py` izahay ho amin'izany, izay manao asa maromaro:

- Mampifandray ny anaran'ny mpanangona voalaminao amin'ny tahiry mba hamoronana sahan-kevitra fikarohana azo antoka.
- Mandamina ny laharan'ny mpanangona, manala ny lahatsoratra tsy ilaina mba hahafahanao mikaroka laharana marina (toy ny `1234` na `2025/1234`). 
- Mandika ny kaody firenena misy litera roa ho anarana firenena feno amin'ny fampiasana ny rakitra `countryCodes.csv` avy amin'ny tahiry. Azonao atao ny manova ny anaran'ny firenena ao amin'io rakitra io raha tianao, saingy avelao tsy hiova ny kaody.
- Manadio ny datin'ny fanangonana sy ny famaritana (ohatra, ny fanovana ya daty ampahany na diso daty toy ny "1 Janoary" ho taona fotsiny).
- Manao fanitsiana madinika hafa momba ny format-n'ny tahirin-kevitra.

Alefaso amin'ny:
`python "[chemin du dépôt]/data-prep/stream_finalize.py" .`
Izany dia mamorona ny rakitra `occurrence_final.csv`. Ity no rakitra hampidirinao ao amin'in'ny fampiharana, saingy alohan'izany dia andao hanao fizahana haingana.

### Fizahana (Validation)

Alohan'ny hampidirana ny rakitra, alefaso ny script `validate.py` mba hijerena raha misy sahan-kevitra tsy hita na olana amin'ny format:
`python "[chemin du dépôt]/data-prep/validate.py" .`
Hampiseho tatitra eo amin'ny sary ny script. Raha nanaraka ny dingana rehetra etsy ambony ianao, dia tokony ho tsara ny zava-drehetra! Raha nanova rakitra tamin'ny tanana ianao, na nampiasa fitaovana ivelany (toa ny OpenRefine), na nisy dingana adinonao, ity fizahana ity dia hanondro izay mila hamboarina alohan'ny hanafaran'izany. 

### Fanafarana tahirin-kevitra (Data import)

Rehefa vita soa aman-tsara ny fizahana, mandehana any amin'ny [pejin'ny fandrindrana](./docs/settings#duplicate-records) ary araho ny torolàlana momba ny fanafarana. Azonao atao ny misafidy ny hampiditra ireo tahiry vaovao ireo amin'ny tahirin-kevitrao efa misy na hanolo azy tanteraka. Matokia fa tsy hisy fiantraikany amin'ny tahiry specimen efa nampidirinao tao amin'ny fampiharana izany.

Mirary soa, ary hahita dika mitovy maro anie ianao!
