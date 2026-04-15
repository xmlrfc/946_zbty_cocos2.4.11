Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrAverage = exports.arrSum = exports.arrLast = undefined;
exports.arrLast = function (e) {
  return e[e.length - 1];
};
exports.arrSum = function (e) {
  return e.reduce(function (e, o) {
    return e + o;
  }, 0);
};
exports.arrAverage = function (e) {
  return e.reduce(function (e, o) {
    return o + e;
  }, 0) / e.length;
};