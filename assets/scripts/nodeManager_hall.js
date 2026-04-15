Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function e() {
    this.map = {};
  }
  e.instance = function () {
    if (!this._routerUtil) {
      this._routerUtil = new e();
    }
    return this._routerUtil;
  };
  e.prototype.popNode = function (e, o) {
    if (!this.map[e]) {
      this.map[e] = {};
    }
    if (!this.map[e][o]) {
      this.map[e][o] = [];
    }
    return this.map[e][o].pop();
  };
  e.prototype.pushNode = function (e, o, t) {
    if (!this.map[o]) {
      this.map[o] = {};
    }
    if (!this.map[o][t]) {
      this.map[o][t] = [];
    }
    this.map[o][t].push(e);
  };
  return e;
}();
exports.default = n;