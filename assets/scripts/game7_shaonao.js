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
    o.lineCutPrefab = null;
    o.rightNode = null;
    o.wrongNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    window.adUtilHall.loadEnergyPre(0, 600);
  };
  o.prototype.start = function () {
    this.loadConfig();
    this.showGameAd();
    var e = this.node.getChildByName("bg");
    e.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    e.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            window.game.loadWinFlag = false;
            window.game.loadFailFlag = false;
            window.game.step = 0;
            this.movingFlag = false;
            this.leftCrossPoint = null;
            this.rightCrossPoint = null;
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/level/level" + window.currentLevel)];
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            this.levelNode.addChild(o);
            this.cutNode = o.getChildByName("cutNode");
            if (window.currentLevel == 1) {
              o.addComponent("guide_shaonao7");
            }
            return [2];
        }
      });
    });
  };
  o.prototype.onTouchStart = function (e) {
    if (!(this.loadWinFlag || this.loadFailFlag || this.movingFlag)) {
      this.lineCutNode = cc.instantiate(this.lineCutPrefab);
      this.levelNode.addChild(this.lineCutNode);
      this.lineCut = this.lineCutNode.getComponent("lineCut_shaonao");
      this.lineCut.onTouchStart(e);
    }
  };
  o.prototype.onTouchMove = function (e) {
    if (!(this.loadWinFlag || this.loadFailFlag || this.movingFlag)) {
      this.lineCut.onTouchMove(e);
    }
  };
  o.prototype.onTouchEnd = function (e) {
    if (!(this.loadWinFlag || this.loadFailFlag || this.movingFlag)) {
      this.movingFlag = true;
      this.lineCut.onTouchEnd(e);
      this.lineCutNode.destroy();
      this.hideHint();
    }
  };
  o.prototype.hideHint = function () {
    var e = this.levelNode.getChildByName("level").getComponent("guide_shaonao7");
    if (e) {
      e.hide();
    }
  };
  o.prototype.judgeGameover = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            if (window.game.loadWinFlag || window.game.loadFailFlag) {
              return [2];
            } else {
              this.manNormal.active = false;
              this.basePrice.string = window.game6LevelData.basePrice + "元";
              if (window.game6LevelData.getQuotation() != window.game6LevelData.basePrice) {
                return [3, 1];
              } else {
                this.loadWinUI();
                return [3, 3];
              }
            }
          case 1:
            window.game.loadFailFlag = true;
            this.dialogue.string = this.dialogueFail;
            this.manFail.active = true;
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/wrong")];
          case 2:
            e = t.sent();
            o = cc.instantiate(e);
            window.game.node.addChild(o);
            window.game.showFailUI();
            t.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  o.prototype.loadWinUI = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            window.game.loadWinFlag = true;
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/correct")];
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            window.game.node.addChild(o);
            window.game.dialogue.string = window.game.dialogueWin;
            window.game.manWin.active = true;
            window.game.scheduleOnce(function () {
              if (window.adUtil.canLoadBoxUI()) {
                window.adUtil.loadBoxUI(window.game.showWinUI);
              } else {
                window.game.showWinUI();
              }
            }, 2);
            return [2];
        }
      });
    });
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
  o.prototype.clickSkip = function () {
    window.vivoVideoAd_hall.initRewardedAd(function () {
      window.adUtil.toast("恭喜获得奖励");
      window.game.loadWinUI();
    }, function () {});
  };
  o.prototype.linear = function (e, o, t) {
    var n = (o.y - e.y) / (o.x - e.x);
    var i = n * t + o.y - n * o.x;
    return new cc.Vec2(t, i);
  };
  o.prototype.cut = function (e, o) {
    var t;
    var n;
    var i = new cc.Vec2(-375, 667);
    var r = new cc.Vec2(-375, -667);
    var a = new cc.Vec2(375, 667);
    var c = new cc.Vec2(375, -667);
    if (e.y > o.y || e.y == o.y && e.x > o.x) {
      var l = e;
      e = o;
      o = l;
    }
    if (e.x == o.x) {
      t = [i, r, e, o];
      n = [e, o, a, c];
      this.leftCrossPoint = null;
      this.rightCrossPoint = null;
    } else {
      var d = this.linear(e, o, -375);
      var s = this.linear(e, o, 375);
      this.leftCrossPoint = d;
      this.rightCrossPoint = s;
      if (d.y >= 667) {
        t = [d, a, s, s];
        n = s.y > -667 ? [d, s, c, r] : [d, s, r];
      } else if (d.y > -667) {
        if (s.y > 667) {
          t = [d, i, s];
          n = [d, r, c, s];
        } else if (s.y > -667) {
          t = [d, i, a, s];
          n = [d, r, c, s];
        } else {
          t = [d, i, a, s];
          n = [d, r, s];
        }
      } else {
        n = [d, s, c];
        t = s.y > 667 ? [d, i, s] : [d, i, a, s];
      }
    }
    var u = this.levelNode.getChildByName("level").getChildByName("needSide");
    if (u && cc.Intersection.pointInPolygon(new cc.Vec2(u.x, u.y), t)) {
      console.log(1);
      var h = t;
      t = n;
      n = h;
    }
    var w = cc.instantiate(this.cutNode);
    var p = this.addMaskNode(t);
    this.cutNode.parent = p;
    var f = this.addMaskNode(n);
    w.parent = f;
    w.removeComponent(cc.BoxCollider);
    w.removeComponent(cc.RigidBody);
    f.addComponent(cc.BoxCollider);
    f.addComponent(cc.RigidBody);
    f.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
    f.getComponent(cc.RigidBody).gravityScale = 1;
    p.active = false;
  };
  o.prototype.addMaskNode = function (e) {
    var o = new cc.Node();
    o.width = 750;
    o.height = 1334;
    var t = o.addComponent(cc.Mask);
    this.levelNode.addChild(o);
    var n = t._graphics;
    n.clear();
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      if (i === 0) {
        n.moveTo(r.x, r.y);
      } else {
        n.lineTo(r.x, r.y);
      }
    }
    n.close();
    n.fill();
    return o;
  };
  o.prototype.reset = function () {
    this.levelNode.removeAllChildren();
    this.wrongNode.active = false;
    this.loadConfig();
  };
  o.prototype.loadFail = function () {
    window.game.loadFailFlag = true;
    this.wrongNode.active = true;
    this.scheduleOnce(function () {
      window.game.reset();
    }, 1);
  };
  o.prototype.loadWin = function () {
    window.game.loadWinFlag = true;
    this.rightNode.active = true;
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
  r([u(cc.Node)], o.prototype, "levelNode", undefined);
  r([u(cc.Prefab)], o.prototype, "lineCutPrefab", undefined);
  r([u(cc.Node)], o.prototype, "rightNode", undefined);
  r([u(cc.Node)], o.prototype, "wrongNode", undefined);
  return r([s], o);
}(l.default);
exports.default = h;