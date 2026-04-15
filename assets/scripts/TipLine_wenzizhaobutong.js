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
    this.draw = this.node.getComponent(cc.Graphics);
  };
  Object.defineProperty(o.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (e) {
      this._points = e;
      this.draw.clear();
      this.draw.moveTo(e[0].x, e[0].y);
      for (var o = 1; o < e.length; o++) {
        for (var t = e[o - 1], n = e[o], i = n.sub(t), r = i.mag(), a = i.normalize().mul(10), c = t.clone(), l = true; r > 10; r -= 10) {
          if (l) {
            this.draw.moveTo(c.x, c.y);
            c.addSelf(a);
            this.draw.lineTo(c.x, c.y);
            this.draw.stroke();
          } else {
            c.addSelf(a);
          }
          l = !l;
        }
        if (l) {
          this.draw.moveTo(c.x, c.y);
          this.draw.lineTo(n.x, n.y);
          this.draw.stroke();
        }
      }
      this.draw.stroke();
    },
    enumerable: false,
    configurable: true
  });
  return r([c], o);
}(cc.Component);
exports.default = l;