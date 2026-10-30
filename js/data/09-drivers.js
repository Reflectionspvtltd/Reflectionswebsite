/* Drivers & Control Gear — Garnet (catalogue p. 41) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var D = ['Product','Code','Input (VAC)','Output (VDC)','Caselot'];

  window.CATALOGUE.push(

  {
    cat:'drivers', name:'LED Strip Driver', range:'Garnet', img:'p43_1.png',
    features:['Constant-voltage output','12 V, 24 V and 220 V rails','1.5 A to 20 A'],
    cols:D,
    rows:[
      ['2A','HD1200','220-240V','12','10'],
      ['5A','HD2500','220-240V','12','10'],
      ['6A','HD1600','220-240V','12','10'],
      ['10A','HD1100','220-240V','12','10'],
      ['15A','HD1150','220-240V','12','10'],
      ['20A','HD3200','220-240V','12','10'],
      ['2A','HD2200','220-240V','24','10'],
      ['3A','HD2300','220-240V','24','10'],
      ['2.5A','HL2600','220-240V','220','20'],
      ['1.5A','HL3500','220-240V','220','20']
    ]
  },

  {
    cat:'drivers', name:'TRIAC Dimmable Driver', range:'Garnet', img:'p43_2.png',
    features:['Works with standard TRIAC wall dimmers','5W to 16W','Constant current'],
    cols:D,
    rows:[
      ['5W–6W Driver','HQ2310','220-240V','12-21V','30'],
      ['9W–12W Driver','HQ3310','220-240V','20-40V','30'],
      ['15W–16W Driver','HQ4310','220-240V','39-58V','20']
    ]
  },

  {
    cat:'drivers', name:'Non Dimmable Driver', range:'Garnet', img:'p43_3.png',
    features:['Constant current','3W to 24W','Nine output bands'],
    cols:D,
    rows:[
      ['3W','HQ1300','220-240V','3-10V','30'],
      ['5W–7W','HQ2300','220-240V','13-24V','30'],
      ['9W–12W','HQ3300','220-240V','27-42V','30'],
      ['15W–18W','HQ4300','220-240V','36-65V','30'],
      ['24W','HQ5300','220-240V','55-92V','20'],
      ['6W','HQ1180','220-240V','30-35V','30'],
      ['12W','HQ6300','220-240V','36-40V','30'],
      ['18W','HQ7300','220-240V','54-60V','30'],
      ['6W–12W','HQ1000','220-240V','36-72V','30']
    ]
  }

  );
})();
