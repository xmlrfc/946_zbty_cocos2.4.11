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
var a = require("./loadWenzizhaobutong");
var c = require("./loadDrawLineCar");
var l = require("./loadShaonao");
var d = require("./loadShaonaoNew");
var s = require("./loadMigong");
var u = require("./loadXiujiao");
var h = cc._decorator;
var w = h.ccclass;
h.property;
var p = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.start = function () {};
  o.prototype.quit = function () {
    this.node.destroy();
  };
  o.prototype.wenzizhaobutong = function (e, o) {
    a.loadGame(o);
  };
  o.prototype.drawLineCar = function (e, o) {
    c.loadGame(o);
  };
  o.prototype.migong = function (e, o) {
    s.loadGame(o);
  };
  o.prototype.shaonao = function (e, o) {
    l.loadGame(o);
  };
  o.prototype.shaonaoNew = function (e, o) {
    d.loadGame(o);
  };
  o.prototype.xiujiao = function (e, o) {
    u.loadGame(o);
  };
  return r([w], o);
}(cc.Component);
exports.default = p;