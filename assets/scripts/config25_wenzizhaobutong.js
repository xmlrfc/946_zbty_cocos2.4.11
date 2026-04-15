var n;
var i = this && this.__extends || (n = function (e, o) {
  return (n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, o) {
    e.__proto__ = o;
  } || function (e, o) {
    for (var t in o) {
      if (Object.prototype.hasOwnProperty.call(o, t)) {
        e[t] = o[t];
      }
    }
  })(e, o);
}, function (e, o) {
  function t() {
    this.constructor = e;
  }
  n(e, o);
  e.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
});
var r = this && this.__decorate || function (e, o, t, n) {
  var i;
  var r = arguments.length;
  var a = r < 3 ? o : n === null ? n = Object.getOwnPropertyDescriptor(o, t) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    a = Reflect.decorate(e, o, t, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (i = e[c]) {
        a = (r < 3 ? i(a) : r > 3 ? i(o, t, a) : i(o, t)) || a;
      }
    }
  }
  if (r > 3 && a) {
    Object.defineProperty(o, t, a);
  }
  return a;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = cc._decorator;
var c = a.ccclass;
a.property;
var l = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.Bt = {
      data: [{
        n: "cha8",
        x: -130,
        y: -66
      }, {
        n: "cha6",
        x: 129,
        y: -71.5
      }, {
        n: "cha9",
        x: -11.5,
        y: -158.5
      }, {
        n: "cha7",
        x: -15.5,
        y: -128.5
      }, {
        n: "cha5",
        x: -10.5,
        y: 80
      }, {
        n: "cha4",
        x: -107,
        y: 95.5
      }, {
        n: "cha2",
        x: -18.5,
        y: 146
      }, {
        n: "cha1",
        x: 1,
        y: 217.5
      }, {
        n: "cha3",
        x: -32.5,
        y: 75
      }],
      answer: [{
        n: "cha1",
        x: -11,
        y: -265.5
      }]
    };
    o.Nt = {
      data: [{
        n: "chou5",
        x: 112.5,
        y: 51.5
      }, {
        n: "chou7",
        x: -159.5,
        y: 56
      }, {
        n: "chou6",
        x: -110.5,
        y: -13
      }, {
        n: "chou4",
        x: -7,
        y: 66.5
      }, {
        n: "chou2",
        x: 103.5,
        y: -44.5
      }, {
        n: "chou1",
        x: 103.5,
        y: 125.5
      }, {
        n: "chou8",
        x: -113.5,
        y: -80.5
      }, {
        n: "chou3",
        x: 99,
        y: 45.5
      }],
      answer: [{
        n: "chou2",
        x: 107.5,
        y: 138.5
      }, {
        n: "chou2",
        x: 107.5,
        y: 48.5
      }]
    };
    o.Pt = {
      data: [{
        n: "choub2",
        x: 79,
        y: 43.5
      }, {
        n: "choub4",
        x: -180.5,
        y: -116.5
      }, {
        n: "choub1",
        x: -31,
        y: -23
      }, {
        n: "choub3",
        x: -168.5,
        y: 67.5
      }],
      answer: [{
        n: "choub1",
        x: -142,
        y: 165
      }]
    };
    o.Ft = {
      data: [{
        n: "da1",
        x: 104.5,
        y: 105
      }, {
        n: "da2",
        x: -109.5,
        y: -18.5
      }, {
        n: "da3",
        x: -18.5,
        y: -61
      }],
      answer: [{
        n: "da1",
        x: 6.375793,
        y: 81.983337
      }, {
        n: "da2",
        x: 4.5,
        y: -11.5
      }, {
        n: "da1",
        x: -45.624207,
        y: 83.983337
      }]
    };
    o.Vt = {
      data: [{
        n: "er3",
        x: 9.5,
        y: 64.5
      }, {
        n: "er5",
        x: -55,
        y: -97.5
      }, {
        n: "er6",
        x: 2.5,
        y: -194.5
      }, {
        n: "er4",
        x: -192.5,
        y: 66
      }, {
        n: "er2",
        x: -87,
        y: 48.5
      }, {
        n: "er1",
        x: 30,
        y: 55
      }],
      answer: [{
        n: "er6",
        x: -36.5,
        y: 162.5
      }]
    };
    o.Lt = {
      data: [{
        n: "fan2",
        x: 67,
        y: -16.5
      }, {
        n: "fan1",
        x: -172,
        y: -3.5
      }, {
        n: "fan3",
        x: -56.5,
        y: -40.5
      }],
      answer: [{
        n: "fan1",
        x: -97,
        y: -91.5
      }]
    };
    o.Dt = {
      data: [{
        n: "fou6",
        x: -117.5,
        y: -82.5
      }, {
        n: "fou3",
        x: 17.5,
        y: 106.5
      }, {
        n: "fou7",
        x: 11.5,
        y: -207
      }, {
        n: "fou5",
        x: -1,
        y: -62.5
      }, {
        n: "fou2",
        x: -96,
        y: 146.5
      }, {
        n: "fou1",
        x: 30,
        y: 190.5
      }, {
        n: "fou4",
        x: 102,
        y: -94
      }],
      answer: [{
        n: "fou5",
        x: -2,
        y: -170.5
      }]
    };
    o.Ut = {
      data: [{
        n: "gan2",
        x: -190,
        y: 37
      }, {
        n: "gan4",
        x: -97,
        y: -18
      }, {
        n: "gan1",
        x: -111,
        y: -85
      }, {
        n: "gan5",
        x: 122,
        y: -174
      }, {
        n: "gan6",
        x: 129,
        y: -49
      }, {
        n: "gan7",
        x: 127,
        y: 41
      }, {
        n: "gan3",
        x: -52,
        y: 18
      }],
      answer: [{
        n: "gan5",
        x: 122,
        y: 241
      }, {
        n: "gan7",
        x: 129,
        y: -263
      }, {
        n: "gan6",
        x: 129,
        y: 238
      }]
    };
    o.Rt = {
      data: [{
        n: "ganb6",
        x: -114.5,
        y: -23.5
      }, {
        n: "ganb7",
        x: -213.5,
        y: -20.5
      }, {
        n: "ganb3",
        x: 103.5,
        y: -199.5
      }, {
        n: "ganb2",
        x: 106,
        y: -67.5
      }, {
        n: "ganb1",
        x: 95,
        y: 30.5
      }, {
        n: "ganb5",
        x: -137,
        y: -103.5
      }, {
        n: "ganb4",
        x: -137,
        y: -11
      }],
      answer: [{
        n: "ganb3",
        x: 98.5,
        y: 231.5
      }, {
        n: "ganb2",
        x: 106,
        y: 245.5
      }, {
        n: "ganb1",
        x: 105,
        y: -284.5
      }]
    };
    o.Gt = {
      data: [{
        n: "ganc6",
        x: -176,
        y: 24
      }, {
        n: "ganc7",
        x: -143,
        y: -58
      }, {
        n: "ganc5",
        x: -109,
        y: 13.5
      }, {
        n: "ganc3",
        x: 108,
        y: -173.5
      }, {
        n: "ganc8",
        x: -91.5,
        y: -197
      }, {
        n: "ganc2",
        x: 114.5,
        y: -48
      }, {
        n: "ganc1",
        x: 105,
        y: 47
      }, {
        n: "ganc4",
        x: -64,
        y: 6.5
      }],
      answer: [{
        n: "ganc8",
        x: 28.5,
        y: -175
      }]
    };
    o.Et = {
      data: [{
        n: "gu3",
        x: 7.5,
        y: 131
      }, {
        n: "gu5",
        x: 5,
        y: -56
      }, {
        n: "gu4",
        x: -2,
        y: -84
      }, {
        n: "gu2",
        x: -109,
        y: 159
      }, {
        n: "gu1",
        x: 13.5,
        y: 204.5
      }],
      answer: [{
        n: "gu5",
        x: 238,
        y: -107
      }]
    };
    o.Mt = {
      data: [{
        n: "guo1",
        x: 117.5,
        y: 103.5
      }, {
        n: "guo2",
        x: -139,
        y: 101
      }, {
        n: "guo8",
        x: -9.5,
        y: -165
      }, {
        n: "guo7",
        x: -132.5,
        y: -135.5
      }, {
        n: "guo5",
        x: -9.5,
        y: -87.5
      }, {
        n: "guo4",
        x: -13.5,
        y: -3.5
      }, {
        n: "guo3",
        x: -23,
        y: 12.5
      }, {
        n: "guo6",
        x: -21,
        y: -153
      }],
      answer: [{
        n: "guo3",
        x: -25,
        y: 150.5
      }]
    };
    o.Ot = {
      data: [{
        n: "han7",
        x: 24,
        y: -174
      }, {
        n: "han6",
        x: -94.5,
        y: -153
      }, {
        n: "han3",
        x: -2,
        y: -35
      }, {
        n: "han2",
        x: -0.5,
        y: 44
      }, {
        n: "han1",
        x: 7,
        y: 112
      }, {
        n: "han4",
        x: 3.5,
        y: -106.5
      }, {
        n: "han5",
        x: -18,
        y: -171
      }],
      answer: [{
        n: "han1",
        x: -3,
        y: -93
      }, {
        n: "han5",
        x: 1,
        y: 246
      }]
    };
    o.zt = {
      data: [{
        n: "heng4",
        x: 66.5,
        y: -12.5
      }, {
        n: "heng8",
        x: -150,
        y: -3
      }, {
        n: "heng6",
        x: 70.5,
        y: -172.5
      }, {
        n: "heng5",
        x: 69,
        y: 162
      }, {
        n: "heng3",
        x: -35,
        y: 17.5
      }, {
        n: "heng1",
        x: 65,
        y: 72
      }, {
        n: "heng9",
        x: -202.5,
        y: -54.5
      }, {
        n: "heng2",
        x: 42.5,
        y: 0.5
      }, {
        n: "heng7",
        x: -105,
        y: -102
      }],
      answer: [{
        n: "heng6",
        x: -155.5,
        y: -151.5
      }]
    };
    o.kt = {
      data: [{
        n: "hu2",
        x: -147.5,
        y: 57.5
      }, {
        n: "hu3",
        x: 36,
        y: -90
      }, {
        n: "hu1",
        x: 29.5,
        y: -19
      }, {
        n: "hu4",
        x: 26,
        y: -234
      }],
      answer: [{
        n: "hu4",
        x: 115,
        y: 150
      }, {
        n: "hu4",
        x: 49,
        y: 85
      }, {
        n: "hu4",
        x: 160,
        y: 195
      }]
    };
    o.Wt = {
      data: [{
        n: "huan3",
        x: 7,
        y: -16
      }, {
        n: "huan6",
        x: -154,
        y: 60
      }, {
        n: "huan8",
        x: -147,
        y: -187.5
      }, {
        n: "huan5",
        x: -139.5,
        y: -60.5
      }, {
        n: "huan7",
        x: -142.5,
        y: -68.5
      }, {
        n: "huan4",
        x: 88,
        y: -186
      }, {
        n: "huan2",
        x: 58.5,
        y: 65
      }, {
        n: "huan1",
        x: 176,
        y: 47
      }],
      answer: [{
        n: "huan8",
        x: 72,
        y: 238.5
      }]
    };
    o.Ht = {
      data: [{
        n: "jiang6",
        x: -141.5,
        y: -182
      }, {
        n: "jiang5",
        x: -201.5,
        y: -53.5
      }, {
        n: "jiang4",
        x: -168.5,
        y: 101.5
      }, {
        n: "jiang3",
        x: 66,
        y: -119
      }, {
        n: "jiang2",
        x: 59.5,
        y: 7.5
      }, {
        n: "jiang1",
        x: 66.5,
        y: 106.5
      }],
      answer: [{
        n: "jiang1",
        x: 66.5,
        y: -7.5
      }, {
        n: "jiang2",
        x: -57.5,
        y: 2.5
      }]
    };
    o.Yt = {
      data: [{
        n: "jiu3",
        x: 150,
        y: 40
      }, {
        n: "jiu1",
        x: -119,
        y: -2
      }, {
        n: "jiu2",
        x: -72,
        y: -80
      }],
      answer: [{
        n: "jiu1",
        x: -282,
        y: 153
      }]
    };
    o.Xt = {
      data: [{
        n: "jiub4",
        x: 86.5,
        y: -9
      }, {
        n: "jiub3",
        x: -49.5,
        y: -6
      }, {
        n: "jiub1",
        x: -184.5,
        y: -6
      }, {
        n: "jiub5",
        x: 46,
        y: 127.5
      }, {
        n: "jiub2",
        x: 30,
        y: -31.5
      }],
      answer: [{
        n: "jiub1",
        x: 42.5,
        y: -21
      }]
    };
    o.qt = {
      data: [{
        n: "kai3",
        x: -99,
        y: 11
      }, {
        n: "kai4",
        x: 64,
        y: 15
      }, {
        n: "kai2",
        x: 6,
        y: -44
      }, {
        n: "kai1",
        x: -1,
        y: -188
      }],
      answer: [{
        n: "kai1",
        x: -1,
        y: -110
      }, {
        n: "kai1",
        x: -5,
        y: 71
      }, {
        n: "kai2",
        x: 6,
        y: -306
      }, {
        n: "kai1",
        x: -137,
        y: -169
      }]
    };
    o.Jt = {
      data: [{
        n: "ku3",
        x: 103,
        y: 97
      }, {
        n: "ku7",
        x: -175.5,
        y: 25.5
      }, {
        n: "ku9",
        x: -111,
        y: 29.5
      }, {
        n: "ku8",
        x: -143,
        y: -72
      }, {
        n: "ku5",
        x: 116,
        y: -64
      }, {
        n: "ku4",
        x: 97.5,
        y: -85
      }, {
        n: "ku10",
        x: -98,
        y: -196.5
      }, {
        n: "ku2",
        x: 8.5,
        y: 141
      }, {
        n: "ku1",
        x: 105,
        y: 163.5
      }, {
        n: "ku6",
        x: -69.5,
        y: 12
      }],
      answer: [{
        n: "ku10",
        x: 94,
        y: -239.5
      }]
    };
    o.jt = {
      data: [{
        n: "kub3",
        x: 109.5,
        y: 92.5
      }, {
        n: "kub8",
        x: -187,
        y: 45.5
      }, {
        n: "kub9",
        x: -141,
        y: -59
      }, {
        n: "kub7",
        x: -103.5,
        y: -3
      }, {
        n: "kub4",
        x: 108.5,
        y: -93
      }, {
        n: "kub5",
        x: 117.5,
        y: -58.5
      }, {
        n: "kub2",
        x: 21.5,
        y: 128
      }, {
        n: "kub1",
        x: 122,
        y: 158.5
      }, {
        n: "kub6",
        x: -68,
        y: 27
      }],
      answer: [{
        n: "kub5",
        x: 240.5,
        y: -113.5
      }]
    };
    o.Zt = {
      data: [{
        n: "le2",
        x: 97,
        y: 31
      }, {
        n: "le1",
        x: -12.5,
        y: -12.5
      }, {
        n: "le5",
        x: -146.5,
        y: -67.5
      }, {
        n: "le4",
        x: -214,
        y: -20.5
      }, {
        n: "le3",
        x: -138,
        y: 9
      }],
      answer: [{
        n: "le1",
        x: -48.5,
        y: 122.5
      }]
    };
    o.Kt = {
      data: [{
        n: "li1",
        x: 18.5,
        y: 46.5
      }, {
        n: "li2",
        x: -82,
        y: -28
      }],
      answer: [{
        n: "li2",
        x: -145,
        y: 143
      }]
    };
    o.Qt = {
      data: [{
        n: "lin3",
        x: -10,
        y: 35
      }, {
        n: "lin1",
        x: 175,
        y: 58
      }, {
        n: "lin7",
        x: -208.5,
        y: 59
      }, {
        n: "lin6",
        x: -131.5,
        y: -4
      }, {
        n: "lin8",
        x: -163.5,
        y: -54
      }, {
        n: "lin2",
        x: 67.5,
        y: 7
      }, {
        n: "lin4",
        x: 77.5,
        y: -82.5
      }, {
        n: "lin5",
        x: -94,
        y: 28
      }],
      answer: [{
        n: "lin8",
        x: 65.5,
        y: -174
      }]
    };
    o.$t = {
      data: [{
        n: "mai7",
        x: 85,
        y: -111
      }, {
        n: "mai9",
        x: -175,
        y: 94.5
      }, {
        n: "mai10",
        x: -167,
        y: -52
      }, {
        n: "mai8",
        x: -166,
        y: -67.5
      }, {
        n: "mai6",
        x: -41.5,
        y: -79.5
      }, {
        n: "mai4",
        x: 75,
        y: -13.5
      }, {
        n: "mai2",
        x: 71.5,
        y: 72.5
      }, {
        n: "mai1",
        x: 73,
        y: 169.5
      }, {
        n: "mai3",
        x: 70.5,
        y: -6.5
      }, {
        n: "mai5",
        x: 71.5,
        y: -102.5
      }],
      answer: [{
        n: "mai3",
        x: 70.5,
        y: 242.5
      }]
    };
    o.te = {
      data: [{
        n: "mu2",
        x: 15,
        y: -13
      }, {
        n: "mu1",
        x: -115,
        y: -19
      }, {
        n: "mu3",
        x: -26,
        y: -92
      }, {
        n: "mu4",
        x: -11,
        y: 129
      }, {
        n: "mu3",
        x: -26,
        y: 19
      }],
      answer: [{
        n: "mu3",
        x: -8,
        y: 225
      }]
    };
    o.ee = {
      data: [{
        n: "mub1",
        x: 128,
        y: 37
      }, {
        n: "mub3",
        x: -136.5,
        y: 30.5
      }, {
        n: "mub4",
        x: -10,
        y: -112.5
      }, {
        n: "mub2",
        x: -18.5,
        y: -13.5
      }],
      answer: [{
        n: "mub2",
        x: -13.5,
        y: 148.5
      }, {
        n: "mub4",
        x: -19,
        y: -276.5
      }]
    };
    o.ie = {
      data: [{
        n: "niu3",
        x: 8,
        y: -116.5
      }, {
        n: "niu2",
        x: 1.5,
        y: 5
      }, {
        n: "niu1",
        x: 8,
        y: -1.5
      }, {
        n: "niu4",
        x: -126.5,
        y: -114
      }],
      answer: [{
        n: "niu1",
        x: 5,
        y: 163.5
      }]
    };
    o.oe = {
      data: [{
        n: "pei4",
        x: 7.5,
        y: -41.5
      }, {
        n: "pei7",
        x: -158.5,
        y: -4
      }, {
        n: "pei5",
        x: 86.5,
        y: -171
      }, {
        n: "pei3",
        x: 48.5,
        y: 16.5
      }, {
        n: "pei2",
        x: 171,
        y: 12
      }, {
        n: "pei1",
        x: 76,
        y: 153.5
      }, {
        n: "pei8",
        x: -211.5,
        y: -46
      }, {
        n: "pei6",
        x: -108.5,
        y: -107.5
      }],
      answer: [{
        n: "pei1",
        x: -161,
        y: -140.5
      }]
    };
    o.ne = {
      data: [{
        n: "ping2",
        x: -1,
        y: -34
      }, {
        n: "ping5",
        x: -1,
        y: 8
      }, {
        n: "ping1",
        x: -3,
        y: -229
      }, {
        n: "ping3",
        x: -98,
        y: -119
      }, {
        n: "ping4",
        x: 108,
        y: -143
      }],
      answer: [{
        n: "ping1",
        x: -3,
        y: -95
      }, {
        n: "ping1",
        x: -3,
        y: 76
      }]
    };
    o.se = {
      data: [{
        n: "qi1",
        x: 75.5,
        y: -4.5
      }, {
        n: "qi2",
        x: -10,
        y: -19
      }],
      answer: [{
        n: "qi2",
        x: 179,
        y: -101
      }, {
        n: "qi1",
        x: -120.5,
        y: 88.5
      }]
    };
    o.ae = {
      data: [{
        n: "qing3",
        x: -54.5,
        y: 57
      }, {
        n: "qing4",
        x: -190,
        y: 38
      }, {
        n: "qing1",
        x: 145,
        y: 115
      }, {
        n: "qing2",
        x: 36,
        y: -1.5
      }, {
        n: "qing5",
        x: 15,
        y: -158
      }, {
        n: "qing6",
        x: 7.5,
        y: -227.5
      }],
      answer: [{
        n: "qing6",
        x: 115.5,
        y: -90.5
      }]
    };
    o.re = {
      data: [{
        n: "qiong1",
        x: 138.5,
        y: -89
      }, {
        n: "qiong5",
        x: -119,
        y: -182
      }, {
        n: "qiong4",
        x: -111.5,
        y: -85.5
      }, {
        n: "qiong3",
        x: -127,
        y: -1.5
      }, {
        n: "qiong2",
        x: 45.5,
        y: 8.5
      }],
      answer: [{
        n: "qiong3",
        x: -124,
        y: -88.5
      }]
    };
    o.he = {
      data: [{
        n: "rang5",
        x: -121,
        y: -178.5
      }, {
        n: "rang4",
        x: -141.5,
        y: 61.5
      }, {
        n: "rang3",
        x: 62,
        y: -47
      }, {
        n: "rang2",
        x: 138,
        y: -68
      }, {
        n: "rang1",
        x: 90.5,
        y: 148
      }],
      answer: [{
        n: "rang3",
        x: 140,
        y: 133
      }]
    };
    o.le = {
      data: [{
        n: "ren2",
        x: -121.5,
        y: -15.5
      }, {
        n: "ren1",
        x: 120,
        y: 60
      }],
      answer: [{
        n: "ren1",
        x: 225,
        y: 9
      }, {
        n: "ren1",
        x: 97,
        y: -144
      }]
    };
    o.me = {
      data: [{
        n: "rui3",
        x: 117.5,
        y: 52
      }, {
        n: "rui6",
        x: -204,
        y: 56
      }, {
        n: "rui7",
        x: -123,
        y: -11
      }, {
        n: "rui8",
        x: -136.5,
        y: -69
      }, {
        n: "rui4",
        x: -9,
        y: 46
      }, {
        n: "rui2",
        x: 73.5,
        y: -87.5
      }, {
        n: "rui5",
        x: -80.5,
        y: 30.5
      }, {
        n: "rui1",
        x: 131.5,
        y: 18.5
      }],
      answer: [{
        n: "rui8",
        x: 96.5,
        y: -241
      }]
    };
    o.ce = {
      data: [{
        n: "shang3",
        x: -6,
        y: -22
      }, {
        n: "shang2",
        x: 4.5,
        y: 179.5
      }, {
        n: "shang1",
        x: 87.5,
        y: -46.5
      }],
      answer: [{
        n: "shang2",
        x: 4.5,
        y: -225.5
      }, {
        n: "shang3",
        x: 82,
        y: 179
      }, {
        n: "shang3",
        x: 87,
        y: -22
      }, {
        n: "shang1",
        x: -7.5,
        y: -230.5
      }, {
        n: "shang1",
        x: 1.5,
        y: -38.5
      }]
    };
    o.pe = {
      data: [{
        n: "shi4",
        x: -103,
        y: 8.5
      }, {
        n: "shi3",
        x: 79.5,
        y: 69.5
      }, {
        n: "shi5",
        x: 39,
        y: -184
      }, {
        n: "shi2",
        x: -59.5,
        y: 98.5
      }, {
        n: "shi1",
        x: 76.5,
        y: 153.5
      }],
      answer: [{
        n: "shi4",
        x: -46,
        y: -104.5
      }, {
        n: "shi5",
        x: 59,
        y: 89
      }, {
        n: "shi5",
        x: -4,
        y: -79
      }]
    };
    o.ue = {
      data: [{
        n: "shib2",
        x: -116,
        y: -19
      }, {
        n: "shib1",
        x: 121.5,
        y: 121.5
      }, {
        n: "shib4",
        x: -4.5,
        y: -108
      }, {
        n: "shib3",
        x: -21.5,
        y: 0.5
      }, {
        n: "shib5",
        x: -145.5,
        y: -107.5
      }],
      answer: [{
        n: "shib2",
        x: -143,
        y: 155
      }]
    };
    o._e = {
      data: [{
        n: "tai3",
        x: -130.5,
        y: -19
      }, {
        n: "tai2",
        x: 108.5,
        y: 91.5
      }, {
        n: "tai4",
        x: -18,
        y: -65.5
      }, {
        n: "tai1",
        x: -52,
        y: 164
      }],
      answer: [{
        n: "tai1",
        x: 88,
        y: -188
      }]
    };
    o.de = {
      data: [{
        n: "tian2",
        x: -127.5,
        y: 8.5
      }, {
        n: "tian1",
        x: 111,
        y: 109
      }, {
        n: "tian4",
        x: -6.5,
        y: -194
      }, {
        n: "tian3",
        x: -14.5,
        y: -49.5
      }],
      answer: [{
        n: "tian4",
        x: -27.5,
        y: -125
      }, {
        n: "tian4",
        x: -33.5,
        y: 22
      }, {
        n: "tian2",
        x: -93.5,
        y: -79.5
      }]
    };
    o.ye = {
      data: [{
        n: "tong2",
        x: -1,
        y: 3
      }, {
        n: "tong5",
        x: 2,
        y: 6
      }, {
        n: "tong1",
        x: -177,
        y: 6
      }, {
        n: "tong4",
        x: -83,
        y: 45
      }, {
        n: "tong6",
        x: 7,
        y: 75
      }, {
        n: "tong3",
        x: -13,
        y: -113
      }],
      answer: [{
        n: "tong3",
        x: -37,
        y: 184
      }]
    };
    o.fe = {
      data: [{
        n: "tu3",
        x: -7.5,
        y: -45.5
      }, {
        n: "tu2",
        x: 0,
        y: 150.5
      }, {
        n: "tu1",
        x: 0,
        y: -46
      }],
      answer: [{
        n: "tu3",
        x: -7.5,
        y: 163.5
      }, {
        n: "tu1",
        x: 0,
        y: -239
      }, {
        n: "tu1",
        x: 140,
        y: -91
      }, {
        n: "tu2",
        x: 0,
        y: -234.5
      }]
    };
    o.ge = {
      data: [{
        n: "tub6",
        x: -140,
        y: -18
      }, {
        n: "tub5",
        x: -220,
        y: 35.5
      }, {
        n: "tub4",
        x: -124,
        y: 67.5
      }, {
        n: "tub3",
        x: 111.5,
        y: -15.5
      }, {
        n: "tub2",
        x: 99.5,
        y: 155.5
      }, {
        n: "tub1",
        x: 111,
        y: -31
      }],
      answer: [{
        n: "tub2",
        x: -142.5,
        y: 0.5
      }]
    };
    o.ve = {
      data: [{
        n: "wei4",
        x: -105.992065,
        y: 80
      }, {
        n: "wei5",
        x: 149,
        y: 68
      }, {
        n: "wei3",
        x: 11,
        y: 3
      }, {
        n: "wei1",
        x: 2,
        y: -122
      }, {
        n: "wei2",
        x: 0,
        y: -30
      }],
      answer: [{
        n: "wei1",
        x: 0,
        y: 113
      }, {
        n: "wei2",
        x: 0,
        y: -202
      }, {
        n: "wei1",
        x: 2,
        y: -264
      }, {
        n: "wei3",
        x: 11,
        y: 148
      }]
    };
    o.xe = {
      data: [{
        n: "wu1",
        x: 113.5,
        y: 68
      }, {
        n: "wu3",
        x: -131,
        y: -11.5
      }, {
        n: "wu4",
        x: -9.5,
        y: -218.5
      }, {
        n: "wu2",
        x: -25.5,
        y: -83.5
      }],
      answer: [{
        n: "wu3",
        x: -185,
        y: 106.5
      }]
    };
    o.we = {
      data: [{
        n: "xi1",
        x: -13.5,
        y: 47.5
      }, {
        n: "xi3",
        x: -53.5,
        y: -129
      }, {
        n: "xi2",
        x: -36.5,
        y: -1
      }],
      answer: [{
        n: "xi2",
        x: 144.5,
        y: 149
      }, {
        n: "xi2",
        x: 104.5,
        y: 110
      }, {
        n: "xi2",
        x: 190.5,
        y: 199
      }]
    };
    o.Se = {
      data: [{
        n: "xib4",
        x: -8.5,
        y: 145
      }, {
        n: "xib6",
        x: -5,
        y: -131.5
      }, {
        n: "xib5",
        x: -2.5,
        y: -27.5
      }, {
        n: "xib8",
        x: -87,
        y: -125
      }, {
        n: "xib7",
        x: 59,
        y: -154
      }, {
        n: "xib3",
        x: -109.5,
        y: 145.5
      }, {
        n: "xib2",
        x: -37.5,
        y: 121.5
      }, {
        n: "xib1",
        x: -20,
        y: 199.5
      }],
      answer: [{
        n: "xib5",
        x: -12.5,
        y: 83.5
      }, {
        n: "xib5",
        x: -12.5,
        y: 164.5
      }]
    };
    o.Ae = {
      data: [{
        n: "xu7",
        x: -136.5,
        y: -25
      }, {
        n: "xu1",
        x: 65.5,
        y: 24.5
      }, {
        n: "xu6",
        x: -199,
        y: -26
      }, {
        n: "xu3",
        x: 94.5,
        y: -200
      }, {
        n: "xu2",
        x: 106,
        y: -50.5
      }, {
        n: "xu4",
        x: -147,
        y: 79.5
      }, {
        n: "xu5",
        x: -155.5,
        y: -51
      }],
      answer: [{
        n: "xu2",
        x: -143,
        y: -107.5
      }, {
        n: "xu2",
        x: -146,
        y: 10.5
      }]
    };
    o.Te = {
      data: [{
        n: "yu1",
        x: -37.5,
        y: 30.5
      }, {
        n: "yu3",
        x: -2,
        y: -203
      }, {
        n: "yu2",
        x: 6,
        y: -59.5
      }],
      answer: [{
        n: "yu1",
        x: -30.5,
        y: 152.5
      }, {
        n: "yu2",
        x: 6,
        y: -326.5
      }]
    };
    o.Ce = {
      data: [{
        n: "zhi4",
        x: 59,
        y: 130.5
      }, {
        n: "zhi3",
        x: -70,
        y: 82.5
      }, {
        n: "zhi1",
        x: -28.5,
        y: -145.5
      }, {
        n: "zhi2",
        x: -17,
        y: -136
      }],
      answer: [{
        n: "zhi2",
        x: 99,
        y: -172
      }]
    };
    o.Ie = {
      data: [{
        n: "zhong4",
        x: 1.5,
        y: -89
      }, {
        n: "zhong3",
        x: -164,
        y: -33.5
      }, {
        n: "zhong2",
        x: 14.5,
        y: 0
      }, {
        n: "zhong1",
        x: -6,
        y: -2
      }],
      answer: [{
        n: "zhong2",
        x: -6.5,
        y: -276
      }]
    };
    o.Ne = {
      data: [{
        n: "zhuang4",
        x: -177.5,
        y: 41.5
      }, {
        n: "zhuang5",
        x: 18,
        y: -149
      }, {
        n: "zhuang3",
        x: 48.5,
        y: 33.5
      }, {
        n: "zhuang2",
        x: 55.5,
        y: 32.5
      }, {
        n: "zhuang1",
        x: 53.5,
        y: 171.5
      }, {
        n: "zhuang6",
        x: 27.5,
        y: -233.5
      }],
      answer: [{
        n: "zhuang6",
        x: 159.5,
        y: 90.5
      }]
    };
    o.Pe = {
      data: [{
        n: "zia4",
        x: 15,
        y: 66
      }, {
        n: "zia1",
        x: -34,
        y: -179
      }, {
        n: "zia2",
        x: -32,
        y: -2
      }, {
        n: "zia3",
        x: -120,
        y: 61
      }, {
        n: "zia5",
        x: -6,
        y: 181
      }, {
        n: "zia2",
        x: -32,
        y: 93
      }],
      answer: [{
        n: "zia2",
        x: -26,
        y: -256
      }]
    };
    o.Fe = {
      data: [{
        n: "zuo1",
        x: 115,
        y: -94
      }, {
        n: "zuo2",
        x: 168,
        y: -48
      }, {
        n: "zuo1",
        x: -128,
        y: -87
      }, {
        n: "zuo2",
        x: -75,
        y: -41
      }, {
        n: "zuo3",
        x: 14,
        y: -25
      }, {
        n: "zuo4",
        x: 13.797516,
        y: 54.276215
      }, {
        n: "zuo5",
        x: 14,
        y: 194
      }],
      answer: [{
        n: "zuo4",
        x: 13.797516,
        y: -248.723785
      }]
    };
    o.be = {
      data: [{
        n: "yub7",
        x: -118.5,
        y: -127
      }, {
        n: "yub6",
        x: 123.5,
        y: -115.5
      }, {
        n: "yub2",
        x: -48.5,
        y: 116.5
      }, {
        n: "yub5",
        x: -24,
        y: -47
      }, {
        n: "yub4",
        x: -22,
        y: 40
      }, {
        n: "yub3",
        x: -162.5,
        y: 151.5
      }, {
        n: "yub1",
        x: 112.5,
        y: 147.5
      }],
      answer: [{
        n: "yub2",
        x: -42.5,
        y: 192.5
      }]
    };
    o.Be = {
      data: [{
        n: "zhu1",
        x: -14,
        y: -202
      }, {
        n: "zhu2",
        x: -1,
        y: -113
      }, {
        n: "zhu3",
        x: 1,
        y: 13
      }, {
        n: "zhu4",
        x: 13,
        y: 169
      }, {
        n: "zhu5",
        x: 0,
        y: 27
      }],
      answer: [{
        n: "zhu1",
        x: 123,
        y: 78
      }]
    };
    return o;
  }
  var t;
  i(o, e);
  t = o;
  o.instance = function () {
    if (!this._instance) {
      this._instance = new t();
    }
    return this._instance;
  };
  o.prototype.start = function () {};
  o.prototype.getImageNameArr = function (e) {
    var o = null;
    switch (e) {
      case "主":
        o = this.Be;
        break;
      case "土":
        o = this.fe;
        break;
      case "杆":
        o = this.Ut;
        break;
      case "平":
        o = this.ne;
        break;
      case "目":
        o = this.te;
        break;
      case "未":
        o = this.ve;
        break;
      case "上":
        o = this.ce;
        break;
      case "自":
        o = this.Pe;
        break;
      case "凡":
        o = this.Lt;
        break;
      case "坐":
        o = this.Fe;
        break;
      case "同":
        o = this.ye;
        break;
      case "开":
        o = this.qt;
        break;
      case "支":
        o = this.Ce;
        break;
      case "九":
        o = this.Yt;
        break;
      case "力":
        o = this.Kt;
        break;
      case "旧":
        o = this.Xt;
        break;
      case "石":
        o = this.pe;
        break;
      case "而":
        o = this.Vt;
        break;
      case "肝":
        o = this.Rt;
        break;
      case "江":
        o = this.Ht;
        break;
      case "牛":
        o = this.ie;
        break;
      case "无":
        o = this.xe;
        break;
      case "于":
        o = this.Te;
        break;
      case "庆":
        o = this.ae;
        break;
      case "太":
        o = this._e;
        break;
      case "天":
        o = this.de;
        break;
      case "让":
        o = this.he;
        break;
      case "旱":
        o = this.Ot;
        break;
      case "庄":
        o = this.Ne;
        break;
      case "否":
        o = this.Dt;
        break;
      case "中":
        o = this.Ie;
        break;
      case "抽":
        o = this.Nt;
        break;
      case "大":
        o = this.Ft;
        break;
      case "古":
        o = this.Et;
        break;
      case "埋":
        o = this.$t;
        break;
      case "吐":
        o = this.ge;
        break;
      case "夕":
        o = this.we;
        break;
      case "环":
        o = this.Wt;
        break;
      case "木":
        o = this.ee;
        break;
      case "失":
        o = this.ue;
        break;
      case "人":
        o = this.le;
        break;
      case "查":
        o = this.Bt;
        break;
      case "七":
        o = this.se;
        break;
      case "昔":
        o = this.Se;
        break;
      case "果":
        o = this.Mt;
        break;
      case "恒":
        o = this.zt;
        break;
      case "旴":
        o = this.Ae;
        break;
      case "秙":
        o = this.Jt;
        break;
      case "户":
        o = this.kt;
        break;
      case "林":
        o = this.Qt;
        break;
      case "秆":
        o = this.Gt;
        break;
      case "仇":
        o = this.Pt;
        break;
      case "余":
        o = this.be;
        break;
      case "怌":
        o = this.oe;
        break;
      case "邛":
        o = this.re;
        break;
      case "枘":
        o = this.me;
        break;
      case "叻":
        o = this.Zt;
        break;
      case "枯":
        o = this.jt;
    }
    return o;
  };
  o._instance = null;
  return t = r([c], o);
}(cc.Component);
exports.default = l;