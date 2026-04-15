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
var l = require("./adBase_shaonao");
var d = cc._decorator;
var s = d.ccclass;
var u = d.property;
var h = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.succClip = null;
    o.level = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    this.widthMax = 64;
    window.adUtilHall.loadEnergyPre(0, 590);
  };
  o.prototype.start = function () {
    this.loadConfig();
    this.showGameAd();
    this.scheduleOnce(this.loadRawardedStartAd, 1);
  };
  o.prototype.loadConfig = function () {
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
      var s;
      var u;
      var h;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            e = window;
            return [4, window.adUtil.loadDirByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model)];
          case 1:
            e.levelRes = c.sent();
            if (window.currentLevel > window.levelRes.length) {
              window.currentLevel = window.levelRes.length;
            }
            if (window.creator) {
              return [3, 3];
            } else {
              return [4, window.adUtil.loadJsonByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model + "/1-" + window.currentLevel)];
            }
          case 2:
            o = c.sent();
            window.json = o.json;
            return [3, 4];
          case 3:
            cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
              o.load("prefab/ui/backCreator", cc.Prefab, function (e, o) {
                var t = cc.instantiate(o);
                cc.find("Canvas").addChild(t);
              });
            });
            window.json = window.creatorArr;
            c.label = 4;
          case 4:
            this.width = window.json.size.width;
            this.height = window.json.size.height;
            t = this.width > this.height ? this.width : this.height;
            this.perWidth = Math.floor(622 / t);
            if (this.perWidth > this.widthMax) {
              this.perWidth = this.widthMax;
            }
            this.level.width = this.perWidth * this.width;
            this.level.height = this.perWidth * this.height;
            this.boxArr = [];
            n = [];
            for (i in window.json) {
              n.push(i);
            }
            r = 0;
            c.label = 5;
          case 5:
            if (r < n.length) {
              if ((a = n[r]) == "size") {
                return [3, 7];
              } else {
                l = window.adUtil.useHallData("roleSkin_model3_shaonao", "shaonao") ? window.adUtil.useHallData("roleSkin_model3_shaonao", "shaonao") : "skinOriginal";
                d = "prefab/creator/game" + window.model + "/" + l + "/" + a;
                return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", d)];
              }
            } else {
              return [3, 8];
            }
          case 6:
            s = c.sent();
            u = 0;
            for (; u < window.json[a].length; u++) {
              (h = cc.instantiate(s)).x = window.json[a][u].x;
              h.y = window.json[a][u].y;
              h.rotation = window.json[a][u].rotation;
              h.scale = window.json[a][u].scale;
              h.scaleX = window.json[a][u].scaleX;
              h.scaleY = window.json[a][u].scaleY;
              cc.find("Canvas").getChildByName("level").addChild(h);
              if (a.indexOf("boxPush") >= 0) {
                h.addComponent("boxPush_shaonao").setDirection(h.name.replace("boxPush", ""));
                h.zIndex = 1;
                this.boxArr.push(h);
              } else if (a.indexOf("boxCanBePushed") >= 0) {
                h.zIndex = 1;
                this.boxArr.push(h);
              }
            }
            c.label = 7;
          case 7:
            r++;
            return [3, 5];
          case 8:
            this.schedule(this.check, 0.1);
            return [2];
        }
      });
    });
  };
  o.prototype.check = function () {
    if (!window.game.loadWin) {
      for (var e = cc.find("Canvas").getChildByName("level").children, o = true, t = 0; t < e.length; t++) {
        if (!(e[t].name.indexOf("boxHole") < 0)) {
          for (var n = e[t].name.replace("boxHole", ""), i = false, r = 0; r < e.length; r++) {
            if (e[r].name == "boxCanBePushed" + n && e[r].x == e[t].x && e[r].y == e[t].y) {
              i = true;
              break;
            }
          }
          if (!i) {
            o = i;
            break;
          }
        }
      }
      if (o) {
        this.win();
      }
    }
  };
  o.prototype.win = function () {
    window.adUtil.playMusicEffect(this.succClip, false);
    window.game.loadWin = true;
    window.currentLevel += 1;
    if (window.currentLevel > window.maxLevel) {
      cc.sys.localStorage.setItem("level" + window.model + "_shaonao", window.currentLevel + "");
      window.maxLevel = window.currentLevel;
      if (window.home && window.home.isModelNowInModel12()) {
        window.home.calculateLevel();
      }
    }
    this.scheduleOnce(function () {
      if (window.adUtil.canLoadBoxUI()) {
        window.adUtil.loadBoxUI(window.game.showWinUI3);
      } else {
        window.game.showWinUI3();
      }
    }, 0.5);
  };
  o.prototype.clickBack = function () {
    if (cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  o.prototype.clickRestart = function () {
    window.powerControl.decreasePower(function () {
      cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_shaonao", "shaonao") + "_shaonao");
    });
  };
  r([u(cc.AudioClip)], o.prototype, "succClip", undefined);
  r([u(cc.Node)], o.prototype, "level", undefined);
  return r([s], o);
}(l.default);
exports.default = h;