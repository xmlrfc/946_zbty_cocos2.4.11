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
    o.successPrefab = null;
    o.failPrefab = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.questionLabel = null;
    o.answerLabel = null;
    o.replyItemPrefab = null;
    o.replyNode = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.size = 25;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game20 = this;
    this.btnNode.active = false;
    this.gameWinFlag = undefined;
    this.successCount = 0;
    this.answerLabel.node.active = false;
    e.prototype.onLoad.call(this);
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
      var u;
      var h;
      var w;
      var p;
      var f;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (window.levelResModel20_wenzizhaobutong) {
              return [3, 2];
            } else {
              e = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
            }
          case 1:
            e.levelResModel20_wenzizhaobutong = c.sent();
            c.label = 2;
          case 2:
            if (window.ziWrongModel20) {
              return [3, 4];
            } else {
              o = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/zi")];
            }
          case 3:
            o.ziWrongModel20 = c.sent();
            c.label = 4;
          case 4:
            t = window.ziWrongModel20.json.data;
            this.jielongData = window.levelResModel20_wenzizhaobutong.json[window.currentLevel - 1];
            this.jielongData.answer1 = this.jielongData.answer.slice(0);
            this.questionLabel.string = this.jielongData.question;
            this.answerLabel.string = this.jielongData.hint;
            this.loadReply();
            n = this.jielongData.answer1;
            this.itemIndex1 = [];
            i = [];
            r = 0;
            for (; r < this.size; r++) {
              i.push(r);
            }
            for (a = 0; a < n.length; a++) {
              l = Math.floor(Math.random() * i.length);
              this.itemIndex1.push(i[l]);
              i.splice(l, 1);
            }
            d = [];
            s = 0;
            c.label = 5;
          case 5:
            if (s < this.size) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_wenzizhaobutong", "prefab/ui/item")];
            } else {
              return [3, 8];
            }
          case 6:
            u = c.sent();
            (h = cc.instantiate(u)).addComponent("clickNodeModel18_wenzizhaobutong");
            this.layoutNode.addChild(h);
            if (this.include(this.itemIndex1, s)) {
              h.getComponent(cc.Label).string = this.jielongData.answer1[Number(this.include(this.itemIndex1, s))];
              if (this.jielongData.wrong) {
                h.getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(true);
              } else {
                this.updateNodeClick(h, s);
              }
            } else {
              undefined;
              w = this.jielongData.wrong ? this.jielongData.wrong : t;
              p = Math.floor(Math.random() * w.length);
              f = w[p];
              for (; this.include(this.jielongData.answer1, f) || this.include(d, f);) {
                p = Math.floor(Math.random() * w.length);
                f = w[p];
              }
              d.push(f);
              h.getComponent(cc.Label).string = f;
              h.getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(false);
            }
            c.label = 7;
          case 7:
            s++;
            return [3, 5];
          case 8:
            this.btnNode.active = true;
            return [2];
        }
      });
    });
  };
  o.prototype.include = function (e, o) {
    for (var t = 0; t < e.length; t++) {
      if (e[t] == o) {
        return t + "";
      }
    }
    return false;
  };
  o.prototype.updateNodeClick = function (e, o) {
    if (o == this.itemIndex1[this.successCount]) {
      e.getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(true);
    } else {
      e.getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(false);
    }
  };
  o.prototype.updateFinishProgress = function () {
    window.adUtil.playMusicEffect(this.successClip, false);
    this.successCount++;
    this.showReply();
    this.checkSuccess();
  };
  o.prototype.loadReply = function () {
    for (var e = 0; e < window.game.jielongData.answer.length; e++) {
      var o = cc.instantiate(this.replyItemPrefab);
      this.replyNode.addChild(o);
    }
  };
  o.prototype.showReply = function () {
    this.replyNode.children[this.successCount - 1].getChildByName("questionLabel").active = false;
    this.replyNode.children[this.successCount - 1].getChildByName("answerLabel").active = true;
    this.replyNode.children[this.successCount - 1].getChildByName("answerLabel").getComponent(cc.Label).string = window.game.rightWordNow;
  };
  o.prototype.clickFail = function () {
    window.adUtil.playMusicEffect(this.failClip, false);
  };
  o.prototype.checkSuccess = function () {
    if (this.itemIndex1.length == this.successCount) {
      this.answerLabel.node.active = true;
      this.success();
    } else {
      this.layoutNode.children[this.itemIndex1[this.successCount]].getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(true);
    }
  };
  o.prototype.success = function () {
    var e = this;
    this.gameWinFlag = true;
    this.scheduleOnce(function () {
      e.levelUpCallback();
      e.judgeShowWinUI(6);
    }, 2);
  };
  o.prototype.showTips = function () {
    if (!this.gameWinFlag) {
      if (this.answerLabel.node.active) {
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
    }
  };
  o.prototype.showAnswer = function () {
    this.answerLabel.node.active = true;
  };
  r([u(cc.Node)], o.prototype, "layoutNode", undefined);
  r([u(cc.Prefab)], o.prototype, "successPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "failPrefab", undefined);
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "btnNode", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Label)], o.prototype, "questionLabel", undefined);
  r([u(cc.Label)], o.prototype, "answerLabel", undefined);
  r([u(cc.Prefab)], o.prototype, "replyItemPrefab", undefined);
  r([u(cc.Node)], o.prototype, "replyNode", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  return r([s], o);
}(l.default);
exports.default = h;