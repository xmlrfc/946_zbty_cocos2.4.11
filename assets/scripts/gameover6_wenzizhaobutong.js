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
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.btnShare = null;
    o.mask = null;
    o.btn = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.gameover = this;
    if (window.miniPlatForm == "qq" || window.miniPlatForm == "tt") {
      this.btn.y = -260;
      window.miniPlatForm;
    } else if (window.miniPlatForm == "ks") {
      this.btn.y = -430;
      if (this.node.getChildByName("btn_video")) {
        this.node.getChildByName("btn_video").active = true;
      }
    } else if (window.miniPlatForm == "oppo") {
      this.btn.y = -100;
      this.node.getChildByName("btn_video").y = 100;
    } else {
      window.miniPlatForm;
    }
    this.showGameoverAd();
  };
  o.prototype.start = function () {};
  o.prototype.clickNext = function () {
    var e = this;
    window.adUtil.closeOppoCustomAd();
    if (window.home && window.home.isModelNowInModel12()) {
      var o = Number(cc.sys.localStorage.getItem("level12_wenzizhaobutong") || 1);
      if (o > window.model12Arr.length) {
        window.adUtil.toast("已通关，请期待后续更新");
        return void this.scheduleOnce(function () {
          e.clickBack();
        }, 0.8);
      } else {
        return void window.home.btnClick(undefined, window.model12Arr[o - 1] + "");
      }
    }
    if (window.model == 1 || window.model == 3) {
      if (window.currentLevel > zi.getLength()) {
        window.adUtil.toast("已通关，请期待后续更新");
        return void this.scheduleOnce(function () {
          e.clickBack();
        }, 0.8);
      }
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
      });
    } else if (window.model == 2 || window.model == 4) {
      if (window.currentLevel > window.game.levelLength) {
        window.adUtil.toast("已通关，请期待后续更新");
        return void this.scheduleOnce(function () {
          e.clickBack();
        }, 0.8);
      }
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
      });
    } else if (window.model == 5 || window.model == 8) {
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
      });
    } else {
      if (window.currentLevel > window.levelMaxModel) {
        window.adUtil.toast("已通关，请期待后续更新");
        return void this.scheduleOnce(function () {
          e.clickBack();
        }, 0.8);
      }
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
      });
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
  o.prototype.clickShare = function () {
    window.adUtil.shareVideo();
  };
  r([d(cc.Node)], o.prototype, "btnShare", undefined);
  r([d(cc.Node)], o.prototype, "mask", undefined);
  r([d(cc.Node)], o.prototype, "btn", undefined);
  return r([l], o);
}(a.default);
exports.default = s;