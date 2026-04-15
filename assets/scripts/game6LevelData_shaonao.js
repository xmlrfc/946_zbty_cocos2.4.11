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
    o.dialogueArr = [];
    o.quotationArr = [];
    o.basePrice = 0;
    o.circleIndex = 0;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game6LevelData = this;
    this.step = 0;
  };
  o.prototype.start = function () {};
  o.prototype.getDialogue = function () {
    return this.dialogueArr[this.step];
  };
  o.prototype.getQuotation = function () {
    return this.quotationArr[this.step];
  };
  o.prototype.getDecreaseQuotation = function () {
    return this.quotationArr[this.step - 1] - this.quotationArr[this.step];
  };
  o.prototype.nextStep = function () {
    this.step++;
  };
  r([l([String])], o.prototype, "dialogueArr", undefined);
  r([l([Number])], o.prototype, "quotationArr", undefined);
  r([l(Number)], o.prototype, "basePrice", undefined);
  r([l(Number)], o.prototype, "circleIndex", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;