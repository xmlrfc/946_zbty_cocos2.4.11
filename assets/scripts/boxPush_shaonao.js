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
    var e = this.node.addComponent(cc.Button);
    e.transition = cc.Button.Transition.SCALE;
    var o = new cc.Component.EventHandler();
    o.target = this.node;
    o.component = "boxPush_shaonao";
    o.handler = "click";
    e.clickEvents.push(o);
  };
  o.prototype.start = function () {};
  o.prototype.setDirection = function (e) {
    this.index = e;
  };
  o.prototype.click = function () {
    if (!window.game.loadWin) {
      this.boxArr = [];
      if (this.index == 0) {
        this.next(this.node.x, this.node.y + window.game.perWidth, 0, window.game.perWidth);
      } else if (this.index == 1) {
        this.next(this.node.x, this.node.y - window.game.perWidth, 0, -1 * window.game.perWidth);
      } else if (this.index == 2) {
        this.next(this.node.x - window.game.perWidth, this.node.y, -1 * window.game.perWidth, 0);
      } else if (this.index == 3) {
        this.next(this.node.x + window.game.perWidth, this.node.y, window.game.perWidth, 0);
      }
    }
  };
  o.prototype.isWall = function (e, o) {
    return Math.abs(e) > Math.abs(window.game.width * window.game.perWidth / 2) || Math.abs(o) > Math.abs(window.game.height * window.game.perWidth / 2);
  };
  o.prototype.next = function (e, o, t, n) {
    if (!this.isWall(e, o)) {
      for (var i = true, r = 0; r < window.game.boxArr.length; r++) {
        var a = window.game.boxArr[r];
        if (e == a.x && o == a.y) {
          i = false;
          this.boxArr.push(a);
          break;
        }
      }
      if (i) {
        this.move(t, n);
      } else {
        this.next(e + t, o + n, t, n);
      }
    }
  };
  o.prototype.move = function (e, o) {
    for (var t = 0; t < this.boxArr.length; t++) {
      cc.tween(this.boxArr[t]).by(0.1, {
        position: cc.v2(e, o)
      }).start();
    }
  };
  return r([c], o);
}(cc.Component);
exports.default = l;