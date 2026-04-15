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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = cc._decorator;
var c = a.ccclass;
var l = a.property;
var d = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.bgNode = null;
    o.cameraNode = null;
    o.levelNode = null;
    o.aiPrefab = null;
    o.ownPrefab = null;
    o.linePrefab = null;
    o.levelListPrefab = null;
    o.editBoxNodeArr = [];
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.creator = this;
    window.creator.nodeNum = 0;
    this.setIndex = 0;
    this.perNodeHeight = 250;
    this.bgNode.on("touchmove", this.onTouchMove, this);
    this.bgNode.on("mousewheel", function (e) {
      cc.find("Canvas").scale += e.getScrollY() / 1200;
      if (cc.find("Canvas").scale < 0.1) {
        cc.find("Canvas").scale = 0.1;
      }
    }, this);
  };
  o.prototype.start = function () {
    this.init();
  };
  o.prototype.init = function () {
    var e = cc.instantiate(this.aiPrefab);
    e.y = 250;
    this.levelNode.addChild(e);
  };
  o.prototype.loadDataClick = function () {
    if (window.creator.loadDataFlag) {
      cc.loader.loadRes("prefab/toast", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas/Main Camera").addChild(t);
        t.zIndex = 32000;
        window.toastNode.initData("已经有修改内容了，请刷新网页再加载关卡");
      });
    } else {
      var e = cc.instantiate(this.levelListPrefab);
      cc.find("Canvas/Main Camera").addChild(e);
      e.scale = 1 / cc.find("Canvas").scale;
    }
  };
  o.prototype.onTouchMove = function (e) {
    var o = e.getDelta();
    this.cameraNode.x -= o.x;
    this.cameraNode.y -= o.y;
  };
  o.prototype.addOwnPrefab = function (e, o) {
    this.addCommonPrefab(e, o, "own", this.ownPrefab);
  };
  o.prototype.addAiPrefab = function (e, o) {
    this.addCommonPrefab(e, o, "ai", this.aiPrefab);
  };
  o.prototype.addCommonPrefab = function (e, o, t, n) {
    var i = -375;
    if (o != 0) {
      if (o % 2 == 1) {
        i += -375;
      }
      i += -750 * (Math.floor(o / 2) - 1);
      for (var r = e.children, a = 0; a < r.length; a++) {
        if (!(r[a].name != t && r[a].name != "line")) {
          r[a].destroy();
        }
      }
      this.setIndex++;
      for (var c = this.perNodeHeight * (this.setIndex - 1), l = 0, d = e; d.name != "Canvas";) {
        l += d.y;
        d = d.parent;
      }
      for (a = 0; a < o; a++, i += 750) {
        var s = cc.instantiate(n);
        s.x = i;
        s.y = -1 * l - c;
        var u = cc.instantiate(this.linePrefab);
        var h = u.getComponent(cc.Graphics);
        h.clear();
        h.moveTo(0, -150);
        h.lineTo(s.x, s.y);
        h.stroke();
        e.addChild(u);
        e.addChild(s);
      }
    }
  };
  o.prototype.getArr = function () {
    for (var e = {}, o = 0; o < this.editBoxNodeArr.length; o++) {
      var t = this.editBoxNodeArr[o];
      var n = t.name;
      var i = t.getChildByName("New EditBox").getComponent(cc.EditBox).string;
      if (n == "aiSex" && i != "男" && i != "女") {
        cc.loader.loadRes("prefab/toast", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas/Main Camera").addChild(t);
          t.zIndex = 32000;
          window.toastNode.initData("电脑性别不对");
        });
        return null;
      }
      if (n == "ownSex" && i != "男" && i != "女") {
        cc.loader.loadRes("prefab/toast", cc.Prefab, function (e, o) {
          var t = cc.instantiate(o);
          cc.find("Canvas/Main Camera").addChild(t);
          t.zIndex = 32000;
          window.toastNode.initData("玩家性别不对");
        });
        return null;
      }
      e[n] = i;
    }
    var r = {};
    var a = this.levelNode.children[0];
    this.getLevelData(a, r);
    e.data = r;
    var c = function (e) {
      var o = r[e];
      if (o.next.length == 0 && o.isEnd == 0) {
        cc.loader.loadRes("prefab/toast", cc.Prefab, function (o, t) {
          var n = cc.instantiate(t);
          cc.find("Canvas/Main Camera").addChild(n);
          n.zIndex = 32000;
          window.toastNode.initData("编号" + e + "没有设置下一步分支或者成功失败");
        });
        return {
          value: null
        };
      }
    };
    for (var n in r) {
      var l = c(n);
      if (typeof l == "object") {
        return l.value;
      }
    }
    return e;
  };
  o.prototype.getLevelData = function (e, o) {
    var t = {};
    var n = e.getComponent("aiOwnModel2Creator_shaonao");
    var i = parseInt(e.getChildByName("id").getComponent(cc.Label).string);
    t.player = e.name;
    t.content = e.getChildByName("contentEditBox").getComponent(cc.EditBox).string;
    t.next = [];
    t.isEnd = n.isEnd;
    if (!(n.picIndex == null && n.picIndex == null)) {
      t.picIndex = [n.picIndex];
    }
    o[i] = t;
    for (var r = e.children, a = false, c = 0; c < r.length; c++) {
      if (!(r[c].name != "own" && r[c].name != "ai")) {
        t.next.push(parseInt(r[c].getChildByName("id").getComponent(cc.Label).string));
        this.getLevelData(r[c], o);
        a = true;
      }
    }
    var l = e.getChildByName("nextEditBox").getComponent(cc.EditBox).string;
    if (!a && l) {
      t.next.push(parseInt(l));
    }
  };
  o.prototype.convertFile = function () {
    var e = this.getArr();
    if (e) {
      var o = JSON.stringify(e, null, "\t");
      var t = "data:application/json;charset=utf-8," + encodeURIComponent(o);
      var n = document.createElement("a");
      n.setAttribute("href", t);
      n.setAttribute("download", "1-1.json");
      n.click();
    }
  };
  o.prototype.loadData = function (e) {
    window.creator.loadDataFlag = true;
    window.creator.nodeNum = 0;
    window.creator.nodeExist = {};
    for (var o = 0; o < this.editBoxNodeArr.length; o++) {
      var t = this.editBoxNodeArr[o];
      t.getChildByName("New EditBox").getComponent(cc.EditBox).string = e[t.name];
    }
    var n = e.data;
    var i = this.levelNode.children[0];
    this.setLevelItem(n, i, 0);
  };
  o.prototype.setLevelItem = function (e, o, t) {
    var n = o.getComponent("aiOwnModel2Creator_shaonao");
    o.getChildByName("id").getComponent(cc.Label).string = t + "";
    o.getChildByName("contentEditBox").getComponent(cc.EditBox).string = e[t].content;
    n.end(null, e[t].isEnd);
    if (e[t].picIndex) {
      n.setPic(e[t].picIndex[0]);
    }
    var i = e[t].next;
    if (t >= window.creator.nodeNum) {
      window.creator.nodeNum = t + 1;
    }
    if (i.length > 0) {
      if (window.creator.nodeExist[i[0]]) {
        o.getChildByName("nextEditBox").getComponent(cc.EditBox).string = i[0];
      } else {
        o.getChildByName("branchEditBox").getComponent(cc.EditBox).string = i.length;
        if (e[t].player == "ai") {
          n.setOwnBranch();
        } else if (e[t].player == "own") {
          n.setAiBranch();
        }
        for (var r = 0; r < i.length; r++) {
          window.creator.nodeExist[i[r]] = 1;
        }
        var a = [];
        for (r = 0; r < o.children.length; r++) {
          if (!(o.children[r].name != "own" && o.children[r].name != "ai")) {
            a.push(o.children[r]);
          }
        }
        for (r = 0; r < a.length; r++) {
          this.setLevelItem(e, a[r], i[r]);
        }
      }
    }
  };
  r([l(cc.Node)], o.prototype, "bgNode", undefined);
  r([l(cc.Node)], o.prototype, "cameraNode", undefined);
  r([l(cc.Node)], o.prototype, "levelNode", undefined);
  r([l(cc.Prefab)], o.prototype, "aiPrefab", undefined);
  r([l(cc.Prefab)], o.prototype, "ownPrefab", undefined);
  r([l(cc.Prefab)], o.prototype, "linePrefab", undefined);
  r([l(cc.Prefab)], o.prototype, "levelListPrefab", undefined);
  r([l([cc.Node])], o.prototype, "editBoxNodeArr", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;