Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateCurve = exports.rebalanceCurve = exports.subdivideCurve = exports.extendPointOnLine = exports.curveLength = exports.pointDistance = exports.subtract = undefined;
var n = require("./utils_wenzizhaobutong");
exports.subtract = function (e, o) {
  return {
    x: e.x - o.x,
    y: e.y - o.y
  };
};
var i = function (e) {
  var o = e.x;
  var t = e.y;
  return Math.sqrt(o * o + t * t);
};
exports.pointDistance = function (e, o) {
  return i(exports.subtract(e, o));
};
exports.curveLength = function (e) {
  var o = e[0];
  return e.slice(1).reduce(function (e, n) {
    var i = exports.pointDistance(n, o);
    o = n;
    return e + i;
  }, 0);
};
exports.extendPointOnLine = function (e, o, n) {
  var r = exports.subtract(o, e);
  var a = n / i(r);
  return {
    x: o.x + a * r.x,
    y: o.y + a * r.y
  };
};
exports.subdivideCurve = function (e, o) {
  if (o === undefined) {
    o = {};
  }
  var n = o.maxLen;
  var i = n === undefined ? 0.05 : n;
  var r = e.slice(0, 1);
  e.slice(1).forEach(function (e) {
    var o = r[r.length - 1];
    var n = exports.pointDistance(e, o);
    if (n > i) {
      for (var a = Math.ceil(n / i), c = n / a, l = 0; l < a; l++) {
        r.push(exports.extendPointOnLine(e, o, -1 * c * (l + 1)));
      }
    } else {
      r.push(e);
    }
  });
  return r;
};
exports.rebalanceCurve = function (e, o) {
  for (var i = o.numPoints, r = i === undefined ? 50 : i, a = exports.curveLength(e) / (r - 1), c = [e[0]], l = n.arrLast(e), d = e.slice(1), s = 0; s < r - 2; s++) {
    for (var u = n.arrLast(c), h = a, w = false; !w;) {
      var p = exports.pointDistance(u, d[0]);
      if (p < h) {
        h -= p;
        u = d.shift();
      } else {
        var f = exports.extendPointOnLine(u, d[0], h - p);
        c.push(f);
        w = true;
      }
    }
  }
  c.push(l);
  return c;
};
exports.rotateCurve = function (e, o) {
  return e.map(function (e) {
    return {
      x: Math.cos(-1 * o) * e.x - Math.sin(-1 * o) * e.y,
      y: Math.sin(-1 * o) * e.x + Math.cos(-1 * o) * e.y
    };
  });
};