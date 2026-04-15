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
var a = require("./game_wenzizhaobutong");
var c = require("./zi_wenzizhaobutong");
var l = cc._decorator;
var d = l.ccclass;
var s = l.property;
var u = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.layoutNode = null;
    o.successNode = null;
    o.failNode = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.questionLabel = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.itemPrefab = null;
    o.size = 90;
    o.diffNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    var o = this;
    window.game3 = this;
    this.btnNode.active = false;
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1200);
    cc.director.getActionManager().enabledAccumulator = true;
    cc.director.getActionManager().FIXED_TIME_STEP = 1 / 30;
    cc.director.getPhysicsManager().VELOCITY_ITERATIONS = 8;
    cc.director.getCollisionManager().enabled = true;
    e.prototype.onLoad.call(this);
    window.levelMaxModel = c.default.getLength();
    if (window.currentLevel > c.default.getLength()) {
      window.currentLevel = c.default.getLength();
    }
    var t = c.default.getZi(2 * (window.currentLevel - 1));
    var n = c.default.getZi(2 * (window.currentLevel - 1) + 1);
    this.questionLabel.string = n + "";
    var i = Math.floor(Math.random() * this.size);
    var r = 0.05;
    if (!window.firstEnterFlag) {
      window.firstEnterFlag = true;
      r = 0.1;
    }
    for (var a = function (e) {
        l.scheduleOnce(function () {
          var r = cc.instantiate(o.itemPrefab);
          var a = t;
          if (e == i) {
            a = n;
            o.diffNode = r;
            r.on(cc.Node.EventType.TOUCH_END, o.clickSuccess, o);
          } else {
            r.on(cc.Node.EventType.TOUCH_END, o.clickFail, o);
          }
          var c = Math.floor(600 * Math.random()) - 300;
          var l = Math.floor(360 * Math.random()) - 179;
          var d = Math.floor(20 * Math.random()) - 10;
          r.getChildByName("item").getComponent(cc.Label).string = a;
          r.x = c;
          r.y = e % 2 == 0 ? 460 + d : 560 + d;
          r.rotation = l;
          o.layoutNode.addChild(r);
          if (e == o.size - 1) {
            o.btnNode.active = true;
          }
        }, e * r);
      }, l = this, d = 0; d < this.size; d++) {
      a(d);
    }
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
  };
  o.prototype.clickFail = function () {
    var e = this;
    window.adUtil.playMusicEffect(this.failClip, false);
    this.failNode.active = true;
    this.scheduleOnce(function () {
      e.failNode.active = false;
    }, 0.5);
    console.log("fail");
  };
  o.prototype.clickSuccess = function () {
    var e = this;
    if (!this.successNode.active) {
      window.adUtil.playMusicEffect(this.successClip, false);
      this.successNode.active = true;
      this.scheduleOnce(function () {
        e.levelUpCallback();
        e.judgeShowWinUI(1);
      }, 0.5);
      console.log("success");
    }
  };
  o.prototype.showTips = function () {
    var e = function () {
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
        o.load("prefab/ui/circle", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          t.x = window.game3.diffNode.x;
          t.y = window.game3.diffNode.y;
          cc.find("Canvas").addChild(t);
        });
      });
    };
    var o = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
    if (o > 0) {
      o--;
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", o + "");
      e();
      if (o <= 0) {
        this.adNode.active = true;
        this.hintNode.active = false;
      } else {
        this.hintNum.string = o + "";
      }
      this.tipsNode.getComponent(cc.Button).interactable = false;
    } else {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        e();
      }, function () {});
    }
  };
  r([s(cc.Node)], o.prototype, "layoutNode", undefined);
  r([s(cc.Node)], o.prototype, "successNode", undefined);
  r([s(cc.Node)], o.prototype, "failNode", undefined);
  r([s(cc.Label)], o.prototype, "titleLabel", undefined);
  r([s(cc.Node)], o.prototype, "btnNode", undefined);
  r([s(cc.Node)], o.prototype, "tipsNode", undefined);
  r([s(cc.Node)], o.prototype, "adNode", undefined);
  r([s(cc.Node)], o.prototype, "hintNode", undefined);
  r([s(cc.Label)], o.prototype, "hintNum", undefined);
  r([s(cc.Label)], o.prototype, "questionLabel", undefined);
  r([s(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([s(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([s(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([s(cc.Prefab)], o.prototype, "itemPrefab", undefined);
  return r([d], o);
}(a.default);
exports.default = u;