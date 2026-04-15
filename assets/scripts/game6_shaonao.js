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
    o.searchNode = null;
    o.dialogue = null;
    o.quotation = null;
    o.basePrice = null;
    o.manNormal = null;
    o.manWin = null;
    o.manFail = null;
    o.correctClip = null;
    o.succClip = null;
    o.failClip = null;
    o.dialogueWin = "唉，小聪明行不通。";
    o.dialogueFail = "这下赚大了。";
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    window.game.loadWinFlag = false;
    window.game.loadFailFlag = false;
    window.adUtilHall.loadEnergyPre(-240, 600, cc.find("Canvas/tool"));
  };
  o.prototype.start = function () {
    this.loadConfig();
    this.showGameAd();
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            if (window.currentLevel <= 5) {
              e = "resources_6_level1_shaonao";
            } else if (window.currentLevel <= 10) {
              e = "resources_6_level2_shaonao";
            } else if (window.currentLevel > 10) {
              e = "resources_6_level3_shaonao";
            }
            return [4, window.adUtil.loadPrefabByBundleSync(e, "prefab/level/level" + window.currentLevel)];
          case 1:
            o = n.sent();
            t = cc.instantiate(o);
            this.levelNode.addChild(t);
            this.resetDialogue();
            this.searchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.searchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.searchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.searchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
            this.searchNode._touchListener.setSwallowTouches(false);
            this.searchPoints = this.searchNode.getComponent(cc.PolygonCollider).points;
            return [2];
        }
      });
    });
  };
  o.prototype.resetDialogue = function () {
    this.dialogue.string = window.game6LevelData.getDialogue();
    this.quotation.string = window.game6LevelData.getQuotation() + "元";
  };
  o.prototype.onTouchStart = function () {
    if (!this.loadWinFlag) {
      this.loadFailFlag;
    }
  };
  o.prototype.onTouchMove = function (e) {
    if (!this.loadWinFlag && !this.loadFailFlag) {
      var o = e.getDelta();
      this.searchNode.x += o.x;
      this.searchNode.y += o.y;
      var t = this.levelNode.getChildByName("level").getChildByName("mask").getComponent(cc.Mask)._graphics;
      t.clear();
      var n = this.searchPoints[0];
      t.moveTo(n.x + this.searchNode.x - this.levelNode.x, n.y + this.searchNode.y - this.levelNode.y);
      for (var i = 1; i < this.searchPoints.length; i++) {
        var r = this.searchPoints[i];
        t.lineTo(r.x + this.searchNode.x - this.levelNode.x, r.y + this.searchNode.y - this.levelNode.y);
      }
      t.close();
      t.fill();
    }
  };
  o.prototype.onTouchEnd = function () {
    if (!this.loadWinFlag && !this.loadFailFlag) {
      for (var e = [], o = 0; o < this.searchPoints.length; o++) {
        var t = this.searchPoints[o];
        e.push(cc.v2(t.x + this.searchNode.x - this.levelNode.x, t.y + this.searchNode.y - this.levelNode.y));
      }
      var n = this.levelNode.getChildByName("level").getChildByName("mask").getChildByName("spot").children;
      for (o = 0; o < n.length; o++) {
        var i = false;
        var r = n[o];
        if (!r.findFlag) {
          for (var a = [cc.v2(r.x - r.width / 4, r.y + r.height / 4), cc.v2(r.x - r.width / 4, r.y - r.height / 4), cc.v2(r.x + r.width / 4, r.y - r.height / 4), cc.v2(r.x + r.width / 4, r.y + r.height / 4)], c = 0; c < a.length; c++) {
            t = a[c];
            if (!cc.Intersection.pointInPolygon(t, e)) {
              i = true;
              break;
            }
          }
          if (!i) {
            var l = r.getComponent("game6ClickLabel_shaonao");
            if (l) {
              l.click();
            }
            this.findSpot(r.position);
            this.nextStep();
            r.findFlag = true;
            break;
          }
        }
      }
    }
  };
  o.prototype.findSpot = function (e) {
    return a(this, undefined, undefined, function () {
      var o;
      var t;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/circle" + window.game6LevelData.circleIndex)];
          case 1:
            o = n.sent();
            (t = cc.instantiate(o)).position = e;
            this.levelNode.getChildByName("level").getChildByName("mask").addChild(t);
            return [2];
        }
      });
    });
  };
  o.prototype.nextStep = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      return c(this, function (t) {
        switch (t.label) {
          case 0:
            window.adUtil.playMusicEffect(this.correctClip, false);
            window.game6LevelData.nextStep();
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/toast/toastPrice")];
          case 1:
            e = t.sent();
            o = cc.instantiate(e);
            this.node.addChild(o);
            o.getChildByName("label").getComponent(cc.Label).string = "-" + window.game6LevelData.getDecreaseQuotation() + "元";
            cc.tween(o).by(0.6, {
              position: cc.v3(0, 50)
            }).call(function () {
              o.destroy();
            }).start();
            this.resetDialogue();
            return [2];
        }
      });
    });
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
            window.adUtil.playMusicEffect(this.failClip, false);
            window.game.loadFailFlag = true;
            this.dialogue.string = this.dialogueFail;
            this.manFail.active = true;
            return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.model + "_shaonao", "prefab/wrong")];
          case 2:
            e = t.sent();
            o = cc.instantiate(e);
            window.game.node.addChild(o);
            window.game.showFailUI();
            Banner.Instance.CreateCustomAd();
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
            window.adUtil.playMusicEffect(this.succClip, false);
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
  o.prototype.showWinUI = function () {
    Banner.Instance.CreateCustomAd();
    window.currentLevel += 1;
    if (window.currentLevel > window.maxLevel) {
      cc.sys.localStorage.setItem("level" + window.model + "_shaonao", window.currentLevel + "");
      window.maxLevel = window.currentLevel;
    }
    e.prototype.showWinUI.call(this);
  };
  o.prototype.clickBack = function () {
    var e = cc.assetManager.bundles.find(function (e) {
      return e.getSceneInfo("level6_shaonao");
    });
    if (e) {
      cc.director.loadScene("level6_shaonao");
    } else if (e = cc.assetManager.bundles.find(function (e) {
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
  r([u(cc.Node)], o.prototype, "levelNode", undefined);
  r([u(cc.Node)], o.prototype, "searchNode", undefined);
  r([u(cc.Label)], o.prototype, "dialogue", undefined);
  r([u(cc.Label)], o.prototype, "quotation", undefined);
  r([u(cc.Label)], o.prototype, "basePrice", undefined);
  r([u(cc.Node)], o.prototype, "manNormal", undefined);
  r([u(cc.Node)], o.prototype, "manWin", undefined);
  r([u(cc.Node)], o.prototype, "manFail", undefined);
  r([u(cc.AudioClip)], o.prototype, "correctClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "succClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  return r([s], o);
}(l.default);
exports.default = h;