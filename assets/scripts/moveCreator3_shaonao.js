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
a.property;
var l = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.node.on("touchstart", this.onTouchStart, this);
    this.node.on("touchmove", this.onTouchMove, this);
    this.node.on("touchend", this.onTouchEnd, this);
  };
  o.prototype.start = function () {};
  o.prototype.onDestroy = function () {};
  o.prototype.onTouchStart = function () {};
  o.prototype.onTouchMove = function (e) {
    var o = e.getDelta();
    this.node.x += o.x;
    this.node.y += o.y;
  };
  o.prototype.onTouchEnd = function () {
    var e = window.creator.perWidth / 2;
    if (this.node.x < -e - (window.creator.width - 1) * window.creator.perWidth / 2 - 375 || this.node.x > e + (window.creator.width - 1) * window.creator.perWidth / 2 - 375 || this.node.y < -e - (window.creator.height - 1) * window.creator.perWidth / 2 || this.node.y > e + (window.creator.height - 1) * window.creator.perWidth / 2) {
      this.node.destroy();
    } else {
      var o = 0;
      var t = -1;
      var n = this.node.x;
      var i = this.node.y;
      var r = 0;
      for (var a in window.creator.positions) {
        var c = Math.pow(n - window.creator.positions[r].x, 2) + Math.pow(i - window.creator.positions[r].y, 2);
        if (-1 == t || c < t) {
          t = c;
          o = r;
        }
        r++;
      }
      this.node.x = window.creator.positions[o].x;
      this.node.y = window.creator.positions[o].y;
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;