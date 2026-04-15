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
    window.rankThis = this;
  };
  o.prototype.start = function () {};
  o.prototype.clickRank = function () {
    if (window.miniPlatForm == "tt") {
      try {
        tt.login({
          force: true,
          success: function () {
            window.rankThis.getImRankList();
          },
          fail: function () {
            console.log("login 调用失败");
          }
        });
      } catch (e) {}
    }
  };
  o.prototype.getImRankList = function () {
    if (window.miniPlatForm == "tt") {
      try {
        tt.getImRankList({
          relationType: "default",
          dataType: 0,
          rankType: "all",
          suffix: "米",
          rankTitle: "排行榜",
          zoneId: "releasedefault",
          success: function (e) {
            console.log("getImRankData success res: " + e);
          },
          fail: function (e) {
            console.log("getImRankData fail res: " + e.errMsg);
          }
        });
      } catch (e) {}
    }
  };
  o.prototype.setImRankData = function () {
    if (window.miniPlatForm == "tt") {
      try {
        var e = cc.sys.localStorage.getItem(window.adUtil.useHallData("rankLocalStorageKey")) || Number(cc.sys.localStorage.getItem("progressMax_" + window.objectName_hall) || 0);
        if (!e) {
          return;
        }
        if (e <= Number(window.adUtil.useHallData("rankLocalStorageKey") + "_rank" || 0)) {
          return;
        }
        var o = e + "";
        tt.setImRankData({
          dataType: 0,
          value: o,
          priority: 0,
          extra: "extra",
          zoneId: "releasedefault",
          success: function (e) {
            console.log("setImRankData success res: " + e);
            cc.sys.localStorage.setItem(window.adUtil.useHallData("rankLocalStorageKey") + "_rank", o);
          },
          fail: function (e) {
            console.log("setImRankData fail res: " + e.errMsg);
          }
        });
      } catch (t) {}
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;