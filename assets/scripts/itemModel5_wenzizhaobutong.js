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
  o.prototype.onLoad = function () {};
  o.prototype.start = function () {};
  o.prototype.onCollisionEnter = function (e, o) {
    if (e.tag == 999) {
      var t = window.game5.chosedArr.length;
      if (t > 0 && !this.checkSurrounding(this.node.index, window.game5.chosedArr[t - 1])) {
        return;
      }
      if (!window.game5.chosedArr.includes(o.node.index) && this.checkCanChoose(o.node.index, window.game5.leftArr)) {
        if (!window.randomColor) {
          if (window.game5.leftArr.length >= 20) {
            window.randomColor = window.game5.colorArr[Math.floor(20 * Math.random())];
          } else {
            window.randomColor = window.game5.colorArr[window.game5.leftArr.length];
          }
        }
        o.node.color = window.randomColor;
        window.game5.chosedArr.push(o.node.index);
        window.game5.chosedZiArr.push(o.node.getChildByName("zi").getComponent(cc.Label).string);
        window.game5.chosedNodeArr.push(o.node);
      }
    }
  };
  o.prototype.checkCanChoose = function (e, o) {
    for (var t = 0; t < o.length; t++) {
      if (o[t].includes(e)) {
        return true;
      }
    }
    return false;
  };
  o.prototype.checkSurrounding = function (e, o) {
    return e == o - window.game5.width || e == o + window.game5.width || o % window.game5.width != 0 && e == o - 1 || o % window.game5.width != window.game5.width - 1 && e == o + 1;
  };
  return r([c], o);
}(cc.Component);
exports.default = l;