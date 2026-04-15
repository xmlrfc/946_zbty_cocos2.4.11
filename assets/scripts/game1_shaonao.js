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
    o.bgmClip = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    if (cc.find("Canvas/back") && cc.find("Canvas/back").active) {
      window.adUtil.loadEnergyPre(0, 590);
    } else {
      window.adUtil.loadEnergyPre(0, 600);
    }
  };
  o.prototype.start = function () {
    this.loadConfig();
    this.showGameAd();
    this.scheduleOnce(this.loadRawardedStartAd, 1);
    if (!cc.audioEngine.isMusicPlaying()) {
      window.adUtil.playMusic(this.bgmClip, true);
    }
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
      var w;
      var p;
      var f;
      var y;
      var g;
      var m;
      var v;
      var _;
      var b;
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
            t = [];
            n = [];
            i = [];
            for (d in window.json) {
              if (d == "paper") {
                for (w = 0; w < window.json[d].length; w++) {
                  i.push(window.json[d][w]);
                }
              }
            }
            r = [];
            for (a in window.json) {
              r.push(a);
            }
            l = 0;
            c.label = 5;
          case 5:
            if (l < r.length) {
              d = r[l];
              s = window.adUtil.useHallData("roleSkin_model1_shaonao", "shaonao") ? window.adUtil.useHallData("roleSkin_model1_shaonao", "shaonao") : "skinOriginal";
              u = "prefab/creator/game" + window.model + "/" + s + "/" + d;
              return [4, window.adUtil.loadPrefabByBundleSync("resources_1_shaonao", u)];
            } else {
              return [3, 8];
            }
          case 6:
            h = c.sent();
            w = 0;
            for (; w < window.json[d].length; w++) {
              if ((p = cc.instantiate(h)).name.indexOf("sockets") == 0) {
                p.zIndex = 1;
              } else if (p.name.indexOf("paper") == 0) {
                p.zIndex = 3;
              }
              p.x = window.json[d][w].x;
              p.y = window.json[d][w].y;
              p.rotation = window.json[d][w].rotation;
              p.scale = window.json[d][w].scale;
              p.scaleX = window.json[d][w].scaleX;
              p.scaleY = window.json[d][w].scaleY;
              f = cc.find("Canvas").getChildByName("level");
              y = p.children;
              _ = y.length - 1;
              for (; _ >= 0; _--) {
                if (y[_].name == "rope" || y[_].name == "end") {
                  y[_].x = y[_].x + y[_].parent.x;
                  y[_].y = y[_].y + y[_].parent.y;
                  g = false;
                  m = 0;
                  for (; m < i.length; m++) {
                    if (Math.abs(y[_].x - i[m].x) < 161.5 * i[m].scaleX && Math.abs(y[_].y - i[m].y) < 145 * i[m].scaleY) {
                      g = true;
                      break;
                    }
                  }
                  y[_].zIndex = g ? 2 : 4;
                  y[_].phone = y[_].parent;
                  y[_].parent = f;
                }
              }
              f.addChild(p);
              if (d.indexOf("bgSockets") >= 0) {
                t.push(p);
              } else if (d.indexOf("sockets") >= 0) {
                n.push(p);
              }
            }
            c.label = 7;
          case 7:
            l++;
            return [3, 5];
          case 8:
            for (v = 0; v < n.length; v++) {
              for (_ = 0; _ < t.length; _++) {
                if (t[_].x - t[_].width / 2 < n[v].x && t[_].x + t[_].width / 2 > n[v].x && t[_].y - t[_].height / 2 < n[v].y && t[_].y + t[_].height / 2 > n[v].y) {
                  n[v].bgSockets = t[_];
                  (b = t[_].socketsNodeArr || []).push(n[v]);
                  t[_].socketsNodeArr = b;
                  break;
                }
              }
            }
            return [2];
        }
      });
    });
  };
  o.prototype.showHint = function () {
    cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
      o.load("prefab/ui/hand", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        var n = cc.find("Canvas");
        n.addChild(t);
        for (var i, r, a = n.getChildByName("level"), c = 0; c < a.children.length; c++) {
          if (a.children[c].name == "end") {
            i = a.children[c];
            break;
          }
        }
        for (var l = 0; l < a.children.length; l++) {
          if (a.children[l].name.indexOf("sockets") > -1 && a.children[l].name.replace("sockets", "") == i.phone.name.replace("phone", "")) {
            r = a.children[l];
            break;
          }
        }
        var d = cc.moveTo(0.01, cc.v2(i.x + a.x, i.y + a.y));
        var s = cc.moveTo(1.3, cc.v2(r.x + a.x, r.y + a.y));
        t.runAction(cc.repeatForever(cc.sequence(d, s)));
      });
    });
  };
  o.prototype.check = function () {
    if (cc.find("Canvas").getChildByName("hand")) {
      window.showHandFlag = true;
      cc.find("Canvas").getChildByName("hand").destroy();
    }
    if (!window.game.loadWin) {
      for (var e = cc.find("Canvas").getChildByName("level").children, o = true, t = 0; t < e.length; t++) {
        if (!(e[t].name.indexOf("phone") < 0 || e[t].getChildByName("anchor").getChildByName("full").active)) {
          o = false;
          break;
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
        window.adUtil.loadBoxUI(window.game.showWinUI);
      } else {
        window.game.showWinUI();
      }
    }, 1.5);
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
  r([u(cc.AudioClip)], o.prototype, "succClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "bgmClip", undefined);
  return r([s], o);
}(l.default);
exports.default = h;