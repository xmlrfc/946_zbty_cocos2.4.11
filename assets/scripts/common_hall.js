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
var a = require("./loadingRemoteVersion_hall");
var c = cc._decorator;
var l = c.ccclass;
c.property;
var d = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.common_hall = this;
    if (!cc.assetManager.loadBundleForReload && window.location.href.indexOf("http://localhost:74") < 0) {
      this.loadBundleForReload();
    }
  };
  o.prototype.start = function () {};
  o.prototype.getCommonObj = function (e, o) {
    var t = {
      miniPlatForm: "oppo",
      setAdTime: new Date("2024.03.08 00:00:00").getTime() || 1699459200000,
      company: "",
      ttShareTag: "找不同呀",
      remoteGameName: "",
      remoteVesion: "",
      serverUrl: "https://xiaoyouxi.yogohoho.com/",
      ttShareContent: "获得体力+1",
      ttInterstitialAdId: "",
      ttRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      ttBannerAdId: "",
      qqBannerAdId: " ",
      qqInterstitialAdId: "",
      qqRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      vivoNewNativeAdId: "",
      vivoCustomAdId: "",
      vivoRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      vivoBannerAdId: "",
      oppoCustomAdId: "",
      oppoRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      oppoBannerAdId: "",
      huaweiAppId: "",
      huaweiBannerAdId: "",
      huaweiRewardedVideoAdId: "13c3bfa3996244939aba1529619f562d",
      energySkin: "_number5",
      homeSceneSkin: "",
      isHallFlag: true,
      rankLocalStorageKey: "rank_xiaobai1",
      ballhome: {
        gameoverSkin: "",
        sceneSkin_model1_ballhome: "_skin2",
        sceneSkin_model2_ballhome: "_skin2"
      },
      class_jump: {},
      daxiguaChazhen: {},
      drawLineCar: {
        gameoverSkin: "_number2"
      },
      jianfengchazhen: {},
      jingchazhuaxiaotou: {
        gameoverSkin: "_number3",
        sceneSkin_model1_jingchazhuaxiaotou: "_skin2"
      },
      migong: {
        gameoverSkin: "_number9"
      },
      shaonao: {
        gameoverSkin: "_number5",
        roleSkin_model1_shaonao: "skin1",
        sceneSkin_model2_shaonao: "_skin2"
      },
      shaonaoNew: {
        gameoverSkin: "",
        needLevelScene: true
      },
      wadong: {
        gameoverSkin: "_number6"
      },
      wenzizhaobutong: {
        gameoverSkin: "_number5",
        sceneSkin_model2_wenzizhaobutong: "_skin1",
        sceneSkin_model5_wenzizhaobutong: "_skin3"
      },
      xiujiao: {
        gameoverSkin: "_number5"
      },
      caijiqiuqiu: {
        sceneSkin_model1_caijiqiuqiu: "_skin2"
      },
      xiaochufangkuai: {
        skin_model1_xiaochufangkuai: "_skin2",
        skin_model6_xiaochufangkuai: "_skin2",
        sceneSkin_model5_xiaochufangkuai: "_skin2"
      },
      linegame: {
        gameoverSkin: "",
        itemSkin: "_skin2"
      },
      drawLineMatchStickMen: {
        gameoverSkin: "_number2"
      },
      fruitEliminate: {
        sceneSkin_model1_fruitEliminate: "_skin2"
      }
    };
    if (o) {
      if (t[o] && t[o][e]) {
        return t[o][e];
      } else {
        return "";
      }
    } else {
      return t[e] || "";
    }
  };
  o.prototype.loadBundleForReload = function () {
    var e = a.loadingRemoteVersion;
    var o = "";
    var t = {};
    cc.assetManager.loadBundleForReload = cc.assetManager.loadBundle;
    cc.assetManager.loadBundle = function (n, i) {
      if (e[n]) {
        o = window.common_hall.getCommonObj("serverUrl") + window.common_hall.getCommonObj("miniPlatForm") + "/" + window.common_hall.getCommonObj("remoteGameName") + "/" + window.common_hall.getCommonObj("remoteVesion") + "/";
        t.version = e[n];
        cc.assetManager.loadBundleForReload(o + n, t, function (e, o) {
          i(e, o);
        });
      } else {
        cc.assetManager.loadBundleForReload(n, function (e, o) {
          i(e, o);
        });
      }
    }.bind(cc.assetManager);
  };
  return r([l], o);
}(cc.Component);
exports.default = d;