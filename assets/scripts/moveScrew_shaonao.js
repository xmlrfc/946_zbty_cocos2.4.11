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
var a = require("./moveBase_shaonao");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.offsetY = 0;
    o.endInto = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {};
  o.prototype.onTouchStart = function () {
    if (!this.notMoveFlag) {
      if (window.game) {
        window.game.loadWin;
      }
    }
  };
  o.prototype.onTouchMove = function (o) {
    if (!this.notMoveFlag) {
      e.prototype.onTouchMove.call(this, o);
    }
  };
  o.prototype.onTouchEnd = function () {
    if (!(this.notMoveFlag || window.game && window.game.loadWin)) {
      for (var e = this.endInto.x + this.node.x, o = this.endInto.y + this.node.y, t = cc.find("Canvas/level").children, n = 0; n < t.length; n++) {
        var i = t[n];
        if (!(i.name.indexOf("screwHole") < 0)) {
          for (var r = i.x, a = i.y, c = i.getComponent("screwHole_shaonao"), l = 0; l < c.offsetArr.length; l++) {
            var d = c.offsetArr[l];
            if (Math.abs(e - (r + d.x)) <= 30 && Math.abs(o - (a + d.y)) <= 30 && !i.getComponent("screwHole_shaonao").insertFlagArr[l]) {
              this.node.x = r + d.x;
              this.node.y = a + d.y;
              i.getComponent("screwHole_shaonao").insertFlagArr[l] = true;
              this.node.zIndex = 2;
              this.notMoveFlag = true;
              window.adUtil.playMusicEffect(window.game.succClip, false);
            }
          }
        }
      }
    }
  };
  r([d(Number)], o.prototype, "offsetY", undefined);
  r([d(cc.Node)], o.prototype, "endInto", undefined);
  return r([l], o);
}(a.default);
exports.default = s;