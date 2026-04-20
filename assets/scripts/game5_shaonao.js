import Banner from "./Banner";
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
    o.levelNode = null;
    o.blocksNode = null;
    o.blockPrefab = null;
    o.blockElimationEffectPrefab = null;
    o.upNode = null;
    o.downNode = null;
    o.leftNode = null;
    o.rightNode = null;
    o.stepLabel = null;
    o.elimationClip = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    window.game.blockStopFlag = false;
    this.lastMoveDirection = null;
    this.loadFailFlag = false;
    window.adUtilHall.loadEnergyPre(0, 600);
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
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            for (e = 0; e < 32; e++) {
              for (i = 0; i < 32; i++) {
                (r = cc.instantiate(cc.instantiate(this.blockPrefab))).x = r.width / 2 - 320 + i * r.width;
                r.y = r.height / 2 - 320 + e * r.height;
                r.active = false;
                this.blocksNode.addChild(r);
              }
            }
            if (window.creator) {
              return [3, 2];
            } else {
              return [4, window.adUtil.loadJsonByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model + "/1-" + window.currentLevel)];
            }
          case 1:
            o = c.sent();
            window.json = o.json;
            return [3, 3];
          case 2:
            cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
              o.load("prefab/ui/backCreator", cc.Prefab, function (e, o) {
                var t = cc.instantiate(o);
                cc.find("Canvas").addChild(t);
              });
            });
            window.json = window.creatorArr;
            c.label = 3;
          case 3:
            window.game.blocksCount = window.json.blocks.length;
            t = new cc.Color();
            cc.Color.fromHEX(t, window.json.up.color);
            this.upNode.color = t;
            t = new cc.Color();
            cc.Color.fromHEX(t, window.json.down.color);
            this.downNode.color = t;
            t = new cc.Color();
            cc.Color.fromHEX(t, window.json.left.color);
            this.leftNode.color = t;
            t = new cc.Color();
            cc.Color.fromHEX(t, window.json.right.color);
            this.rightNode.color = t;
            n = this.blocksNode.children;
            i = 0;
            for (; i < window.json.blocks.length; i++) {
              r = n[window.json.blocks[i].X + 32 * window.json.blocks[i].Y];
              a = new cc.Color();
              cc.Color.fromHEX(a, window.json.blocks[i].color);
              r.getChildByName("pic").color = a;
              r.active = true;
            }
            this.levelNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.levelNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.levelNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.levelNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
            this.step = window.json.step;
            this.stepLabel.string = this.step + "";
            return [2];
        }
      });
    });
  };
  o.prototype.onTouchStart = function (e) {
    this.touchStartLocation = e.getLocation();
  };
  o.prototype.onTouchMove = function (e) {
    if (!this.movingFlag && !this.loadFailFlag) {
      this.movingFlag = true;
      var o = e.getLocation();
      var t = o.x - this.touchStartLocation.x;
      var n = o.y - this.touchStartLocation.y;
      var i = null;
      if (Math.abs(t) > Math.abs(n)) {
        if (t > 50) {
          i = "right";
        } else if (t < -50) {
          i = "left";
        }
      } else if (n > 50) {
        i = "up";
      } else if (n < -50) {
        i = "down";
      }
      if (i && this.lastMoveDirection != i) {
        this.step--;
        this.stepLabel.string = this.step + "";
        this.lastMoveDirection = i;
        this.playMusicEffectFlag = false;
        console.log(i);
        this.moveOnce(i);
      } else {
        this.movingFlag = false;
      }
    }
  };
  o.prototype.onTouchEnd = function () {};
  o.prototype.moveOnce = function (e) {
    var o = this;
    this.scheduleOnce(function () {
      var t = o.blocksNode.children;
      var n = [];
      var i = false;
      if (e == "up") {
        for (var r = 0; r < 32; r++) {
          var a = 31;
          var c = o.lastPosition(t, r, a, o.upNode, e);
          n.push(c.canMoveArrItem);
          i = c.canMoveFlag;
        }
        for (r = 0; r < 32; r++) {
          for (a = 30; a >= 0; a--) {
            if ((l = t[r + 32 * a]).active) {
              if (!(d = t[r + 32 * (a + 1)]).active) {
                d.getChildByName("pic").color = l.getChildByName("pic").color;
                d.active = true;
                l.active = false;
                i = true;
              }
            }
          }
        }
      } else if (e == "down") {
        for (r = 0; r < 32; r++) {
          a = 0;
          c = o.lastPosition(t, r, a, o.downNode, e);
          n.push(c.canMoveArrItem);
          i = c.canMoveFlag;
        }
        for (r = 0; r < 32; r++) {
          for (a = 1; a < 32; a++) {
            if ((l = t[r + 32 * a]).active) {
              if (!(d = t[r + 32 * (a - 1)]).active) {
                d.getChildByName("pic").color = l.getChildByName("pic").color;
                d.active = true;
                l.active = false;
                i = true;
              }
            }
          }
        }
      } else if (e == "left") {
        for (a = 0; a < 32; a++) {
          r = 0;
          c = o.lastPosition(t, r, a, o.leftNode, e);
          n.push(c.canMoveArrItem);
          i = c.canMoveFlag;
        }
        for (a = 0; a < 32; a++) {
          for (r = 1; r < 32; r++) {
            if ((l = t[r + 32 * a]).active) {
              if (!(d = t[r - 1 + 32 * a]).active) {
                d.getChildByName("pic").color = l.getChildByName("pic").color;
                d.active = true;
                l.active = false;
                i = true;
              }
            }
          }
        }
      } else if (e == "right") {
        for (a = 0; a < 32; a++) {
          r = 31;
          c = o.lastPosition(t, r, a, o.rightNode, e);
          n.push(c.canMoveArrItem);
          i = c.canMoveFlag;
        }
        for (a = 0; a < 32; a++) {
          for (r = 30; r >= 0; r--) {
            var l;
            var d;
            if ((l = t[r + 32 * a]).active) {
              if (!(d = t[r + 1 + 32 * a]).active) {
                d.getChildByName("pic").color = l.getChildByName("pic").color;
                d.active = true;
                l.active = false;
                i = true;
              }
            }
          }
        }
      }
      if (i) {
        o.moveOnce(e);
      } else {
        o.movingFlag = false;
        o.judgeGameover();
      }
    }, 0.015);
  };
  o.prototype.judgeGameover = function () {
    if (this.blocksCount <= 0) {
      if (window.adUtil.canLoadBoxUI()) {
        window.adUtil.loadBoxUI(window.game.showWinUI);
      } else {
        window.game.showWinUI();
      }
      return true;
    } else {
      return this.step <= 0 && (window.adUtil.canLoadBoxUI() ? window.adUtil.loadBoxUI(window.game.showFailUI) : window.game.showFailUI(), true);
    }
  };
  o.prototype.showWinUI = function () {
    Banner.Instance.ShowCustomAd();
    window.currentLevel += 1;
    if (window.currentLevel > window.maxLevel) {
      cc.sys.localStorage.setItem("level" + window.model + "_shaonao", window.currentLevel + "");
      window.maxLevel = window.currentLevel;
      if (window.home && window.home.isModelNowInModel12()) {
        window.home.calculateLevel();
      }
    }
    cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
      var t = window.adUtil.useHallData("gameoverSkin", "shaonao") ? window.adUtil.useHallData("gameoverSkin", "shaonao") : "5";
      o.load("prefab/ui/winUI" + t, cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.showFailUI = function () {
    Banner.Instance.ShowCustomAd();
    window.game.loadFailFlag = true;
    cc.assetManager.loadBundle("resources_shaonao", function (e, o) {
      var t = window.adUtil.useHallData("gameoverSkin", "shaonao") ? window.adUtil.useHallData("gameoverSkin", "shaonao") : "5";
      o.load("prefab/ui/failUI" + t, cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
  };
  o.prototype.lastPosition = function (e, o, t, n, i) {
    var r;
    var a = e[o + 32 * t];
    var c = null;
    if (a.active) {
      if (a.getChildByName("pic").color.r != n.color.r || a.getChildByName("pic").color.g != n.color.g || a.getChildByName("pic").color.b != n.color.b) {
        c = false;
      } else {
        a.active = false;
        if (!this.playMusicEffectFlag) {
          this.playMusicEffectFlag = true;
          window.adUtil.playMusicEffect(this.elimationClip, false);
        }
        var l = cc.instantiate(this.blockElimationEffectPrefab);
        l.position = a.position;
        l.color = n.color;
        if (!(i == "up")) {
          if (i == "down") {
            l.angle = 180;
          } else if (i == "left") {
            l.angle = 90;
          } else if (i == "right") {
            l.angle = 270;
          }
        }
        this.levelNode.addChild(l);
        this.scheduleOnce(function () {
          l.destroy();
        }, 1);
        this.blocksCount--;
        c = true;
        r = true;
      }
    } else {
      var d = false;
      if (i == "up") {
        for (var s = 30; s >= 0; s--) {
          if (e[o + 32 * s].active) {
            d = true;
            break;
          }
        }
      } else if (i == "down") {
        for (var u = 1; u < 32; u++) {
          if (e[o + 32 * u].active) {
            d = true;
            break;
          }
        }
      } else if (i == "left") {
        for (var h = 1; h < 32; h++) {
          if (e[h + 32 * t].active) {
            d = true;
            break;
          }
        }
      } else if (i == "right") {
        for (var w = 30; w >= 0; w--) {
          if (e[w + 32 * t].active) {
            d = true;
            break;
          }
        }
      }
      if (d) {
        c = true;
        r = true;
      } else {
        c = false;
      }
    }
    return {
      canMoveArrItem: c,
      canMoveFlag: r
    };
  };
  o.prototype.clickBack = function () {
    var e = cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level5_shaonao");
    });
    if (e) {
      cc.director.loadScene("level5_shaonao");
    } else if (e = cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level");
    })) {
      cc.director.loadScene("level");
    } else {
      cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    }
  };
  r([u(cc.Node)], o.prototype, "levelNode", undefined);
  r([u(cc.Node)], o.prototype, "blocksNode", undefined);
  r([u(cc.Prefab)], o.prototype, "blockPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "blockElimationEffectPrefab", undefined);
  r([u(cc.Node)], o.prototype, "upNode", undefined);
  r([u(cc.Node)], o.prototype, "downNode", undefined);
  r([u(cc.Node)], o.prototype, "leftNode", undefined);
  r([u(cc.Node)], o.prototype, "rightNode", undefined);
  r([u(cc.Label)], o.prototype, "stepLabel", undefined);
  r([u(cc.AudioClip)], o.prototype, "elimationClip", undefined);
  return r([s], o);
}(l.default);
exports.default = h;