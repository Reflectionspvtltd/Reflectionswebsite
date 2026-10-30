/* Magnetic Track System — Garnet 48V DC (catalogue pp. 11–15) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var HEAD = ['Product','Code','Voltage','Dimension (mm)','Beam Angle (°)','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'magnetic', name:'Magnetic Profile Light', range:'Garnet', img:'p13_1.png',
    features:['48V DC magnetic mount','120° wide linear wash','300 / 600 / 900 mm lengths'],
    cols:HEAD,
    rows:[
      ['10W 4000K','DM11040','DC48V','ø300x22x25','120','10'],
      ['10W 3000K','DM11030','DC48V','ø300x22x25','120','10'],
      ['20W 4000K','DM12040','DC48V','ø600x22x25','120','10'],
      ['20W 3000K','DM12030','DC48V','ø600x22x25','120','10'],
      ['30W 4000K','DM13040','DC48V','ø900x22x25','120','10'],
      ['30W 3000K','DM13030','DC48V','ø900x22x25','120','10']
    ]
  },

  {
    cat:'magnetic', name:'Magnetic Laser Light', range:'Garnet', img:'p13_2.png',
    features:['48V DC magnetic mount','36° narrow grille beam','Deep anti-glare optic'],
    cols:HEAD,
    rows:[
      ['6W 4000K','DM20640','DC48V','ø112x22x25','36','10'],
      ['6W 3000K','DM20630','DC48V','ø112x22x25','36','10'],
      ['12W 4000K','DM21240','DC48V','ø220x22x25','36','10'],
      ['12W 3000K','DM21230','DC48V','ø220x22x25','36','10']
    ]
  },

  {
    cat:'magnetic', name:'Magnetic Foldable Laser Light', range:'Garnet', img:'p13_3.png',
    features:['48V DC magnetic mount','Folding body for aimed light','24° accent beam'],
    cols:HEAD,
    rows:[
      ['6W 4000K','DM30640','DC48V','ø116x22x100','24','10'],
      ['6W 3000K','DM30630','DC48V','ø116x22x100','24','10'],
      ['12W 4000K','DM31240','DC48V','ø331x22x100','24','10'],
      ['12W 3000K','DM31230','DC48V','ø331x22x100','24','10']
    ]
  },

  {
    cat:'magnetic', name:'Magnetic Track Light', range:'Garnet', img:'p13_4.png',
    features:['48V DC magnetic mount','Tilt and rotate head','24° accent beam'],
    cols:HEAD,
    rows:[
      ['7W 4000K','DM40740','DC48V','ø35x80','24','10'],
      ['7W 3000K','DM40730','DC48V','ø35x80','24','10'],
      ['10W 4000K','DM41040','DC48V','ø45x100','24','10'],
      ['10W 3000K','DM41030','DC48V','ø45x100','24','10']
    ]
  },

  {
    cat:'magnetic', name:'Magnetic Pendant Light', range:'Garnet', img:'p14_1.png',
    features:['48V DC magnetic mount','300 mm drop body','24° accent beam'],
    cols:HEAD,
    rows:[
      ['7W 4000K','DM50740','DC48V','ø49x300','24','10'],
      ['7W 3000K','DM50730','DC48V','ø49x300','24','10']
    ]
  },

  {
    cat:'magnetic', name:'Surface Mounted Track & L Joints', range:'Garnet', img:'p14_2.png',
    features:['Surface mounted 48V rail','1 m and 2 m lengths','Ceiling-to-ceiling and ceiling-to-wall corners'],
    cols:['Product','Code','Voltage','Dimension (mm)','Length (m)'],
    rows:[
      ['Surface Mounted Track','HM0400','DC48V','ø26.4x50.5','1'],
      ['Surface Mounted Track','HM0410','DC48V','ø26.4x50.5','2'],
      ['Surface L Track Joint — ceiling to ceiling','HM0600','—','ø100x100x51','—'],
      ['Surface L Track Joint — ceiling to wall','HM0610','—','ø100x100x27','—']
    ]
  },

  {
    cat:'magnetic', name:'Recessed Mounted Track & L Joints', range:'Garnet', img:'p15_1.png',
    features:['Flush recessed 48V rail','1 m and 2 m lengths','Ceiling-to-ceiling and ceiling-to-wall corners'],
    cols:['Product','Code','Voltage','Dimension (mm)','Length (m)'],
    rows:[
      ['Recessed Mounted Track','HM0300','DC48V','ø62.5x46.8','1'],
      ['Recessed Mounted Track','HM0310','DC48V','ø62.5x46.8','2'],
      ['Recessed L Track Joint — ceiling to ceiling','HM0500','—','ø100x100x47','—'],
      ['Recessed L Track Joint — ceiling to wall','HM0510','—','ø100x100x62','—']
    ]
  },

  {
    cat:'magnetic', name:'Magnetic Track Drivers', range:'Garnet', img:'p16_1.png',
    features:['Integrated and external formats','230 VAC input, 48 VDC output','100W and 200W ratings'],
    cols:['Product','Code','Input Voltage','Output Voltage','Dimension (mm)'],
    rows:[
      ['Integrated Driver 100W','HM0100','230VAC','DC48V','ø168x22x44'],
      ['Integrated Driver 200W','HM0110','230VAC','DC48V','ø228x22x44'],
      ['External Driver 100W','HM0120','230VAC','DC48V','ø145x8x29']
    ]
  },

  {
    cat:'magnetic', name:'Track Connectors & Suspension', range:'Garnet', img:'p17_1.png',
    features:['Direct, flexible and external connectors','2 m suspension wire kit'],
    cols:['Product','Code','Dimension (mm)','Length (m)'],
    rows:[
      ['Direct Connector','HM0210','ø124x19x16','—'],
      ['Flexible Connector','HM0220','ø305x19x18','—'],
      ['External Connector','HM0200','ø87x19x18','—'],
      ['Suspension Wire','HM0700','—','2']
    ]
  }

  );
})();
