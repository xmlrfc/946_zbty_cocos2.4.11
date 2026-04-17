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
var a = require("./adBase_shaonao");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.btn = null;
    o.btnVideo = null;
    o.mask = null;
    o.reviveNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.gameover = this;
    this.mask.active = false;
    // if (window.miniPlatForm == "tt" && this.btn) {
    //   this.btn.x = 0;
    //   this.btn.y = -240;
    // }
    // if (window.miniPlatForm == "qq" && this.btn) {
    //   this.btn.x = 0;
    //   this.btn.y = -250;
    // } else if (window.miniPlatForm == "ks" && this.btn) {
    //   this.btn.x = 0;
    //   this.btn.y = -430;
    // } else if (window.miniPlatForm == "oppo" && this.btn) {
    //   this.btn.x = 0;
    //   this.btn.y = 200;
    // }
    this.showGameoverAd();
  };
  o.prototype.start = function () {
    if (window.model == 5 && this.reviveNode) {
      this.reviveNode.active = true;
    }
  };
  o.prototype.clickNext = function () {
    var e = this;
    window.adUtil.closeOppoCustomAd();
    if (window.home && window.home.isModelNowInModel12()) {
      var o = Number(cc.sys.localStorage.getItem("level12_shaonao") || 1);
      if (o > window.model12Arr.length) {
        window.adUtil.toast("已通关，请期待后续更新");
        return void this.scheduleOnce(function () {
          e.clickBack();
        }, 0.8);
      } else {
        return void window.home.btnClick(undefined, window.model12Arr[o - 1] + "");
      }
    }
    if (window.currentLevel > window.levelRes.length) {
      window.adUtil.toast("已通关，请期待后续更新");
    } else {
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_shaonao", "shaonao") + "_shaonao");
      });
    }
  };
  o.prototype.clickRestart = function () {
    window.adUtil.closeOppoCustomAd();
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_shaonao", "shaonao") + "_shaonao");
    });
  };
  o.prototype.clickBack = function () {
    window.adUtil.closeOppoCustomAd();
    var e = null;
    if (!(window.model != 5 && window.model != 6)) {
      e = cc.assetManager.bundles.find(function (e) {
        return e.getSceneInfo("level" + window.model + "_shaonao");
      });
    }
    if (e) {
      cc.director.loadScene("level" + window.model + "_shaonao");
    } else {
      this.clickBack1();
    }
  };
  o.prototype.clickBack1 = function () {
    if (cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  o.prototype.adGetEnergy = function () {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("获得体力+5");
      window.powerControl.addPower(5);
      if (window.addPower && window.addPower.node) {
        window.addPower.node.destroy();
      }
    }.bind(this), function () {}.bind(this));
  };
  o.prototype.clickRevive = function () {
    window.adUtil.closeOppoCustomAd();
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("恭喜获得奖励");
      window.game.loadFailFlag = false;
      window.game.step = 10;
      window.game.stepLabel.string = window.game.step + "";
      window.gameover.node.destroy();
    }, function () {});
  };
  r([d(cc.Node)], o.prototype, "btn", undefined);
  r([d(cc.Node)], o.prototype, "btnVideo", undefined);
  r([d(cc.Node)], o.prototype, "mask", undefined);
  r([d(cc.Node)], o.prototype, "reviveNode", undefined);
  return r([l], o);
}(a.default);
exports.default = s;