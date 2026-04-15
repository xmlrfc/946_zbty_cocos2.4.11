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
    o.points = [];
    o.eachLineWidth = 20;
    o.dashed = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.line = this;
    this.dashedDraw = this.dashed.getComponent(cc.Graphics);
    this.draw = this.node.getComponent(cc.Graphics);
  };
  o.prototype.start = function () {};
  o.prototype.onTouchStart = function (e) {
    this.points = [];
    var o = e.getLocation();
    this.preWorldPoint = o;
    o = this.node.convertToNodeSpaceAR(o);
    this.prePoint = o;
    this.points.push(cc.v2(o.x, o.y));
    this.draw.clear();
    this.draw.moveTo(o.x, o.y);
  };
  o.prototype.onTouchMove = function (e) {
    var o = e.getLocation();
    var t = o;
    var n = (o = this.node.convertToNodeSpaceAR(o)).x - this.prePoint.x;
    var i = o.y - this.prePoint.y;
    if (Math.sqrt(n * n + i * i) >= this.eachLineWidth) {
      this.points.push(cc.v2(o.x, o.y));
      this.draw.lineTo(o.x, o.y);
      this.draw.stroke();
      this.prePoint = o;
      this.preWorldPoint = t;
      this.dashedDraw.clear();
    }
  };
  o.prototype.onTouchEnd = function () {
    this.dashedDraw.clear();
    window.model23HasDrawFlag = true;
  };
  r([l(cc.Node)], o.prototype, "dashed", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;