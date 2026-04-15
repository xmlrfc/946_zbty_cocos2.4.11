Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./geometry_wenzizhaobutong");
exports.default = function (e, o) {
  for (var t = e.length >= o.length ? e : o, i = e.length >= o.length ? o : e, r = function (e, o, r, a) {
      if (e === 0 && o === 0) {
        return n.pointDistance(t[0], i[0]);
      }
      if (e > 0 && o === 0) {
        return Math.max(r[0], n.pointDistance(t[e], i[0]));
      }
      var c = a[a.length - 1];
      if (e === 0 && o > 0) {
        return Math.max(c, n.pointDistance(t[0], i[o]));
      } else {
        return Math.max(Math.min(r[o], r[o - 1], c), n.pointDistance(t[e], i[o]));
      }
    }, a = [], c = 0; c < t.length; c++) {
    for (var l = [], d = 0; d < i.length; d++) {
      l.push(r(c, d, a, l));
    }
    a = l;
  }
  return a[i.length - 1];
};