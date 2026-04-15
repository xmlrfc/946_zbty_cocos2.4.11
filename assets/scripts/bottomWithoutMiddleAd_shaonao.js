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
    o.img = null;
    o.originAdImg = null;
    o.cancel = null;
    o.adLabel = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    var e = cc.view.getFrameSize();
    var o = 2160 * e.width / e.height;
    var t = o / 1080;
    this.img.width = o;
    this.img.height = 607 * o / 1080;
    this.originAdImg.width = o;
    this.originAdImg.height = 607 * o / 1080;
    this.cancel.width = 30 * t;
    this.cancel.height = 30 * t;
    this.cancel.getComponent(cc.Widget).top = 10 * t;
    this.cancel.getComponent(cc.Widget).right = 20 * t;
    this.adLabel.width = 100 * t;
    this.adLabel.height = 63 * t;
    this.adLabel.getComponent(cc.Label).fontSize = 50 * t;
    this.adLabel.getComponent(cc.Label).lineHeight = 50 * t;
    this.adLabel.getComponent(cc.Widget).top = 10 * t;
    this.adLabel.getComponent(cc.Widget).left = 10 * t;
  };
  o.prototype.start = function () {
    window.vivoOriginAdThis.initRewardedAd();
  };
  r([l(cc.Node)], o.prototype, "img", undefined);
  r([l(cc.Node)], o.prototype, "originAdImg", undefined);
  r([l(cc.Node)], o.prototype, "cancel", undefined);
  r([l(cc.Node)], o.prototype, "adLabel", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;