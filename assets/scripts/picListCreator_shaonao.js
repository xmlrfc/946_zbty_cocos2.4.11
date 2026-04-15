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
    o.picPrefab = null;
    o.contentNode = null;
    o.scrollView = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.picListCreator = this;
  };
  o.prototype.start = function () {
    for (var e = 0, o = cc.instantiate(this.picPrefab).getComponent("picCreator_shaonao"), t = function () {
        if (!o.manPicArr[e]) {
          e++;
          return "continue";
        }
        var t = cc.instantiate(n.picPrefab);
        var i = t.getComponent("picCreator_shaonao");
        t.on(cc.Node.EventType.TOUCH_START, function () {
          i.clickPic(i.spriteIndex);
        });
        i.setSprite(e);
        n.contentNode.addChild(t);
        e++;
      }, n = this; e < o.manPicArr.length;) {
      t();
    }
    this.scrollView.scrollToOffset(cc.v2(0, 0));
  };
  o.prototype.clickCancel = function () {
    this.node.destroy();
  };
  r([l(cc.Prefab)], o.prototype, "picPrefab", undefined);
  r([l(cc.Node)], o.prototype, "contentNode", undefined);
  r([l(cc.ScrollView)], o.prototype, "scrollView", undefined);
  return r([c], o);
}(cc.Component);
exports.default = d;