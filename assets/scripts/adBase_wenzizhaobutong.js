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
  o.prototype.showGameAd = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      if (!window.gameRecorderManagerStartFlag) {
        window.adUtil.startRecord();
        window.gameRecorderManagerStartTime = new Date().getTime();
      }
      window.adUtil.closeBannerAd();
      if (window.miniPlatForm == "tt") {
        window.adUtil.createInterstitialAd();
      }
    } else {
      if (new Date().getTime() <= window.setAdTime && (window.miniPlatForm == "vivoApp" || window.miniPlatForm == "oppoApp")) {
        return;
      }
      window.adUtil.showBannerAd();
      window.adUtil.showNewNativeAd();
      window.adUtil.showGameCustomAd();
      window.adUtil.showOppoCustomIconAd();
      if (window.miniPlatForm == "oppo") {
        window.game.unschedule(window.adUtil.showBannerAd);
        window.game.schedule(window.adUtil.showBannerAd, 15);
      }
    }
  };
  o.prototype.showGameoverAd = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      if (this.btnShare) {
        this.btnShare.active = true;
      }
      window.adUtil.showInterstitialAd();
      window.adUtil.stopRecord();
      window.adUtil.showBannerAd();
    } else {
      if (this.btnShare) {
        this.btnShare.active = false;
      }
      window.adUtil.showInterstitialAd();
      if (window.miniPlatForm == "vivo") {
        window.adUtil.closeBannerAd();
        this.mask.active = true;
        window.adUtil.loadCustomAd();
      }
      if (window.miniPlatForm == "oppo") {
        this.node.getChildByName("btn_back");
        window.game.unschedule(window.adUtil.showBannerAd);
        window.adUtil.closeBannerAd();
        if (new Date().getTime() > window.setAdTime) {
          window.vivoOriginAdThis.loadOppoCustomAd();
          window.vivoOriginAdThis.showOppoCustomAd();
        }
        if (cc.find("Canvas/gamePortalAdNode")) {
          cc.find("Canvas/gamePortalAdNode").zIndex = 1;
        }
        if (cc.find("Canvas/logoAdNode")) {
          cc.find("Canvas/logoAdNode").zIndex = 1;
        }
      }
    }
    if (window.gameRecorderManagerStartFlag) {
      window.adUtil.stopRecord();
    }
  };
  o.prototype.clickShare = function () {
    window.adUtil.shareVideo();
  };
  return r([c], o);
}(cc.Component);
exports.default = l;