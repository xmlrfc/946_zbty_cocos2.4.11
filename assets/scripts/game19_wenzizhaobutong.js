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
    o.answerItemPrefab = null;
    o.titleLabel = null;
    o.btnNode = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.questionLabel = null;
    o.question = null;
    o.answerNumLabel = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.size = 36;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game19 = this;
    this.btnNode.active = false;
    this.gameWinFlag = undefined;
    this.successCount = 0;
    e.prototype.onLoad.call(this);
    this.loadConfig();
  };
  o.prototype.start = function () {
    if (!(window.musicBgFlag && window.miniPlatForm != "tt")) {
      window.adUtil.playMusic(this.musicBg, true);
      window.musicBgFlag = true;
    }
    this.loadStartAd();
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
      o.load("prefab/ui/countdown/countdown", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
        t.y -= 250;
      });
    });
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
      var y;
      var g;
      var m;
      var v;
      var _;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (window.levelResModel19_wenzizhaobutong) {
              return [3, 2];
            } else {
              e = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/jielong")];
            }
          case 1:
            e.levelResModel19_wenzizhaobutong = c.sent();
            c.label = 2;
          case 2:
            if (window.ziWrongModel19) {
              return [3, 4];
            } else {
              o = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/zi")];
            }
          case 3:
            o.ziWrongModel19 = c.sent();
            c.label = 4;
          case 4:
            t = window.ziWrongModel19.json.data;
            this.jielongData = window.levelResModel19_wenzizhaobutong.json[window.currentLevel - 1];
            this.jielongData.answer1 = this.jielongData.answer.slice(0);
            if (this.jielongData.answer1.indexOf("/") > -1) {
              this.jielongData.answer1 = this.jielongData.answer1.split("/");
              n = this.jielongData.answer1.length;
              i = Math.floor(Math.random() * n);
              this.jielongData.answer1 = this.jielongData.answer1[i];
            }
            if (this.jielongData.answer1.indexOf(",") > -1) {
              this.jielongData.answer1 = this.jielongData.answer1.split(",");
            }
            this.jielongData.answer1 = this.oppsiteArr(this.jielongData.answer1);
            r = this.jielongData.answer1.length <= 5 ? 10 : 5;
            a = 100 * this.jielongData.answer1.length + (this.jielongData.answer1.length - 1) * r;
            l = 0;
            for (; l < this.jielongData.answer1.length; l++) {
              (d = cc.instantiate(this.answerItemPrefab)).x = 100 * l + l * r + 50 - a / 2;
              this.question.addChild(d);
              d.getChildByName("answerLabel").getComponent(cc.Label).string = this.jielongData.answer1[l];
              if (l == 0) {
                d.getChildByName("answerLabel").active = true;
                d.getChildByName("questionLabel").active = false;
              } else {
                d.getChildByName("answerLabel").active = false;
                d.getChildByName("questionLabel").active = true;
              }
            }
            this.jielongData.answer1.splice(0, 1);
            this.answerNumLabel.string = this.successCount + 1 + "/" + (this.jielongData.answer1.length + 1);
            s = this.jielongData.answer1;
            this.itemIndex1 = [];
            u = [];
            h = 0;
            for (; h < this.size; h++) {
              u.push(h);
            }
            for (w = 0; w < s.length; w++) {
              p = Math.floor(Math.random() * u.length);
              this.itemIndex1.push(u[p]);
              u.splice(p, 1);
            }
            f = [];
            console.log(this.itemIndex1);
            y = 0;
            c.label = 5;
          case 5:
            if (y < this.size) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_wenzizhaobutong", "prefab/ui/item")];
            } else {
              return [3, 8];
            }
          case 6:
            g = c.sent();
            (m = cc.instantiate(g)).addComponent("clickNodeModel18_wenzizhaobutong");
            if (this.include(this.itemIndex1, y)) {
              m.getComponent(cc.Label).string = this.jielongData.answer1[Number(this.include(this.itemIndex1, y))];
            } else {
              v = Math.floor(Math.random() * t.length);
              _ = t[v];
              for (; this.include(this.jielongData.answer1, _) || this.include(f, _);) {
                v = Math.floor(Math.random() * t.length);
                _ = t[v];
              }
              f.push(_);
              m.getComponent(cc.Label).string = _;
            }
            this.layoutNode.addChild(m);
            c.label = 7;
          case 7:
            y++;
            return [3, 5];
          case 8:
            this.updateNodeClick();
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
  o.prototype.oppsiteArr = function (e) {
    for (var o = [], t = e.length - 1; t >= 0; t--) {
      o.push(e[t]);
    }
    return o;
  };
  o.prototype.updateNodeClick = function () {
    for (var e = 0; e < this.layoutNode.children.length; e++) {
      if (e == this.itemIndex1[this.successCount]) {
        this.layoutNode.children[e].getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(true);
      } else {
        this.layoutNode.children[e].getComponent("clickNodeModel18_wenzizhaobutong").setSuccessFlag(false);
      }
    }
  };
  o.prototype.updateFinishProgress = function () {
    window.adUtil.playMusicEffect(this.successClip, false);
    this.successCount++;
    this.answerNumLabel.string = this.successCount + 1 + "/" + (this.jielongData.answer1.length + 1);
    this.question.children[this.successCount].getChildByName("answerLabel").active = true;
    this.question.children[this.successCount].getChildByName("questionLabel").active = false;
    this.checkSuccess();
  };
  o.prototype.clickFail = function () {
    if (window.countdown) {
      window.countdown.showDecreaseTimes();
    }
    window.adUtil.playMusicEffect(this.failClip, false);
  };
  o.prototype.checkSuccess = function () {
    if (this.itemIndex1.length == this.successCount) {
      this.success();
    } else {
      this.updateNodeClick();
    }
  };
  o.prototype.success = function () {
    var e = this;
    if (window.countdown) {
      window.countdown.unschedule(window.countdown.decreaseTime);
    }
    this.gameWinFlag = true;
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
      o.load("prefab/ui/vfxpass", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas").addChild(t);
      });
    });
    this.levelUpCallback();
    this.scheduleOnce(function () {
      e.judgeShowWinUI(1);
    }, 1);
  };
  o.prototype.showTips = function () {
    if (!this.gameWinFlag) {
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
    }
  };
  o.prototype.showAnswer = function () {
    var e = this;
    this.drawAnswerFlag = true;
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
      t.load("prefab/ui/circle", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        e.layoutNode.children[e.itemIndex1[e.successCount]].addChild(n);
      });
    });
  };
  r([u(cc.Node)], o.prototype, "layoutNode", undefined);
  r([u(cc.Prefab)], o.prototype, "successPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "failPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "answerItemPrefab", undefined);
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "btnNode", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Label)], o.prototype, "questionLabel", undefined);
  r([u(cc.Node)], o.prototype, "question", undefined);
  r([u(cc.Label)], o.prototype, "answerNumLabel", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  return r([s], o);
}(l.default);
exports.default = h;