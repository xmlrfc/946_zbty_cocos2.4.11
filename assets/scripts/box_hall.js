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
    o.closeNode = null;
    o.openNode = null;
    o.videoNode = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {};
  o.prototype.get = function () {
    if (!this.getFlag) {
      this.getFlag = true;
      this.getCb();
      this.closeNode.active = false;
      this.videoNode.active = false;
      this.openNode.active = true;
      window.boxUI.showOnce();
    }
  };
  o.prototype.setGetCb = function (e) {
    this.getCb = e;
  };
  o.prototype.videoGet = function () {
    window.vivoVideoAd_hall.initRewardedAd(window.boxUI.allGet.bind(window.boxUI), function () {});
  };
  o.prototype.showVideoNode = function () {
    if (this.closeNode.active) {
      this.closeNode.active = false;
      this.openNode.active = false;
      this.videoNode.active = true;
    }
  };
  r([l(cc.Node)], o.prototype, "closeNode", undefined);
  r([l(cc.Node)], o.prototype, "openNode", undefined);
  r([l(cc.Node)], o.prototype, "videoNode", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;