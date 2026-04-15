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
var l = require("./game_wenzizhaobutong");
var d = cc._decorator;
var s = d.ccclass;
var u = d.property;
var h = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.layoutNode = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.adGetTipsPrefab = null;
    o.getTipsPrefab = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.jsonLevel = null;
    o.jsonPos = null;
    o.preZi = null;
    o.width = 8;
    o.diffNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game5 = this;
    cc.audioEngine.pauseMusic();
    this.btnNode.active = false;
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    e.prototype.onLoad.call(this);
    window.game5.colorArr = [new cc.Color(137, 74, 161), new cc.Color(236, 254, 28), new cc.Color(34, 202, 101), new cc.Color(23, 145, 137), new cc.Color(225, 26, 151), new cc.Color(32, 100, 233), new cc.Color(128, 49, 26), new cc.Color(36, 7, 235), new cc.Color(254, 8, 244), new cc.Color(225, 1, 117), new cc.Color(248, 121, 9), new cc.Color(60, 255, 70), new cc.Color(25, 36, 198), new cc.Color(56, 145, 200), new cc.Color(230, 50, 98), new cc.Color(96, 120, 230), new cc.Color(8, 163, 100), new cc.Color(200, 10, 164), new cc.Color(163, 63, 1), new cc.Color(24, 253, 197)];
    window.game5.chosedArr = [];
    window.game5.chosedZiArr = [];
    window.game5.chosedNodeArr = [];
    var o = 0;
    for (var t in this.jsonLevel.json) {
      if (Number(t)) {
        o++;
      }
    }
    var n = [];
    var i = [];
    if (window.currentLevel < o) {
      n = this.jsonPos.json[window.currentLevel + ""];
      i = this.jsonLevel.json[window.currentLevel + ""];
      i = this.resetCD(i);
    } else {
      var r = Math.floor(20 * Math.random()) + 1;
      n = this.jsonPos.json["endless_" + r];
      for (var a = this.jsonLevel.json[o + ""], c = 0; c < 16; c++) {
        var l = a.length;
        var d = Math.floor(Math.random() * l);
        i.push(a[d]);
        a.splice(d, 1);
      }
    }
    if (this.jsonPos.json[window.currentLevel + "-width"]) {
      this.width = this.jsonPos.json[window.currentLevel + "-width"];
    }
    window.game5.leftArr = n.slice(0);
    window.game5.leftZiArr = i.slice(0);
    window.game5.leftSoundArr = [];
    for (var s = 0; s < n.length; s++) {
      for (var u = 0; u < n[s].length; u++) {
        var h = cc.instantiate(this.preZi);
        var w = n[s][u];
        var p = w % this.width;
        var f = (w - p) / this.width;
        h.scale = 640 / this.width / (h.width + 7);
        h.x = p * (this.layoutNode.width / this.width);
        h.y = -1 * f * (this.layoutNode.width / this.width);
        h.index = w;
        h.name = "position" + w;
        h.getChildByName("zi").getComponent(cc.Label).string = i[s][u] + "";
        if (i[s][u] == "biu") {
          h.getChildByName("zi").width = 50;
          h.getChildByName("zi").height = 50;
        }
        this.layoutNode.addChild(h);
      }
    }
    this.btnNode.active = true;
    this.layoutNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    if (window.currentLevel == 1) {
      window.game5.tipsNode.getComponent(cc.Button).interactable = false;
      window.game5.showhand();
    }
    window.originalcountdownTime = 60;
    this.countdownTime = window.originalcountdownTime;
  };
  o.prototype.resetCD = function (e) {
    for (var o = [], t = e.length, n = 0; n < t; n++) {
      if (e[n] == "我没k布鲁biu布鲁biu") {
        o.push(["我", "没", "k", "布", "鲁", "biu", "布", "鲁", "biu"]);
      } else {
        o.push(e[n]);
      }
    }
    return o;
  };
  o.prototype.start = function () {
    this.loadStartAd();
    this.showGetTipsPrefab();
    if (this.jsonLevel.json[window.currentLevel + "-sound"]) {
      var e = this.jsonLevel.json[window.currentLevel + "-sound"];
      var o = e.path;
      var t = e.name;
      this.loadSound(o, t);
    } else if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
  };
  o.prototype.loadSound = function (e, o) {
    return a(this, undefined, undefined, function () {
      var t;
      var n;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, this.loadSoundRemote(e, o)];
          case 1:
            t = i.sent();
            n = 0;
            for (; n < o.length; n++) {
              window.game5.leftSoundArr.push(t[o[n] - 1]);
            }
            return [2];
        }
      });
    });
  };
  o.prototype.loadSoundRemote = function (e) {
    return a(this, undefined, undefined, function () {
      return c(this, function () {
        return [2, new Promise(function (o, t) {
          cc.assetManager.loadBundle("resources_" + e + "_wenzizhaobutong", function (e, n) {
            n.loadDir("", function (e, n) {
              if (e) {
                t(e);
              } else {
                o(n);
              }
            });
          });
        })];
      });
    });
  };
  o.prototype.onTouchStart = function (e) {
    var o = e.getLocation();
    o = this.layoutNode.convertToNodeSpaceAR(o);
    var t = new cc.Node();
    this.layoutNode.addChild(t);
    t.name = "tempNode";
    t.setPosition(o.x, o.y);
    t.addComponent(cc.BoxCollider);
    t.getComponent(cc.BoxCollider).tag = 999;
    t.getComponent(cc.BoxCollider).size.height = 3;
    t.getComponent(cc.BoxCollider).size.width = 3;
  };
  o.prototype.onTouchMove = function (e) {
    var o = e.getLocation();
    o = this.layoutNode.convertToNodeSpaceAR(o);
    if (this.layoutNode.getChildByName("tempNode")) {
      this.layoutNode.getChildByName("tempNode").setPosition(o.x, o.y);
    }
  };
  o.prototype.onTouchEnd = function () {
    window.randomColor = undefined;
    if (this.layoutNode.getChildByName("tempNode")) {
      this.layoutNode.getChildByName("tempNode").destroy();
    }
    this.judgeMatchCorrect();
  };
  o.prototype.judgeMatchCorrect = function () {
    if (this.chosedZiArr.length != 0) {
      for (var e, o = false, t = 0; t < this.leftArr.length; t++) {
        if (this.isEqual(this.leftArr[t], this.chosedArr)) {
          o = true;
          e = t;
          break;
        }
      }
      if (!o) {
        for (t = 0; t < this.leftZiArr.length; t++) {
          if (this.isEqual(this.chosedZiArr, this.leftZiArr[t]) && this.leftArr[t].includes(this.chosedArr[0])) {
            for (var n = 0; n < this.chosedArr.length; n++) {
              if (!this.leftArr[t].includes(this.chosedArr[n])) {
                console.log(this.chosedArr[n], this.leftArr[t][n]);
                var i = this.layoutNode.getChildByName("position" + this.chosedArr[n]).color;
                this.layoutNode.getChildByName("position" + this.leftArr[t][n]).color = i;
                this.layoutNode.getChildByName("position" + this.chosedArr[n]).color = new cc.Color(255, 255, 255);
              }
            }
            e = t;
            o = true;
            break;
          }
        }
      }
      if (o) {
        this.leftArr.splice(e, 1);
        this.leftZiArr.splice(e, 1);
        this.destroyHandNode();
        this.lastSongTime = 0.5;
        if (this.jsonLevel.json[window.currentLevel + "-sound"]) {
          try {
            var r = this.leftSoundArr[e];
            var a = window.adUtil.playMusicEffect(r, false);
            this.lastSongTime = cc.audioEngine.getDuration(a);
          } finally {
            window.musicBgFlag = false;
          }
        } else {
          window.adUtil.playMusicEffect(this.successClip, false);
        }
        this.leftSoundArr.splice(e, 1);
        this.checkWin();
      } else {
        for (var c = 0; c < this.chosedNodeArr.length; c++) {
          this.chosedNodeArr[c].color = new cc.Color(255, 255, 255);
        }
      }
      this.chosedArr = [];
      this.chosedZiArr = [];
      this.chosedNodeArr = [];
    }
  };
  o.prototype.isEqual = function (e, o) {
    if (e.length != o.length) {
      return false;
    }
    for (var t = 0; t < e.length; t++) {
      if (e[t] != o[t]) {
        return false;
      }
    }
    return true;
  };
  o.prototype.checkWin = function () {
    var e = this;
    if (this.leftArr.length == 0) {
      this.node.getChildByName("countdown").active = false;
      console.log("游戏结束");
      this.scheduleOnce(function () {
        e.levelUpCallback();
        e.judgeShowWinUI(6);
      }, this.lastSongTime);
    }
  };
  o.prototype.countdown = function () {
    var e = this;
    if (this.node.getChildByName("countdown").active) {
      this.scheduleOnce(function () {
        e.countdownTime--;
        e.node.getChildByName("countdown").getComponent(cc.Label).string = e.countdownTime + "";
        if (e.countdownTime <= 0) {
          e.countdownCount++;
          e.juedePopGetHint();
        } else {
          e.countdown();
        }
      }, 1);
    }
  };
  o.prototype.juedePopGetHint = function () {
    window.adUtil.playMusicEffect(this.failClip, false);
    if (window.miniPlatForm == "vivo" || window.miniPlatForm == "oppo" || window.miniPlatForm == "qq" || window.miniPlatForm == "tt") {
      if (this.countdownCount < 3) {
        this.popGetHint();
      } else if (this.countdownCount == 3) {
        this.clickFail();
      }
    } else {
      this.clickFail();
    }
  };
  o.prototype.popGetHint = function () {
    var e = cc.instantiate(this.adGetTipsPrefab);
    cc.find("Canvas").addChild(e);
  };
  o.prototype.clickFail = function () {
    this.node.getChildByName("countdown").active = false;
    this.scheduleOnce(function () {
      var e = window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong") ? window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong") : "6";
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
        t.load("prefab/ui/failUI" + e, cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
          t.zIndex = 1;
        });
      });
    }, 0.5);
    console.log("fail");
  };
  o.prototype.showhand = function () {
    if (this.leftArr.length != 0) {
      var e = this.leftArr[0][0];
      this.randomHandIndex = 0;
      for (var o = 0; o < this.leftArr.length; o++) {
        for (var t = this.leftArr[o], n = 0; n < t.length; n++) {
          if (t[n] < e) {
            e = t[n];
            this.randomHandIndex = o;
          }
        }
      }
      var i = this;
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
        o.load("prefab/ui/guide", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          i.layoutNode.addChild(t);
          i.handRepetTimes = 0;
          i.runGuide();
        });
      });
    }
  };
  o.prototype.runGuide = function () {
    this.handRepetTimes++;
    var e = this.leftArr[this.randomHandIndex];
    this.handActions = [];
    var o;
    var t = e[0] % this.width;
    var n = (e[0] - t) / this.width;
    var i = this.layoutNode.width / this.width;
    if (this.layoutNode.getChildByName("guide")) {
      o = this.layoutNode.getChildByName("guide");
    }
    o.x = t * i + i / 2;
    o.y = -1 * n * i - i / 2;
    for (var r = 0; r < e.length - 1; r++) {
      var a = r + 1;
      var c = undefined;
      if (e[r] + 1 == e[a]) {
        c = cc.moveBy(0.4, cc.v2(i, 0));
      } else if (e[r] - 1 == e[a]) {
        c = cc.moveBy(0.4, cc.v2(-i, 0));
      } else if (e[r] + this.width == e[a]) {
        c = cc.moveBy(0.4, cc.v2(0, -i));
      } else if (e[r] - this.width == e[a]) {
        c = cc.moveBy(0.4, cc.v2(0, i));
      }
      this.handActions.push(c);
    }
    if (this.handActions.length == 1) {
      o.runAction(cc.sequence(this.handActions[0], cc.callFunc(this.runGuide, this)));
    } else if (this.handActions.length > 1) {
      var l = cc.sequence(this.handActions);
      o.runAction(cc.sequence(l, cc.callFunc(this.runGuide, this)));
    }
  };
  o.prototype.destroyHandNode = function () {
    if (this.layoutNode.getChildByName("guide")) {
      this.layoutNode.getChildByName("guide").destroy();
    }
    this.tipsNode.getComponent(cc.Button).interactable = true;
  };
  o.prototype.showTips = function () {
    var e = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
    if (e > 0) {
      e--;
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", e + "");
      this.tipsNode.getComponent(cc.Button).interactable = false;
      this.showhand();
      if (e <= 0) {
        this.adNode.active = true;
        this.hintNode.active = false;
      } else {
        this.hintNum.string = e + "";
      }
    } else {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        window.game5.tipsNode.getComponent(cc.Button).interactable = false;
        window.game5.showhand();
      }, function () {});
    }
  };
  r([u(cc.Node)], o.prototype, "layoutNode", undefined);
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "btnNode", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Prefab)], o.prototype, "adGetTipsPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "getTipsPrefab", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([u(cc.JsonAsset)], o.prototype, "jsonLevel", undefined);
  r([u(cc.JsonAsset)], o.prototype, "jsonPos", undefined);
  r([u(cc.Prefab)], o.prototype, "preZi", undefined);
  return r([s], o);
}(l.default);
exports.default = h;