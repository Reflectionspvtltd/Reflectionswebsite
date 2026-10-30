/* Table Lamps, Lanterns & Torches — Garnet (catalogue pp. 49–53) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var E = ['Product','Code','Type','Battery Type','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'portable', name:'Table Lamps', range:'Garnet', img:'p51_1.png',
    features:['Mains (AC) and rechargeable models','5W to 8W','Orion, Aries and TL1–TL3 designs'],
    cols:['Product','Code','Wattage','Caselot'],
    rows:[
      ['6W AC LED Table Lamp','D930665','6W','4'],
      ['6W AC Deco Table Lamp','D940665','6W','4'],
      ['Orion Rechargeable Table Lamp','E20002','6W','20'],
      ['Aries Rechargeable Table Lamp','E20003','6W','20'],
      ['LED Rechargeable Table Lamp','E10013','6W','10'],
      ['LED Rechargeable Table Lamp — TL1','E20004','8W','20'],
      ['LED Rechargeable Table Lamp — TL2','E20005','6W','20'],
      ['LED Rechargeable Table Lamp — TL3','E20006','5W','20']
    ]
  },

  {
    cat:'portable', name:'Rechargeable Emergency Lanterns', range:'Garnet', img:'p53_1.png',
    features:['Lithium battery backup','Solar charging on Coral Plus','Six models'],
    cols:E,
    rows:[
      ['Safari Emergency Rechargeable Lantern','E10015','Lantern','—','10'],
      ['Coral Emergency Rechargeable Lantern','E10004','Lantern','Lithium Battery','6'],
      ['Coral Plus Rechargeable Solar LED Lantern','E10012','Solar Lantern','Lithium Battery','6'],
      ['Azure LED Rechargeable Lantern','E10008','Lantern','Lithium Battery','6'],
      ['EL2 Rechargeable Emergency Lantern','E10016','Lantern','Lithium Battery','42'],
      ['EL3 Rechargeable Emergency Lantern','E10017','Lantern','Lithium Battery','12']
    ]
  },

  {
    cat:'portable', name:'Rechargeable LED Torches', range:'Garnet', img:'p54_1.png',
    features:['Lithium battery','Dual-light and multi-function models','Six models'],
    cols:E,
    rows:[
      ['LifeLite Rechargeable LED Torch','CL0004','Torch','Lithium Battery','6'],
      ['Emerald Rechargeable LED Torch','CL0005','Torch','Lithium Battery','10'],
      ['Emerald Plus Rechargeable LED Torch','CL0008','Torch','Lithium Battery','20'],
      ['Radiant Dual Light LED Torch','CL0011','Torch','Lithium Battery','20'],
      ['Prism Multi-Functional Rechargeable LED Torch','CL0007','Torch','Lithium Battery','20'],
      ['Luster LED Bright Rechargeable Torch','CL0009','Torch','Lithium Battery','20']
    ]
  }

  );
})();
