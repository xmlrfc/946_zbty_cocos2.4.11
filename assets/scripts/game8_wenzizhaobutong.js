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
    o.layoutNode = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.successClip = null;
    o.musicBg = null;
    o.jsonLevel = null;
    o.jsonPos = null;
    o.preZi = null;
    o.answerNode = null;
    o.answerListPrefab = null;
    o.getTipsPrefab = null;
    o.width = 8;
    o.diffNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game8 = this;
    this.btnNode.active = false;
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getCollisionManager().enabled = true;
    e.prototype.onLoad.call(this);
    this.answers = [];
    this.answersMaxLength = 14;
    var o = 0;
    for (var t in this.jsonLevel.json) {
      o++;
    }
    var n = [];
    var i = [];
    if (window.currentLevel < o) {
      n = this.jsonPos.json[window.currentLevel + ""];
      i = this.jsonLevel.json[window.currentLevel + ""];
    } else {
      var r = Math.floor(20 * Math.random() + o);
      n = this.jsonPos.json[r + ""];
      for (var a = this.jsonLevel.json[o + ""], c = 0; c < 16; c++) {
        var l = a.length;
        var d = Math.floor(Math.random() * l);
        i.push(a[d]);
        a.splice(d, 1);
      }
    }
    window.game8.leftZiArr = i.slice(0);
    for (var s = 0; s < n.length; s++) {
      for (var u = 0; u < n[s].length; u++) {
        var h = cc.instantiate(this.preZi);
        var w = n[s][u];
        var p = w % this.width;
        var f = (w - p) / this.width;
        h.x = p * (this.layoutNode.width / this.width);
        h.y = -1 * f * (this.layoutNode.width / this.width);
        h.index = w;
        h.name = "position" + w;
        h.getChildByName("zi").getComponent(cc.Label).string = i[s][u] + "";
        h.getComponent("itemModel8_wenzizhaobutong").setOriginalPos(cc.v2(h.x, h.y));
        this.layoutNode.addChild(h);
      }
    }
    this.btnNode.active = true;
    if (window.currentLevel == 1) {
      var y = this.layoutNode.children;
      this.guideArr = [y[57], y[58], y[59], y[60], y[61], y[62], y[63]];
      console.log(this.guideArr);
      window.game8.guideNum = 0;
      window.adUtil.loadGuide(this.guideArr[0], cc.v2(this.guideArr[0].width / 2, -this.guideArr[0].height / 2));
    }
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
    this.showGetTipsPrefab();
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
    if (this.leftZiArr.length == 0) {
      console.log("游戏结束");
      this.scheduleOnce(function () {
        e.levelUpCallback();
        e.judgeShowWinUI(6);
      }, 0.5);
    }
  };
  o.prototype.recovery = function () {
    this.answers = [];
    for (var e = this.answerNode.children.slice(0), o = 0; o < e.length; o++) {
      e[o].getComponent("itemModel8_wenzizhaobutong").moveOutAnswer();
    }
  };
  o.prototype.pushIntoAnswer = function (e) {
    this.answers.push(e);
    for (var o = 0; o < this.answers.length; o++) {
      for (var t = this.connectStr(this.answers, o), n = 0; n < this.leftZiArr.length; n++) {
        if (this.isEqual(t, this.leftZiArr[n])) {
          this.leftZiArr.splice(n, 1);
          window.adUtil.playMusicEffect(this.successClip, false);
          for (var i = this.answerNode.children.slice(0), r = o; r < i.length; r++) {
            i[r].destroy();
          }
          this.answers = this.answers.splice(0, o);
          this.checkWin();
          break;
        }
      }
    }
  };
  o.prototype.connectStr = function (e, o) {
    for (var t = "", n = o; n < e.length; n++) {
      t += e[n];
    }
    return t;
  };
  o.prototype.showTips = function () {
    var e = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
    if (e > 0) {
      e--;
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", e + "");
      this.showAnswer();
      if (e <= 0) {
        this.adNode.active = true;
        this.hintNode.active = false;
      } else {
        this.hintNum.string = e + "";
      }
    } else {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        window.game8.showAnswer();
      }, function () {});
    }
  };
  o.prototype.showAnswer = function () {
    var e = cc.instantiate(this.answerListPrefab);
    e.getComponent("answerList_wenzizhaobutong").setContent(window.game8.leftZiArr);
    this.node.addChild(e);
  };
  r([d(cc.Node)], o.prototype, "layoutNode", undefined);
  r([d(cc.Label)], o.prototype, "titleLabel", undefined);
  r([d(cc.Node)], o.prototype, "btnNode", undefined);
  r([d(cc.Node)], o.prototype, "tipsNode", undefined);
  r([d(cc.Node)], o.prototype, "adNode", undefined);
  r([d(cc.Node)], o.prototype, "hintNode", undefined);
  r([d(cc.Label)], o.prototype, "hintNum", undefined);
  r([d(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([d(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([d(cc.JsonAsset)], o.prototype, "jsonLevel", undefined);
  r([d(cc.JsonAsset)], o.prototype, "jsonPos", undefined);
  r([d(cc.Prefab)], o.prototype, "preZi", undefined);
  r([d(cc.Node)], o.prototype, "answerNode", undefined);
  r([d(cc.Prefab)], o.prototype, "answerListPrefab", undefined);
  r([d(cc.Prefab)], o.prototype, "getTipsPrefab", undefined);
  return r([l], o);
}(a.default);
exports.default = s;