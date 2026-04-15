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
var a = cc._decorator;
var c = a.ccclass;
var l = a.property;
var d = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.line = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.blackBoard = this;
  };
  o.prototype.start = function () {
    this.startTouch();
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
  };
  o.prototype.onTouchStart = function (e) {
    var o = cc.instantiate(this.line);
    cc.find("Canvas").addChild(o);
    window.game.currentLine = o;
    window.game.currentLine.getComponent("line_wenzizhaobutong").onTouchStart(e);
  };
  o.prototype.onTouchMove = function (e) {
    window.game.currentLine.getComponent("line_wenzizhaobutong").onTouchMove(e);
  };
  o.prototype.onTouchEnd = function (e) {
    window.game.currentLine.getComponent("line_wenzizhaobutong").onTouchEnd(e);
    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  };
  o.prototype.startTouch = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  };
  r([l(cc.Prefab)], o.prototype, "line", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;