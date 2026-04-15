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
    o.level = null;
    o.spr = null;
    o.spr2 = null;
    o.light = null;
    o.afterShow = null;
    o.beforShow = null;
    o.mask = null;
    o.index = 0;
    o.frameTimer = 0;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.levelUpSc = this;
    this.mask.active = false;
    window.model22LevelUpFlag = true;
    window.game22.unschedule(window.game22.updateTime);
    window.model22Score = window.game22.score;
    window.model22Level = window.game22.level;
    window.model22LeftTime = window.game22.leftTime;
    this.schedule(this.updateCopy, 0.06);
    if (window.game22) {
      this.level.string = "第" + (window.game22.level + 1) + "级";
      this.afterShow.active = false;
    }
    this.showGameoverAd();
  };
  o.prototype.animatComplated = function () {
    this.afterShow.active = true;
  };
  o.prototype.updateCopy = function () {
    this.frameTimer += 0.06;
    if (this.frameTimer > 0.3) {
      this.frameTimer = 0;
      this.index += 1;
      if (this.index % 2 == 1) {
        this.spr2.node.active = true;
      } else {
        this.spr2.node.active = false;
      }
    }
    this.light.node.rotation += 4.8;
  };
  o.prototype.onclick_close = function () {
    cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
  };
  r([d(cc.Label)], o.prototype, "level", undefined);
  r([d(cc.Sprite)], o.prototype, "spr", undefined);
  r([d(cc.Sprite)], o.prototype, "spr2", undefined);
  r([d(cc.Sprite)], o.prototype, "light", undefined);
  r([d(cc.Node)], o.prototype, "afterShow", undefined);
  r([d(cc.Node)], o.prototype, "beforShow", undefined);
  r([d(cc.Node)], o.prototype, "mask", undefined);
  return r([l], o);
}(a.default);
exports.default = s;