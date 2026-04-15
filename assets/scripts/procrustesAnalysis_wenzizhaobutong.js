Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.procrustesNormalizeRotation = exports.findProcrustesRotationAngle = exports.procrustesNormalizeCurve = undefined;
var n = require("./geometry_wenzizhaobutong");
var i = require("./utils_wenzizhaobutong");
exports.procrustesNormalizeCurve = function (e, o) {
  if (o === undefined) {
    o = {};
  }
  var t = o.rebalance;
  var r = t === undefined || t;
  var a = o.estimationPoints;
  var c = a === undefined ? 50 : a;
  var l = r ? n.rebalanceCurve(e, {
    numPoints: c
  }) : e;
  var d = {
    x: i.arrAverage(l.map(function (e) {
      return e.x;
    })),
    y: i.arrAverage(l.map(function (e) {
      return e.y;
    }))
  };
  var s = l.map(function (e) {
    return n.subtract(e, d);
  });
  var u = Math.sqrt(i.arrAverage(s.map(function (e) {
    var o = e.x;
    var t = e.y;
    return o * o + t * t;
  })));
  return s.map(function (e) {
    return {
      x: e.x / u,
      y: e.y / u
    };
  });
};
exports.findProcrustesRotationAngle = function (e, o) {
  if (e.length !== o.length) {
    throw new Error("curve and relativeCurve must have the same length");
  }
  var t = i.arrSum(e.map(function (e, t) {
    var n = e.x;
    return e.y * o[t].x - n * o[t].y;
  }));
  var n = i.arrSum(e.map(function (e, t) {
    var n = e.x;
    var i = e.y;
    return n * o[t].x + i * o[t].y;
  }));
  return Math.atan2(t, n);
};
exports.procrustesNormalizeRotation = function (e, o) {
  var i = exports.findProcrustesRotationAngle(e, o);
  return n.rotateCurve(e, i);
};