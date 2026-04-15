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
    window.model1PreArr = ["bgSockets0", "bgSockets1", "bgSockets2", "bgSockets3", "fan", "paper", "phone1", "phone1-1", "phone1-2", "phone1-3", "phone1-4", "phone1-5", "phone2", "phone2-1", "phone2-2", "phone2-3", "phone2-4", "phone2-5", "phone3", "phone3-1", "phone3-2", "phone3-3", "phone3-4", "phone3-5", "phone4", "phone4-1", "phone4-2", "phone4-3", "phone4-4", "phone4-5", "phone5", "phone5-1", "phone5-2", "phone5-3", "phone5-4", "phone5-5", "sockets1", "sockets1-1"];
    window.model3PreArr = ["boxCanBePushed0", "boxCanBePushed1", "boxFloor", "boxHole0", "boxHole1", "boxPush0", "boxPush1", "boxPush2", "boxPush3", "boxWall"];
    window.model4PreArr = ["bgMoveScrew", "moveScrew1", "screwHole1", "screwHole2", "screwHole3"];
  };
  o.prototype.start = function () {};
  return r([c], o);
}(cc.Component);
exports.default = l;