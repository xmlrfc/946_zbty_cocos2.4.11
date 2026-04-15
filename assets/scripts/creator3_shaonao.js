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
var l = cc._decorator;
var d = l.ccclass;
var s = l.property;
var u = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.content = null;
    o.mask = null;
    o.scrollView = null;
    o.level = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.creator = this;
    window.creatorModel = 3;
    window.model = 3;
    this.widthMax = 64;
    if (cc.sys.localStorage.getItem("creatorPeviewSelectEditBoxSize_shaonao")) {
      window.creatorSize = cc.sys.localStorage.getItem("creatorPeviewSelectEditBoxSize_shaonao");
      this.mask.active = false;
      this.width = Number(window.creatorSize.split("*")[0]);
      this.height = Number(window.creatorSize.split("*")[1]);
      var e = this.width > this.height ? this.width : this.height;
      this.perWidth = Math.floor(622 / e);
      if (this.perWidth > this.widthMax) {
        this.perWidth = this.widthMax;
      }
      this.level.width = this.perWidth * this.width;
      this.level.height = this.perWidth * this.height;
      this.onLoadCopy();
      this.startCopy();
      this.loadPosition();
    } else {
      this.mask.active = true;
    }
  };
  o.prototype.start = function () {};
  o.prototype.loadPosition = function () {
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
            this.positions = {};
            e = 10000;
            o = -10000;
            t = 10000;
            n = -10000;
            i = 0;
            c.label = 1;
          case 1:
            if (i < this.width * this.height) {
              a = i % this.width * this.perWidth + this.perWidth / 2 - this.level.width / 2 - 375;
              l = Math.floor(i / this.width) * this.perWidth + this.perWidth / 2 - this.level.height / 2;
              if (a < e) {
                e = a;
              }
              if (a > o) {
                o = a;
              }
              if (l < t) {
                t = l;
              }
              if (l > n) {
                n = l;
              }
              r = cc.v2(a, l);
              this.positions[i] = r;
              return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/boxFloor")];
            } else {
              return [3, 4];
            }
          case 2:
            d = c.sent();
            (s = cc.instantiate(d)).x = a;
            s.y = l;
            s.scale = window.creator.perWidth / window.creator.widthMax;
            window.creator.level.addChild(s);
            c.label = 3;
          case 3:
            i++;
            return [3, 1];
          case 4:
            a = e - this.perWidth;
            l = t - this.perWidth;
            c.label = 5;
          case 5:
            if (a <= o) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/boxWall")];
            } else {
              return [3, 8];
            }
          case 6:
            d = c.sent();
            (s = cc.instantiate(d)).x = a;
            s.y = l;
            s.scale = window.creator.perWidth / window.creator.widthMax;
            window.creator.level.addChild(s);
            window.creatorHistory.push(s);
            c.label = 7;
          case 7:
            a += this.perWidth;
            return [3, 5];
          case 8:
            a = e;
            l = n + this.perWidth;
            c.label = 9;
          case 9:
            if (a <= o + this.perWidth) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/boxWall")];
            } else {
              return [3, 12];
            }
          case 10:
            d = c.sent();
            (s = cc.instantiate(d)).x = a;
            s.y = l;
            s.scale = window.creator.perWidth / window.creator.widthMax;
            window.creator.level.addChild(s);
            window.creatorHistory.push(s);
            c.label = 11;
          case 11:
            a += this.perWidth;
            return [3, 9];
          case 12:
            a = e - this.perWidth;
            l = t;
            c.label = 13;
          case 13:
            if (l <= n + this.perWidth) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/boxWall")];
            } else {
              return [3, 16];
            }
          case 14:
            d = c.sent();
            (s = cc.instantiate(d)).x = a;
            s.y = l;
            s.scale = window.creator.perWidth / window.creator.widthMax;
            window.creator.level.addChild(s);
            window.creatorHistory.push(s);
            c.label = 15;
          case 15:
            l += this.perWidth;
            return [3, 13];
          case 16:
            a = o + this.perWidth;
            l = t - this.perWidth;
            c.label = 17;
          case 17:
            if (l <= n) {
              return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/boxWall")];
            } else {
              return [3, 20];
            }
          case 18:
            d = c.sent();
            (s = cc.instantiate(d)).x = a;
            s.y = l;
            s.scale = window.creator.perWidth / window.creator.widthMax;
            window.creator.level.addChild(s);
            window.creatorHistory.push(s);
            c.label = 19;
          case 19:
            l += this.perWidth;
            return [3, 17];
          case 20:
            this.loadGameConfig();
            return [2];
        }
      });
    });
  };
  o.prototype.addClick = function () {};
  o.prototype.onLoadCopy = function () {
    cc.director.getPhysicsManager().enabled = false;
    cc.audioEngine.stopMusic();
    if (!window.creatorHistory) {
      window.creatorHistory = [];
    }
    if (!window.creatorHistoryName) {
      window.creatorHistoryName = [];
    }
    window.selectNode = undefined;
  };
  o.prototype.startCopy = function () {
    cc.assetManager.loadBundle("resources_3_shaonao", function (e, o) {
      for (var t = 0; t < window["model" + window.creatorModel + "PreArr"].length; t++) {
        o.load("prefab/creator/game3/skinOriginal/" + window["model" + window.creatorModel + "PreArr"][t], function (e, o) {
          var t = cc.instantiate(o);
          t.addComponent("select3_shaonao");
          window.creator.content.addChild(t);
          window.creator.scrollView.scrollToOffset(cc.v2(0, 0));
        });
      }
    });
  };
  o.prototype.convertFile = function () {
    var e = this.getArr();
    var o = JSON.stringify(e, null, "\t");
    var t = "data:application/json;charset=utf-8," + encodeURIComponent(o);
    var n = document.createElement("a");
    n.setAttribute("href", t);
    n.setAttribute("download", "1-1.json");
    n.click();
  };
  o.prototype.getArr = function () {
    var e = new Object();
    e.size = {
      width: this.width,
      height: this.height
    };
    for (var o = cc.find("Canvas").getChildByName("level").children, t = 0; t < o.length; t++) {
      var n = o[t];
      var i = new Object();
      i.x = n.x + 375;
      i.y = n.y;
      i.rotation = n.rotation;
      i.scale = n.scale;
      i.scaleX = n.scaleX;
      i.scaleY = n.scaleY;
      if (!e[n.name]) {
        e[n.name] = [];
      }
      e[n.name].push(i);
    }
    window.creatorArr = e;
    return e;
  };
  o.prototype.clockwiseClick = function () {
    window.selectNode.rotation += 10;
  };
  o.prototype.antiClockwiseClick = function () {
    window.selectNode.rotation -= 10;
  };
  o.prototype.answerBtn = function () {
    if (window.isAnswer) {
      this.answerBtnLabel.string = "答案";
      window.isAnswer = false;
    } else {
      this.answerBtnLabel.string = "正在画答案";
      window.isAnswer = true;
    }
  };
  o.prototype.bigBtn = function () {
    window.selectNode.scale += 0.05;
  };
  o.prototype.smallBtn = function () {
    window.selectNode.scale -= 0.05;
  };
  o.prototype.pressWidthBtn = function () {
    window.selectNode.scaleX -= 0.05;
  };
  o.prototype.pressHeightBtn = function () {
    window.selectNode.scaleY -= 0.05;
  };
  o.prototype.stretchWidthBtn = function () {
    window.selectNode.scaleX += 0.05;
  };
  o.prototype.stretchHeightBtn = function () {
    window.selectNode.scaleY += 0.05;
  };
  o.prototype.recallBtn = function () {
    if (window.creatorHistory.length > 0) {
      if (window.creatorHistory[window.creatorHistory.length - 1].name == "lineStatic") {
        if (window.creatorHistory[window.creatorHistory.length - 1].isAnswerLine == 1) {
          window.lineStaticAnswerPoints.pop();
        } else if (window.creatorHistory[window.creatorHistory.length - 1].isAnswerLine == 0) {
          window.lineStaticPoints.pop();
        }
      }
      window.creatorHistory[window.creatorHistory.length - 1].destroy();
      window.creatorHistory.pop();
    }
  };
  o.prototype.previewClick = function () {
    var e = cc.sys.localStorage.getItem("creatorPeviewSelectEditBoxSize_shaonao");
    if (!e || e.indexOf("*") < 0) {
      window.adUtil.toast("请先输入规格");
    } else {
      window.creatorHistoryName = [];
      this.getArr();
      for (var o = 0; o < window.creatorHistory.length; o++) {
        window.creatorHistoryName.push(window.creatorHistory[o].name);
      }
      cc.director.loadScene("game3_shaonao");
    }
  };
  o.prototype.chooseGameModel = function () {
    var e = this.mask.getChildByName("previewEditBox1").getComponent(cc.EditBox).string;
    if (!e || e.indexOf("*") < 0) {
      window.adUtil.toast("请先输入规格");
    } else {
      cc.sys.localStorage.setItem("creatorPeviewSelectEditBoxSize_shaonao", e);
      cc.director.loadScene("creator3_shaonao");
    }
  };
  o.prototype.resetGameModel = function () {
    window.creatorHistoryName = [];
    window.creator.mask.active = true;
  };
  o.prototype.loadGameConfig = function () {
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
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            window.json = window.creatorArr;
            window.creatorHistoryTemp = [];
            e = 0;
            c.label = 1;
          case 1:
            if (!(e < window.creatorHistoryName.length)) {
              return [3, 6];
            }
            o = window.creatorHistoryName[e];
            t = [];
            for (n in window.json) {
              t.push(n);
            }
            i = 0;
            c.label = 2;
          case 2:
            if (i < t.length) {
              if ((r = t[i]) != o) {
                return [3, 4];
              } else {
                return [4, window.adUtil.loadPrefabByBundleSync("resources_3_shaonao", "prefab/creator/game3/skinOriginal/" + r)];
              }
            } else {
              return [3, 5];
            }
          case 3:
            l = c.sent();
            a = cc.instantiate(l);
            if (d = a.getChildByName("end")) {
              a.removeComponent("phone_shaonao");
              a.removeComponent("bgSockets_shaonao");
              a.removeComponent("fan_shaonao");
              d.removeComponent("movePlug_shaonao");
            }
            a.x = window.json[r][0].x;
            a.x -= 375;
            a.y = window.json[r][0].y;
            a.rotation = window.json[r][0].rotation;
            a.scale = window.json[r][0].scale;
            a.scaleX = window.json[r][0].scaleX;
            a.scaleY = window.json[r][0].scaleY;
            a.addComponent("moveCreator3_shaonao");
            a.addComponent("clockwiseSelect_shaonao");
            cc.find("Canvas").getChildByName("level").addChild(a);
            window.creatorHistory = [];
            window.json[r] = window.json[r].splice(1);
            window.creatorHistoryTemp.push(a);
            c.label = 4;
          case 4:
            i++;
            return [3, 2];
          case 5:
            e++;
            return [3, 1];
          case 6:
            window.creatorHistory = window.creatorHistoryTemp;
            return [2];
        }
      });
    });
  };
  r([s(cc.Node)], o.prototype, "content", undefined);
  r([s(cc.Node)], o.prototype, "mask", undefined);
  r([s(cc.ScrollView)], o.prototype, "scrollView", undefined);
  r([s(cc.Node)], o.prototype, "level", undefined);
  return r([d], o);
}(cc.Component);
exports.default = u;