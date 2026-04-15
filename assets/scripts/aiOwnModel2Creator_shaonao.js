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
    o.branchEditBox = null;
    o.picListPrefab = null;
    o.picPrefab = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.node.getChildByName("id").getComponent(cc.Label).string = window.creator.nodeNum;
    window.creator.nodeNum++;
    this.isEnd = 0;
  };
  o.prototype.start = function () {};
  o.prototype.picClick = function () {
    window.aiOwnModel2CreatorObject = this;
    var e = cc.instantiate(this.picListPrefab);
    cc.find("Canvas/Main Camera").addChild(e);
    e.scale = 1 / cc.find("Canvas").scale;
  };
  o.prototype.setPic = function (e) {
    this.picIndex = e;
    var o = cc.instantiate(this.picPrefab);
    o.x = 310;
    o.y = -106;
    o.scale /= 3;
    o.getComponent(cc.Sprite).spriteFrame = o.getComponent("picCreator_shaonao").manPicArr[e];
    this.node.addChild(o);
  };
  o.prototype.cancelPic = function () {
    this.picIndex = undefined;
  };
  o.prototype.setOwnBranch = function () {
    this.setBranch(function (e) {
      window.creator.addOwnPrefab(this.node, e);
    }.bind(this));
  };
  o.prototype.setAiBranch = function () {
    this.setBranch(function (e) {
      window.creator.addAiPrefab(this.node, e);
    }.bind(this));
  };
  o.prototype.setBranch = function (e) {
    window.creator.loadDataFlag = true;
    var o = parseInt(this.branchEditBox.string);
    if (o) {
      this.isEnd = 0;
      e(o);
      this.node.getChildByName("succButton").active = false;
      this.node.getChildByName("failButton").active = false;
    } else {
      for (var t = this.node.children, n = 0; n < t.length; n++) {
        if (!(t[n].name != "own" && t[n].name != "ai" && t[n].name != "line")) {
          t[n].destroy();
        }
      }
      this.node.getChildByName("succButton").active = true;
      this.node.getChildByName("failButton").active = true;
    }
  };
  o.prototype.end = function (e, o) {
    if (parseInt(this.branchEditBox.string)) {
      cc.loader.loadRes("prefab/toast", cc.Prefab, function (e, o) {
        var t = cc.instantiate(o);
        cc.find("Canvas/Main Camera").addChild(t);
        t.zIndex = 32000;
        window.toastNode.initData("先把分支个数设置成0");
      });
    } else if (o == 0) {
      this.node.getChildByName("succButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
      this.node.getChildByName("failButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
      this.isEnd = 0;
    } else if (o == 1) {
      if (this.isEnd == 1) {
        this.node.getChildByName("succButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
        this.node.getChildByName("failButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
        this.isEnd = 0;
      } else {
        this.node.getChildByName("succButton").getChildByName("Background").color = new cc.Color(0, 255, 0);
        this.node.getChildByName("failButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
        this.isEnd = parseInt(o);
      }
    } else if (-1 == this.isEnd) {
      this.node.getChildByName("succButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
      this.node.getChildByName("failButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
      this.isEnd = 0;
    } else {
      this.node.getChildByName("succButton").getChildByName("Background").color = new cc.Color(255, 255, 255);
      this.node.getChildByName("failButton").getChildByName("Background").color = new cc.Color(255, 0, 0);
      this.isEnd = parseInt(o);
    }
  };
  r([l(cc.EditBox)], o.prototype, "branchEditBox", undefined);
  r([l(cc.Prefab)], o.prototype, "picListPrefab", undefined);
  r([l(cc.Prefab)], o.prototype, "picPrefab", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;