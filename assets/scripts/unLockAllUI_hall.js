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
    window.unlockAllUI = this;
    var e = Number(cc.sys.localStorage.getItem("unlockAllLevelVideoCount") || 0);
    this.watchCountNum.string = e + "";
  };
  o.prototype.start = function () {};
  o.prototype.onClickCancel = function () {
    this.node.destroy();
  };
  o.prototype.playVideo = function () {
    window.adUtil.reportAnalytics("unlockAll");
    var e = Number(cc.sys.localStorage.getItem("unlockAllLevelVideoCount") || 0);
    window.vivoVideoEnergyLimitlessAd.initRewardedAd(function () {
      if ((e += window.vivoVideoEnergyLimitlessAd.resLastCount) >= 3) {
        e = 0;
        this.videoCount = 0;
        window.adUtil.toast("恭喜,所有游戏已解锁");
        cc.sys.localStorage.setItem("unlockAllLevelDate", new Date().toLocaleDateString());
        this.onClickCancel();
        if (window.home) {
          window.home.showAdNode();
        }
      } else {
        window.adUtil.toast("已观看" + e + "次，还需要看" + (3 - e) + "次");
      }
      this.watchCountNum.string = e + "";
      cc.sys.localStorage.setItem("unlockAllLevelVideoCount", e + "");
    }.bind(this), e, "解锁所有游戏");
  };
  r([l(cc.Label)], o.prototype, "watchCountNum", undefined);
  r([l(cc.Node)], o.prototype, "mask", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;