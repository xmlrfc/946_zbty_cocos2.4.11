Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeSimilarity = undefined;
var n = require("./frechetDistance_wenzizhaobutong");
var i = require("./geometry_wenzizhaobutong");
var r = require("./procrustesAnalysis_wenzizhaobutong");
exports.shapeSimilarity = function (e, o, t) {
  if (t === undefined) {
    t = {};
  }
  var a = t.estimationPoints;
  var c = a === undefined ? 50 : a;
  var l = t.rotations;
  var d = l === undefined ? 10 : l;
  var s = t.restrictRotationAngle;
  var u = s === undefined ? Math.PI : s;
  var h = t.checkRotations;
  var w = h === undefined || h;
  if (Math.abs(u) > Math.PI) {
    throw new Error("restrictRotationAngle cannot be larger than PI");
  }
  var p = r.procrustesNormalizeCurve(e, {
    estimationPoints: c
  });
  var f = r.procrustesNormalizeCurve(o, {
    estimationPoints: c
  });
  var y = Math.sqrt(i.curveLength(p) * i.curveLength(f));
  var g = [0];
  if (w) {
    var m = r.findProcrustesRotationAngle(p, f);
    if (m > Math.PI) {
      m -= 2 * Math.PI;
    }
    if (m !== 0 && Math.abs(m) < u) {
      g.push(m);
    }
    for (var v = 0; v < d; v++) {
      var _ = -1 * u + 2 * v * u / (d - 1);
      if (_ !== 0 && _ !== Math.PI) {
        g.push(_);
      }
    }
  }
  var b = 1 / 0;
  g.forEach(function (e) {
    var o = i.rotateCurve(p, e);
    var t = n.default(o, f);
    if (t < b) {
      b = t;
    }
  });
  return Math.max(1 - b / (y / Math.sqrt(2)), 0);
};
exports.default = exports.shapeSimilarity;