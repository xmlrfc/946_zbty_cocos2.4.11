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
var a = require("./game_wenzizhaobutong");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.emojiPre = null;
    o.levelUpPre = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.scoreLabel = null;
    o.timeLine = null;
    o.aimImgNode = null;
    o.layoutNode = null;
    o.successClip = null;
    o.failClip = null;
    o.img = [];
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game22 = this;
    e.prototype.onLoad.call(this);
    this.btnNode.active = false;
    this.moveFlag = undefined;
    this.levelUpArr = [40, 100, 200, 400, 600];
    if (window.model22LevelUpFlag) {
      this.score = window.model22Score;
      this.level = window.model22Level;
      this.leftTime = window.model22LeftTime;
      if (this.leftTime > 60) {
        this.leftTime = 60;
      }
    } else {
      this.score = 0;
      this.level = 0;
      this.leftTime = 60;
    }
    this.blockNumPerLine = 5 + this.level;
    this.blockNum = this.blockNumPerLine * this.blockNumPerLine;
    this.timeLine.width = 9 * this.leftTime;
    this.chosedNodeArr = [];
    this.chosedNodeIndexArr = [];
    this.aimIndex = [];
    this.initColor = new cc.Color(101, 139, 171);
    this.changeColor = new cc.Color(185, 198, 159);
    this.layoutNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.layoutNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  };
  o.prototype.start = function () {
    var e;
    var o;
    var t;
    var n = this.blockNumPerLine;
    var i = this.layoutNode.width;
    this.blockWidth = Number((i / n).toFixed(3));
    for (var r = 0; r < this.blockNum; r++) {
      t = (r - (o = r % n)) / n;
      var a = cc.instantiate(this.emojiPre);
      a.height = this.blockWidth;
      a.width = this.blockWidth;
      a.x = this.blockWidth * o;
      a.y = -1 * this.blockWidth * t;
      a.color = this.initColor;
      e = Math.floor(Math.random() * this.img.length);
      a.getChildByName("img").height = 0.8 * this.blockWidth;
      a.getChildByName("img").width = 0.8 * this.blockWidth;
      a.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.img[e];
      a.imgIndex = e;
      a.name = "child" + r;
      a.index = r;
      this.layoutNode.addChild(a);
    }
    this.getAimImg();
    this.updateScore();
    this.btnNode.active = true;
    this.schedule(this.updateTime, 1);
    if (!window.showHandFlag) {
      window.showHandFlag = true;
      this.showAnswer();
    }
    this.loadStartAd();
  };
  o.prototype.onTouchStart = function (e) {
    if (!this.moveFlag) {
      var o = e.getLocation();
      o = this.layoutNode.convertToNodeSpaceAR(o);
      this.startPointPos = cc.v2(o.x, o.y);
    }
  };
  o.prototype.onTouchMove = function (e) {
    if (!this.moveFlag) {
      var o = e.getLocation();
      if ((o = this.layoutNode.convertToNodeSpaceAR(o)).x < 0) {
        o.x = 1;
      }
      if (o.x > this.layoutNode.width) {
        o.x = this.layoutNode.width - 1;
      }
      if (o.y > 0) {
        o.y = -1;
      }
      if (o.y < -this.layoutNode.height) {
        o.y = -1 * this.layoutNode.height + 1;
      }
      this.endPointPos = cc.v2(o.x, o.y);
      this.getAllBlock(this.startPointPos, this.endPointPos);
    }
  };
  o.prototype.onTouchEnd = function () {
    if (!this.moveFlag) {
      this.moveFlag = true;
      this.juedeCorrect();
    }
  };
  o.prototype.getAimImg = function () {
    this.aimIndex = [];
    for (var e, o, t = this.blockNumPerLine, n = Math.floor(Math.random() * this.blockNum); n % t == t - 1 || (n - n % t) / t == t - 1;) {
      n = Math.floor(Math.random() * this.blockNum);
    }
    console.log("选中的方块左上角表情序号是：" + n);
    this.aimBlockIndex = n;
    for (var i = 0; i < 4; i++) {
      var r = cc.instantiate(this.emojiPre);
      this.aimImgNode.addChild(r);
      r.height = this.blockWidth;
      r.width = this.blockWidth;
      r.color = this.initColor;
      if (i < 2) {
        e = n + i;
        r.x = this.blockWidth * (i - 1);
        r.y = this.blockWidth;
      } else {
        e = n + t + i - 2;
        r.x = this.blockWidth * (i - 3);
        r.y = 0;
      }
      o = this.layoutNode.getChildByName("child" + e).imgIndex;
      this.aimIndex.push(o);
      r.getChildByName("img").height = 0.8 * this.blockWidth;
      r.getChildByName("img").width = 0.8 * this.blockWidth;
      r.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.img[o];
    }
    this.moveFlag = undefined;
    this.tipsNode.getComponent(cc.Button).interactable = true;
  };
  o.prototype.getAllBlock = function (e, o) {
    var t = this.blockNumPerLine;
    var n = (e.x - e.x % this.blockWidth) / this.blockWidth + (-e.y + e.y % this.blockWidth) / this.blockWidth * t;
    var i = (o.x - o.x % this.blockWidth) / this.blockWidth + (-o.y + o.y % this.blockWidth) / this.blockWidth * t;
    if (e.x == o.x && e.y == o.y) {
      if (!this.chosedNodeIndexArr.includes(n)) {
        this.chosedNodeIndexArr.push(n);
        this.chosedNodeArr.push(this.layoutNode.getChildByName("child" + n));
        this.layoutNode.getChildByName("child" + n).color = this.changeColor;
      }
    } else if (e.x == o.x) {
      if (n > i) {
        var r = n;
        n = i;
        i = r;
      }
      for (var a = n; a <= i; a += t) {
        if (!this.chosedNodeIndexArr.includes(a)) {
          this.chosedNodeIndexArr.push(a);
          this.chosedNodeArr.push(this.layoutNode.getChildByName("child" + a));
          this.layoutNode.getChildByName("child" + a).color = this.changeColor;
        }
      }
    } else if (e.y == o.y) {
      if (n > i) {
        r = n;
        n = i;
        i = r;
      }
      a = n;
      if (n > i) {
        r = n;
        n = i;
        i = r;
      }
      a = n;
      for (; a <= i; a++) {
        if (!this.chosedNodeIndexArr.includes(a)) {
          this.chosedNodeIndexArr.push(a);
          this.chosedNodeArr.push(this.layoutNode.getChildByName("child" + a));
          this.layoutNode.getChildByName("child" + a).color = this.changeColor;
        }
      }
    } else {
      if (n > i) {
        r = n;
        n = i;
        i = r;
      }
      var c = (i - i % t) / t - (n - n % t) / t;
      for (a = 0; a <= c; a++) {
        var l = n + a * t;
        var d = i - (c - a) * t;
        if (l > d) {
          r = l;
          l = d;
          d = r;
        }
        for (var s = l; s <= d; s++) {
          if (!this.chosedNodeIndexArr.includes(s)) {
            this.chosedNodeIndexArr.push(s);
            this.chosedNodeArr.push(this.layoutNode.getChildByName("child" + s));
            this.layoutNode.getChildByName("child" + s).color = this.changeColor;
          }
        }
      }
    }
  };
  o.prototype.juedeCorrect = function () {
    if (this.chosedNodeIndexArr.length != this.aimIndex.length) {
      for (var e = 0; e < this.chosedNodeArr.length; e++) {
        this.chosedNodeArr[e].color = this.initColor;
      }
      this.chosedNodeArr = [];
      this.chosedNodeIndexArr = [];
      return void (this.moveFlag = false);
    }
    this.rankArr(this.chosedNodeIndexArr);
    for (var o = [], t = 0; t < this.chosedNodeIndexArr.length; t++) {
      o.push(this.layoutNode.getChildByName("child" + this.chosedNodeIndexArr[t]).imgIndex);
    }
    if (this.isEqual(o, this.aimIndex)) {
      window.adUtil.playMusicEffect(this.successClip, false);
      this.eliminateBlocks();
    } else {
      for (e = 0; e < this.chosedNodeArr.length; e++) {
        this.chosedNodeArr[e].color = this.initColor;
      }
      this.moveFlag = false;
    }
  };
  o.prototype.rankArr = function (e) {
    if (!(e.length < 2)) {
      for (var o, t = 0; t < e.length - 1; t++) {
        for (var n = 0; n < e.length - 1 - t; n++) {
          if (e[n] > e[n + 1]) {
            o = e[n];
            e[n] = e[n + 1];
            e[n + 1] = o;
          }
        }
      }
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
  o.prototype.eliminateBlocks = function () {
    for (var e = this, o = this, t = 0, n = function (n) {
        cc.tween(i.chosedNodeArr[n]).to(0.4, {
          opacity: 0
        }, {
          easing: "quadIn"
        }).call(function () {
          o.chosedNodeArr[n].destroy();
          if (++t == e.chosedNodeArr.length) {
            o.dropBlocks();
          }
        }).start();
      }, i = this, r = 0; r < this.chosedNodeArr.length; r++) {
      n(r);
    }
  };
  o.prototype.dropBlocks = function () {
    for (var e = this.chosedNodeIndexArr[0], o = 1; e - o * this.blockNumPerLine >= 0; o++) {
      var t = "child" + (e - o * this.blockNumPerLine);
      var n = "child" + (e + 1 - o * this.blockNumPerLine);
      this.layoutNode.getChildByName(t).y -= 2 * this.blockWidth;
      this.layoutNode.getChildByName(t).index += 2 * this.blockNumPerLine;
      this.layoutNode.getChildByName(t).name = "child" + (e - o * this.blockNumPerLine + 2 * this.blockNumPerLine);
      this.layoutNode.getChildByName(n).y -= 2 * this.blockWidth;
      this.layoutNode.getChildByName(n).index += 2 * this.blockNumPerLine;
      this.layoutNode.getChildByName(n).name = "child" + (e + 1 - o * this.blockNumPerLine + 2 * this.blockNumPerLine);
    }
    var i = e % this.blockNumPerLine;
    for (o = 0; o < 4; o++) {
      var r = cc.instantiate(this.emojiPre);
      r.height = this.blockWidth;
      r.width = this.blockWidth;
      r.color = this.initColor;
      var a = Math.floor(Math.random() * this.img.length);
      r.getChildByName("img").height = 0.8 * this.blockWidth;
      r.getChildByName("img").width = 0.8 * this.blockWidth;
      r.getChildByName("img").getComponent(cc.Sprite).spriteFrame = this.img[a];
      r.imgIndex = a;
      r.x = o % 2 == 0 ? this.blockWidth * i : this.blockWidth * (i + 1);
      if (o < 2) {
        r.y = 0;
        r.name = "child" + (o + i);
        r.index = o + i;
      } else {
        r.y = -1 * this.blockWidth;
        r.name = "child" + (o - 2 + i + this.blockNumPerLine);
        r.index = o - 2 + i + this.blockNumPerLine;
      }
      this.layoutNode.addChild(r);
    }
    this.score += 4;
    this.leftTime += 10;
    this.updateScore();
    if (this.layoutNode.getChildByName("guide")) {
      this.layoutNode.getChildByName("guide").destroy();
    }
    this.judgeLevelUp();
    this.chosedNodeArr = [];
    this.chosedNodeIndexArr = [];
    this.scheduleOnce(this.getAimImg, 0.5);
  };
  o.prototype.updateScore = function () {
    this.scoreLabel.string = "得分：" + this.score;
  };
  o.prototype.updateTime = function () {
    window.game22.leftTime--;
    if (this.leftTime <= 0) {
      this.unschedule(this.updateTime);
      this.loadFail();
    } else if (this.leftTime > 60) {
      this.leftTime = 60;
    }
    this.timeLine.width = 9 * this.leftTime;
  };
  o.prototype.judgeLevelUp = function () {
    if (!(this.level >= this.levelUpArr.length) && this.score >= this.levelUpArr[this.level]) {
      this.level++;
      var e = cc.instantiate(this.levelUpPre);
      cc.find("Canvas").addChild(e);
    }
  };
  o.prototype.loadFail = function () {
    window.adUtil.playMusicEffect(this.failClip, false);
    this.scheduleOnce(function () {
      cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
        o.load("prefab/ui/failUI" + window.adUtil.useHallData("gameoverSkin", "wenzizhaobutong"), cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas").addChild(t);
          t.zIndex = 1;
        });
      });
    }, 0.5);
  };
  o.prototype.showTips = function () {
    if (this.layoutNode.getChildByName("guide")) {
      window.adUtil.toast("已提示");
    } else {
      this.tipsNode.getComponent(cc.Button).interactable = false;
      var e = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
      if (e > 0) {
        e--;
        cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", e + "");
        if (e <= 0) {
          this.adNode.active = true;
          this.hintNode.active = false;
        } else {
          this.hintNum.string = e + "";
        }
        this.showAnswer();
      } else {
        window.vivoVideoAd_hall.initRewardedAd(function () {
          window.game.showAnswer();
        }, function () {});
      }
    }
  };
  o.prototype.showAnswer = function () {
    var e = this;
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
      t.load("prefab/ui/guide", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        var i = e.blockWidth / 2;
        var r = cc.v2(e.layoutNode.getChildByName("child" + e.aimBlockIndex).x + i, e.layoutNode.getChildByName("child" + e.aimBlockIndex).y - i);
        var a = cc.v2(e.layoutNode.getChildByName("child" + (e.aimBlockIndex + 1 + e.blockNumPerLine)).x + i, e.layoutNode.getChildByName("child" + (e.aimBlockIndex + 1 + e.blockNumPerLine)).y - i);
        e.layoutNode.addChild(n);
        n.setPosition(r.x, r.y);
        var c = cc.moveTo(0.5, r);
        var l = cc.moveTo(0.8, a);
        n.runAction(cc.repeatForever(cc.sequence(c, l)));
      });
    });
  };
  o.prototype.clickBack = function () {
    cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
  };
  r([d(cc.Prefab)], o.prototype, "emojiPre", undefined);
  r([d(cc.Prefab)], o.prototype, "levelUpPre", undefined);
  r([d(cc.Node)], o.prototype, "btnNode", undefined);
  r([d(cc.Node)], o.prototype, "tipsNode", undefined);
  r([d(cc.Node)], o.prototype, "adNode", undefined);
  r([d(cc.Node)], o.prototype, "hintNode", undefined);
  r([d(cc.Label)], o.prototype, "hintNum", undefined);
  r([d(cc.Label)], o.prototype, "scoreLabel", undefined);
  r([d(cc.Node)], o.prototype, "timeLine", undefined);
  r([d(cc.Node)], o.prototype, "aimImgNode", undefined);
  r([d(cc.Node)], o.prototype, "layoutNode", undefined);
  r([d(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([d(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([d([cc.SpriteFrame])], o.prototype, "img", undefined);
  return r([l], o);
}(a.default);
exports.default = s;