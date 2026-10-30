/* Wiring Devices & Switchgear — Wipro / Avancee / Fianza (catalogue pp. 54–55, 57–60) */
window.CATALOGUE = window.CATALOGUE || [];

(function(){
  var DB = ['Product','Code'];

  window.CATALOGUE.push(

  {
    cat:'electrical', name:'Extension Boards & Cords', range:'Wipro', img:'p56_1.png',
    features:['1500 W rated','Board, cord and flex-box formats','Surge-protected sockets'],
    cols:['Product','Code','Power Rating','Caselot'],
    rows:[
      ['Wipro NW Extension Board','NWE0300','1500W','20'],
      ['Wipro 4+4 Extension Cord','NWE0600','1500W','20'],
      ['Wipro 4+1 Extension Board','NWE0500','1500W','20'],
      ['Wipro NW Flex Box','NWE0400','1500W','20']
    ]
  },

  {
    cat:'electrical', name:'Multiplugs', range:'Wipro', img:'p57_1.png',
    features:['1500 W rated','3-way and 4-way','Indicator switch'],
    cols:['Product','Code','Power Rating','Caselot'],
    rows:[
      ['Wipro NW 4 Way Multiplug','NWM0100','1500W','30'],
      ['Wipro NW 3 Way Multiplug','NWM0200','1500W','30']
    ]
  },

  {
    cat:'electrical', name:'Irons', range:'Wipro', img:'p59_1.png',
    features:['Dry and steam models','750 W to 1800 W','Teflon and American Heritage coatings'],
    cols:['Product','Code','Wattage','Type of Coating','Caselot'],
    rows:[
      ['Smartlife Super Deluxe','W10001','1000W','Non-stick Dupont Teflon coating','12'],
      ['Smartlife Deluxe','W10002','1000W','Non-stick Dupont Teflon coating','12'],
      ['Smartlife Popular','W10003','1000W','American Heritage coating','12'],
      ['Magiq','W10006','750W','American Heritage coating','12'],
      ['Prime Automatic Electric Steam Iron','W10008','1800W','Non-stick coating','6']
    ]
  },

  {
    cat:'electrical', name:'Avancee Enclosures & Socket Outlets', range:'Avancee', img:'p59_2.png',
    features:['Metal enclosures','20A and 30A plug & socket outlets','SPN and TPN variants'],
    note:'The printed price list labels both NW-AV02WENC and NW-AV04WENC as "2 Way"; the code suggests the latter is the 4-way enclosure.',
    cols:DB,
    rows:[
      ['Avancee — 2 Way Metal Enclosure','NW-AV02WENC'],
      ['Avancee — 2 Way Metal Enclosure','NW-AV04WENC'],
      ['Avancee — Metal Plug & Socket Outlets 20A SPN','NW-AV20ASPNPS'],
      ['Avancee — Metal Plug & Socket Outlets 20A SPN','NW-AV20ATPNPC'],
      ['Avancee — Metal Plug & Socket Outlets 30A SPN','NW-AV30ATPNPC']
    ]
  },

  {
    cat:'electrical', name:'Avancee SPN Double Door Distribution Board', range:'Avancee', img:'p59_3.png',
    features:['Single phase & neutral','4 to 16 way','Double door'],
    cols:DB,
    rows:[
      ['Avancee — 4 Way SPN DD','NW-AV04WSPNDD'],
      ['Avancee — 6 Way SPN DD','NW-AV06WSPNDD'],
      ['Avancee — 8 Way SPN DD','NW-AV08WSPNDD'],
      ['Avancee — 12 Way SPN DD','NW-AV12WSPNDD'],
      ['Avancee — 16 Way SPN DD','NW-AV16WSPNDD']
    ]
  },

  {
    cat:'electrical', name:'Avancee TPN Double Door Distribution Board', range:'Avancee', img:'p60_1.png',
    features:['Three phase & neutral','4 to 12 way','Double door'],
    cols:DB,
    rows:[
      ['Avancee — 4 Way TPN DD (4+12)','NW-AV04WTPNDDECO'],
      ['Avancee — 4 Way TPN DD (8+12)','NW-AV04WTPNDD'],
      ['Avancee — 6 Way TPN DD (8+18)','NW-AV06WTPNDD'],
      ['Avancee — 8 Way TPN DD (8+24)','NW-AV08WTPNDD'],
      ['Avancee — 12 Way TPN DD (8+36)','NW-AV12WTPNDD']
    ]
  },

  {
    cat:'electrical', name:'Tiny Trip', range:'Fianza', img:'p60_2.png',
    features:['6A to 32A','Single pole and double pole','Standard and Fianza Modular'],
    cols:['Product','Rating (Amp)','Single Pole Caselot','Double Pole Caselot'],
    rows:[
      ['Tiny Trip','6A, 10A, 16A, 20A, 25A, 32A','48','24'],
      ['Fianza Modular Tiny Trip','6A, 10A, 16A, 20A, 25A, 32A','48','24']
    ]
  },

  {
    cat:'electrical', name:'RCCB', range:'Fianza', img:'p60_3.png',
    features:['25A, 40A and 63A','30 mA and 100 mA sensitivity','DP and FP configurations'],
    note:'The printed list heads the first column group "30A"; it denotes the 30 mA sensitivity band. No product codes are published for this range.',
    cols:['Rating (Amp)','Sensitivity','Available Poles'],
    rows:[
      ['25A','30 mA','DP'],
      ['25A','100 mA','DP'],
      ['40A','30 mA','DP, FP'],
      ['40A','100 mA','DP, FP'],
      ['63A','30 mA','DP, FP'],
      ['63A','100 mA','DP, FP']
    ]
  },

  {
    cat:'electrical', name:'Fianza MCB — C Curve', range:'Fianza', img:'p61_1.png',
    features:['6A to 63A','SP, SPN, DP, TP, TPN and FP','C curve characteristic'],
    cols:['Product','Code','Poles','Caselot'],
    rows:[
      ['6A SP C Curve','WM6ASPC','SP','48'],
      ['10A SP C Curve','WM10ASPC','SP','48'],
      ['16A SP C Curve','WM16ASPC','SP','48'],
      ['20A SP C Curve','WM20ASPC','SP','48'],
      ['25A SP C Curve','WM25ASPC','SP','48'],
      ['32A SP C Curve','WM32ASPC','SP','48'],
      ['40A SP C Curve','WM40ASPC','SP','48'],
      ['63A SP C Curve','WM63ASPC','SP','48'],
      ['6A SPN C Curve','WM6ASPN','SPN','24'],
      ['10A SPN C Curve','WM10ASPN','SPN','24'],
      ['16A SPN C Curve','WM16ASPN','SPN','24'],
      ['20A SPN C Curve','WM20ASPN','SPN','24'],
      ['25A SPN C Curve','WM25ASPN','SPN','24'],
      ['32A SPN C Curve','WM32ASPN','SPN','24'],
      ['40A SPN C Curve','WM40ASPN','SPN','24'],
      ['63A SPN C Curve','WM63ASPN','SPN','24'],
      ['6A DP C Curve','WM6ADP','DP','24'],
      ['10A DP C Curve','WM10ADP','DP','24'],
      ['16A DP C Curve','WM16ADP','DP','24'],
      ['20A DP C Curve','WM20ADP','DP','24'],
      ['25A DP C Curve','WM25ADP','DP','24'],
      ['32A DP C Curve','WM32ADP','DP','24'],
      ['40A DP C Curve','WM40ADP','DP','24'],
      ['63A DP C Curve','WM63ADP','DP','24'],
      ['6A TP C Curve','WM6ATP','TP','16'],
      ['10A TP C Curve','WM10ATP','TP','16'],
      ['16A TP C Curve','WM16ATP','TP','16'],
      ['20A TP C Curve','WM20ATP','TP','16'],
      ['25A TP C Curve','WM25ATP','TP','16'],
      ['32A TP C Curve','WM32ATP','TP','16'],
      ['40A TP C Curve','WM40ATP','TP','16'],
      ['63A TP C Curve','WM63ATP','TP','16'],
      ['6A TPN C Curve','WM6ATPN','TPN','12'],
      ['10A TPN C Curve','WM10ATPN','TPN','12'],
      ['16A TPN C Curve','WM16ATPN','TPN','12'],
      ['20A TPN C Curve','WM20ATPN','TPN','12'],
      ['25A TPN C Curve','WM25ATPN','TPN','12'],
      ['32A TPN C Curve','WM32ATPN','TPN','12'],
      ['40A TPN C Curve','WM40ATPN','TPN','12'],
      ['63A TPN C Curve','WM63ATPN','TPN','12'],
      ['6A FP C Curve','WM6AFP','FP','12'],
      ['10A FP C Curve','WM10AFP','FP','12'],
      ['16A FP C Curve','WM16AFP','FP','12'],
      ['20A FP C Curve','WM20AFP','FP','12'],
      ['25A FP C Curve','WM25AFP','FP','12'],
      ['32A FP C Curve','WM32AFP','FP','12'],
      ['40A FP C Curve','WM40AFP','FP','12'],
      ['63A FP C Curve','WM63AFP','FP','12']
    ]
  },

  {
    cat:'electrical', name:'Fianza Isolators', range:'Fianza', img:'p62_4.png',
    features:['40A and 63A','DP, TP and FP','Load-break isolation'],
    cols:['Product','Code','Caselot'],
    rows:[
      ['40A DP','WMISO40ADP','24'],
      ['63A DP','WMISO60ADP','24'],
      ['40A TP','WMISO40ATP','16'],
      ['63A TP','WMISO63ATP','16'],
      ['40A FP','WMISO40AFP','12'],
      ['63A FP','WMISO63AFP','12']
    ]
  }

  );
})();
