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
var a = this && this.__awaiter || function (e, o, t, n) {
  return new (t || (t = Promise))(function (i, r) {
    function a(e) {
      try {
        l(n.next(e));
      } catch (o) {
        r(o);
      }
    }
    function c(e) {
      try {
        l(n.throw(e));
      } catch (o) {
        r(o);
      }
    }
    function l(e) {
      var o;
      if (e.done) {
        i(e.value);
      } else {
        (o = e.value, o instanceof t ? o : new t(function (e) {
          e(o);
        })).then(a, c);
      }
    }
    l((n = n.apply(e, o || [])).next());
  });
};
var c = this && this.__generator || function (e, o) {
  var t;
  var n;
  var i;
  var r;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  r = {
    next: c(0),
    throw: c(1),
    return: c(2)
  };
  if (typeof Symbol == "function") {
    r[Symbol.iterator] = function () {
      return this;
    };
  }
  return r;
  function c(e) {
    return function (o) {
      return l([e, o]);
    };
  }
  function l(r) {
    if (t) {
      throw new TypeError("Generator is already executing.");
    }
    for (; a;) {
      try {
        t = 1;
        if (n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) {
          return i;
        }
        n = 0;
        if (i) {
          r = [2 & r[0], i.value];
        }
        switch (r[0]) {
          case 0:
          case 1:
            i = r;
            break;
          case 4:
            a.label++;
            return {
              value: r[1],
              done: false
            };
          case 5:
            a.label++;
            n = r[1];
            r = [0];
            continue;
          case 7:
            r = a.ops.pop();
            a.trys.pop();
            continue;
          default:
            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
              a = 0;
              continue;
            }
            if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
              a.label = r[1];
              break;
            }
            if (r[0] === 6 && a.label < i[1]) {
              a.label = i[1];
              i = r;
              break;
            }
            if (i && a.label < i[2]) {
              a.label = i[2];
              a.ops.push(r);
              break;
            }
            if (i[2]) {
              a.ops.pop();
            }
            a.trys.pop();
            continue;
        }
        r = o.call(e, a);
      } catch (c) {
        r = [6, c];
        n = 0;
      } finally {
        t = i = 0;
      }
    }
    if (5 & r[0]) {
      throw r[1];
    }
    return {
      value: r[0] ? r[1] : undefined,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var l = require("./FMJava_hall");
var d = cc._decorator;
var s = d.ccclass;
d.property;
var u = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    var e = this;
    window.adUtil = this;
    window.adUtilHall = this;
    window.miniPlatForm = window.common_hall.getCommonObj("miniPlatForm");
    window.setAdTime = window.common_hall.getCommonObj("setAdTime");
    window.fmJava = l.default;
    if (window.miniPlatForm == "tt") {
      if (window.sidebarUIShowed) {
        return;
      }
      window.sidebarUIShowed = true;
      try {
        tt.onShow(function (o) {
          return a(e, undefined, undefined, function () {
            var e;
            var t;
            return c(this, function (n) {
              switch (n.label) {
                case 0:
                  if (o.launch_from != "homepage" || o.location != "sidebar_card") {
                    return [3, 2];
                  } else {
                    return [4, window.adUtil.loadPrefabSync("prefab/ui/ttSidebarUI")];
                  }
                case 1:
                  e = n.sent();
                  t = cc.instantiate(e);
                  cc.find("Canvas").addChild(t);
                  t.zIndex = 1;
                  t.getComponent("ttSidebarUI_hall").showNode("get");
                  n.label = 2;
                case 2:
                  return [2];
              }
            });
          });
        });
      } catch (o) {}
    }
  };
  o.prototype.start = function () {
    try {
      if (window.miniPlatForm == "qq") {
        window.adUtil.createInterstitialAd();
      } else if (window.miniPlatForm == "huawei") {
        if (!window.videoRewardedAd) {
          window.videoRewardedAd = qg.createRewardedVideoAd({
            adUnitId: window.adUtil.useHallData("huaweiRewardedVideoAdId"),
            success: function () {
              console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd success");
            },
            fail: function (e, o) {
              console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + e + "," + o);
            },
            complete: function () {
              console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd complete");
            }
          });
          window.videoRewardedAd.onLoad(function () {
            window.videoRewardedAdLoadSuccessFlag = true;
            console.log("ad demo :ad loaded.");
          });
          window.videoRewardedAd.onError(function (e) {
            if (!window.videoRewardedAdLoadSetTimeoutFlag) {
              window.videoRewardedAdLoadSetTimeoutFlag = true;
              setTimeout(function () {
                window.videoRewardedAdLoadSetTimeoutFlag = false;
                if (!window.videoRewardedAdLoadSuccessFlag) {
                  window.videoRewardedAd.load();
                }
              }, 15000);
            }
            console.error("load ad error:" + JSON.stringify(e));
          });
          window.videoRewardedAd.load();
        }
      }
    } catch (e) {}
  };
  o.prototype.useHallData = function (e, o) {
    if (o) {
      return window.common_hall.getCommonObj(e, o);
    } else {
      return window.common_hall.getCommonObj(e);
    }
  };
  o.prototype.canShowAd = function () {
    return !!(new Date().getTime() > window.setAdTime && this.isNight());
  };
  o.prototype.isNotWorkTime = function () {
    var e = new Date();
    var o = e.getMonth();
    var t = e.getDate();
    var n = e.getDay();
    if (n == 0 || n == 6) {
      return true;
    }
    var i = {
      1: [1],
      2: [10, 11, 12, 13, 14, 15, 16, 17],
      4: [4, 5, 6],
      5: [1, 2, 3, 4, 5],
      6: [8, 9, 10],
      9: [15, 16, 17],
      10: [1, 2, 3, 4, 5, 6, 7],
      12: [30, 31]
    }[o + 1 + ""];
    return !(!i || !i.includes(t));
  };
  o.prototype.isNight = function () {
    var e = new Date();
    return e.getHours() < 8 || e.getHours() >= 19 || e.getHours() == 8 && e.getMinutes() < 30 || e.getHours() == 18 && e.getMinutes() > 15;
  };
  o.prototype.playMusic = function (e, o) {
    if (o === undefined) {
      o = true;
    }
    if (!cc.sys.localStorage.getItem("muteMusicFlag") && !cc.audioEngine.isMusicPlaying()) {
      return cc.audioEngine.playMusic(e, o);
    }
  };
  o.prototype.playMusicEffect = function (e, o) {
    if (o === undefined) {
      o = false;
    }
    if (!cc.sys.localStorage.getItem("muteMusicEffectFlag")) {
      return cc.audioEngine.playEffect(e, o);
    }
  };
  o.prototype.loadEnergyPre = function (e, o, t, n) {
    cc.assetManager.loadBundle("resources_energySkin" + window.common_hall.getCommonObj("energySkin"), function (i, r) {
      r.load("energy", cc.Prefab, function (i, r) {
        var a = cc.instantiate(r);
        a.removeComponent(cc.Widget);
        if (e != null && e != null) {
          a.x = e;
        }
        if (o != null && o != null) {
          a.y = o;
        }
        if (t) {
          t.addChild(a);
        } else {
          cc.find("Canvas").addChild(a);
        }
        if (n) {
          a.zIndex = n;
        }
      });
    });
  };
  o.prototype.reportAnalytics = function (e) {
    if (window.miniPlatForm == "tt") {
      try {
        tt.reportAnalytics(e, {
          value: "1"
        });
      } catch (o) {}
    }
  };
  o.prototype.canLoadBoxUI = function () {
    window.fromBoxUIFlag = true;
    if (window.loadBoxUIFlag) {
      window.loadBoxUIFlag = false;
      return false;
    }
    var e = new Date().getTime();
    if (window.miniPlatForm == "oppo" && e <= window.setAdTime) {
      return false;
    }
    var o = Number(cc.sys.localStorage.getItem("showBoxIndex") || 0);
    var t = cc.sys.localStorage.getItem("boxDateString");
    var n = new Date().toLocaleDateString();
    if (t && t == n) {
      if (o >= 6) {
        return false;
      }
    } else {
      cc.sys.localStorage.setItem("showBoxIndex", "0");
    }
    window.loadBoxUIFlag = true;
    return true;
  };
  o.prototype.loadBoxUI = function (e, o) {
    if (o === undefined) {
      o = 1.44;
    }
    cc.assetManager.loadBundle("resources_boxUISkin" + window.adUtil.useHallData("boxUISkin"), function (t, n) {
      n.load("boxUI", cc.Prefab, function (t, n) {
        var i = cc.instantiate(n);
        var r = cc.find("Canvas");
        i.getComponent("boxUI_hall" + window.adUtil.useHallData("boxUISkin")).setShowNext(e);
        r.addChild(i);
        i.zIndex = 100;
        i.scale = o;
      });
    });
  };
  o.prototype.createInterstitialAd = function () {
    try {
      if (window.miniPlatForm == "qq") {
        if (!window.interstitialAd) {
          window.interstitialAd = qq.createInterstitialAd({
            adUnitId: window.common_hall.getCommonObj("qqInterstitialAdId")
          });
          window.interstitialAd.onError(window.adUtil.interstitialAdErrorCb);
        }
      } else if (window.miniPlatForm == "tt") {
        if (window.interstitialAd) {
          window.interstitialAd.offError(window.adUtil.interstitialAdErrorCbForTT);
          window.interstitialAd.offClose(window.adUtil.destroyInterstitialAd);
          window.adUtil.destroyInterstitialAd();
        }
        window.interstitialAd = tt.createInterstitialAd({
          adUnitId: window.common_hall.getCommonObj("ttInterstitialAdId")
        });
        window.interstitialAd.onError(window.adUtil.interstitialAdErrorCbForTT);
      }
    } catch (e) {}
  };
  o.prototype.showInterstitialAd = function () {
    window.noAdFlag;
    try {
      if (window.miniPlatForm == "tt") {
        window.interstitialAd.show().then(function () {
          window.interstitialAd.onClose(window.adUtil.destroyInterstitialAd);
        });
      } else if (window.miniPlatForm == "ks") {
        if (window.interstitialAd) {
          window.interstitialAd.offError(window.adUtil.interstitialAdErrorCb);
          window.interstitialAd.offLoad(window.adUtil.interstitialAdLoadCb);
          window.interstitialAd.destroy();
        }
        window.interstitialAd = ks.createInterstitialAd({
          adUnitId: "2300003325_02"
        });
        window.interstitialAd.onError(window.adUtil.interstitialAdErrorCb);
        window.interstitialAd.show();
      } else if (window.miniPlatForm == "qq") {
        window.interstitialAd.show();
      } else if (window.miniPlatForm == "vivoApp") {
        window.fmJava.Native_Interstitial_Ad();
      } else if (window.miniPlatForm == "oppoApp" && new Date().getTime() > window.setAdTime) {
        window.fmJava.Native_Interstitial_Ad();
      }
    } catch (e) {}
  };
  o.prototype.interstitialAdErrorCbForTT = function (e) {
    console.log("插屏广告加载失败1", JSON.stringify(e));
    setTimeout(function () {
      window.interstitialAd.load();
    }, 10000);
  };
  o.prototype.interstitialAdErrorCb = function (e) {
    console.log("插屏广告加载失败1", JSON.stringify(e));
  };
  o.prototype.interstitialAdLoadCb = function () {
    window.interstitialAd.show().then(function () {
      console.log("插屏广告展示完成");
    }).catch(function (e) {
      console.log("插屏广告展示失败2", JSON.stringify(e));
    });
  };
  o.prototype.destroyInterstitialAd = function () {
    window.interstitialAd.destroy();
  };
  o.prototype.showLogoAd = function () {
    if (window.miniPlatForm == "oppo") {
      this.showLogoAdOnce();
      this.unschedule(window.adUtil.showLogoAdSchedule);
      this.schedule(this.showLogoAdSchedule, 30);
    }
  };
  o.prototype.showLogoAdSchedule = function () {
    var e = new Date().getTime();
    if (!(window.originAdTime && e < window.originAdTime + 27000)) {
      window.adUtil.showLogoAdOnce();
    }
  };
  o.prototype.showLogoAdOnce = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/logoAd", cc.Prefab, function (e, o) {
        try {
          var t = cc.instantiate(o);
          var n = cc.find("Canvas").getChildByName("logoAdNode");
          n.removeAllChildren();
          n.addChild(t);
        } catch (i) {
          window.adUtil.unschedule(window.adUtil.showLogoAdSchedule);
          console.log(i);
        }
      });
    });
  };
  o.prototype.showGamePortalAd = function () {
    if (window.miniPlatForm == "oppo") {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/gamePortalAd", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          var n = cc.find("Canvas").getChildByName("gamePortalAdNode");
          t.zIndex = 32000;
          n.removeAllChildren();
          n.addChild(t);
        });
      });
    }
  };
  o.prototype.login = function () {
    if (window.miniPlatForm == "tt") {
      try {
        tt.login({
          success: function () {
            console.log("login 调用成功");
          },
          fail: function () {
            console.log("login 调用失败");
          }
        });
      } catch (e) {}
    } else if (window.miniPlatForm == "huawei") {
      console.log("Sign-in", window.adUtil.useHallData("huaweiAppId"));
      try {
        if (window.loginSuccessFlag) {
          return void (window.loginHuawei && window.loginHuawei.node && window.loginHuawei.node.destroy && window.loginHuawei.node.destroy());
        }
        qg.gameLoginWithReal({
          forceLogin: 1,
          appid: window.adUtil.useHallData("huaweiAppId"),
          success: function (e) {
            window.loginSuccessFlag = true;
            if (window.loginHuawei && window.loginHuawei.node && window.loginHuawei.node.destroy) {
              window.loginHuawei.node.destroy();
            }
            console.log(" game login with real success:" + JSON.stringify(e));
          },
          fail: function (e, o) {
            console.log("game login with real fail:" + e + ", code:" + o);
            if (o == 7004 || o == 2012) {
              console.log("玩家取消登录，返回游戏界面让玩家重新登录。");
            } else if (o == 7021) {
              console.log("The player has canceled identity verification. Forbid the player from entering the game.");
              window.adUtil.exit();
            }
          }
        });
      } catch (o) {
        window.loginSuccessFlag = true;
        if (window.loginHuawei && window.loginHuawei.node && window.loginHuawei.node.destroy) {
          window.loginHuawei.node.destroy();
        }
      }
    }
  };
  o.prototype.addToApps = function () {
    if (window.miniPlatForm == "qq" && !(new Date().getTime() < window.setAdTime)) {
      try {
        qq.isAddedToMyApps({
          success: function (e) {
            if (!e.isAdded) {
              qq.applyAddToMyApps({
                success: function (e) {
                  e.confirm;
                  e.cancel;
                }
              });
            }
          }
        });
      } catch (e) {}
    }
  };
  o.prototype.showHomelAd = function () {};
  o.prototype.canShowRank = function () {
    if (this.isDouyinOrDouyin_lite()) {
      return true;
    }
    if (window.miniPlatForm == "tt") {
      try {
        var e = tt.getSystemInfoSync().SDKVersion;
        console.log("基础库版本：" + e);
        var o = e.split(".");
        return 1000000 * Number(o[0]) + 1000 * Number(o[1]) + Number(o[2]) >= 2070000;
      } catch (t) {
        return false;
      }
    }
    return false;
  };
  o.prototype.showRank = function () {
    if (this.isDouyinOrDouyin_lite()) {
      this.loadRank();
    } else if (window.miniPlatForm == "tt") {
      try {
        var e = tt.getSystemInfoSync().SDKVersion;
        console.log("基础库版本：" + e);
        var o = e.split(".");
        if (1000000 * Number(o[0]) + 1000 * Number(o[1]) + Number(o[2]) >= 2070000) {
          this.loadRank();
        }
      } catch (t) {}
    }
  };
  o.prototype.loadRank = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/homeUI/rank", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.showAddShortcut = function () {
    if (this.isDouyinOrDouyin_lite()) {
      this.loadAddShortcut();
    } else if (window.miniPlatForm == "oppo") {
      this.loadAddShortcut();
    }
  };
  o.prototype.loadAddShortcut = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/homeUI/addShortcut", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.canShowFollowMe = function () {
    if (!this.isDouyinOrDouyin_lite()) {
      return false;
    }
    try {
      var e = tt.getSystemInfoSync().SDKVersion;
      console.log("基础库版本：" + e);
      var o = e.split(".");
      return 1000000 * Number(o[0]) + 1000 * Number(o[1]) + Number(o[2]) >= 1084000;
    } catch (t) {
      return false;
    }
  };
  o.prototype.showSideBar = function (e, o) {
    return a(this, undefined, undefined, function () {
      var t;
      var n;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (window.miniPlatForm != "tt") {
              return [2];
            } else {
              return [4, window.adUtil.loadPrefabSync("prefab/ui/ttSidebar")];
            }
          case 1:
            t = i.sent();
            n = cc.instantiate(t);
            cc.find("Canvas").addChild(n);
            n.x = e;
            n.y = o;
            return [2];
        }
      });
    });
  };
  o.prototype.showFollowMe = function () {
    if (this.isDouyinOrDouyin_lite()) {
      try {
        var e = tt.getSystemInfoSync().SDKVersion;
        console.log("基础库版本：" + e);
        var o = e.split(".");
        if (1000000 * Number(o[0]) + 1000 * Number(o[1]) + Number(o[2]) >= 1084000) {
          this.loadFollowMe();
        }
      } catch (t) {}
    }
  };
  o.prototype.loadFollowMe = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/homeUI/followMe", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.isDouyinOrDouyin_lite = function () {
    if (window.miniPlatForm == "tt") {
      try {
        var e = tt.getSystemInfoSync();
        return e.appName == "Douyin" || e.appName == "douyin_lite";
      } catch (o) {
        return false;
      }
    }
    return false;
  };
  o.prototype.createGridGamePanel = function () {
    if (this.isDouyinOrDouyin_lite()) {
      try {
        tt.createGridGamePanel({
          gridCount: "one"
        }).show();
      } catch (e) {}
    }
  };
  o.prototype.showLogoAdForRect = function () {
    if (window.miniPlatForm == "oppo") {
      this.showLogoAdOnceForRect();
      this.unschedule(window.adUtil.showLogoAdForRectSchedule);
      this.schedule(this.showLogoAdForRectSchedule, 30);
    }
  };
  o.prototype.showLogoAdForRectSchedule = function () {
    var e = new Date().getTime();
    if (!(window.originAdTime && e < window.originAdTime + 27000)) {
      window.adUtil.showLogoAdOnceForRect();
    }
  };
  o.prototype.showLogoAdOnceForRect = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/logoAd", cc.Prefab, function (e, o) {
        try {
          var t = cc.instantiate(o);
          var n = cc.find("Canvas").getChildByName("RectUI").getChildByName("logoAdNode");
          n.removeAllChildren();
          n.addChild(t);
        } catch (i) {
          window.adUtil.unschedule(window.adUtil.showLogoAdForRectSchedule);
          console.log(i);
        }
      });
    });
  };
  o.prototype.showGamePortalAdForRect = function () {
    if (window.miniPlatForm == "oppo") {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/gamePortalAd", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          var n = cc.find("Canvas").getChildByName("RectUI").getChildByName("gamePortalAdNode");
          t.zIndex = 32000;
          n.removeAllChildren();
          n.addChild(t);
        });
      });
    }
  };
  o.prototype.showGameBannerAd = function () {
    try {
      var e = cc.view.getFrameSize();
      window.gameBannerAd = qg.createGameBannerAd({
        adUnitId: "546218",
        style: {
          top: e.height,
          left: 0,
          orientation: "horizontal"
        }
      });
      window.gameBannerAd.show().then(function () {
        console.log("show success");
      }).catch(function (e) {
        console.log("show fail with:" + e.errCode + "," + e.errMsg);
      });
      window.gameBannerAd.onError(function (e) {
        console.log(e);
      });
    } catch (o) {}
  };
  o.prototype.closeGameBanner = function () {
    if (window.gameBannerAd) {
      window.gameBannerAd.destroy().then(function () {
        window.gameBannerAd = undefined;
        console.log("destroy success");
      }).catch(function (e) {
        window.gameBannerAd.hide().then(function () {
          window.gameBannerAd = undefined;
          console.log("hide success");
        }).catch(function (e) {
          console.log("hide fail with:" + e.errCode + "," + e.errMsg);
        });
        console.log("destroy fail with:" + e.errCode + "," + e.errMsg);
      });
    }
  };
  o.prototype.showGameCustomAd = function () {
    if (window.miniPlatForm == "vivo") {
      if (!(new Date().getTime() <= window.setAdTime)) {
        if (window.adUtil.isNotWorkTime()) {
          if (!cc.sys.localStorage.getItem("gameCustomAdCount")) {
            cc.sys.localStorage.setItem("gameCustomAdCount", "1");
            window.vivoOriginAdThis.initRewardedAd();
          }
        }
      }
    }
  };
  o.prototype.showNewNativeAd = function () {
    if (window.miniPlatForm == "vivo") {
      try {
        if (qg.createNewNativeAd) {
          window.adUtil.destroyNewNativeAd();
          window.newNativeAd = qg.createNewNativeAd({
            posId: window.adUtil.useHallData("vivoNewNativeAdId")
          });
          window.newNativeAd.onLoad(function (e) {
            console.log("原生自渲染2.0广告加载完成-onload触发", JSON.stringify(e));
            if (e && e.adList) {
              var o = {
                adId: e.adList[0].adId,
                formType: e.adList[0].formType[0],
                style: {
                  top: 150,
                  gravity: "right"
                }
              };
              window.newNativeAd.show(o).then(function () {
                console.log("原生自渲染2.0广告展示完成");
              }).catch(function (e) {
                console.log("原生自渲染2.0广告展示失败", JSON.stringify(e));
              });
            }
          });
          window.newNativeAd.onClose(function () {
            console.log("原生自渲染2.0广告关闭");
          });
          window.newNativeAd.onError(function (e) {
            console.log("原生自渲染2.0广告加载失败", e);
          });
        }
      } catch (e) {
        console.log(JSON.stringify(e));
      }
    }
  };
  o.prototype.destroyNewNativeAd = function () {
    if (window.newNativeAd) {
      window.newNativeAd.destroy();
    }
  };
  o.prototype.showOppoCustomIconAd = function () {};
  o.prototype.destroyOppoCustomIconAd = function () {
    if (window.oppoCustomIconAd) {
      window.oppoCustomIconAd.destroy();
      window.oppoCustomIconAd = null;
    }
  };
  o.prototype.showBannerAd = function () {
    if (window.miniPlatForm == "oppo") {
      if (window.oppoBannerCount) {
        window.oppoBannerCount += 1;
      } else {
        window.oppoBannerCount = 1;
      }
      if (new Date().getTime() <= window.setAdTime) {
        return;
      }
      window.oppoBannerCount = 2;
      if (window.oppoBannerCount % 2 == 1) {
        window.vivoOriginAdThis.loadOppoBannerAd();
        window.vivoOriginAdThis.showOppoCustomAd();
      } else {
        try {
          window.adUtil.closeBannerAd();
          window.bannerAd = qg.createBannerAd({
            adUnitId: window.common_hall.getCommonObj("oppoBannerAdId")
          });
          window.bannerAd.onError(function (e) {
            console.log(JSON.stringify(e));
          });
          window.bannerAd.show();
        } catch (i) {
          console.log(JSON.stringify(i));
        }
      }
    } else if (window.miniPlatForm == "tt") {
      try {
        if (window.common_hall.getCommonObj("ttBannerAdId")) {
          return;
        }
        var e = cc.view.getFrameSize();
        if (window.bannerAd) {
          window.bannerAd.hide();
          window.bannerAd.destroy();
        }
        window.bannerAd = tt.createBannerAd({
          adUnitId: window.common_hall.getCommonObj("ttBannerAdId"),
          style: {
            left: 35,
            top: e.height - 106
          }
        });
        window.bannerAd.onLoad(function () {
          window.bannerAd.show().then(function () {
            console.log("广告显示成功");
          }).catch(function (e) {
            console.log("广告组件出现问题", e);
          });
        });
      } catch (i) {}
    } else if (window.miniPlatForm == "vivo") {
      try {
        if (window.bannerAd) {
          window.bannerAd.hide();
          window.bannerAd.destroy();
        }
        window.bannerAd = qg.createBannerAd({
          posId: window.common_hall.getCommonObj("vivoBannerAdId")
        });
        window.bannerAd.show();
      } catch (i) {}
    } else if (window.miniPlatForm == "qq") {
      try {
        if (new Date().getTime() < window.setAdTime && cc.sys.os == cc.sys.OS_IOS) {
          return;
        }
        window.bannerAd = qq.createBannerAd({
          adUnitId: window.common_hall.getCommonObj("qqBannerAdId"),
          adIntervals: 30,
          style: {
            left: 0,
            top: 0,
            width: 320,
            height: 96
          }
        });
        window.bannerAd.onResize(function (e) {
          console.log("Resize后正式宽高:", e.width, e.height);
          var o = cc.view.getFrameSize();
          window.bannerAd.style.top = o.height - e.height;
          window.bannerAd.style.left = (o.width - e.width) / 2;
          window.bannerAd.show().then(function () {
            console.log("bannerAd show ok");
          }).catch(function (e) {
            console.log("bannerAd show error", e);
          });
        });
        window.bannerAd.onError(function (e) {
          console.log("bannerAd onError", e);
        });
        window.bannerAd.onLoad(function (e) {
          console.log("bannerAd onLoad", e);
        });
      } catch (i) {}
    } else if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
      window.fmJava.ShowBannerAd();
    } else if (window.miniPlatForm == "huawei") {
      try {
        var o = new Date().getTime();
        if (window.showBannerTime && o - window.showBannerTime < 30000) {
          return void console.log("banner距离上次展示不够30s");
        }
        if (window.bannerAd) {
          window.bannerAd.hide();
          window.bannerAd.destroy();
        }
        var t = qg.getSystemInfoSync();
        console.log("on getSystemInfoSync: success =" + JSON.stringify(t));
        var n = t.safeArea.height;
        window.bannerAd = qg.createBannerAd({
          adUnitId: window.adUtil.useHallData("huaweiBannerAdId"),
          style: {
            top: n - 57,
            left: 0,
            height: 57,
            width: 360
          }
        });
        setTimeout(function () {
          window.bannerAd.show();
          window.showBannerTime = new Date().getTime();
        }, 1000);
      } catch (i) {}
    }
  };
  o.prototype.closeBannerAd = function () {
    if (window.miniPlatForm != "oppoApp" && window.miniPlatForm != "vivoApp") {
      if (window.miniPlatForm != "oppo") {
        if (window.bannerAd) {
          window.bannerAd.hide();
          window.bannerAd.destroy();
        }
      } else {
        if (window.bannerAd) {
          window.bannerAd.hide();
          window.bannerAd.destroy();
        }
        if (window.oppoBannerAdFlag) {
          try {
            window.customAd[window.customMiddleAdCount].destroy();
            window.oppoBannerAdFlag = false;
          } catch (e) {
            console.log(e);
          }
        }
      }
    } else {
      window.fmJava.HideBannerAd();
    }
  };
  o.prototype.closeOppoCustomAd = function () {
    if (window.miniPlatForm == "oppo" && window.oppoCustomAdFlag) {
      try {
        window.customAd[window.customMiddleAdCount].destroy();
        window.oppoCustomAdFlag = false;
      } catch (e) {}
    }
  };
  o.prototype.startRecord = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      try {
        if (window.miniPlatForm == "tt") {
          window.gameRecorderVideoPath = undefined;
          window.gameRecorder = tt.getGameRecorderManager();
          window.gameRecorder.onError(function (e) {
            console.log("录屏错误", e);
          });
          window.gameRecorder.onStop(function (e) {
            window.gameRecorderManagerEndTime = new Date().getTime();
            window.gameRecorderManagerStartFlag = false;
            if (e && e.videoPath) {
              window.gameRecorderVideoPath = e.videoPath;
            }
          });
          window.gameRecorder.start({
            duration: 30,
            isMarkOpen: true
          });
        } else if (window.miniPlatForm == "ks") {
          window.gameRecorderVideoID = undefined;
          window.gameRecorder = ks.getGameRecorder();
          window.gameRecorder.on("error", function () {});
          window.gameRecorder.start();
        }
        window.gameRecorderManagerStartFlag = true;
      } catch (e) {
        window.gameRecorderManagerStartFlag = true;
      }
    }
  };
  o.prototype.stopRecord = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      try {
        if (window.gameRecorder) {
          if (!(window.miniPlatForm == "tt")) {
            if (window.miniPlatForm == "ks") {
              window.gameRecorder.on("stop", function (e) {
                window.gameRecorderManagerStartFlag = false;
                if (e && e.videoID) {
                  window.gameRecorderVideoID = e.videoID;
                } else {
                  console.log("录屏停止，录制失败");
                }
              });
            }
          }
          if (window.gameRecorderManagerStartFlag) {
            console.log("录屏停止");
            window.gameRecorder.stop();
          }
        }
      } catch (e) {
        window.gameRecorderManagerStartFlag = false;
      }
    }
  };
  o.prototype.shareVideo = function () {
    if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
      var e = window.common_hall.getCommonObj("ttShareContent");
      var o = function () {
        window.powerControl.addPower(1);
        window.adUtil.toast(e);
        window.gameRecorderManagerStartTime = 0;
        window.gameRecorderManagerEndTime = 0;
      };
      try {
        if (window.gameRecorderManagerStartTime == 0 && window.gameRecorderManagerEndTime == 0) {
          return void this.toast("本次已分享");
        }
        if (window.miniPlatForm == "tt") {
          if (window.gameRecorderManagerEndTime - window.gameRecorderManagerStartTime < 3000) {
            return void this.toast("录屏小于3s，无法分享");
          }
          if (!window.gameRecorderVideoPath) {
            return void window.adUtil.toast("录屏失败，请检查相关权限");
          }
          tt.shareAppMessage({
            channel: "video",
            extra: {
              videoPath: window.gameRecorderVideoPath,
              withVideoId: true,
              hashtag_list: ["抖音小游戏", window.common_hall.getCommonObj("ttShareTag")]
            },
            success: function () {
              o();
              tt.showModal({
                title: "分享成功",
                content: e
              });
            },
            fail: function (e) {
              var o = "无法获取奖励";
              if (JSON.stringify(e).indexOf("is too short") > -1) {
                o = "录屏小于3s，无法分享";
              }
              tt.showModal({
                title: "分享失败",
                content: o
              });
              console.log("分享失败", JSON.stringify(e));
            }
          });
        } else if (window.miniPlatForm == "ks") {
          if (!window.gameRecorderVideoID) {
            return void window.adUtil.toast("录屏失败，请检查相关权限");
          }
          window.gameRecorder.publishVideo({
            video: window.gameRecorderVideoID,
            callback: function (e) {
              if (e == null || e == null) {
                o();
                console.log("分享录屏成功");
              } else {
                console.log("分享录屏失败: " + JSON.stringify(e));
              }
            }
          });
        }
      } catch (t) {
        o();
      }
    }
  };
  o.prototype.shareTemplate = function () {
    if (window.miniPlatForm == "tt") {
      try {
        tt.shareAppMessage({
          templateId: "259hb9f21c2jbmpd39",
          query: "",
          success: function () {
            tt.showModal({
              title: "分享成功",
              content: ""
            });
          },
          fail: function () {
            tt.showModal({
              title: "分享失败",
              content: ""
            });
          }
        });
      } catch (e) {}
    }
  };
  o.prototype.loadGuide = function (e, o) {
    if (o === undefined) {
      o = cc.v2(0, 0);
    }
    return a(this, undefined, undefined, function () {
      var t;
      var n;
      var i;
      var r;
      var a;
      var l;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            return [4, window.adUtil.loadPrefabSync("prefab/guide")];
          case 1:
            t = c.sent();
            n = cc.instantiate(t);
            cc.find("Canvas").addChild(n);
            i = e.parent.convertToWorldSpaceAR(e.position);
            r = cc.find("Canvas");
            a = r.convertToNodeSpaceAR(i);
            (l = cc.instantiate(e)).x = a.x;
            l.y = a.y;
            n.getComponent("guide").setChild(l);
            n.getChildByName("corrugation").x += o.x;
            n.getChildByName("corrugation").y += o.y;
            n.getChildByName("finger").x += o.x;
            n.getChildByName("finger").y += o.y;
            return [2];
        }
      });
    });
  };
  o.prototype.toast = function (e) {
    cc.assetManager.loadBundle("resources", function (o, t) {
      t.load("prefab/toast", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        cc.find("Canvas").addChild(n);
        n.zIndex = 5001;
        window.toastNode.initData(e);
      });
    });
  };
  o.prototype.loadPrefabSync = function (e) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (o, t) {
          cc.assetManager.loadBundle("resources", function (n, i) {
            i.load(e, cc.Prefab, function (e, n) {
              if (e) {
                t(e);
              } else {
                o(n);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadPrefabByBundleSync = function (e, o) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (t, n) {
          cc.assetManager.loadBundle(e, function (e, i) {
            i.load(o, cc.Prefab, function (e, o) {
              if (e) {
                n(e);
              } else {
                t(o);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadJsonSync = function (e) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (o, t) {
          cc.assetManager.loadBundle("resources", function (n, i) {
            i.load(e, cc.JsonAsset, function (e, n) {
              if (e) {
                t(e);
              } else {
                o(n);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadJsonByBundleSync = function (e, o) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (t, n) {
          cc.assetManager.loadBundle(e, function (e, i) {
            i.load(o, cc.JsonAsset, function (e, o) {
              if (e) {
                n(e);
              } else {
                t(o);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadDirSync = function (e) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (o, t) {
          cc.assetManager.loadBundle("resources", function (n, i) {
            i.loadDir(e, function (e, n) {
              if (e) {
                t(e);
              } else {
                o(n);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadDirByBundleSync = function (e, o) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (t, n) {
          cc.assetManager.loadBundle(e, function (e, i) {
            i.loadDir(o, function (e, o) {
              if (e) {
                n(e);
              } else {
                t(o);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadSpriteFrameSync = function (e) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (o, t) {
          cc.assetManager.loadBundle("resources", function (n, i) {
            i.load(e, cc.SpriteFrame, function (e, n) {
              if (e) {
                t(e);
              } else {
                o(n);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.loadSpriteFrameByBundleSync = function (e, o) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (t, n) {
          cc.assetManager.loadBundle(e, function (e, i) {
            i.load(o, cc.SpriteFrame, function (e, o) {
              if (e) {
                n(e);
              } else {
                t(o);
              }
            });
          });
        })];
      });
    });
  };
  return r([s], o);
}(cc.Component);
exports.default = u;