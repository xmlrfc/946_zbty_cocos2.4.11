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
    o.question = null;
    o.answerNumLabel = null;
    o.successClip = null;
    o.failClip = null;
    o.musicBg = null;
    o.size = 36;
    o.diffNode = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    return a(this, undefined, undefined, function () {
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
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            window.game16 = this;
            this.btnNode.active = false;
            this.successCount = 0;
            e.prototype.onLoad.call(this);
            if (window.dataRelResModel16) {
              return [3, 2];
            } else {
              o = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
            }
          case 1:
            o.dataRelResModel16 = c.sent();
            c.label = 2;
          case 2:
            if (window.ziRelResModel16) {
              return [3, 4];
            } else {
              t = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/zi")];
            }
          case 3:
            t.ziRelResModel16 = c.sent();
            c.label = 4;
          case 4:
            n = window.dataRelResModel16.json.data[window.currentLevel - 1];
            i = window.ziRelResModel16.json.data;
            r = (r = n.ans.slice(0)).split(",");
            this.dataComLength = r.length;
            this.dataCom = r.slice(0);
            a = "";
            u = 0;
            for (; u < n.com.length; u++) {
              if (u != n.com.length - 1) {
                a += n.com[u] + ",";
              } else {
                a += n.com[u];
              }
            }
            this.question.string = a;
            l = r;
            d = [];
            s = [];
            u = 0;
            for (; u < this.size; u++) {
              s.push(u);
            }
            for (u = 0; u < l.length; u++) {
              h = Math.floor(Math.random() * s.length);
              d.push(s[h]);
              s.splice(h, 1);
            }
            this.questionLabel.string = "找出下列字能组合成的所有字";
            this.answerNumLabel.string = this.successCount + "/" + this.dataComLength;
            console.log(d);
            w = 0;
            c.label = 5;
          case 5:
            if (w < this.size) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_wenzizhaobutong", "prefab/ui/item")];
            } else {
              return [3, 8];
            }
          case 6:
            p = c.sent();
            f = cc.instantiate(p);
            y = undefined;
            g = -1;
            m = undefined;
            m = 0;
            for (; m < d.length; m++) {
              if (w == d[m]) {
                g = w;
                break;
              }
            }
            f.addComponent("clickNode_wenzizhaobutong");
            if (g >= 0) {
              y = l[m];
              this.diffNode = f;
              f.getComponent("clickNode_wenzizhaobutong").setSuccessFlag(true);
            } else {
              v = Math.floor(Math.random() * i.length);
              y = i[v];
              for (; this.include(l, y);) {
                v = Math.floor(Math.random() * i.length);
                y = i[v];
              }
              i.splice(v, 1);
              f.getComponent("clickNode_wenzizhaobutong").setSuccessFlag(false);
            }
            f.getComponent(cc.Label).string = y;
            this.layoutNode.addChild(f);
            c.label = 7;
          case 7:
            w++;
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
        return true;
      }
    }
    return false;
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
        t.y -= 80;
      });
    });
  };
  o.prototype.clickFail = function () {
    if (window.countdown) {
      window.countdown.showDecreaseTimes();
    }
    window.adUtil.playMusicEffect(this.failClip, false);
  };
  o.prototype.clickSuccess = function () {
    var e = this;
    window.adUtil.playMusicEffect(this.successClip, false);
    this.successCount++;
    this.answerNumLabel.string = this.successCount + "/" + this.dataComLength;
    if (this.successCount == this.dataComLength) {
      if (this.loadWin || this.loadFail) {
        return;
      }
      if (window.countdown) {
        window.countdown.unschedule(window.countdown.decreaseTime);
      }
      this.loadWin = true;
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
      console.log("success");
    }
  };
  o.prototype.showTips = function () {
    if (!this.loadWin && !this.loadFail) {
      if (this.drawAnswerFlag) {
        window.adUtil.toast("已提示");
      } else {
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
    }
  };
  o.prototype.showAnswer = function () {
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (e, o) {
      o.load("prefab/ui/circle", cc.Prefab, function (e, o) {
        for (var t = cc.instantiate(o), n = Math.floor(Math.random() * window.game.dataCom.length), i = window.game.dataCom[n], r = window.game.layoutNode.children, a = 0; a < r.length; a++) {
          if (i == r[a].getComponent(cc.Label).string) {
            r[a].addChild(t);
            window.game.drawAnswerFlag = true;
            break;
          }
        }
      });
    });
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
  r([u(cc.Label)], o.prototype, "question", undefined);
  r([u(cc.Label)], o.prototype, "answerNumLabel", undefined);
  r([u(cc.AudioClip)], o.prototype, "successClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "failClip", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  return r([s], o);
}(l.default);
exports.default = h;