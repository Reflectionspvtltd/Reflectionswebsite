/* COB & Spotlights — Garnet (catalogue pp. 16–24) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  // The recessed COB families all share this column set.
  var R = ['Product','Code','Lumen (lm)','Dimension (mm)','Cutout (mm)','Beam Angle (°)','Caselot'];
  // Surface-mounted families have no cutout.
  var S = ['Product','Code','Lumen (lm)','Dimension (mm)','Beam Angle (°)','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'cob', name:'Flexi Trim COB', range:'Garnet', img:'p18_1.png',
    features:['Trimless flush finish','Interchangeable black and gold rings','24° accent beam'],
    note:'DNA-prefixed codes are the decorative trim rings for the matching wattage.',
    cols:R,
    rows:[
      ['8W','DN010840','720','49x74','45','24','20'],
      ['8W','DN010827','700','49x74','45','24','20'],
      ['15W','DN011540','1300','59x79','55','24','20'],
      ['15W','DN011527','1280','59x79','55','24','20'],
      ['8W Ring (Black)','DNA010802','—','49x35','—','—','40'],
      ['8W Ring (Gold)','DNA010803','—','49x35','—','—','40'],
      ['15W Ring (Black)','DNA011502','—','59x35','—','—','40'],
      ['15W Ring (Gold)','DNA011503','—','59x35','—','—','40']
    ]
  },

  {
    cat:'cob', name:'Alpha Deco Trim COB', range:'Garnet', img:'p18_2.png',
    features:['Decorative trim profile','Interchangeable black and gold rings','Wide 65–75° beam'],
    note:'DCA-prefixed codes are the decorative trim rings for the matching wattage.',
    cols:R,
    rows:[
      ['7W','DC070740','560','76x75','55','65','20'],
      ['7W','DC070727','540','76x75','75','65','20'],
      ['12W','DC071240','960','86x72','75','75','20'],
      ['12W','DC071227','940','86x72','75','75','20'],
      ['8W Ring (Black)','DCA070702','—','49x35','—','—','40'],
      ['8W Ring (Gold)','DCA070703','—','49x35','—','—','40'],
      ['15W Ring (Black)','DCA071202','—','59x35','—','—','40'],
      ['15W Ring (Gold)','DCA071203','—','59x35','—','—','40']
    ]
  },

  {
    cat:'cob', name:'Alpha CCT COB', range:'Garnet', img:'p18_3.png',
    features:['Switchable colour temperature','36° beam','7W and 12W'],
    cols:R,
    rows:[
      ['7W','DC030700','560','67x62','55','36','20'],
      ['12W','DC031200','960','85x71','75','36','20']
    ]
  },

  {
    cat:'cob', name:'Trimless COB', range:'Garnet', img:'p19_1.png',
    features:['Plaster-in trimless finish','6W to 15W','2700K / 4000K / 6500K'],
    cols:R,
    rows:[
      ['6W 6500K','DC20665','530','ø50x53','ø45','60','30'],
      ['6W 4000K','DC20640','525','ø50x53','ø45','60','30'],
      ['6W 2700K','DC20627','510','ø50x53','ø45','60','30'],
      ['9W 6500K','DC20965','830','ø71x65','ø65','40','20'],
      ['9W 4000K','DC20940','810','ø71x65','ø65','40','20'],
      ['9W 2700K','DC20927','780','ø71x65','ø65','40','20'],
      ['12W 6500K','DC21265','960','ø78x82','ø75','36','20'],
      ['12W 4000K','DC21240','950','ø78x82','ø75','36','20'],
      ['12W 2700K','DC21227','930','ø78x82','ø75','36','20'],
      ['15W 6500K','DC21565','1230','ø78x82','ø75','40','20'],
      ['15W 4000K','DC21540','1220','ø78x82','ø75','40','20'],
      ['15W 2700K','DC21527','1210','ø78x82','ø75','40','20']
    ]
  },

  {
    cat:'cob', name:'Trimless Gold COB', range:'Garnet', img:'p19_2.png',
    features:['Gold reflector finish','9W and 15W','38–40° beam'],
    cols:R,
    rows:[
      ['9W 4000K','DC30940','740','ø75x64','ø65','40','20'],
      ['9W 2700K','DC30927','710','ø75x64','ø65','40','20'],
      ['15W 4000K','DC31540','1230','ø85x76','ø75','38','20'],
      ['15W 2700K','DC31527','1180','ø85x76','ø75','38','20']
    ]
  },

  {
    cat:'cob', name:'Trimless Black COB', range:'Garnet', img:'p19_3.png',
    features:['Black reflector finish','6W to 15W','Low-glare optic'],
    cols:R,
    rows:[
      ['6W 4000K','DC60640','470','ø50x53','ø45','60','20'],
      ['6W 2700K','DC60627','460','ø50x53','ø45','60','20'],
      ['9W 4000K','DC60940','730','ø71x65','ø65','36','10'],
      ['9W 2700K','DC60927','710','ø71x65','ø65','36','10'],
      ['15W 4000K','DC61540','1170','ø78x82','ø75','36','10'],
      ['15W 2700K','DC61527','1160','ø78x82','ø75','36','10']
    ]
  },

  {
    cat:'cob', name:'Linear COB', range:'Garnet', img:'p20_1.png',
    features:['Multi-head linear grille','10W and 20W','30° beam'],
    cols:R,
    rows:[
      ['10W 4000K','DC71040','800','ø147x44x31','ø141x36','30','20'],
      ['10W 2700K','DC71027','800','ø147x44x31','ø141x36','30','20'],
      ['20W 4000K','DC72040','1600','ø280x44x31','ø274x36','30','10'],
      ['20W 2700K','DC72027','1600','ø280x44x31','ø274x36','30','10']
    ]
  },

  {
    cat:'cob', name:'Compact Gold COB', range:'Garnet', img:'p20_2.png',
    features:['Compact gold reflector','5W and 12W','15–45° beam'],
    cols:R,
    rows:[
      ['5W 4000K','DC50540','390','ø46x50','ø40','45','30'],
      ['5W 2700K','DC50527','380','ø46x59','ø40','45','30'],
      ['12W 4000K','DC51240','850','ø60x87','ø55','15','20'],
      ['12W 2700K','DC51227','820','ø60x87','ø55','15','20']
    ]
  },

  {
    cat:'cob', name:'COB Spotlight', range:'Garnet', img:'p20_3.png',
    features:['The core COB range, 3W to 30W','Three colour temperatures','35–45° beam'],
    cols:R,
    rows:[
      ['3W 6500K','DC10365','210','ø65x35','ø55','35','30'],
      ['3W 4000K','DC10340','205','ø65x35','ø55','35','30'],
      ['3W 2700K','DC10327','200','ø65x35','ø55','35','30'],
      ['6W 6500K','DC10665','490','ø80x40','ø60','35','30'],
      ['6W 4000K','DC10640','480','ø80x40','ø60','35','30'],
      ['6W 2700K','DC10627','470','ø80x40','ø60','35','30'],
      ['9W 6500K','DC10965','860','ø88x50','ø70','35','20'],
      ['9W 4000K','DC10940','850','ø88x50','ø70','35','20'],
      ['9W 2700K','DC10927','790','ø88x50','ø70','35','20'],
      ['12W 6500K','DC11265','1100','ø98x55','ø75','35','20'],
      ['12W 4000K','DC11240','1050','ø98x55','ø75','35','20'],
      ['12W 2700K','DC11227','1040','ø98x55','ø75','35','20'],
      ['16W 6500K','DC11665','1620','ø108x64','ø90','35','20'],
      ['16W 4000K','DC11640','1540','ø108x64','ø90','35','20'],
      ['16W 2700K','DC11627','1500','ø108x64','ø90','35','20'],
      ['24W 6500K','DC12465','2360','ø145x83','ø135','35','10'],
      ['24W 4000K','DC12440','2350','ø145x83','ø135','35','10'],
      ['24W 2700K','DC12427','2180','ø145x83','ø135','35','10'],
      ['30W 6500K','DC13065','2850','ø165x90','ø145','45','10'],
      ['30W 4000K','DC13040','2750','ø165x90','ø145','45','10'],
      ['30W 2700K','DC13027','2650','ø165x90','ø145','45','10']
    ]
  },

  {
    cat:'cob', name:'Slim COB', range:'Garnet', img:'p21_1.png',
    features:['20 mm shallow recess depth','3W to 9W','38° beam'],
    cols:R,
    rows:[
      ['3W 6500K','D320365','230','ø72x20','ø62','38','20'],
      ['3W 4000K','D320340','220','ø72x20','ø62','38','20'],
      ['3W 2700K','D320327','210','ø72x20','ø62','38','20'],
      ['6W 6500K','D320665','520','ø82x20','ø72','38','10'],
      ['6W 4000K','D320640','510','ø82x20','ø72','38','10'],
      ['6W 2700K','D320627','500','ø82x20','ø72','38','10'],
      ['9W 6500K','D320965','720','ø87x20','ø77','38','10'],
      ['9W 4000K','D320940','710','ø87x20','ø77','38','10'],
      ['9W 2700K','D320927','700','ø87x20','ø77','38','10']
    ]
  },

  {
    cat:'cob', name:'Radiance COB', range:'Garnet', img:'p21_2.png',
    features:['Deep-set anti-glare reflector','7W to 18W','24° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DC010740','480','ø67x62','ø60','24','20'],
      ['7W 2700K','DC010727','470','ø67x62','ø60','24','20'],
      ['12W 4000K','DC011240','830','ø85x71','ø75','24','20'],
      ['12W 2700K','DC011227','820','ø85x71','ø75','24','20'],
      ['18W 4000K','DC011840','1250','ø105x96','ø95','24','20'],
      ['18W 2700K','DC011827','1240','ø105x96','ø95','24','20']
    ]
  },

  {
    cat:'cob', name:'Elegance COB', range:'Garnet', img:'p21_3.png',
    features:['Black inner ring on white trim','7W and 12W','24° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DC060740','510','ø70x50','ø65','24','20'],
      ['7W 2700K','DC060727','490','ø70x50','ø65','24','20'],
      ['12W 4000K','DC0601240','950','ø85x65','ø80','24','20'],
      ['12W 2700K','DC0601227','940','ø85x65','ø80','24','20']
    ]
  },

  {
    cat:'cob', name:'Spectra COB', range:'Garnet', img:'p22_1.png',
    features:['Surface-mounted tiltable head','12W','24° beam'],
    cols:S,
    rows:[
      ['12W 4000K','DC021240','810','ø73x100','24','20'],
      ['12W 2700K','DC021227','780','ø73x100','24','20']
    ]
  },

  {
    cat:'cob', name:'Alpha Trimless COB', range:'Garnet', img:'p22_2.png',
    features:['White trimless body','7W to 18W','36° beam'],
    cols:R,
    rows:[
      ['7W 6500K','DC030765','560','ø67x62','ø55','36','20'],
      ['7W 4000K','DC030740','550','ø67x62','ø55','36','20'],
      ['7W 2700K','DC030727','540','ø67x62','ø55','36','20'],
      ['12W 6500K','DC031265','960','ø85x71','ø75','36','20'],
      ['12W 4000K','DC031240','950','ø85x71','ø75','36','20'],
      ['12W 2700K','DC031227','940','ø85x71','ø75','36','20'],
      ['18W 6500K','DC031865','1440','ø95x100','ø85','36','20'],
      ['18W 4000K','DC031840','1430','ø95x100','ø85','36','20'],
      ['18W 2700K','DC031827','1420','ø95x100','ø85','36','20']
    ]
  },

  {
    cat:'cob', name:'Alpha Trimless Gold COB', range:'Garnet', img:'p22_3.png',
    features:['Rose-gold reflector','7W and 12W','36° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DC040740','560','ø67x62','ø60','36','20'],
      ['7W 2700K','DC040727','540','ø67x62','ø60','36','20'],
      ['12W 4000K','DC041240','960','ø85x71','ø75','36','20'],
      ['12W 2700K','DC041227','950','ø85x71','ø75','36','20']
    ]
  },

  {
    cat:'cob', name:'Alpha Trimless Black COB', range:'Garnet', img:'p23_1.png',
    features:['Black reflector','7W and 12W','36° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DC050740','560','ø67x62','ø60','36','20'],
      ['7W 2700K','DC050727','550','ø67x62','ø60','36','20'],
      ['12W 4000K','DC051240','960','ø85x71','ø75','36','20'],
      ['12W 2700K','DC051227','950','ø85x71','ø75','36','20']
    ]
  },

  {
    cat:'cob', name:'Surface COB', range:'Garnet', img:'p23_2.png',
    features:['Cylinder surface mount','7W to 20W','No cutout required'],
    cols:S,
    rows:[
      ['7W Surface COB','DH60727','550','ø53x75','24','20'],
      ['7W Surface COB','DH60740','560','ø53x75','24','20'],
      ['12W Surface COB','DH61227','950','ø73x95','36','20'],
      ['12W Surface COB','DH61240','960','ø73x95','36','20'],
      ['20W Surface COB','DH62027','1550','ø73x125','36','20'],
      ['20W Surface COB','DH62040','1600','ø73x125','36','20']
    ]
  },

  {
    cat:'cob', name:'Pendant COB', range:'Garnet', img:'p23_3.png',
    features:['Suspended cylinder','12W','36° beam'],
    cols:S,
    rows:[
      ['12W Pendant COB','DH71240','960','ø73x145','36','20'],
      ['12W Pendant COB','DH71227','930','ø73x145','36','20']
    ]
  },

  {
    cat:'cob', name:'Track Light', range:'Garnet', img:'p24_1.png',
    features:['Three-circuit track head','20W and 30W','36° beam'],
    cols:['Product','Code','Lumen (lm)','Beam Angle (°)','Caselot'],
    rows:[
      ['20W LED Track Light','DH52027','1500','36','10'],
      ['20W LED Track Light','DH52040','1600','36','10'],
      ['30W LED Track Light','DH53027','2400','36','10'],
      ['30W LED Track Light','DH53040','2500','36','10']
    ]
  },

  {
    cat:'cob', name:'Surface Track Light', range:'Garnet', img:'p24_2.png',
    features:['Surface-mounted spot head','7W and 12W','24–36° beam'],
    cols:['Product','Code','Lumen (lm)','Beam Angle (°)','Caselot'],
    rows:[
      ['7W Surface Track Light','DH80727','525','24','10'],
      ['7W Surface Track Light','DH80740','560','24','10'],
      ['12W Surface Track Light','DH81227','900','36','10'],
      ['12W Surface Track Light','DH81240','960','36','10']
    ]
  },

  {
    cat:'cob', name:'Nova Spot COB', range:'Garnet', img:'p24_3.png',
    features:['White, black and gold finishes','7W','45° beam'],
    cols:['Product','Code','Colour','Lumen (lm)','Beam Angle (°)','Caselot'],
    rows:[
      ['7W Nova Spot COB','DH110740','White','525','45','20'],
      ['7W Nova Spot COB','DH110727','White','510','45','20'],
      ['7W Nova Spot COB','DH130740','Black','525','45','20'],
      ['7W Nova Spot COB','DH130727','Black','510','45','20'],
      ['7W Nova Spot COB','DH120740','Gold','525','45','20'],
      ['7W Nova Spot COB','DH120727','Gold','510','45','20']
    ]
  },

  {
    cat:'cob', name:'Wavespot Gold', range:'Garnet', img:'p25_1.png',
    features:['Gold reflector wave trim','7W','36° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DG60740','455','ø88.7x44.5','ø75','36','10'],
      ['7W 2700K','DG60727','420','ø88.7x44.5','ø75','36','10']
    ]
  },

  {
    cat:'cob', name:'Wavespot Black', range:'Garnet', img:'p25_2.png',
    features:['Black reflector wave trim','7W','36° beam'],
    cols:R,
    rows:[
      ['7W 4000K','DG70740','455','ø88.7x44.5','ø75','36','10'],
      ['7W 2700K','DG70727','420','ø88.7x44.5','ø75','36','10']
    ]
  },

  {
    cat:'cob', name:'Wave Spotlight', range:'Garnet', img:'p25_3.png',
    features:['3W to 12W','White plus red, green, blue and pink','60° beam'],
    cols:R,
    rows:[
      ['3W Red','DG50390','—','ø75x43','60','45','10'],
      ['3W Green','DG50395','—','ø75x43','60','45','10'],
      ['3W Blue','DG50380','—','ø75x43','60','45','10'],
      ['3W Pink','DG50385','—','ø75x43','60','45','10'],
      ['3W 6500K','DG50365','225','ø75x43','ø60','60','10'],
      ['3W 4000K','DG50340','210','ø75x43','ø60','60','10'],
      ['3W 2700K','DG50327','195','ø75x43','ø60','60','10'],
      ['6W 6500K','DG50665','480','ø95x46','ø75','60','10'],
      ['6W 4000K','DG50640','450','ø95x46','ø75','60','10'],
      ['6W 2700K','DG50627','420','ø95x46','ø75','60','10'],
      ['9W 6500K','DG50965','720','ø116x52','ø100','60','10'],
      ['9W 4000K','DG50940','675','ø116x52','ø100','60','10'],
      ['9W 2700K','DG50927','630','ø116x52','ø100','60','10'],
      ['12W 6500K','DG51265','960','ø139x55','ø125','60','10'],
      ['12W 4000K','DG51240','900','ø139x55','ø125','60','10'],
      ['12W 2700K','DG51227','840','ø139x55','ø125','60','10']
    ]
  },

  {
    cat:'cob', name:'Mini Spotlight', range:'Garnet', img:'p26_1.png',
    features:['ø58 mm cutout','White plus four colours','45° beam'],
    cols:R,
    rows:[
      ['3W 6500K','D340365','260','ø75x45','ø58','45','20'],
      ['3W 2700K','D340327','240','ø75x45','ø58','45','20'],
      ['3W Blue','D340380','—','ø75x45','ø58','45','20'],
      ['3W Green','D340395','—','ø75x45','ø58','45','20'],
      ['3W Pink','D340385','—','ø75x45','ø58','45','20'],
      ['3W Red','D340390','—','ø75x45','ø58','45','20']
    ]
  },

  {
    cat:'cob', name:'Cabinet Spotlight', range:'Garnet', img:'p26_2.png',
    features:['ø33 mm cutout for joinery','2W','60° beam'],
    cols:R,
    rows:[
      ['2W 6500K','D740265','95','ø42x17','ø33','60','30'],
      ['2W 2700K','D740227','95','ø42x17','ø33','60','30'],
      ['2W Blue','D740280','—','ø42x17','ø33','60','30'],
      ['2W Red','D740290','—','ø42x17','ø33','60','30'],
      ['2W Green','D740295','—','ø42x17','ø33','60','30'],
      ['2W Pink','D740285','—','ø42x17','ø33','60','30']
    ]
  },

  {
    cat:'cob', name:'Cabinet COB', range:'Garnet', img:'p26_3.png',
    features:['Smallest COB in the range','ø23 mm cutout','36° beam'],
    cols:R,
    rows:[
      ['1W 2700K','D920127','90','ø31x21.75','ø23','36','40']
    ]
  }

  );
})();
