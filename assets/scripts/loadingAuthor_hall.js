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
    o.loadingBar = null;
    o.showProgress = null;
    o.count = 0;
    o.loadComplete = false;
    o.progressComplete = false;
    o.bundlesNameArr = ["resources_energySkin_number5", "resources_boxUISkin", "resources_wenzizhaobutong", "resources_2_1_wenzizhaobutong", "resources_2_2_wenzizhaobutong", "resources_2_3_wenzizhaobutong", "resources_5_shaonao", "resources_6_shaonao", "resources_shaonao", "resources_6_level1_shaonao", "resources_6_level2_shaonao", "resources_6_level3_shaonao"];
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    for (var e = this, o = function () {
        e.node.destroy();
        if (!cc.sys.localStorage.getItem("privatePolicy")) {
          if (window.homeHall) {
            window.homeHall.loadPrivatePolicy();
          } else {
            window.home.loadPrivatePolicy();
          }
        }
        window.adUtil.showBannerAd();
        if (!(window.miniPlatForm != "huawei" || window.loginSuccessFlag)) {
          cc.assetManager.loadBundle("resources", function (e, o) {
            o.load("prefab/loginHuawei", cc.Prefab, function (e, o) {
              var t = cc.instantiate(o);
              cc.find("Canvas").addChild(t);
              t.zIndex = 32000;
              window.oppoAuthorFlag = true;
            });
          });
        }
      }, t = 0; t < this.bundlesNameArr.length; t++) {
      var n = this.bundlesNameArr[t];
      cc.assetManager.loadBundle(n, function () {
        e.count++;
        if (e.count == e.bundlesNameArr.length) {
          if (e.progressComplete) {
            o();
          } else {
            e.loadComplete = true;
          }
        }
      });
    }
    cc.tween(this.loadingBar).to(3, {
      progress: 1
    }).call(function () {
      if (e.loadComplete) {
        o();
      } else {
        e.progressComplete = true;
      }
    }).start();
  };
  r([l(cc.ProgressBar)], o.prototype, "loadingBar", undefined);
  r([l(cc.Label)], o.prototype, "showProgress", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;