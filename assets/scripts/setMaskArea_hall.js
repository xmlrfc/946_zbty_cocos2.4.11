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
    o.pointNode = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    if (this.pointNode) {
      this.setMaskArea();
    }
  };
  o.prototype.setMaskArea = function () {
    var e = this.node.getComponent(cc.Mask)._graphics;
    var o = this.pointNode.getComponent(cc.PolygonCollider).points;
    e.clear();
    for (var t = 0; t < o.length; t++) {
      var n = o[t];
      if (t === 0) {
        e.moveTo(n.x, n.y);
      } else {
        e.lineTo(n.x, n.y);
      }
    }
    e.close();
    e.stroke();
    e.fill();
  };
  r([l(cc.Node)], o.prototype, "pointNode", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;