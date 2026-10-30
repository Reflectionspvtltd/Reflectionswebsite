/* Strip Lights & Profiles — Garnet (catalogue pp. 39–40) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var P = ['Product','Code','Watt / Mtr','LED / Mtr','Caselot'];
  var V = ['Product','Code','Voltage','Watt / Mtr','LED / Mtr','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'strips', name:'12V Profile Strip Light', range:'Garnet', img:'p41_1.png',
    features:['12 V DC','120 to 300 LED/m','2700K / 4000K / 6500K'],
    cols:P,
    rows:[
      ['120 LED 5mm Strip 2700K','DF12827','12','120','10'],
      ['120 LED 5mm Strip 4000K','DF12840','12','120','10'],
      ['120 LED Strip 2700K','DF22827','12','120','10'],
      ['120 LED Strip 4000K','DF22840','12','120','10'],
      ['264 LED Strip 2700K','DF032827','12','264','10'],
      ['264 LED Strip 4000K','DF032840','12','264','10'],
      ['264 LED Strip 6500K','DF032865','12','264','10'],
      ['300 LED Strip 2700K','DF052827','24','300','10'],
      ['300 LED Strip 4000K','DF052840','24','300','10'],
      ['300 LED Strip 6500K','DF052865','24','300','10']
    ]
  },

  {
    cat:'strips', name:'24V Profile Strip Light', range:'Garnet', img:'p41_2.png',
    features:['24 V DC','240 LED/m','Longer uninterrupted runs'],
    cols:P,
    rows:[
      ['240 LED Strip 4000K','DF042840','17','240','10'],
      ['240 LED Strip 2700K','DF042827','17','240','10'],
      ['240 LED Strip 6500K','DF042865','17','240','10']
    ]
  },

  {
    cat:'strips', name:'COB Profile Strip Light', range:'Garnet', img:'p41_3.png',
    features:['Dotless COB emitter','320 LED/m','24 W/m'],
    cols:P,
    rows:[
      ['320 LED COB Strip 4000K','DF022840','24','320','10'],
      ['320 LED COB Strip 2700K','DF022827','24','320','10']
    ]
  },

  {
    cat:'strips', name:'RGB Strip Light', range:'Garnet', img:'p41_4.png',
    features:['Full RGB colour mixing','60 LED/m','5 W/m'],
    cols:P,
    rows:[
      ['RGB Strip Light','DL35000','5','60','2']
    ]
  },

  {
    cat:'strips', name:'LED Striplight', range:'Garnet', img:'p42_1.png',
    features:['12 V DC','96 LED/m','White options plus blue'],
    cols:V,
    rows:[
      ['60 LED Strip Light 6500K','D42865-1','12V DC','5','96','20'],
      ['60 LED Strip Light 4000K','D42840-1','12V DC','5','96','20'],
      ['60 LED Strip Light 2700K','D42827-1','12V DC','5','96','20'],
      ['60 LED Strip Light Blue','D42880-1','12V DC','5','96','20']
    ]
  },

  {
    cat:'strips', name:'IP65 Strip Light', range:'Garnet', img:'p42_2.png',
    features:['50 m mains-voltage rope','IP65 rated','Eight colour options'],
    cols:V,
    rows:[
      ['50 Mtr 2700K','DL22827','220-240V','7','96','2'],
      ['50 Mtr 4000K','DL22840','220-240V','7','96','2'],
      ['50 Mtr 6500K','DL22865','220-240V','7','96','2'],
      ['50 Mtr Ice Blue','DL22881','220-240V','7','96','2'],
      ['50 Mtr Blue','DL22880','220-240V','7','96','2'],
      ['50 Mtr Pink','DL22890','220-240V','7','96','2'],
      ['50 Mtr Red','DL22885','220-240V','7','96','2'],
      ['50 Mtr Green','DL22895','220-240V','7','96','2'],
      ['50 Mtr 6500K','DL32865','220-240V','8','144','1'],
      ['50 Mtr 2700K','DL32827','220-240V','8','144','1'],
      ['50 Mtr Blue','DL32880','220-240V','8','144','1'],
      ['50 Mtr Red','DL32885','220-240V','8','144','1'],
      ['50 Mtr Green','DL32895','220-240V','8','144','1'],
      ['50 Mtr Pink','DL32890','220-240V','8','144','1']
    ]
  },

  {
    cat:'strips', name:'Tri Color Strip Light', range:'Garnet', img:'p42_3.png',
    features:['Three-colour festival rope','18 m reel','60 LED/m'],
    cols:P,
    rows:[
      ['18 Mtr','DF12810','6','60','1']
    ]
  }

  );
})();
