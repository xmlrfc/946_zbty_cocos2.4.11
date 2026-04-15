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
    o.btnShare = null;
    o.mask = null;
    o.btn = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.countdownGameover = this;
    this.mask.active = false;
    if (window.miniPlatForm == "qq" || window.miniPlatForm == "tt") {
      this.btn.y = -260;
    } else if (window.miniPlatForm == "ks") {
      this.btn.y = -430;
      if (this.node.getChildByName("btn_video")) {
        this.node.getChildByName("btn_video").active = true;
        this.node.getChildByName("btn_video").y = -225;
      }
    } else if (window.miniPlatForm == "oppo") {
      this.btn.y = -120;
      this.node.getChildByName("btn_video").y = 40;
      this.node.getChildByName("btn_addTime").y = 200;
    }
    if (window.model == 22) {
      this.node.getChildByName("title").active = false;
      window.model22LevelUpFlag = undefined;
    }
    this.showGameoverAd();
  };
  o.prototype.start = function () {};
  o.prototype.showGameoverAd = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      if (this.btnShare) {
        this.btnShare.active = true;
      }
      window.adUtil.showInterstitialAd();
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
  };
  o.prototype.clickVideoGet = function () {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.powerControl.addPower(5);
      if (window.addPower && window.addPower.node) {
        window.addPower.node.destroy();
      }
    }, function () {});
  };
  o.prototype.clickAddTime = function () {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("时间+60s");
      window.countdown.addTime(60);
      window.game.showGameAd();
      window.adUtil.closeOppoCustomAd();
      window.countdown.schedule(window.countdown.decreaseTime, 1);
      if (window.countdownGameover && window.countdownGameover.node) {
        window.countdownGameover.node.destroy();
      }
    }, function () {});
  };
  o.prototype.clickRestart = function () {
    window.adUtil.closeOppoCustomAd();
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.clickBack = function () {
    window.adUtil.closeOppoCustomAd();
    window.game.clickBack();
  };
  r([l(cc.Node)], o.prototype, "btnShare", undefined);
  r([l(cc.Node)], o.prototype, "mask", undefined);
  r([l(cc.Node)], o.prototype, "btn", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;