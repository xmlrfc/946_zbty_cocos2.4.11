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
    o.privatePolicyNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.privatePolicyNode.active = true;
  };
  o.prototype.start = function () {};
  o.prototype.agree = function () {
    cc.sys.localStorage.setItem("privatePolicy", "1");
    this.privatePolicyNode.active = false;
    if (window.miniPlatForm == "vivoApp") {
      window.fmJava.initSDK();
    }
  };
  o.prototype.reject = function () {
    var e = {};
    if (window.miniPlatForm == "oppoApp" || window.miniPlatForm == "vivoApp") {
      window.adUtil.toast("您需要同意才可以使用本应用");
    } else if (window.miniPlatForm == "qq") {
      qq.exitMiniProgram(e);
    } else {
      qg.exitApplication(e);
    }
  };
  o.prototype.showPrivatePolicyNode = function () {
    this.node.getChildByName("privatePolicyNode").active = true;
  };
  o.prototype.showCustomerPolicyNode = function () {
    this.node.getChildByName("customerPolicyNode").active = true;
  };
  o.prototype.closePrivatePolicyNode = function () {
    this.node.getChildByName("privatePolicyNode").active = false;
  };
  o.prototype.closeCustomerPolicyNode = function () {
    this.node.getChildByName("customerPolicyNode").active = false;
  };
  r([l(cc.Node)], o.prototype, "privatePolicyNode", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;