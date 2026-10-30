/* Battens & Tubes — Garnet (catalogue pp. 42–45, 56) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var B = ['Product','Code','Lumen (lm)','Length (mm)','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'battens', name:'Linear Cabinet Light', range:'Garnet', img:'p44_1.png',
    features:['290 / 580 / 853 mm lengths','5W to 16W','Three colour temperatures'],
    cols:B,
    rows:[
      ['5W 2700K','DJ10527','370','290','20'],
      ['5W 4000K','DJ10540','380','290','20'],
      ['5W 6500K','DJ10565','400','290','20'],
      ['10W 2700K','DJ11027','780','580','20'],
      ['10W 4000K','DJ11040','790','580','20'],
      ['10W 6500K','DJ11065','800','580','20'],
      ['16W 2700K','DJ11627','1200','853','20'],
      ['16W 4000K','DJ11640','1250','853','20'],
      ['16W 6500K','DJ11665','1300','853','20']
    ]
  },

  {
    cat:'battens', name:'Color Changing Batten', range:'Garnet', img:'p44_2.png',
    features:['Switchable colour temperature','22W','1136 mm'],
    cols:B,
    rows:[
      ['22W CCT','D532200','2200','1136','20']
    ]
  },

  {
    cat:'battens', name:'Sensor Batten', range:'Garnet', img:'p44_3.png',
    features:['Built-in motion sensor','20W','1100 mm'],
    cols:B,
    rows:[
      ['20W 6500K','D592065','2000','1100','20']
    ]
  },

  {
    cat:'battens', name:'Aluminium Batten', range:'Garnet', img:'p45_1.png',
    features:['Aluminium heat-sink body','20W and 40W','Three colour temperatures'],
    cols:B,
    rows:[
      ['20W 6500K','D552065','2000','1136','20'],
      ['20W 4000K','D552040','1900','1136','20'],
      ['20W 2700K','D552027','1800','1136','20'],
      ['40W 6500K','D534065','4200','1180','20'],
      ['40W 4000K','D534040','4000','1180','20'],
      ['40W 2700K','D534027','3800','1180','20']
    ]
  },

  {
    cat:'battens', name:'Garnet Batten', range:'Garnet', img:'p45_2.png',
    features:['5W to 36W','305 mm to 1185 mm','Three colour temperatures'],
    cols:B,
    rows:[
      ['5W 6500K','D530565','500','305','20'],
      ['5W 2700K','D530527','500','305','20'],
      ['10W 6500K','D531065','1000','598','20'],
      ['10W 4000K','D531040','950','598','20'],
      ['10W 2700K','D531027','900','598','20'],
      ['20W 6500K','D562065','2000','600','20'],
      ['20W 2700K','D562027','1900','600','20'],
      ['22W 6500K','D542265','2200','1135','20'],
      ['22W 4000K','D542240','2090','1135','20'],
      ['22W 2700K','D542227','1980','1135','20'],
      ['25W 6500K','D542565','2500','1135','20'],
      ['25W 2700K','D542527','2250','1135','20'],
      ['30W 6500K','D543065','3000','1135','20'],
      ['36W 6500K','D543665','3600','1185','20'],
      ['36W 4000K','D543640','3550','1185','20'],
      ['36W 2700K','D543627','3500','1185','20']
    ]
  },

  {
    cat:'battens', name:'Garnet 52W Batten', range:'Garnet', img:'p46_1.png',
    features:['Highest-output batten in the range','5200 lm','1100 mm'],
    cols:B,
    rows:[
      ['52W 6500K','D535265','5200','1100','10']
    ]
  },

  {
    cat:'battens', name:'Emergency Batten', range:'Garnet', img:'p46_2.png',
    features:['2600 mAh backup battery','20W','2000 mm'],
    cols:['Product','Code','Battery (mAh)','Length (mm)','Caselot'],
    rows:[
      ['20W 6500K','DE12065','2600','2000','20']
    ]
  },

  {
    cat:'battens', name:'Deco ML2', range:'Garnet', img:'p46_3.png',
    features:['Decorative surface linear','20W','615 mm'],
    cols:B,
    rows:[
      ['20W 6500K','DH122065','2000','615','20'],
      ['20W 4000K','DH122040','1900','615','20'],
      ['20W 2700K','DH122027','1800','615','20']
    ]
  },

  {
    cat:'battens', name:'T8 LED Tube Light', range:'Garnet', img:'p47_2.png',
    features:['Polycarbonate body','20W','1200 mm retrofit'],
    cols:['Product','Code','Lumen (lm)','Material','Length (mm)','Caselot'],
    rows:[
      ['20W 6500K','D642065','2000','PC','1200','12']
    ]
  },

  {
    cat:'battens', name:'NR Lamp', range:'Garnet', img:'p47_3.png',
    features:['4-pin retrofit lamp','18W','1800 lm'],
    cols:['Product','Code','Lumen (lm)','Caselot'],
    rows:[
      ['18W 6500K','DG11865','1800','12']
    ]
  },

  {
    cat:'battens', name:'FTL — Fluorescent Tube Lamps', range:'Wipro', img:'p58_1.png',
    features:['T5, T8 and T12 formats','14W to 40W','Conventional fluorescent'],
    cols:['Product','Code','Lamp','Lumen (lm)'],
    rows:[
      ['18W','F01018','T8','940'],
      ['36W','F01036','T8','2425'],
      ['40W','F01040','T12','2650'],
      ['14W','F01014','T5','1160'],
      ['28W','F01028','T5','2480']
    ]
  },

  {
    cat:'battens', name:'Insta Patti', range:'Wipro', img:'p58_2.png',
    features:['T8 batten mounting strip'],
    cols:['Product','Code','Lamp'],
    rows:[
      ['Wipro Insta Patti','P05150','T8']
    ]
  },

  {
    cat:'battens', name:'Insta — Electronic Ballast', range:'Wipro', img:'p58_3.png',
    features:['Electronic ballast for 36/40W tubes'],
    cols:['Product','Code','Lamp','Caselot'],
    rows:[
      ['36/40W','H05140','Electronic','25'],
      ['36/40W','H32036','Electronic','25']
    ]
  }

  );
})();
