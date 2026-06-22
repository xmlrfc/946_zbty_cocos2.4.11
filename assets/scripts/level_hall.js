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
const { default: Banner } = require("./Banner");
var a = require("./levelMessage_hall");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.itemPrefab = null;
    o.content = null;
    o.scrollView = null;
    o.bgsprite = [];
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.levelMax = 0;
    this.heightMax = 0;
    this.showItem();
  };
  o.prototype.start = function () {
    window.adUtil.closeBannerAd();
    window.adUtil.destroyNewNativeAd();
    window.adUtil.destroyOppoCustomIconAd();
    if (window.gameRecorderManagerStartFlag) {
      window.adUtil.stopRecord();
    }
  };
  o.prototype.showItem = function () {
    this.levelPerPage = 24;
    for (var e = 0; e < 2 * this.levelPerPage; e++) {
      this.addLevel(this.levelMax + 1);
    }
    this.scrollView.scrollToOffset(cc.v2(0, 0));
  };
  o.prototype.scrollViewCallback = function (e) {
    var o = e.node.height;
    var t = Math.ceil(e.getScrollOffset().y / o);
    if (o * t > this.heightMax) {
      this.heightMax = o * t;
      for (var n = 0; n < this.levelPerPage; n++) {
        this.addLevel(this.levelMax + 1);
      }
    }
  };
  o.prototype.addLevel = function (e) {
    var o = a.getModelLength();
    if (!(o != "endless" && e > o)) {
      this.levelMax = e;
      var t = cc.instantiate(this.itemPrefab);
      t.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgsprite[1];
      if (window.objectName_hall == "ballhome") {
        t.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgsprite[0];
      }
      t.getComponent("levelItem_hall").init(e);
      t.parent = this.content;
    }
  };
  o.prototype.close = function () {
    cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    Banner.Instance.ShowCustomAd();
  };
  r([d(cc.Prefab)], o.prototype, "itemPrefab", undefined);
  r([d(cc.Node)], o.prototype, "content", undefined);
  r([d(cc.ScrollView)], o.prototype, "scrollView", undefined);
  r([d([cc.SpriteFrame])], o.prototype, "bgsprite", undefined);
  return r([l], o);
}(cc.Component);
exports.default = s;