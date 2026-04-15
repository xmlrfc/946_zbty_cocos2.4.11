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
var a = this && this.__awaiter || function (e, o, t, n) {
  return new (t || (t = Promise))(function (i, r) {
    function a(e) {
      try {
        l(n.next(e));
      } catch (o) {
        r(o);
      }
    }
    function c(e) {
      try {
        l(n.throw(e));
      } catch (o) {
        r(o);
      }
    }
    function l(e) {
      var o;
      if (e.done) {
        i(e.value);
      } else {
        (o = e.value, o instanceof t ? o : new t(function (e) {
          e(o);
        })).then(a, c);
      }
    }
    l((n = n.apply(e, o || [])).next());
  });
};
var c = this && this.__generator || function (e, o) {
  var t;
  var n;
  var i;
  var r;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  r = {
    next: c(0),
    throw: c(1),
    return: c(2)
  };
  if (typeof Symbol == "function") {
    r[Symbol.iterator] = function () {
      return this;
    };
  }
  return r;
  function c(e) {
    return function (o) {
      return l([e, o]);
    };
  }
  function l(r) {
    if (t) {
      throw new TypeError("Generator is already executing.");
    }
    for (; a;) {
      try {
        t = 1;
        if (n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) {
          return i;
        }
        n = 0;
        if (i) {
          r = [2 & r[0], i.value];
        }
        switch (r[0]) {
          case 0:
          case 1:
            i = r;
            break;
          case 4:
            a.label++;
            return {
              value: r[1],
              done: false
            };
          case 5:
            a.label++;
            n = r[1];
            r = [0];
            continue;
          case 7:
            r = a.ops.pop();
            a.trys.pop();
            continue;
          default:
            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (r[0] === 6 || r[0] === 2)) {
              a = 0;
              continue;
            }
            if (r[0] === 3 && (!i || r[1] > i[0] && r[1] < i[3])) {
              a.label = r[1];
              break;
            }
            if (r[0] === 6 && a.label < i[1]) {
              a.label = i[1];
              i = r;
              break;
            }
            if (i && a.label < i[2]) {
              a.label = i[2];
              a.ops.push(r);
              break;
            }
            if (i[2]) {
              a.ops.pop();
            }
            a.trys.pop();
            continue;
        }
        r = o.call(e, a);
      } catch (c) {
        r = [6, c];
        n = 0;
      } finally {
        t = i = 0;
      }
    }
    if (5 & r[0]) {
      throw r[1];
    }
    return {
      value: r[0] ? r[1] : undefined,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var l = cc._decorator;
var d = l.ccclass;
var s = l.property;
var u = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.signNode = null;
    o.energyPre = null;
    o.homeAdPre = null;
    o.mask = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.home = this;
    this.mask.active = false;
    if (window.oppoAuthorFlag || window.miniPlatForm != "oppo") {
      if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks") {
        cc.find("Canvas/privatePolicy").active = false;
        window.adUtil.showBannerAd();
      } else {
        if (!cc.sys.localStorage.getItem("privatePolicy")) {
          this.loadPrivatePolicy();
        }
        if (window.miniPlatForm == "oppo") {
          window.adUtil.showBannerAd();
        } else {
          window.adUtil.closeBannerAd();
        }
      }
    } else {
      cc.assetManager.loadBundle("resources", function (e, o) {
        o.load("prefab/loadingAuthor", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
          t.zIndex = 32000;
          window.oppoAuthorFlag = true;
        });
      });
    }
    var e = cc.find("Canvas");
    var o = cc.instantiate(this.energyPre);
    e.addChild(o);
    window.adUtil.login();
    window.adUtil.showAddShortcut();
    window.adUtil.addToApps();
    if (window.miniPlatForm == "qq") {
      try {
        qq.showShareMenu({});
      } catch (t) {}
    } else if (window.miniPlatForm == "vivo") {
      this.signNode.active = true;
    }
  };
  o.prototype.start = function () {};
  o.prototype.btn1Click = function () {
    window.model = 1;
    this.btnClickCommon();
  };
  o.prototype.btn2Click = function () {
    window.model = 2;
    this.btnClickCommon();
  };
  o.prototype.btn3Click = function () {
    window.model = 3;
    this.btnClickCommon();
  };
  o.prototype.btn4Click = function () {
    window.model = 4;
    this.btnClickCommon();
  };
  o.prototype.btn5Click = function () {
    window.model = 5;
    this.btnClickCommon();
  };
  o.prototype.btn6Click = function () {
    window.model = 6;
    window.levelRes = {};
    window.levelRes.length = 44;
    this.btnClickCommon();
  };
  o.prototype.btn7Click = function () {
    window.model = 7;
    window.levelRes = {};
    window.levelRes.length = 20;
    this.btnClickCommon();
  };
  o.prototype.btn12Click = function () {
    window.model = 12;
    this.initModel12();
  };
  o.prototype.btnClickCommon = function () {
    if (cc.find("Canvas").getChildByName("homeAdNode") && cc.find("Canvas").getChildByName("homeAdNode").getChildByName("homeAd") && cc.find("Canvas").getChildByName("homeAdNode").getChildByName("homeAd").active) {
      window.vivoOriginControlThis.clickBottom();
    } else {
      window.powerControl.decreasePower(function () {
        window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.model + "_shaonao") || 1);
        window.currentLevel = window.maxLevel;
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_shaonao", "shaonao") + "_shaonao");
      });
    }
  };
  o.prototype.btnClick = function (e, o) {
    if (o == "1") {
      this.btn1Click();
    } else if (o == "2") {
      this.btn2Click();
    } else if (o == "3") {
      this.btn3Click();
    } else if (o == "4") {
      this.btn4Click();
    }
  };
  o.prototype.loadPrivatePolicy = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/privatePolicy" + window.adUtil.useHallData("company"), cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.loadCustomAd = function () {};
  o.prototype.initModel12 = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      var n;
      var i;
      var r;
      var a;
      var l;
      var d;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            return [4, window.adUtil.loadJsonByBundleSync("resources_12_shaonao", "json/json12/1-1")];
          case 1:
            e = c.sent();
            this.json = e.json;
            o = 0;
            window.model12Arr = [];
            window.model12Arr1 = [];
            t = 0;
            c.label = 2;
          case 2:
            if (t < this.json.length) {
              n = this.json[t].model;
              i = 0;
              return [4, window.adUtil.loadDirByBundleSync("resources_" + n + "_shaonao", "json/json" + n)];
            } else {
              return [3, 5];
            }
          case 3:
            r = c.sent();
            i = r.length;
            window.model12Arr1.push(i);
            o += i;
            c.label = 4;
          case 4:
            t++;
            return [3, 2];
          case 5:
            for (; window.model12Arr.length < o;) {
              for (a = 0; a < this.json.length; a++) {
                for (l = 0; l < this.json[a].length; l++) {
                  if (window.model12Arr1[a] > 0) {
                    window.model12Arr.push(this.json[a].model);
                    window.model12Arr1[a]--;
                  }
                }
              }
            }
            console.log(window.model12Arr);
            if ((d = Number(cc.sys.localStorage.getItem("level12_shaonao") || 1)) > window.model12Arr.length) {
              d = window.model12Arr.length;
            }
            this.btnClick(undefined, window.model12Arr[d - 1] + "");
            return [2];
        }
      });
    });
  };
  o.prototype.calculateLevel = function () {
    var e = Number(cc.sys.localStorage.getItem("level12_shaonao") || 1);
    e++;
    cc.sys.localStorage.setItem("level12_shaonao", e + "");
  };
  o.prototype.isModelNowInModel12 = function () {
    if (!window.model12Arr) {
      return false;
    }
    for (var e = 0; e < window.model12Arr.length; e++) {
      if (window.model == window.model12Arr[e]) {
        return true;
      }
    }
    return false;
  };
  r([s(cc.Node)], o.prototype, "signNode", undefined);
  r([s(cc.Prefab)], o.prototype, "energyPre", undefined);
  r([s(cc.Prefab)], o.prototype, "homeAdPre", undefined);
  r([s(cc.Node)], o.prototype, "mask", undefined);
  return r([d], o);
}(cc.Component);
exports.default = u;