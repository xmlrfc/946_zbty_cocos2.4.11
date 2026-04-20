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
var a = require("./adBase_wenzizhaobutong");
var c = cc._decorator;
var l = c.ccclass;
c.property;
var d = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    this.loadHint();
    window.adUtilHall.loadEnergyPre(0, 600);
    this.showGameAd();
  };
  o.prototype.loadHint = function () {
    var e = cc.sys.localStorage.getItem("hintNum_wenzizhaobutong");
    if (!e) {
      var o = 3;
      if (window.miniPlatForm == "oppo") {
        o = 3;
      } else if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
        o = 3;
      } else if (window.miniPlatForm == "vivoApp") {
        o = 3;
      }
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", o + "");
      e = o;
    }
    if (Number(e) <= 0) {
      this.adNode.active = true;
      this.hintNode.active = false;
    } else {
      this.adNode.active = false;
      this.hintNode.active = true;
      this.hintNum.string = e + "";
    }
  };
  o.prototype.showGetTipsPrefab = function () {};
  o.prototype.loadStartAd = function () {};
  o.prototype.loadGuide = function (e) {
    cc.assetManager.loadBundle("resources", function (o, t) {
      t.load("prefab/ui/guide_common", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        cc.find("Canvas").addChild(n);
        n.x = e.x;
        n.y = e.y;
      });
    });
  };
  o.prototype.loadGuideMove = function (e, o, t) {
    if (t === undefined) {
      t = 0.5;
    }
    cc.assetManager.loadBundle("resources", function (n, i) {
      i.load("prefab/ui/guideMove_common", cc.Prefab, function (n, i) {
        var r = cc.instantiate(i);
        r.x = e.x;
        r.y = e.y;
        r.getComponent("guideMove_common").init(e, o, t);
        cc.find("Canvas").addChild(r);
      });
    });
  };
  o.prototype.removeGuideNode = function () {
    var e = cc.find("Canvas/guide_common");
    if (e) {
      e.destroy();
    }
  };
  o.prototype.judgeShowWinUI = function (e) {
    if (window.adUtil.canLoadBoxUI()) {
      if (e == 1) {
        window.adUtil.loadBoxUI(window.game.showWinUI);
      } else if (e == 6) {
        window.adUtil.loadBoxUI(window.game.showWinUI6);
      }
    } else if (e == 1) {
      window.game.showWinUI();
    } else if (e == 6) {
      window.game.showWinUI6();
    }
  };
  o.prototype.showWinUI = function () {
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
      o.load("prefab/ui/winUI" + window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong"), cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        if (window.miniPlatForm == "oppo") {
          t.zIndex = 2;
        }
      });
    });
  };
  o.prototype.showWinUI6 = function () {
    var e = window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong") ? window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong") : "6";
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
      t.load("prefab/ui/winUI" + e, cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 2;
      });
    });
  };
  o.prototype.levelUpCallback = function () {
    window.currentLevel++;
    var e = Number(cc.sys.localStorage.getItem("level" + window.model + "_wenzizhaobutong") || 1);
    if (window.currentLevel > e) {
      cc.sys.localStorage.setItem("level" + window.model + "_wenzizhaobutong", window.currentLevel + "");
      if (window.home && window.home.isModelNowInModel12()) {
        window.home.calculateLevel();
      }
    }
  };
  o.prototype.clickBack = function () {
    if (cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  return r([l], o);
}(a.default);
exports.default = d;