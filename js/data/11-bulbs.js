/* Lamps & Bulbs — Garnet / Wipro (catalogue pp. 46–48, 55) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var L = ['Product','Code','Lumen (lm)','Base Cap','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'bulbs', name:'LED Bulb', range:'Garnet', img:'p48_2.png',
    features:['3W to 26W','B22 and E27 base caps','2700K / 4000K / 6500K'],
    cols:L,
    rows:[
      ['3W 6500K','N36101','315','B22','60'],
      ['3W 2700K','N36102','255','B22','60'],
      ['3W 6500K','N36201','315','E27','60'],
      ['3W 2700K','N36202','255','E27','60'],
      ['5W 6500K','N56101','525','B22','60'],
      ['5W 2700K','N56102','450','B22','60'],
      ['5W 6500K','N56201','525','E27','60'],
      ['5W 2700K','N56202','450','E27','60'],
      ['7W 6500K','N76101','735','B22','60'],
      ['7W 2700K','N76102','630','B22','60'],
      ['7W 6500K','N76201','735','E27','60'],
      ['7W 2700K','N76202','630','E27','60'],
      ['9W 6500K','N96101','945','B22','60'],
      ['9W 2700K','N96102','810','B22','60'],
      ['9W 6500K','N96201','945','E27','60'],
      ['9W 2700K','N96202','810','E27','60'],
      ['12W 6500K','N12301','1080','B22','60'],
      ['12W 2700K','N12302','1080','B22','60'],
      ['12W 6500K','N12401','1080','E27','60'],
      ['12W 2700K','N12402','1080','E27','60'],
      ['14W 6500K','N14301','1260','B22','30'],
      ['14W 2700K','N14302','1260','B22','30'],
      ['14W 6500K','N14401','1260','E27','30'],
      ['14W 2700K','N14402','1260','E27','30'],
      ['18W 6500K','N18301','1620','B22','30'],
      ['18W 2700K','N18302','1620','B22','30'],
      ['20W 6500K','N20301','1800','B22','30'],
      ['20W 4000K','N20302','1800','B22','30'],
      ['26W 6500K','N26001','2600','B22','6']
    ]
  },

  {
    cat:'bulbs', name:'High Wattage Bulb', range:'Garnet', img:'p49_1.png',
    features:['30W to 50W','Up to 5000 lm','B22 base cap'],
    cols:L,
    rows:[
      ['30W 6500K','N30101-1','3000','B22','10'],
      ['40W 6500K','N40001','4000','B22','6'],
      ['50W 6500K','N50201','5000','B22','6']
    ]
  },

  {
    cat:'bulbs', name:'Emergency Bulb', range:'Garnet', img:'p48_1.png',
    features:['Built-in backup battery','9W to 30W','B22 base cap'],
    cols:['Product','Code','Base Cap','Caselot'],
    rows:[
      ['9W 6500K','NE9001','B22','20'],
      ['12W 6500K','NE1201','B22','20'],
      ['15W 6500K','NE1501','B22','20'],
      ['20W 6500K','NE2001','B22','20'],
      ['25W 6500K','NE2501','B22','20'],
      ['30W 6500K','NE3001','B22','20']
    ]
  },

  {
    cat:'bulbs', name:'Frosted Candle LED Bulb', range:'Garnet', img:'p49_2.png',
    features:['Frosted candle envelope','3W and 4.5W','E14 and E27'],
    cols:L,
    rows:[
      ['3W Frosted 6500K','N34001','270','E14','30'],
      ['3W Frosted 2700K','N34002','250','E14','30'],
      ['3W Frosted 6500K','N35001','300','E27','30'],
      ['3W Frosted 2700K','N35002','270','E27','30'],
      ['4.5W Frosted 6500K','N52001','450','E14','30'],
      ['4.5W Frosted 2700K','N52002','400','E14','30'],
      ['4.5W Frosted 6500K','N53001','450','E27','30'],
      ['4.5W Frosted 2700K','N53002','400','E27','30']
    ]
  },

  {
    cat:'bulbs', name:'Clear Candle LED Bulb', range:'Garnet', img:'p49_3.png',
    features:['Clear candle envelope','3W and 4.5W','2700K warm white'],
    cols:L,
    rows:[
      ['3W Clear 2700K','N30002','270','E14','30'],
      ['3W Clear 2700K','N31002','270','E27','30'],
      ['4.5W Clear 2700K','N54002','450','E14','30'],
      ['4.5W Clear 2700K','N55002','450','E27','30']
    ]
  },

  {
    cat:'bulbs', name:'Candle Filament Bulb', range:'Garnet', img:'p50_1.png',
    features:['Exposed filament candle','4W','E14 and E27'],
    note:'The printed price list shows 5400 lm against N41002; 400 lm is listed here to match the identical 4W E27 variant.',
    cols:L,
    rows:[
      ['4W Candle Filament 2700K','N41002','400','E14','30'],
      ['4W Candle Filament 2700K','N42002','400','E27','30']
    ]
  },

  {
    cat:'bulbs', name:'A60 Filament Bulb', range:'Garnet', img:'p50_2.png',
    features:['Classic A60 glass','6W and 8W','E27 base cap'],
    cols:['Product','Code','Base Cap','Caselot'],
    rows:[
      ['6W A60 Filament Bulb','N62002','E27','30'],
      ['8W A60 Filament Bulb','N81002','E27','30']
    ]
  },

  {
    cat:'bulbs', name:'ST64 Filament Bulb', range:'Garnet', img:'p50_3.png',
    features:['Vintage ST64 teardrop glass','6W and 8W','E27 base cap'],
    cols:['Product','Code','Base Cap','Caselot'],
    rows:[
      ['6W ST64 Filament Bulb','N62003','E27','30'],
      ['8W ST64 Filament Bulb','N82003','E27','30']
    ]
  },

  {
    cat:'bulbs', name:'Safelite 0.5W LED Bulb', range:'Garnet', img:'p50_4.png',
    features:['Night-light output','Eight colour options','B22 base cap'],
    cols:['Product','Code','Base Cap','Caselot'],
    rows:[
      ['0.5W White','N10001','B22','60'],
      ['0.5W Warm White','N10002','B22','60'],
      ['0.5W Yellow','N10003','B22','60'],
      ['0.5W Blue','N10004','B22','60'],
      ['0.5W Green','N10005','B22','60'],
      ['0.5W Red','N10006','B22','60'],
      ['0.5W Pink','N10007','B22','60'],
      ['0.5W Orange','N10008','B22','60']
    ]
  },

  {
    cat:'bulbs', name:'Candlelite / ClassicLite', range:'Wipro', img:'p57_3.png',
    features:['Incandescent candle and classic lamps','25W to 60W','B22, E14 and E27'],
    cols:['Product','Code','Base Cap','Lumen (lm)','Caselot'],
    rows:[
      ['25W','G05025/5125','B22/E14','100','100'],
      ['40W','G05140','E14','100','100'],
      ['40W','G06040/7040','E14/B22','100','100'],
      ['60W','G06060/7060','E14/B22','100','100'],
      ['40W','G08040/9040','E14/E27','100','100'],
      ['60W','G08060/9060','E14/E27','100','100']
    ]
  },

  {
    cat:'bulbs', name:'Fest Lite', range:'Wipro', img:'p57_4.png',
    features:['Festive coloured lamp','15W','B22 base cap'],
    cols:['Product','Code','Base Cap','Caselot'],
    rows:[
      ['15W','G21015-8015','B22','240']
    ]
  }

  );
})();
