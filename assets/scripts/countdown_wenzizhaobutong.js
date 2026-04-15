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
    o.leftTimelabel = null;
    o.decreaseTimePre = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.countdown = this;
  };
  o.prototype.start = function () {
    window.countdownTime = 92;
    this.decreaseTimesPerTime = 5;
    this.leftTimelabel.string = window.countdownTime + "";
    this.unschedule(this.decreaseTime);
    this.schedule(this.decreaseTime, 1);
  };
  o.prototype.decreaseTime = function () {
    window.countdownTime--;
    if (window.countdownTime < 0) {
      window.countdownTime = 0;
    }
    this.leftTimelabel.string = window.countdownTime + "";
    if (window.countdownTime <= 0) {
      this.unschedule(this.decreaseTime);
      this.loadCountdownFailUI();
    }
  };
  o.prototype.addTime = function (e) {
    window.countdownTime += e;
    if (window.countdownTime < 0) {
      window.countdownTime = 0;
    }
    this.leftTimelabel.string = window.countdownTime + "";
  };
  o.prototype.showDecreaseTimes = function () {
    var e = cc.instantiate(this.decreaseTimePre);
    e.getComponent(cc.Label).string = -1 * this.decreaseTimesPerTime + "";
    this.node.addChild(e);
    this.addTime(-1 * this.decreaseTimesPerTime);
  };
  o.prototype.loadCountdownFailUI = function () {
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
      o.load("prefab/ui/countdown/countdownFailUI", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 3000;
      });
    });
  };
  r([l(cc.Label)], o.prototype, "leftTimelabel", undefined);
  r([l(cc.Prefab)], o.prototype, "decreaseTimePre", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;