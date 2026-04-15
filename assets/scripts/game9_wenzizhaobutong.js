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
var l = require("./index_wenzizhaobutong");
var d = require("./game_wenzizhaobutong");
var s = cc._decorator;
var u = s.ccclass;
var h = s.property;
var w = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.titleLabel = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.contentLabel = null;
    o.blackBoardPrefab = null;
    o.musicBg = null;
    o.answerItemPrefab = null;
    o.answerNode = null;
    o.getTipsPrefab = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.similarityTarget = 0.8;
    this.successCount = 0;
    this.channel = 0;
    e.prototype.onLoad.call(this);
    this.loadBlackBoard();
    this.loadConfig();
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
    this.showGetTipsPrefab();
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      var n;
      var i;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            if (window.levelResModel9) {
              return [3, 2];
            } else {
              e = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
            }
          case 1:
            e.levelResModel9 = r.sent();
            r.label = 2;
          case 2:
            if (window.ziRelResModel9) {
              return [3, 4];
            } else {
              o = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/zi_rel")];
            }
          case 3:
            o.ziRelResModel9 = r.sent();
            r.label = 4;
          case 4:
            this.jielongData = window.levelResModel9.json[window.currentLevel - 1];
            this.levelData = window.ziRelResModel9.json[this.jielongData.id];
            this.setLevelDataPoints();
            this.contentLabel.string = this.levelData.zi_content;
            this.jielongAnswerArr = this.jielongData.answer.split("/");
            t = this.jielongAnswerArr[0].split(",");
            n = 1;
            for (; n < t.length; n++) {
              i = cc.instantiate(this.answerItemPrefab);
              this.answerNode.addChild(i);
            }
            return [2];
        }
      });
    });
  };
  o.prototype.setLevelDataPoints = function () {
    for (var e = [], o = 0; o < this.levelData.points.length; o++) {
      for (var t = this.levelData.points[o], n = [], i = 0; i < t.length; i++) {
        var r = {};
        r.x = t[i].x;
        if (t[i].y > 0) {
          r.y = 0 - t[i].y;
        } else {
          r.y = t[i].y;
        }
        n.push(r);
      }
      e.push(n);
    }
    this.levelData.points = e;
  };
  o.prototype.loadBlackBoard = function () {
    var e = cc.instantiate(this.blackBoardPrefab);
    cc.find("Canvas/blackBoard").addChild(e);
  };
  o.prototype.check = function (e) {
    for (var o = -1, t = 0; t < this.jielongAnswerArr.length; t++) {
      var n = this.jielongAnswerArr[t].split(",");
      var i = this.levelData.child.split(",");
      if (!(this.successCount > 0 && this.contentLabel.string != n[this.successCount])) {
        for (var r = n[this.successCount + 1], a = 0; a < this.levelData.points.length; a++) {
          var c = l.shapeSimilarity(this.levelData.points[a], e, {
            estimationPoints: 50,
            checkRotations: false
          });
          var d = l.shapeSimilarity(this.levelData.points[a], e.reverse(), {
            estimationPoints: 50,
            checkRotations: false
          });
          if ((c > d ? c : d) > this.similarityTarget && r == i[a]) {
            o = a;
          }
          if (o >= 0 && o < this.levelData.points.length) {
            this.successIndex = o;
            this.successContent = r;
            this.channel = t;
            this.success();
            break;
          }
        }
        if (o >= 0 && o < this.levelData.points.length) {
          break;
        }
      }
    }
    if (-1 == o) {
      this.reLoadBlackBoard();
    }
  };
  o.prototype.success = function () {
    var e = this;
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
    window.lineAnswer.draw.clear();
    this.contentLabel.string = this.successContent;
    var o = this.answerNode.children;
    o[this.successCount].getChildByName("questionLabel").active = false;
    o[this.successCount].getChildByName("answerLabel").active = true;
    o[this.successCount].getChildByName("answerLabel").getComponent(cc.Label).string = this.successContent;
    this.successCount++;
    if (this.successCount == o.length) {
      this.scheduleOnce(function () {
        e.levelUpCallback();
        e.judgeShowWinUI(6);
      }, 1);
    } else {
      this.levelData = window.ziRelResModel9.json[this.levelData.child_id.split(",")[this.successIndex]];
      this.setLevelDataPoints();
      this.reLoadBlackBoard();
      this.drawAnswerFlag = false;
    }
  };
  o.prototype.reLoadBlackBoard = function () {
    cc.find("Canvas/blackBoard").removeAllChildren();
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
    this.loadBlackBoard();
  };
  o.prototype.showTips = function () {
    if (this.drawAnswerFlag) {
      window.adUtil.toast("已提示");
    } else {
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
          window.game.showAnswer();
        }, function () {});
      }
    }
  };
  o.prototype.showAnswer = function () {
    this.drawAnswerFlag = true;
    var e;
    var o = this.levelData.child.split(",");
    var t = this.jielongAnswerArr[this.channel].split(",")[this.successCount + 1];
    for (e = 0; e < o.length && t != o[e]; e++) {
      ;
    }
    window.lineAnswer.drawPoints(this.levelData.points[e]);
  };
  o.prototype.fail = function () {
    cc.find("Canvas/blackBoard").removeAllChildren();
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
    this.loadBlackBoard();
  };
  r([h(cc.Label)], o.prototype, "titleLabel", undefined);
  r([h(cc.Node)], o.prototype, "tipsNode", undefined);
  r([h(cc.Node)], o.prototype, "adNode", undefined);
  r([h(cc.Node)], o.prototype, "hintNode", undefined);
  r([h(cc.Label)], o.prototype, "hintNum", undefined);
  r([h(cc.Label)], o.prototype, "contentLabel", undefined);
  r([h(cc.Prefab)], o.prototype, "blackBoardPrefab", undefined);
  r([h(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([h(cc.Prefab)], o.prototype, "answerItemPrefab", undefined);
  r([h(cc.Node)], o.prototype, "answerNode", undefined);
  r([h(cc.Prefab)], o.prototype, "getTipsPrefab", undefined);
  return r([u], o);
}(d.default);
exports.default = w;