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
var a = require("./adBase_hall");
const { default: Banner } = require("./Banner");
var c = require("./levelMessage_hall");
var l = cc._decorator;
var d = l.ccclass;
l.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.btnShare = null;
    o.reviveNode = null;
    o.mask = null;
    o.script = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.gameover = this;
    this.btnShare = this.node.getChildByName("share");
    this.reviveNode = this.node.getChildByName("revive");
    this.mask = this.node.getChildByName("mask");
    if (cc.js.getClassByName("gameover_" + window.objectName_hall)) {
      this.script = this.node.addComponent("gameover_" + window.objectName_hall);
    }
  };
  o.prototype.start = function () {
    this.showGameoverAd();
  };
  o.prototype.nextLevel = function () {
    if (this.script && this.script.nextLevel) {
      this.script.nextLevel();
    } else if (c.getModelLength() == "endless" || window.currentLevel <= c.getModelLength()) {
      e.prototype.nextLevel.call(this);
    } else {
      this.back();
    }
  };
  o.prototype.restart = function () {
    if (this.script && this.script.restart) {
      this.script.restart();
    } else {
      window.adUtil.closeOppoCustomAd();
      cc.director.loadScene("game" + window.model + "_" + window.objectName_hall);
    }
  };
  return r([d], o);
}(a.default);
exports.default = s;