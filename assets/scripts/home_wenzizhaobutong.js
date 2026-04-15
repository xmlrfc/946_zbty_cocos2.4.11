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
    if (!(window.miniPlatForm != "vivo" && window.miniPlatForm != "vivoApp")) {
      this.signNode.active = true;
    }
    if (window.oppoAuthorFlag || window.miniPlatForm != "oppo") {
      if (window.miniPlatForm == "oppoApp") {
        cc.assetManager.loadBundle("resources", function (e, o) {
          o.load("prefab/ui/superLeisureGame", cc.Prefab, function (e, o) {
            var t = cc.instantiate(o);
            cc.find("Canvas").addChild(t);
            t.zIndex = 32000;
          });
        });
      } else if (window.miniPlatForm == "tt" || window.miniPlatForm == "ks" || window.miniPlatForm == "yoomi") {
        cc.find("Canvas/privatePolicy").active = false;
        window.adUtil.showBannerAd();
      } else {
        this.judgeLoadPrivatePolicy();
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
    var e = cc.instantiate(this.energyPre);
    cc.find("Canvas").addChild(e);
    window.adUtil.login();
    window.adUtil.showAddShortcut();
    window.adUtil.addToApps();
    if (window.miniPlatForm == "qq") {
      try {
        qq.showShareMenu({});
      } catch (o) {}
    }
  };
  o.prototype.start = function () {};
  o.prototype.judgeLoadPrivatePolicy = function () {
    if (!cc.sys.localStorage.getItem("privatePolicy")) {
      this.loadPrivatePolicy();
    }
    if (window.miniPlatForm == "oppo") {
      window.adUtil.showBannerAd();
    } else {
      window.adUtil.closeBannerAd();
    }
  };
  o.prototype.showFollowMeUI = function () {
    if (window.adUtil.canShowFollowMe()) {
      if (!cc.sys.localStorage.getItem("popFollowMeUI_wenzizhaobutong")) {
        cc.assetManager.loadBundle("resources", function (e, o) {
          o.load("prefab/ui/followMeUI", cc.Prefab, function (e, o) {
            var t = cc.instantiate(o);
            cc.find("Canvas").addChild(t);
            cc.sys.localStorage.setItem("popFollowMeUI_wenzizhaobutong", "1");
          });
        });
      }
    }
  };
  o.prototype.btnModel1Click = function () {
    this.model1Node.active = true;
  };
  o.prototype.btnModel2Click = function () {
    this.model2Node.active = true;
  };
  o.prototype.btnClick = function (e, o) {
    if (cc.find("Canvas").getChildByName("homeAdNode") && window.miniPlatForm == "oppo" && cc.find("Canvas").getChildByName("homeAdNode").getChildByName("homeAd") && cc.find("Canvas").getChildByName("homeAdNode").getChildByName("homeAd").active) {
      window.vivoOriginControlThis.clickBottom();
    } else if (o == "1") {
      this.btn1Click();
    } else if (o == "2") {
      this.btn2Click();
    } else if (o == "3") {
      this.btn3Click();
    } else if (o == "4") {
      this.btn4Click();
    } else if (o == "5") {
      this.btn5Click();
    } else if (o == "6") {
      this.btn6Click();
    } else if (o == "7") {
      this.btn7Click();
    } else if (o == "8") {
      this.btn8Click();
    } else if (o == "9") {
      this.btn9Click();
    } else if (o == "10") {
      this.btn10Click();
    } else if (o == "11") {
      this.btn11Click();
    } else if (o == "12") {
      this.btn12Click();
    } else if (o == "13") {
      this.btn13Click();
    } else if (o == "14") {
      this.btn14Click();
    } else if (o == "15") {
      this.btn15Click();
    } else if (o == "16") {
      this.btn16Click();
    } else if (o == "17") {
      this.btn17Click();
    } else if (o == "18") {
      this.btn18Click();
    } else if (o == "19") {
      this.btn19Click();
    } else if (o == "20") {
      this.btn20Click();
    } else if (o == "21") {
      this.btn21Click();
    } else if (o == "22") {
      this.btn22Click();
    } else if (o == "23") {
      this.btn23Click();
    }
  };
  o.prototype.loadSceneCommon = function () {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + "_wenzizhaobutong") || 1);
      if (window.currentLevel > window.levelMaxModel) {
        window.currentLevel = window.levelMaxModel;
      }
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn1Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 1;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn2Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 2;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn3Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 3;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn4Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 4;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn5Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 5;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn6Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 6;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn7Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 7;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/naoli")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            window.home.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn8Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 8;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn9Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 9;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn10Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 10;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn11Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 11;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            window.home.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn12Click = function () {
    window.model = 12;
    window.home.initModel12();
  };
  o.prototype.btn13Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 13;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn14Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 14;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn15Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 15;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn16Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 16;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.data.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn17Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 17;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/naoli")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn18Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 18;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn19Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 19;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            this.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn20Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 20;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            window.home.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn21Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 21;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            window.home.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.btn22Click = function () {
    window.powerControl.decreasePower(function () {
      window.model = 22;
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
    });
  };
  o.prototype.btn23Click = function () {
    return a(this, undefined, undefined, function () {
      var e;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            window.model = 23;
            e = window;
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
          case 1:
            e.levelResModel = o.sent();
            window.levelMaxModel = window.levelResModel.json.length;
            window.home.loadSceneCommon();
            return [2];
        }
      });
    });
  };
  o.prototype.loadPrivatePolicy = function () {
    cc.assetManager.loadBundle("resources", function (e, o) {
      o.load("prefab/privatePolicy" + window.adUtil.useHallData("company"), cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.zIndex = 1;
      });
    });
  };
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
            return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json12/1-1")];
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
              if (n != 6 && n != 10 && n != 11 && n != 13 && n != 14 && n != 15 && n != 16 && n != 21) {
                return [3, 4];
              } else {
                return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + n + "/level")];
              }
            } else {
              return [3, 10];
            }
          case 3:
            r = c.sent();
            i = r.json.length;
            return [3, 8];
          case 4:
            if (n != 9 && n != 18 && n != 19 && n != 20) {
              return [3, 6];
            } else {
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + n + "/jielong")];
            }
          case 5:
            r = c.sent();
            i = r.json.length;
            return [3, 8];
          case 6:
            if (n != 7 && n != 17) {
              return [3, 8];
            } else {
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + n + "/naoli")];
            }
          case 7:
            r = c.sent();
            i = r.json.length;
            c.label = 8;
          case 8:
            window.model12Arr1.push(i);
            o += i;
            c.label = 9;
          case 9:
            t++;
            return [3, 2];
          case 10:
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
            if ((d = Number(cc.sys.localStorage.getItem("level12_wenzizhaobutong") || 1)) > window.model12Arr.length) {
              d = window.model12Arr.length;
            }
            this.btnClick(undefined, window.model12Arr[d - 1] + "");
            return [2];
        }
      });
    });
  };
  o.prototype.calculateLevel = function () {
    var e = Number(cc.sys.localStorage.getItem("level12_wenzizhaobutong") || 1);
    e++;
    cc.sys.localStorage.setItem("level12_wenzizhaobutong", e + "");
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