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
    o.titleLabel = null;
    o.Node1 = null;
    o.Node2 = null;
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.completionProgressLabel = null;
    o.questionLabel = null;
    o.nextButtonLabel = null;
    o.blackBoardPrefab = null;
    o.rightPre = null;
    o.wrongPre = null;
    o.musicBg = null;
    o.succBg = null;
    o.failBg = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.game23 = this;
    window.model23HasDrawFlag = undefined;
    this.successCount = 0;
    this.changeNumArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十"];
    e.prototype.onLoad.call(this);
    this.loadBlackBoard();
    this.loadConfig();
  };
  o.prototype.start = function () {
    window.adUtil.playMusic(this.musicBg, true);
    this.loadStartAd();
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            if (window.levelResModel23_wenzizhaobutong) {
              return [3, 2];
            } else {
              e = window;
              return [4, window.adUtil.loadJsonByBundleSync("resources_wenzizhaobutong", "json/json" + window.model + "/level")];
            }
          case 1:
            e.levelResModel23_wenzizhaobutong = n.sent();
            n.label = 2;
          case 2:
            this.levelData = window.levelResModel23_wenzizhaobutong.json[window.currentLevel - 1];
            this.aimlength = this.levelData.bihua.length;
            this.updateString();
            this.Node1.active = true;
            this.Node2.active = false;
            o = this.levelData.choose.length;
            t = 0;
            for (; t < o; t++) {
              this.Node2.children[t].getChildByName("zi").getComponent(cc.Label).string = this.levelData.choose[t];
              this.Node2.children[t].addComponent("clickNodeModel23_wenzizhaobutong");
              if (t == this.levelData.rightIndex) {
                this.Node2.children[t].getComponent("clickNodeModel23_wenzizhaobutong").setSuccessFlag(true);
              } else {
                this.Node2.children[t].getComponent("clickNodeModel23_wenzizhaobutong").setSuccessFlag(false);
              }
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
  o.prototype.updateString = function () {
    this.completionProgressLabel.string = this.successCount + 1 + "/" + this.aimlength;
    this.questionLabel.string = this.successCount + 1 + ".第" + this.changeNumArr[this.successCount] + "笔是“" + this.levelData.bihua[this.successCount] + "”";
    if (this.successCount < this.aimlength - 1) {
      this.nextButtonLabel.string = "下一步";
    } else {
      this.nextButtonLabel.string = "完成";
    }
  };
  o.prototype.nextButtonClick = function () {
    if (window.game.currentLine) {
      window.game.currentLine = undefined;
      window.model23HasDrawFlag = undefined;
      this.successCount++;
      if (this.successCount >= this.aimlength) {
        this.Node1.active = false;
        this.Node2.active = true;
      } else {
        this.updateString();
      }
    } else {
      window.adUtil.toast("请先按提示完成笔画");
    }
  };
  o.prototype.cancleButtonClick = function () {
    if (window.game.currentLine) {
      window.game.currentLine.getComponent("lineModel23_wenzizhaobutong").draw.clear();
      window.game.currentLine.destroy();
      window.game.currentLine = undefined;
      window.model23HasDrawFlag = undefined;
    } else {
      window.adUtil.toast("请先按提示完成笔画");
    }
  };
  o.prototype.success = function () {
    var e = this;
    this.gameover = true;
    window.adUtil.playMusicEffect(this.succBg, false);
    var o = cc.instantiate(this.rightPre);
    cc.find("Canvas").addChild(o);
    o.scale = 2.5;
    this.scheduleOnce(function () {
      e.levelUpCallback();
      e.judgeShowWinUI(6);
    }, 1);
  };
  o.prototype.fail = function () {
    this.gameover = true;
    window.adUtil.playMusicEffect(this.failBg, false);
    var e = cc.instantiate(this.wrongPre);
    cc.find("Canvas").addChild(e);
    e.scale = 2.5;
    this.scheduleOnce(function () {
      if (e) {
        e.destroy();
      }
    }, 1);
    this.scheduleOnce(function () {
      window.powerControl.decreasePower(function () {
        cc.director.loadScene("game" + window.model + window.adUtil.useHallData("sceneSkin_model" + window.model + "_wenzizhaobutong", "wenzizhaobutong") + "_wenzizhaobutong");
      });
    }, 1.5);
  };
  o.prototype.showTips = function () {
    if (this.Node2.active) {
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
    } else {
      window.adUtil.toast("请先完成写字过程");
    }
  };
  o.prototype.showAnswer = function () {
    var e = this;
    cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
      t.load("prefab/ui/circle3", cc.Prefab, function (o, t) {
        var n = cc.instantiate(t);
        e.Node2.getChildByName(e.levelData.rightIndex + "").addChild(n);
        n.scale = 1.5;
        e.drawAnswerFlag = true;
      });
    });
  };
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "Node1", undefined);
  r([u(cc.Node)], o.prototype, "Node2", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Label)], o.prototype, "completionProgressLabel", undefined);
  r([u(cc.Label)], o.prototype, "questionLabel", undefined);
  r([u(cc.Label)], o.prototype, "nextButtonLabel", undefined);
  r([u(cc.Prefab)], o.prototype, "blackBoardPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "rightPre", undefined);
  r([u(cc.Prefab)], o.prototype, "wrongPre", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([u(cc.AudioClip)], o.prototype, "succBg", undefined);
  r([u(cc.AudioClip)], o.prototype, "failBg", undefined);
  return r([s], o);
}(l.default);
exports.default = h;