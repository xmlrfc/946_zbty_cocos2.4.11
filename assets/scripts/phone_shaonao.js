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
var a = require("./Electrical_shaonao");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.lowNode = null;
    o.fullNode = null;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    this.schedule(this.check, 0.5);
    e.prototype.start.call(this);
  };
  o.prototype.check = function () {
    if (!window.game.loadWin) {
      if (!this.fullFlag) {
        this.low();
      }
      this.fullFlag = false;
      this.arrivedArr = [];
      this.checkOnce(this.node, null);
    }
  };
  o.prototype.checkOnce = function (e, o) {
    if (e.name != "bgSockets0") {
      for (var t = false, n = 0; n < this.arrivedArr.length; n++) {
        if (e._id == this.arrivedArr[n]) {
          t = true;
          break;
        }
      }
      if (!t) {
        this.arrivedArr.push(e._id);
        var i = (e.getComponent("phone_shaonao") || e.getComponent("bgSockets_shaonao")).end.connected;
        if (i && i.bgSockets) {
          this.checkOnce(i.bgSockets, i._id);
        }
        var r = e.socketsNodeArr;
        if (r) {
          for (n = 0; n < r.length; n++) {
            if (o != r[n]._id && r[n].phone && r[n].phone.name.indexOf("phone") < 0) {
              this.checkOnce(r[n].phone, null);
            }
          }
        }
      }
    } else {
      this.full();
    }
  };
  o.prototype.full = function () {
    this.fullFlag = true;
    if (this.lowNode) {
      this.lowNode.active = false;
    }
    if (this.fullNode) {
      this.fullNode.active = true;
    }
    window.game.check();
  };
  o.prototype.low = function () {
    if (this.lowNode) {
      this.lowNode.active = true;
    }
    if (this.fullNode) {
      this.fullNode.active = false;
    }
  };
  r([d(cc.Node)], o.prototype, "lowNode", undefined);
  r([d(cc.Node)], o.prototype, "fullNode", undefined);
  return r([l], o);
}(a.default);
exports.default = s;