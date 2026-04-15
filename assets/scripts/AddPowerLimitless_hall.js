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
var l = a.property;
var d = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.watchCountNum = null;
    o.mask = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.addPowerLimitless = this;
    var e = Number(cc.sys.localStorage.getItem("addPowerLimitlessVideoCount") || 0);
    window.addPowerLimitless.watchCountNum.string = e + "";
  };
  o.prototype.start = function () {};
  o.prototype.init = function (e) {
    this.popGetEnergyFlag = e;
  };
  o.prototype.onClick = function () {
    this.playVideo();
  };
  o.prototype.onClickCancel = function () {
    if (window.addPower && window.addPower.node) {
      window.addPower.node.destroy();
    }
    this.node.destroy();
  };
  o.prototype.playVideo = function () {
    window.adUtil.reportAnalytics("energyLimitless");
    var e = Number(cc.sys.localStorage.getItem("addPowerLimitlessVideoCount") || 0);
    window.vivoVideoEnergyLimitlessAd.initRewardedAd(function () {
      if ((e += window.vivoVideoEnergyLimitlessAd.resLastCount) >= 3) {
        e = 0;
        window.adUtil.toast("恭喜获得无限体力");
        if (!cc.sys.localStorage.getItem("energyLast")) {
          cc.sys.localStorage.setItem("energyLast", window.energy + "");
        }
        cc.sys.localStorage.setItem("energyLimitlessTime", new Date().getTime());
        if (window.home) {
          window.home.hideEnergyCountdownLabel();
        } else {
          window.homeHall.hideEnergyCountdownLabel();
        }
        window.powerControl.addPower(999 - window.energy);
        window.addPowerLimitless.onClickCancel();
      } else {
        window.adUtil.toast("已观看" + e + "次，还需要看" + (3 - e) + "次");
      }
      window.addPowerLimitless.watchCountNum.string = e + "";
      cc.sys.localStorage.setItem("addPowerLimitlessVideoCount", e + "");
    }.bind(this), e, "无限体力");
  };
  r([l(cc.Label)], o.prototype, "watchCountNum", undefined);
  r([l(cc.Node)], o.prototype, "mask", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;