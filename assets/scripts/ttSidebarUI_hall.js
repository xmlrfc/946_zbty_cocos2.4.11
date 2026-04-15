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
    o.gameName = null;
    o.goNode = null;
    o.getNode = null;
    o.step2Label = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.step2Label.string += window.common_hall.getCommonObj("ttShareTag");
    this.gameName.string = window.common_hall.getCommonObj("ttShareTag");
  };
  o.prototype.start = function () {};
  o.prototype.showNode = function (e) {
    this[e + "Node"].active = true;
  };
  o.prototype.clickCancel = function () {
    this.node.destroy();
  };
  o.prototype.clickGo = function () {
    try {
      tt.navigateToScene({
        scene: "sidebar",
        success: function () {
          console.log("navigate to scene success");
        },
        fail: function (e) {
          console.log("navigate to scene fail: ", e);
          window.adUtil.toast("跳转失败");
        }
      });
    } catch (e) {}
    this.node.destroy();
  };
  o.prototype.clickGet = function () {
    var e = cc.sys.localStorage.getItem("ttSidebarDateString");
    var o = new Date().toLocaleDateString();
    if (e && e == o) {
      window.adUtil.toast("今天已经领取过奖励了");
    } else {
      cc.sys.localStorage.setItem("ttSidebarDateString", o);
      window.adUtil.toast("获得体力+1");
      window.powerControl.addPower(1);
    }
    this.node.destroy();
  };
  r([l(cc.Label)], o.prototype, "gameName", undefined);
  r([l(cc.Node)], o.prototype, "goNode", undefined);
  r([l(cc.Node)], o.prototype, "getNode", undefined);
  r([l(cc.Label)], o.prototype, "step2Label", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;