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
var l = require("./config25_wenzizhaobutong");
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
    o.musicBg = null;
    o.answerItemPrefab = null;
    o.answerCurrentLabel = null;
    o.answeredLabelNode = null;
    o.answeredNode = null;
    o.blockBoardNode = null;
    o.quest = null;
    o.answer = null;
    o.jsonData = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game = this;
    e.prototype.onLoad.call(this);
    this.loadConfig();
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
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
      var d;
      var s;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            this.titleLabel.string = "第" + window.currentLevel + "关";
            this.jsonData = window.levelResModel.json.data[window.currentLevel - 1];
            this.quest = this.jsonData.q;
            this.answer = this.jsonData.a.split(",");
            e = l.default.instance().getImageNameArr(this.jsonData.q);
            o = e.data;
            this.answerArr = e.answer;
            a = 0;
            c.label = 1;
          case 1:
            if (a < o.length) {
              return [4, window.adUtil.loadSpriteFrameByBundleSync("resources_25_wenzizhaobutong", "yiyibi/" + o[a].n)];
            } else {
              return [3, 4];
            }
          case 2:
            t = c.sent();
            (s = new cc.Node()).name = o[a].n;
            n = s.addComponent(cc.Sprite);
            this.blockBoardNode.addChild(s);
            n.spriteFrame = t;
            s.x = o[a].x;
            s.y = -o[a].y;
            s.addComponent("move25_wenzizhaobutong");
            c.label = 3;
          case 3:
            a++;
            return [3, 1];
          case 4:
            i = JSON.parse(cc.sys.localStorage.getItem("answer25_wenzizhaobutong") || "{}");
            if (r = i[this.quest]) {
              for (a = 0; a < r.length; a++) {
                d = r[a];
                (s = cc.instantiate(this.answerItemPrefab)).getChildByName("questionLabel").active = false;
                s.getChildByName("answerLabel").active = true;
                s.getChildByName("answerLabel").getComponent(cc.Label).string = d;
                this.answeredLabelNode.active = true;
                this.answeredNode.addChild(s);
              }
            }
            if (window.currentLevel == 1) {
              window.game.loadGuideMove(cc.v2(-14, 217), cc.v2(122, -302), 1.4);
            }
            return [2];
        }
      });
    });
  };
  o.prototype.showWinUI = function () {
    return a(this, undefined, undefined, function () {
      var o;
      var t;
      var n;
      var i;
      var r;
      var a = this;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            cc.find("Canvas/blockNode").active = true;
            return [4, window.adUtil.loadPrefabSync("prefab/ui/right")];
          case 1:
            o = c.sent();
            t = cc.instantiate(o);
            this.node.addChild(t);
            t.y = this.answeredNode.y - 50;
            this.showAnswer();
            n = Number(cc.sys.localStorage.getItem("level" + window.model + "_wenzizhaobutong") || 1);
            if (this.answer.length > 1 && window.currentLevel >= n) {
              if (!(i = JSON.parse(cc.sys.localStorage.getItem("answer25_wenzizhaobutong") || "{}"))[this.quest]) {
                i[this.quest] = [];
              }
              i[this.quest].push(window.game.correctAnswer);
              r = JSON.stringify(i);
              cc.sys.localStorage.setItem("answer25_wenzizhaobutong", r);
            }
            this.levelUpCallback();
            this.scheduleOnce(function () {
              e.prototype.showWinUI.call(a);
            }, 2);
            return [2];
        }
      });
    });
  };
  o.prototype.clickTips = function () {
    var e = function () {
      var e = JSON.parse(cc.sys.localStorage.getItem("answer25_wenzizhaobutong") || "{}")[window.game.quest];
      window.game.correctAnswer = null;
      for (var o = 0; o < window.game.answer.length; o++) {
        if (e) {
          var t = undefined;
          for (t = 0; t < e.length && e[t] != window.game.answer[o]; t++) {
            ;
          }
          if (t >= e.length) {
            window.game.correctAnswer = window.game.answer[o];
          }
        } else {
          window.game.correctAnswer = window.game.answer[o];
        }
      }
      if (!window.game.correctAnswer) {
        var n = Math.floor(Math.random() * window.game.answer.length);
        window.game.correctAnswer = window.game.answer[n];
      }
      window.game.showAnswer();
    };
    var o = Number(cc.sys.localStorage.getItem("hintNum_wenzizhaobutong"));
    if (o > 0) {
      o--;
      cc.sys.localStorage.setItem("hintNum_wenzizhaobutong", o + "");
      e();
      if (o <= 0) {
        this.adNode.active = true;
        this.hintNode.active = false;
      } else {
        this.hintNum.string = o + "";
      }
    } else {
      window.vivoVideoAd_hall.initRewardedAd(function () {
        e();
      }, function () {});
    }
  };
  o.prototype.showAnswer = function () {
    this.answerCurrentLabel.active = true;
    this.answerCurrentLabel.getComponent(cc.Label).string = "答案：" + window.game.correctAnswer;
  };
  r([h(cc.Label)], o.prototype, "titleLabel", undefined);
  r([h(cc.Node)], o.prototype, "adNode", undefined);
  r([h(cc.Node)], o.prototype, "hintNode", undefined);
  r([h(cc.Label)], o.prototype, "hintNum", undefined);
  r([h(cc.Label)], o.prototype, "contentLabel", undefined);
  r([h(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([h(cc.Prefab)], o.prototype, "answerItemPrefab", undefined);
  r([h(cc.Node)], o.prototype, "answerCurrentLabel", undefined);
  r([h(cc.Node)], o.prototype, "answeredLabelNode", undefined);
  r([h(cc.Node)], o.prototype, "answeredNode", undefined);
  r([h(cc.Node)], o.prototype, "blockBoardNode", undefined);
  return r([u], o);
}(d.default);
exports.default = w;