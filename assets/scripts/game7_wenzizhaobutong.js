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
    window.game7 = this;
    this.lastAnswer = [];
    this.similarityTarget = 0.8;
    this.successCount = 0;
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
      var r;
      var a;
      var l;
      var d;
      var s;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (window.levelResModel7) {
              return [3, 2];
            } else {
              e = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/naoli")];
            }
          case 1:
            e.levelResModel7 = c.sent();
            c.label = 2;
          case 2:
            if (window.ziRelResModel7) {
              return [3, 4];
            } else {
              o = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/zi_rel")];
            }
          case 3:
            o.ziRelResModel7 = c.sent();
            c.label = 4;
          case 4:
            this.levelData = window.ziRelResModel7.json[window.levelResModel7.json[window.currentLevel - 1]];
            t = [];
            d = 0;
            for (; d < this.levelData.points.length; d++) {
              n = this.levelData.points[d];
              i = [];
              r = 0;
              for (; r < n.length; r++) {
                (a = {}).x = n[r].x;
                if (n[r].y > 0) {
                  a.y = 0 - n[r].y;
                } else {
                  a.y = n[r].y;
                }
                i.push(a);
              }
              t.push(i);
            }
            this.levelData.points = t;
            this.contentLabel.string = this.levelData.zi_content;
            l = this.levelData.child.split(",");
            d = 0;
            for (; d < l.length; d++) {
              (s = cc.instantiate(this.answerItemPrefab)).getChildByName("answerLabel").getComponent(cc.Label).string = l[d];
              this.answerNode.addChild(s);
            }
            return [2];
        }
      });
    });
  };
  o.prototype.loadBlackBoard = function () {
    var e = cc.instantiate(this.blackBoardPrefab);
    cc.find("Canvas/blackBoard").addChild(e);
  };
  o.prototype.check = function (e) {
    for (var o = -1, t = 0, n = this.levelData.child.split(","), i = "", r = 0; r < this.levelData.points.length; r++) {
      for (var a = l.shapeSimilarity(this.levelData.points[r], e, {
          estimationPoints: 50,
          checkRotations: false
        }), c = l.shapeSimilarity(this.levelData.points[r], e.reverse(), {
          estimationPoints: 50,
          checkRotations: false
        }), d = a > c ? a : c, s = false, u = 0; u < this.lastAnswer.length; u++) {
        if (n[r] == this.lastAnswer[u]) {
          s = true;
          break;
        }
      }
      if (d > this.similarityTarget && d > t) {
        if (s) {
          i += "\"" + n[r] + "\" ";
        } else {
          o = r;
          t = d;
        }
      }
    }
    if (o >= 0 && o < this.levelData.points.length) {
      this.successIndex = o;
      this.successContent = this.levelData.child.split(",")[o];
      this.success();
    } else {
      if (i.length > 0) {
        window.adUtil.toast(i + "已经回答过了");
      }
      this.reLoadBlackBoard();
    }
  };
  o.prototype.success = function () {
    var e = this;
    this.successCount++;
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
    window.lineAnswer.draw.clear();
    this.lastAnswer.push(this.successContent);
    this.contentLabel.string = this.successContent;
    for (var o = this.answerNode.children, t = 0; t < o.length; t++) {
      if (this.successContent == o[t].getChildByName("answerLabel").getComponent(cc.Label).string) {
        o[t].getChildByName("questionLabel").active = false;
        o[t].getChildByName("answerLabel").active = true;
        break;
      }
    }
    this.scheduleOnce(function () {
      if (e.successCount == o.length) {
        e.levelUpCallback();
        e.judgeShowWinUI(6);
      } else {
        e.contentLabel.string = e.levelData.zi_content;
        e.reLoadBlackBoard();
        e.drawAnswerFlag = false;
      }
    }, 1);
  };
  o.prototype.reLoadBlackBoard = function () {
    cc.find("Canvas/blackBoard").removeAllChildren();
    if (cc.find("Canvas/line")) {
      cc.find("Canvas/line").destroy();
    }
    this.loadBlackBoard();
  };
  o.prototype.drawAnswer = function () {
    if (this.drawAnswerFlag) {
      window.adUtil.toast("已提示");
    } else {
      var e = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
      if (e > 0) {
        e--;
        cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", e + "");
        this.loadHint();
        window.game.drawAnswerSuccCb();
      } else {
        window.vivoVideoAd_hall.initRewardedAd(function () {
          window.game.drawAnswerSuccCb();
        }, function () {});
      }
    }
  };
  o.prototype.drawAnswerSuccCb = function () {
    this.drawAnswerFlag = true;
    var e;
    var o = this.levelData.child.split(",");
    for (e = 0; e < o.length; e++) {
      for (var t = false, n = 0; n < this.lastAnswer.length; n++) {
        if (o[e] == this.lastAnswer[n]) {
          t = true;
          break;
        }
      }
      if (!t) {
        break;
      }
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