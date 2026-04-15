Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeSimilarity = exports.ProcrustesNormalizeCurveOpts = exports.findProcrustesRotationAngle = exports.procrustesNormalizeCurve = exports.procrustesNormalizeRotation = exports.frechetDistance = exports.Curve = exports.Point = exports.rotateCurve = exports.SubdivideCurveOpts = exports.RebalanceCurveOpts = exports.rebalanceCurve = exports.subdivideCurve = exports.extendPointOnLine = exports.pointDistance = exports.curveLength = undefined;
var n = require("./geometry_wenzizhaobutong");
Object.defineProperty(exports, "curveLength", {
  enumerable: true,
  get: function () {
    return n.curveLength;
  }
});
Object.defineProperty(exports, "pointDistance", {
  enumerable: true,
  get: function () {
    return n.pointDistance;
  }
});
Object.defineProperty(exports, "extendPointOnLine", {
  enumerable: true,
  get: function () {
    return n.extendPointOnLine;
  }
});
Object.defineProperty(exports, "subdivideCurve", {
  enumerable: true,
  get: function () {
    return n.subdivideCurve;
  }
});
Object.defineProperty(exports, "rebalanceCurve", {
  enumerable: true,
  get: function () {
    return n.rebalanceCurve;
  }
});
Object.defineProperty(exports, "RebalanceCurveOpts", {
  enumerable: true,
  get: function () {
    return n.RebalanceCurveOpts;
  }
});
Object.defineProperty(exports, "SubdivideCurveOpts", {
  enumerable: true,
  get: function () {
    return n.SubdivideCurveOpts;
  }
});
Object.defineProperty(exports, "rotateCurve", {
  enumerable: true,
  get: function () {
    return n.rotateCurve;
  }
});
Object.defineProperty(exports, "Point", {
  enumerable: true,
  get: function () {
    return n.Point;
  }
});
Object.defineProperty(exports, "Curve", {
  enumerable: true,
  get: function () {
    return n.Curve;
  }
});
var i = require("./frechetDistance_wenzizhaobutong");
Object.defineProperty(exports, "frechetDistance", {
  enumerable: true,
  get: function () {
    return i.default;
  }
});
var r = require("./procrustesAnalysis_wenzizhaobutong");
Object.defineProperty(exports, "procrustesNormalizeRotation", {
  enumerable: true,
  get: function () {
    return r.procrustesNormalizeRotation;
  }
});
Object.defineProperty(exports, "procrustesNormalizeCurve", {
  enumerable: true,
  get: function () {
    return r.procrustesNormalizeCurve;
  }
});
Object.defineProperty(exports, "findProcrustesRotationAngle", {
  enumerable: true,
  get: function () {
    return r.findProcrustesRotationAngle;
  }
});
Object.defineProperty(exports, "ProcrustesNormalizeCurveOpts", {
  enumerable: true,
  get: function () {
    return r.ProcrustesNormalizeCurveOpts;
  }
});
var a = require("./shapeSimilarity_wenzizhaobutong");
Object.defineProperty(exports, "shapeSimilarity", {
  enumerable: true,
  get: function () {
    return a.default;
  }
});