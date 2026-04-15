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
a.property;
var l = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.common_hall = this;
  };
  o.prototype.start = function () {};
  o.prototype.getCommonObj = function (e) {
    return {
      miniPlatForm: "vivo",
      setAdTime: new Date("2023.07.28 19:00:00").getTime() || 1690513200000,
      company: "qq",
      ttShareTag: "热梗连线",
      ttBannerAdId: "",
      ttInterstitialAdId: "",
      ttRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      qqBannerAdId: "",
      qqInterstitialAdId: "",
      qqRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      vivoBannerAdId: "",
      vivoCustomAdId: "",
      vivoRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      oppoBannerAdId: "",
      oppoCustomAdId: "",
      oppoCustomAsBannerAdId: "",
      oppoRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      skin: "_mofajiemi",
      sceneSkin_model2_wenzizhaobutong: "_skin1",
      sceneSkin_model5_wenzizhaobutong: "_skin1"
    }[e] || "";
  };
  o.prototype.translateToEnglish = function (e) {
    return {
      开始游戏: "start game",
      提示: "tips",
      幸运宝箱: "lucky boxes",
      全部打开: "open all",
      放弃: "skip",
      领取奖励: "get",
      "获得体力+5": "energy+5",
      "播放中途退出，不下发游戏奖励": "not complete, can not get reward",
      "激励视频广告加载失败，无法获得奖励": "load video failed",
      恭喜获得奖励: "get reward",
      "体力+1": "energy+1",
      点击全开: "open all",
      "已通关，请期待后续更新": "Clear the game"
    }[e];
  };
  return r([c], o);
}(cc.Component);
exports.default = l;