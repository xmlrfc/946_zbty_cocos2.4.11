Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = cc._decorator;
n.ccclass;
n.property;
var i = function () {
  function e() {}
  e.instance = function () {
    if (!this._routerUtil) {
      this._routerUtil = new e();
    }
    return this._routerUtil;
  };
  e.prototype.onLoad = function () {
    window.common_hall = this;
  };
  e.prototype.start = function () {};
  e.prototype.getCommonObj = function (e) {
    return {
      gameoverSkin: "_number9",
      roleSkin_model1_shaonao: "skin1",
      sceneSkin_model2_shaonao: "_skin1"
    }[e] || "";
  };
  return e;
}();
exports.default = i;