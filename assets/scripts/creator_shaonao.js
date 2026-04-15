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
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.creator = this;
    this.skin = "skin1";
    if (cc.sys.localStorage.getItem("creatorPeviewSelectEditBox_shaonao")) {
      window.creatorModel = Number(cc.sys.localStorage.getItem("creatorPeviewSelectEditBox_shaonao"));
      window.model = window.creatorModel;
      this.mask.active = false;
      this.onLoadCopy();
      this.startCopy();
    } else {
      this.mask.active = true;
    }
  };
  o.prototype.start = function () {};
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
    if (!window.lineStaticPoints) {
      window.lineStaticPoints = [];
    }
    if (!window.lineStaticAnswerPoints) {
      window.lineStaticAnswerPoints = [];
    }
    window.selectNode = undefined;
  };
  o.prototype.startCopy = function () {
    cc.assetManager.loadBundle("resources_" + window.creatorModel + "_shaonao", function (e, o) {
      for (var t = 0; t < window["model" + window.creatorModel + "PreArr"].length; t++) {
        o.load("prefab/creator/game" + window.creatorModel + "/" + window.creator.skin + "/" + window["model" + window.creatorModel + "PreArr"][t], function (e, o) {
          var t = cc.instantiate(o);
          window.creator.removeComponent(t);
          t.addComponent("select_shaonao");
          window.creator.content.addChild(t);
          window.creator.scrollView.scrollToOffset(cc.v2(0, 0));
        });
      }
    });
    this.loadGameConfig();
  };
  o.prototype.removeComponent = function (e) {
    var o = e.getChildByName("end");
    if (o) {
      e.removeComponent("phone_shaonao");
      e.removeComponent("bgSockets_shaonao");
      e.removeComponent("fan_shaonao");
      e.removeComponent("parentMoveScrew_shaonao");
      o.removeComponent("movePlug_shaonao");
      o.removeComponent("moveScrew_shaonao");
    }
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
    for (var e = new Object(), o = cc.find("Canvas").getChildByName("level").children, t = 0; t < o.length; t++) {
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
    var e = cc.sys.localStorage.getItem("creatorPeviewSelectEditBox_shaonao");
    if (Number(e)) {
      window.creatorHistoryName = [];
      this.getArr();
      for (var o = 0; o < window.creatorHistory.length; o++) {
        window.creatorHistoryName.push(window.creatorHistory[o].name);
      }
      cc.director.loadScene("game" + e + window.adUtil.useHallData("sceneSkin_model" + e + "_shaonao", "shaonao") + "_shaonao");
    } else {
      window.adUtil.toast("请先输入模式");
    }
  };
  o.prototype.chooseGameModel = function () {
    var e = this.mask.getChildByName("previewEditBox1").getComponent(cc.EditBox).string;
    if (Number(e)) {
      window.creatorModel = Number(e);
      window.model = Number(e);
      cc.sys.localStorage.setItem("creatorPeviewSelectEditBox_shaonao", e + "");
      cc.director.loadScene("creator_shaonao");
    } else {
      window.adUtil.toast("请先输入模式");
    }
  };
  o.prototype.resetGameModel = function () {
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
                return [4, window.adUtil.loadPrefabByBundleSync("resources_" + window.creatorModel + "_shaonao", "prefab/creator/game" + window.creatorModel + "/" + window.creator.skin + "/" + r)];
              }
            } else {
              return [3, 5];
            }
          case 3:
            a = c.sent();
            l = cc.instantiate(a);
            window.creator.removeComponent(l);
            l.x = window.json[r][0].x;
            l.x -= 375;
            l.y = window.json[r][0].y;
            l.rotation = window.json[r][0].rotation;
            l.scale = window.json[r][0].scale;
            l.scaleX = window.json[r][0].scaleX;
            l.scaleY = window.json[r][0].scaleY;
            l.addComponent("moveCreator_shaonao");
            l.addComponent("clockwiseSelect_shaonao");
            cc.find("Canvas").getChildByName("level").addChild(l);
            window.creatorHistory = [];
            window.json[r] = window.json[r].splice(1);
            window.creatorHistoryTemp.push(l);
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
  return r([d], o);
}(cc.Component);
exports.default = u;