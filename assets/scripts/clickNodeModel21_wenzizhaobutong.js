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
a.property;
var l = function (e) {
  function o() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    this.node.on(cc.Node.EventType.TOUCH_END, this.click, this);
  };
  o.prototype.start = function () {};
  o.prototype.setSuccessFlag = function (e) {
    this.successFlag = e;
  };
  o.prototype.click = function () {
    var e = this;
    if (this.successFlag) {
      this.successFlag = false;
      window.game.clickSuccess();
      cc.tween(this.node.getChildByName("zi")).to(0.4, {
        opacity: 0
      }, {
        easing: "quadIn"
      }).call(function () {
        e.node.getChildByName("zi").getComponent(cc.Label).string = e.node.correctStr;
      }).to(0.4, {
        opacity: 255
      }, {
        easing: "quadIn"
      }).start();
      if (this.node.getChildByName("circle3")) {
        window.game21.drawAnswerFlag = false;
      } else {
        cc.assetManager.loadBundle("resources_wenzizhaobutong", function (o, t) {
          t.load("prefab/ui/circle3", cc.Prefab, function (o, t) {
            var n = cc.instantiate(t);
            n.height = 60;
            n.width = 60;
            e.node.addChild(n);
          });
        });
      }
    } else {
      window.game.clickFail();
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;