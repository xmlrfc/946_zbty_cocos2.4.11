import Banner from "./Banner";
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
var a = require("./loadDrawLineCar");
var c = require("./loadWenzizhaobutong");
var l = require("./loadShaonao");
var d = require("./loadShaonaoNew");
var s = require("./loadMigong");
var u = require("./loadBallhome");
var h = require("./loadJingchazhuaxiaotou");
var w = require("./loadWadong");
var p = require("./loadDaxiguaChazhen");
var f = require("./loadXiujiao");
var y = require("./loadJianfengchazhen");
var g = require("./loadClass_jump");
var m = require("./loadCaijiqiuqiu");
var v = require("./loadYiyilimi");
var _ = require("./loadShanzhachuan");
var b = require("./loadBallneat");
var A = require("./loadZhenglicaibi");
var C = require("./loadZhaogedan");
var N = require("./loadJiujiuxiaozhu");
var O = require("./loadGanzhuhuijuan");
var P = require("./loadSaimanpingzi");
var j = require("./loadDongwuxiaoxiao");
var x = require("./loadEmoji");
var z = require("./loadYizoutiesi");
var S = require("./loadLinegame");
var M = require("./loadXiaochufangkuai");
var R = require("./loadBachudingzi");
var L = require("./loadDuzhuxiaotou");
var F = require("./loadJiekailalian");
var k = require("./loadXiaochufeiji");
var B = require("./loadDrawLineMatchStickMen");
var I = require("./loadJiekaishezhen");
var T = require("./loadZhuabufeizei");
var U = require("./loadJiaotongshudao");
var D = require("./loadWanmeiqiege");
var E = require("./loadXiaochucaibi");
var V = require("./loadHechengshiwu");
var G = require("./loadHuanraosaiche");
var q = require("./loadDuokaimengshou");
var H = require("./loadHuashangcesuo");
var W = require("./loadMajiangxiaochu");
var J = require("./loadBaohuxiaoyang");
var X = require("./loadXiujianshuzhi");
var K = require("./loadXiangpudazhan");
var Z = require("./loadHuabituse");
var Y = require("./loadZhuazhuhunhun");
var $ = require("./loadMaoxianmao");
var Q = require("./loadKaizouhuoche");
var ee = require("./loadXianglinbutongse");
var oe = require("./loadJiujiuxiaoyu");
var te = require("./loadColorEgg");
var ne = require("./loadXiaochuxiaoren");
var ie = require("./loadPaiduishangche");
var re = require("./loadPaiduishangchuan");
var ae = require("./loadZhediejinshutiao");
var ce = require("./loadLaganjiuyuan");
var le = require("./loadFenpeidianchi");
var de = require("./loadZhizuoguozhi");
var se = require("./loadFruitEliminate");
var ue = require("./loadDuohuiqiuya");
var he = require("./loadLaiduomaomao");
var we = require("./loadJiqiduijue");
var pe = require("./loadShuiguanxiaochu");
var fe = cc._decorator;
var ye = fe.ccclass;
var ge = fe.property;
var me = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.energyPre = null;
    o.wenzizhaobutongAllPre = null;
    o.addShortcutNode = null;
    o.contentNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    // setInterval(() => {
    //   Banner.Instance.ShowCustomAd();
    // }, 20000);
    window.homeHall = this;
    window.currentLevel = undefined;
    var e = this.node.getChildByName("bgCopy");
    var o = this.node.getChildByName("oppoBack");
    if (window.miniPlatForm != "oppo" || window.showBgCopyNodeFlag) {
      e.active = false;
    } else {
      e.active = true;
      window.showBgCopyNodeFlag = true;
    }
    if (window.miniPlatForm == "oppo") {
      o.active = true;
    }
    if (!(window.miniPlatForm != "vivoApp" && window.miniPlatForm != "oppoApp")) {
      this.addShortcutNode.active = false;
    }
    if (window.oppoAuthorFlag || window.miniPlatForm != "oppo" && window.miniPlatForm != "oppoApp" && window.miniPlatForm != "huawei") {
      if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
        cc.find("Canvas/privatePolicy").active = false;
      } else {
        if (!cc.sys.localStorage.getItem("privatePolicy")) {
          console.log("1")//this.loadPrivatePolicy();
        }
        if (window.miniPlatForm == "oppo") {
          window.adUtil.showBannerAd();
          window.adUtil.destroyOppoCustomIconAd();
        } else {
          window.adUtil.closeBannerAd();
          window.adUtil.destroyNewNativeAd();
        }
      }
    } else {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/loadingAuthor", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
          t.zIndex = 32000;
          window.oppoAuthorFlag = true;
        });
      });
    }
    var t = new Date("2023.12.30 00:00:00").getTime() || 1701187200000;
    var n = new Date().getTime();
    var i = this.node.getChildByName("titlebg");
    if (i && i.active && (window.homeScrollOffseyY && i.getComponent(cc.ScrollView).scrollToOffset(window.homeScrollOffseyY), n <= t && (window.miniPlatForm == "oppo" || window.miniPlatForm == "oppoApp"))) {
      for (var r = this.contentNode.children, a = 0; a < r.length; a++) {
        var c = r[a];
        if (a == 0) {
          c.active = true;
          c.x = 0;
          c.y = 60;
        } else {
          c.active = false;
        }
      }
      this.node.getChildByName("privatePolicy").setPosition(0, -200);
    }
    var l = cc.instantiate(this.energyPre);
    cc.find("Canvas").addChild(l);
    window.adUtil.login();
    if (window.miniPlatForm == "qq") {
      try {
        qq.showShareMenu({});
      } catch (d) {}
    }
    window.adUtil.addToApps();
    if (window.gameRecorderManagerStartFlag) {
      window.adUtil.stopRecord();
    }
    window.adUtil.showSideBar(300, 520);
    cc.macro.ENABLE_MULTI_TOUCH = true;
    cc.director.getCollisionManager().enabled = false;
    cc.director.getPhysicsManager().enabled = false;
    cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -320);
    cc.director.getActionManager().enabledAccumulator = undefined;
    cc.director.getActionManager().FIXED_TIME_STEP = undefined;
    cc.director.getPhysicsManager().VELOCITY_ITERATIONS = undefined;
  };
  o.prototype.start = function () {
    var e = this;
    if (window.miniPlatForm == "oppoApp") {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/ui/superLeisureGame", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
          t.zIndex = 32000;
        });
      });
    } else if (window.miniPlatForm == "huawei") {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/ui/logOff", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
        });
      });
    }
    this.autoAddShortcut();
    this.hideLockNode();
    if (!window.adUtilHall.canShowRank()) {
      if (cc.find("Canvas/rank")) {
        cc.find("Canvas/rank").active = false;
      }
    }
    this.playBgm();
    this.scheduleOnce(function () {
      e.judgeEnergyLimitless();
    });
  };
  o.prototype.scrollEvent = function () {
    window.homeScrollOffseyY = this.node.getChildByName("titlebg").getComponent(cc.ScrollView).getScrollOffset();
  };
  o.prototype.playBgm = function () {
    if (!(cc.audioEngine.isMusicPlaying() && window.playBgmFlag)) {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("music/bgm", cc.AudioClip, function (e, o) {
          window.adUtil.playMusic(o, true);
          if (!cc.sys.localStorage.getItem("muteMusicFlag")) {
            window.playBgmFlag = true;
          }
        });
      });
    }
  };
  o.prototype.showSetting = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/setting", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.autoAddShortcut = function () {
    if (window.addShortcut && this.addShortcutNode.active) {
      if (!(window.miniPlatForm != "vivo" && window.miniPlatForm != "oppo" && window.miniPlatForm != "qq")) {
        setTimeout(function () {
          if (!(new Date().getTime() <= window.setAdTime || cc.sys.localStorage.getItem("autoAddShortcutFlag"))) {
            cc.sys.localStorage.setItem("autoAddShortcutFlag", "1");
            window.addShortcut.clickAddShortcut();
          }
        }, 300000);
      }
    }
  };
  o.prototype.judgeEnergyLimitless = function () {
    var e;
    var o = cc.sys.localStorage.getItem("energyLimitlessTime");
    if (o && new Date().getTime() - Number(o) > 86400000) {
      if (!(e = cc.sys.localStorage.getItem("energyLast")) || Number(e) <= 0) {
        e = 1;
      }
      window.powerControl.addPower(Number(e) - window.energy);
      cc.sys.localStorage.removeItem("energyLimitlessTime");
      cc.sys.localStorage.removeItem("energyLast");
    }
    if (cc.sys.localStorage.getItem("energyLimitlessTime")) {
      this.hideEnergyCountdownLabel();
    }
  };
  o.prototype.hideEnergyCountdownLabel = function () {
    if (window.homeHall.energyNode && window.homeHall.energyNode.getChildByName("countdownLabel")) {
      window.homeHall.energyNode.getChildByName("countdownLabel").active = false;
    }
  };
  o.prototype.showFollowMeUI = function () {
    if (window.adUtil.canShowFollowMe()) {
      if (!cc.sys.localStorage.getItem("popFollowMeUI_hall")) {
        cc.assetManager.loadBundle("resources", function (e, o) {
          o.load("prefab/ui/followMeUI", cc.Prefab, function (e, o) {
            var t = cc.instantiate(o);
            cc.find("Canvas").addChild(t);
            cc.sys.localStorage.setItem("popFollowMeUI_hall", "1");
          });
        });
      }
    }
  };
  o.prototype.oppoStartGame = function () {
    Banner.Instance.ShowCustomAd();
    this.node.getChildByName("bgCopy").active = false;
  };
  o.prototype.oppoShowBgCopy = function () {
    Banner.Instance.ShowCustomAd();
    this.node.getChildByName("bgCopy").active = true;
  };
  o.prototype.clearRes = function () {};
  o.prototype.ballhome = function (e, o) {
    u.loadGame(o);
  };
  o.prototype.class_jump = function (e, o) {
    g.loadGame(o);
  };
  o.prototype.daxiguaChazhen = function (e, o) {
    p.loadGame(o);
  };
  o.prototype.drawLineCar = function (e, o) {
    a.loadGame(o);
  };
  o.prototype.jianfengchazhen = function (e, o) {
    y.loadGame(o);
  };
  o.prototype.jingchazhuaxiaotou = function (e, o) {
    h.loadGame(o);
  };
  o.prototype.migong = function (e, o) {
    s.loadGame(o);
  };
  o.prototype.shaonao = function (e, o) {
    l.loadGame(o);
    Banner.Instance.ShowCustomAd();
  };
  o.prototype.shaonaoNew = function (e, o) {
    d.loadGame(o);
    Banner.Instance.ShowCustomAd();
  };
  o.prototype.wadong = function (e, o) {
    w.loadGame(o);
  };
  o.prototype.wenzizhaobutong = function (e, o) {
    Banner.Instance.ShowCustomAd();
    c.loadGame(o);
  };
  o.prototype.xiujiao = function (e, o) {
    f.loadGame(o);
  };
  o.prototype.caijiqiuqiu = function (e, o) {
    m.loadGame(o);
  };
  o.prototype.yiyilimi = function (e, o) {
    v.loadGame(o);
  };
  o.prototype.shanzhachuan = function (e, o) {
    _.loadGame(o);
  };
  o.prototype.ballneat = function (e, o) {
    b.loadGame(o);
  };
  o.prototype.zhenglicaibi = function (e, o) {
    A.loadGame(o);
  };
  o.prototype.zhaogedan = function (e, o) {
    C.loadGame(o);
  };
  o.prototype.jiujiuxiaozhu = function (e, o) {
    N.loadGame(o);
  };
  o.prototype.ganzhuhuijuan = function (e, o) {
    O.loadGame(o);
  };
  o.prototype.saimanpingzi = function (e, o) {
    P.loadGame(o);
  };
  o.prototype.dongwuxiaoxiao = function (e, o) {
    j.loadGame(o);
  };
  o.prototype.emoji = function (e, o) {
    x.loadGame(o);
  };
  o.prototype.yizoutiesi = function (e, o) {
    z.loadGame(o);
  };
  o.prototype.linegame = function (e, o) {
    S.loadGame(o);
  };
  o.prototype.xiaochufangkuai = function (e, o) {
    M.loadGame(o);
  };
  o.prototype.bachudingzi = function (e, o) {
    R.loadGame(o);
  };
  o.prototype.duzhuxiaotou = function (e, o) {
    L.loadGame(o);
  };
  o.prototype.jiekailalian = function (e, o) {
    F.loadGame(o);
  };
  o.prototype.xiaochufeiji = function (e, o) {
    k.loadGame(o);
  };
  o.prototype.drawLineMatchStickMen = function (e, o) {
    if (!window.drawLineMatchStickMenLoadedFlag) {
      window.homeHall.showLoading();
    }
    window.drawLineMatchStickMenLoadedFlag = true;
    B.loadGame(o);
  };
  o.prototype.jiekaishezhen = function (e, o) {
    I.loadGame(o);
  };
  o.prototype.zhuabufeizei = function (e, o) {
    T.loadGame(o);
  };
  o.prototype.jiaotongshudao = function (e, o) {
    U.loadGame(o);
  };
  o.prototype.wanmeiqiege = function (e, o) {
    D.loadGame(o);
  };
  o.prototype.xiaochucaibi = function (e, o) {
    E.loadGame(o);
  };
  o.prototype.hechengshiwu = function (e, o) {
    V.loadGame(o);
  };
  o.prototype.huanraosaiche = function (e, o) {
    G.loadGame(o);
  };
  o.prototype.duokaimengshou = function (e, o) {
    q.loadGame(o);
  };
  o.prototype.huashangcesuo = function (e, o) {
    H.loadGame(o);
  };
  o.prototype.majiangxiaochu = function (e, o) {
    W.loadGame(o);
  };
  o.prototype.baohuxiaoyang = function (e, o) {
    J.loadGame(o);
  };
  o.prototype.xiujianshuzhi = function (e, o) {
    X.loadGame(o);
  };
  o.prototype.xiangpudazhan = function (e, o) {
    K.loadGame(o);
  };
  o.prototype.huabituse = function (e, o) {
    Z.loadGame(o);
  };
  o.prototype.zhuazhuhunhun = function (e, o) {
    Y.loadGame(o);
  };
  o.prototype.maoxianmao = function (e, o) {
    $.loadGame(o);
  };
  o.prototype.kaizouhuoche = function (e, o) {
    Q.loadGame(o);
  };
  o.prototype.xianglinbutongse = function (e, o) {
    ee.loadGame(o);
  };
  o.prototype.jiujiuxiaoyu = function (e, o) {
    oe.loadGame(o);
  };
  o.prototype.colorEgg = function (e, o) {
    te.loadGame(o);
  };
  o.prototype.xiaochuxiaoren = function (e, o) {
    ne.loadGame(o);
  };
  o.prototype.paiduishangche = function (e, o) {
    ie.loadGame(o);
  };
  o.prototype.paiduishangchuan = function (e, o) {
    re.loadGame(o);
  };
  o.prototype.zhediejinshutiao = function (e, o) {
    ae.loadGame(o);
  };
  o.prototype.laganjiuyuan = function (e, o) {
    ce.loadGame(o);
  };
  o.prototype.fenpeidianchi = function (e, o) {
    le.loadGame(o);
  };
  o.prototype.zhizuoguozhi = function (e, o) {
    de.loadGame(o);
  };
  o.prototype.fruitEliminate = function (e, o) {
    se.loadGame(o);
  };
  o.prototype.duohuiqiuya = function (e, o) {
    ue.loadGame(o);
  };
  o.prototype.laiduomaomao = function (e, o) {
    he.loadGame(o);
  };
  o.prototype.jiqiduijue = function (e, o) {
    we.loadGame(o);
  };
  o.prototype.shuiguanxiaochu = function (e, o) {
    pe.loadGame(o);
  };
  o.prototype.loadWenzizhaobutongAll = function () {
    var e = cc.instantiate(this.wenzizhaobutongAllPre);
    this.node.addChild(e);
  };
  o.prototype.hideLockNode = function () {
    for (var e = function (e, o) {
        if ((cc.sys.localStorage.getItem(e) || window.miniPlatForm != "tt") && o && o.active) {
          o.active = false;
        }
      }, o = ["drawLineMatchStickMen", "drawLineMatchStickMen", "drawLineMatchStickMen", "drawLineMatchStickMen", "drawLineMatchStickMen"], t = 0; t < this.contentNode.children.length; t++) {
      var n = this.contentNode.children[t];
      var i = n.getChildByName("lock");
      e(n.name + "UnlockFlag_" + o[t], i);
    }
  };
  o.prototype.clickLockNode = function (e, o) {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("模式已解锁");
      cc.sys.localStorage.setItem(e, "true");
      if (o && o.active) {
        o.active = false;
      }
    }.bind(this), function () {});
  };
  o.prototype.showLoading = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/loading", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 30000;
      });
    });
  };
  o.prototype.loadPrivatePolicy = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/privatePolicy" + window.common_hall.getCommonObj("company"), cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 3000;
      });
    });
  };
  o.prototype.showLast = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/lastModels", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.showMoreGame = function (e, o) {
    cc.assetManager.loadBundle("resources", function (e, t) {
      t.load("prefab/ui/moreGame" + o, cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.energyLimitlessClick = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/ui/addPowerLimitless", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.isModelNowInModel12 = function () {
    return false;
  };
  o.prototype.clickCancel = function () {
    cc.director.loadScene("home_yiyilimi");
  };
  r([ge(cc.Prefab)], o.prototype, "energyPre", undefined);
  r([ge(cc.Prefab)], o.prototype, "wenzizhaobutongAllPre", undefined);
  r([ge(cc.Node)], o.prototype, "addShortcutNode", undefined);
  r([ge(cc.Node)], o.prototype, "contentNode", undefined);
  return r([ye], o);
}(cc.Component);
exports.default = me;