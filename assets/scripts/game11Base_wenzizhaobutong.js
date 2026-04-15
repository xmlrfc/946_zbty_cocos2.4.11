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
    o.tipsNode = null;
    o.adNode = null;
    o.hintNode = null;
    o.hintNum = null;
    o.contentLabel = null;
    o.answerTipsLabel = null;
    o.blockBoardNode = null;
    o.musicBg = null;
    o.answerItemPrefab = null;
    o.answerLabelPrefab = null;
    o.answerNode = null;
    o.shortDis = 30;
    o.longDis = 200;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
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
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      return c(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.setLevelData()];
          case 1:
            e.sent();
            this.answerArr = this.levelData.ans.split(",");
            this.replyArr = [];
            this.reset();
            return [2];
        }
      });
    });
  };
  o.prototype.reset = function () {
    var e = this.levelData.com;
    var o = this.levelData.pos;
    this.answerLabelNodes = [];
    for (var t = [], n = 0; n < o[0].length; n++) {
      for (var i = [], r = 0; r < o.length; r++) {
        i.push(o[r][n]);
      }
      t.push(i);
    }
    var a = 130 * e.length + 10 * (e.length - 1);
    for (n = 0; n < e.length; n++) {
      var c = cc.instantiate(this.answerItemPrefab);
      c.x = 130 * n + 10 * n + 65 - a / 2;
      this.answerNode.addChild(c);
      var l = cc.instantiate(this.answerLabelPrefab);
      l.getComponent(cc.Label).string = e[n];
      l.getComponent("moveAnswerLabel_wenzizhaobutong").setIndex(t[n]);
      this.blockBoardNode.addChild(l);
      l.x = -1 * l.parent.x + c.x + c.parent.x;
      l.y = -1 * l.parent.y + c.y + c.parent.y;
      this.answerLabelNodes.push(l);
    }
  };
  o.prototype.check = function () {
    for (var e = "", o = 0; o < this.answerArr.length; o++) {
      for (var t = 0, n = 0, i = 0; i < this.answerLabelNodes.length; i++) {
        if (this.answerLabelNodes[i].getComponent("moveAnswerLabel_wenzizhaobutong").getIndex()[o] == 5) {
          t = this.answerLabelNodes[i].x;
          n = this.answerLabelNodes[i].y;
          break;
        }
      }
      var r = true;
      for (i = 0; i < this.answerLabelNodes.length; i++) {
        var a = this.answerLabelNodes[i].getComponent("moveAnswerLabel_wenzizhaobutong").getIndex()[o];
        var c = this.answerLabelNodes[i].x;
        var l = this.answerLabelNodes[i].y;
        if (a == 0) {
          if (Math.abs(c) < 250 && Math.abs(l) < 250) {
            r = false;
          }
        } else if (Math.abs(c) > 250 || Math.abs(l) > 250) {
          r = false;
        }
        if (a == 1) {
          if (l < n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c > t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 2) {
          if (l < n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || Math.abs(c - t) > this.shortDis) {
            r = false;
          }
        } else if (a == 3) {
          if (l < n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c < t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 4) {
          if (c > t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2 || Math.abs(l - n) > this.shortDis) {
            r = false;
          }
        } else if (a == 5) {
          if (Math.abs(c - t) > this.shortDis || Math.abs(l - n) > this.shortDis) {
            r = false;
          }
        } else if (a == 6) {
          if (c < t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2 || Math.abs(l - n) > this.shortDis) {
            r = false;
          }
        } else if (a == 7) {
          if (l > n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c > t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 8) {
          if (l > n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || Math.abs(c - t) > this.shortDis) {
            r = false;
          }
        } else if (a == 9) {
          if (l > n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c < t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 14) {
          if (l < n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c > t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 47) {
          if (l > n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c > t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 25) {
          if (l < n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || Math.abs(c - t) > this.shortDis) {
            r = false;
          }
        } else if (a == 58) {
          if (l > n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || Math.abs(c - t) > this.shortDis) {
            r = false;
          }
        } else if (a == 36) {
          if (l < n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c < t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 69) {
          if (l > n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c < t || Math.abs(c - t) > this.longDis || Math.abs(c - t) < this.longDis / 2) {
            r = false;
          }
        } else if (a == 12) {
          if (l < n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c > t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 78) {
          if (l > n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c > t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 23) {
          if (l < n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c < t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 89) {
          if (l > n || Math.abs(l - n) > this.longDis || Math.abs(l - n) < this.longDis / 2 || c < t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 45) {
          if (Math.abs(l - n) > this.shortDis || c > t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 56) {
          if (Math.abs(l - n) > this.shortDis || c < t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 15) {
          if (l < n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c > t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 155) {
          if (l < n || Math.abs(l - n) > this.longDis - 3 * this.longDis / 8 || Math.abs(l - n) < this.longDis / 2 - 3 * this.longDis / 8 || c > t || Math.abs(c - t) > this.longDis - 3 * this.longDis / 8 || Math.abs(c - t) < this.longDis / 2 - 3 * this.longDis / 8) {
            r = false;
          }
        } else if (a == 57) {
          if (l > n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c > t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 557) {
          if (l > n || Math.abs(l - n) > this.longDis - 3 * this.longDis / 8 || Math.abs(l - n) < this.longDis / 2 - 3 * this.longDis / 8 || c > t || Math.abs(c - t) > this.longDis - 3 * this.longDis / 8 || Math.abs(c - t) < this.longDis / 2 - 3 * this.longDis / 8) {
            r = false;
          }
        } else if (a == 35) {
          if (l < n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c < t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 355) {
          if (l < n || Math.abs(l - n) > this.longDis - 3 * this.longDis / 8 || Math.abs(l - n) < this.longDis / 2 - 3 * this.longDis / 8 || c < t || Math.abs(c - t) > this.longDis - 3 * this.longDis / 8 || Math.abs(c - t) < this.longDis / 2 - 3 * this.longDis / 8) {
            r = false;
          }
        } else if (a == 59) {
          if (l > n || Math.abs(l - n) > this.longDis - this.longDis / 4 || Math.abs(l - n) < this.longDis / 2 - this.longDis / 4 || c < t || Math.abs(c - t) > this.longDis - this.longDis / 4 || Math.abs(c - t) < this.longDis / 2 - this.longDis / 4) {
            r = false;
          }
        } else if (a == 559 && (l > n || Math.abs(l - n) > this.longDis - 3 * this.longDis / 8 || Math.abs(l - n) < this.longDis / 2 - 3 * this.longDis / 8 || c < t || Math.abs(c - t) > this.longDis - 3 * this.longDis / 8 || Math.abs(c - t) < this.longDis / 2 - 3 * this.longDis / 8)) {
          r = false;
        }
      }
      console.log(r);
      if (r) {
        for (var d = false, s = 0; s < this.replyArr.length; s++) {
          if (this.replyArr[s] == this.answerArr[o]) {
            d = true;
            break;
          }
        }
        if (!d) {
          for (var u = 0; u < this.answerLabelNodes.length; u++) {
            this.answerLabelNodes[u].destroy();
          }
          this.contentLabel.node.active = true;
          this.contentLabel.string = this.answerArr[o];
          this.successCount++;
          return void this.success();
        }
        if (e) {
          e += "、";
        }
        e += this.answerArr[o];
      }
    }
    if (e) {
      window.adUtil.toast(e + "已经回答过了");
    }
  };
  o.prototype.afterOneScueess = function () {};
  o.prototype.success = function () {
    var e = this;
    this.afterOneScueess();
    if (this.successCount < this.answerArr.length) {
      this.replyArr.push(this.contentLabel.string);
      return void this.scheduleOnce(function () {
        e.reset();
        e.contentLabel.node.active = false;
      }, 1);
    }
    this.scheduleOnce(function () {
      e.levelUpCallback();
      e.judgeShowWinUI(6);
    }, 1);
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
    this.answerTipsLabel.string = "答案：" + this.levelData.ans;
    this.answerTipsLabel.node.active = true;
  };
  r([u(cc.Label)], o.prototype, "titleLabel", undefined);
  r([u(cc.Node)], o.prototype, "tipsNode", undefined);
  r([u(cc.Node)], o.prototype, "adNode", undefined);
  r([u(cc.Node)], o.prototype, "hintNode", undefined);
  r([u(cc.Label)], o.prototype, "hintNum", undefined);
  r([u(cc.Label)], o.prototype, "contentLabel", undefined);
  r([u(cc.Label)], o.prototype, "answerTipsLabel", undefined);
  r([u(cc.Node)], o.prototype, "blockBoardNode", undefined);
  r([u(cc.AudioClip)], o.prototype, "musicBg", undefined);
  r([u(cc.Prefab)], o.prototype, "answerItemPrefab", undefined);
  r([u(cc.Prefab)], o.prototype, "answerLabelPrefab", undefined);
  r([u(cc.Node)], o.prototype, "answerNode", undefined);
  return r([s], o);
}(l.default);
exports.default = h;