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
    if (!(window.model == 17 && window.game17.loadWin || this.clickFlag)) {
      var o;
      this.clickFlag = true;
      if (this.successFlag) {
        for (var t = this.node.children, n = 0; n < t.length; n++) {
          if (t[n].name == "circle") {
            window.game.drawAnswerFlag = false;
            t[n].destroy();
            break;
          }
        }
        o = cc.instantiate(window.game.successPrefab);
        n = 0;
        for (; n < window.game.dataCom.length; n++) {
          if (this.node.getComponent(cc.Label).string == window.game.dataCom[n]) {
            window.game.dataCom.splice(n, 1);
            break;
          }
        }
        window.game.clickSuccess();
      } else {
        o = cc.instantiate(window.game.failPrefab);
        window.game.clickFail();
        this.scheduleOnce(function () {
          e.clickFlag = false;
          o.destroy();
        }, 1);
      }
      this.node.parent.parent.addChild(o);
      o.x = this.node.x - this.node.parent.x;
      o.y = this.node.y - this.node.parent.y;
      o.zIndex = 1;
      o.x += 20;
      o.y -= 40;
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;