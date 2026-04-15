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
var a = require("./moveBase_shaonao");
var c = cc._decorator;
var l = c.ccclass;
var d = c.property;
var s = function (e) {
  function o() {
    var o = e !== null && e.apply(this, arguments) || this;
    o.offsetY = 0;
    o.endInto = null;
    o.originalImg = null;
    o.changeImg = null;
    o.typeNumber = 0;
    o.sizeTypeNumber = 0;
    return o;
  }
  i(o, e);
  o.prototype.start = function () {};
  o.prototype.onTouchStart = function () {
    if (!window.game || !window.game.loadWin) {
      this.endInto.active = true;
      if (this.originalImg) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.originalImg;
      }
      if (this.lowNode) {
        this.lowNode.active = true;
      }
      if (this.fullNode) {
        this.fullNode.active = false;
      }
      if (this.node.connected) {
        this.node.connected.insertFlag = false;
        this.setSizeType(this.node.connected.x, this.node.connected.y, false);
        if (this.node.connected.phone.name == "fan") {
          this.node.connected.phone.getChildByName("anchor").getChildByName("bg").getComponent(cc.Animation).stop();
        }
        this.node.connected.phone = undefined;
      }
      this.node.connected = undefined;
      var e = this.node.phone.getComponent("phone_shaonao");
      if (e) {
        e.low();
      }
    }
  };
  o.prototype.onTouchEnd = function () {
    if (!window.game || !window.game.loadWin) {
      for (var e = this.endInto.x + this.node.x, o = this.endInto.y + this.node.y, t = cc.find("Canvas/level").children, n = [], i = 0; i < t.length; i++) {
        if (t[i].name == "paper") {
          n.push(t[i]);
        }
      }
      for (var r = 0; r < t.length; r++) {
        if (!(t[r].name.indexOf("sockets") < 0)) {
          var a = false;
          for (i = 0; i < n.length; i++) {
            if (Math.abs(e - n[i].x) < n[i].width / 2 && Math.abs(o - n[i].y) < n[i].height / 2) {
              a = true;
              break;
            }
          }
          if (!a) {
            var c = t[r].x;
            var l = t[r].y;
            if (Math.abs(e - c) <= 20 && Math.abs(o - l) <= 50 && this.typeNumber == t[r].getComponent("sockets_shaonao").typeNumber && this.node.phone._id != t[r].bgSockets._id && !t[r].insertFlag && !this.judgeInsertFlag(c, l)) {
              this.endInto.active = false;
              if (this.changeImg) {
                this.node.getComponent(cc.Sprite).spriteFrame = this.changeImg;
              }
              this.node.active = true;
              this.node.x -= e - c;
              this.node.y = l;
              this.node.connected = t[r];
              t[r].phone = this.node.phone;
              t[r].insertFlag = true;
              this.setSizeType(c, l, true);
              if (this.node.phone.name == "fan") {
                this.node.phone.getChildByName("anchor").getChildByName("bg").getComponent(cc.Animation).play();
                var d = function (e) {
                  s.scheduleOnce(function () {
                    cc.tween(n[e]).by(1, {
                      position: cc.v2(750, 0)
                    }).call(function () {
                      n[e].destroy();
                    }).start();
                  }, 0.5);
                };
                var s = this;
                for (i = 0; i < n.length; i++) {
                  d(i);
                }
              }
              break;
            }
          }
        }
      }
    }
  };
  o.prototype.setSizeType = function (e, o, t) {
    var n = cc.find("Canvas/level").children;
    if (this.sizeTypeNumber == 1) {
      for (var i = 0; i < n.length; i++) {
        if (!(n[i].name.indexOf("sockets") < 0) && n[i].x > e && n[i].x - e <= 200 && Math.abs(n[i].y - o) <= 50) {
          n[i].insertFlag = t;
          break;
        }
      }
    } else if (this.sizeTypeNumber == 2) {
      for (i = 0; i < n.length; i++) {
        if (!(n[i].name.indexOf("sockets") < 0) && n[i].x < e && e - n[i].x <= 200 && Math.abs(n[i].y - o) <= 50) {
          n[i].insertFlag = t;
          break;
        }
      }
    }
  };
  o.prototype.judgeInsertFlag = function (e, o) {
    var t = cc.find("Canvas/level").children;
    if (this.sizeTypeNumber == 1) {
      for (var n = 0; n < t.length; n++) {
        if (!(t[n].name.indexOf("sockets") < 0) && t[n].x > e && t[n].x - e <= 200 && Math.abs(t[n].y - o) <= 50) {
          return t[n].insertFlag;
        }
      }
    } else if (this.sizeTypeNumber == 2) {
      for (n = 0; n < t.length; n++) {
        if (!(t[n].name.indexOf("sockets") < 0) && t[n].x < e && e - t[n].x <= 200 && Math.abs(t[n].y - o) <= 50) {
          return t[n].insertFlag;
        }
      }
    }
  };
  r([d(Number)], o.prototype, "offsetY", undefined);
  r([d(cc.Node)], o.prototype, "endInto", undefined);
  r([d(cc.SpriteFrame)], o.prototype, "originalImg", undefined);
  r([d(cc.SpriteFrame)], o.prototype, "changeImg", undefined);
  r([d(Number)], o.prototype, "typeNumber", undefined);
  r([d(Number)], o.prototype, "sizeTypeNumber", undefined);
  return r([l], o);
}(a.default);
exports.default = s;