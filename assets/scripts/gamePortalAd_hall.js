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
    window.gamePortalAd = this;
  };
  o.prototype.start = function () {};
  o.prototype.showGamePortalAd = function () {
    try {
      if (qg.getSystemInfoSync().platformVersionCode >= 1076) {
        var e = qg.createGamePortalAd({
          adUnitId: "748905"
        });
      } else {
        console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API");
      }
      e.onLoad(function () {
        console.log("互推盒子九宫格广告加载成功");
        e.show();
      });
      e.onError(function (e) {
        window.adUtil.toast("互推盒子九宫格广告加载失败,请重试");
        console.log(e);
      });
      e.load().then(function () {
        console.log("load success");
      }).catch(function (e) {
        console.log("load fail with:" + e.errCode + "," + e.errMsg);
      });
    } catch (o) {
      window.adUtil.toast("盒子九宫格广告加载失败,请重试");
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;