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
    o.anchor = null;
    o.rope = null;
    o.end = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    var e = this;
    this.schedule(function () {
      e.initRope();
    }, 0.03);
  };
  o.prototype.initRope = function () {
    var e = this.rope.getComponent(cc.Graphics);
    e.clear();
    e.moveTo(this.anchor.x, this.anchor.y);
    e.lineTo(this.end.x - this.node.x, this.end.y - this.node.y + this.end.height / 2);
    e.stroke();
  };
  r([l(cc.Node)], o.prototype, "anchor", undefined);
  r([l(cc.Node)], o.prototype, "rope", undefined);
  r([l(cc.Node)], o.prototype, "end", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;