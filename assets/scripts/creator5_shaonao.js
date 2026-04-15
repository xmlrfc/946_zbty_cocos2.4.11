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
    o.levelNode = null;
    o.blocksNode = null;
    o.blockPrefab = null;
    o.upNode = null;
    o.downNode = null;
    o.leftNode = null;
    o.rightNode = null;
    o.colorNode = null;
    o.colorLabel = null;
    return o;
  }
  i(o, e);
  o.prototype.onLoad = function () {
    window.creator = this;
    window.creatorModel = 5;
    window.model = 5;
    this.upNode.on(cc.Node.EventType.TOUCH_START, this.clickBlock, this.upNode);
    this.downNode.on(cc.Node.EventType.TOUCH_START, this.clickBlock, this.downNode);
    this.leftNode.on(cc.Node.EventType.TOUCH_START, this.clickBlock, this.leftNode);
    this.rightNode.on(cc.Node.EventType.TOUCH_START, this.clickBlock, this.rightNode);
  };
  o.prototype.start = function () {
    this.loadConfig();
  };
  o.prototype.loadConfig = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      var n;
      var i;
      var r;
      return c(this, function () {
        for (e = 0; e < 32; e++) {
          for (n = 0; n < 32; n++) {
            (i = cc.instantiate(cc.instantiate(this.blockPrefab))).x = i.width / 2 - 320 + n * i.width;
            i.y = i.height / 2 - 320 + e * i.height;
            this.blocksNode.addChild(i);
            i.getChildByName("pic").on(cc.Node.EventType.TOUCH_START, this.clickBlock, i);
          }
        }
        if (window.creatorArr) {
          window.json = window.creatorArr;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.up.color);
          this.upNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.down.color);
          this.downNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.left.color);
          this.leftNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.right.color);
          this.rightNode.color = o;
          t = this.blocksNode.children;
          n = 0;
          window.json = window.creatorArr;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.up.color);
          this.upNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.down.color);
          this.downNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.left.color);
          this.leftNode.color = o;
          o = new cc.Color();
          cc.Color.fromHEX(o, window.json.right.color);
          this.rightNode.color = o;
          t = this.blocksNode.children;
          n = 0;
          for (; n < window.json.blocks.length; n++) {
            i = t[window.json.blocks[n].X + 32 * window.json.blocks[n].Y];
            r = new cc.Color();
            cc.Color.fromHEX(r, window.json.blocks[n].color);
            i.getChildByName("pic").color = r;
          }
        }
        return [2];
      });
    });
  };
  o.prototype.clickBlock = function (e) {
    var o = window.creator.colorLabel.getComponent(cc.Label).string;
    if (o.length >= 7) {
      var t = new cc.Color();
      cc.Color.fromHEX(t, o);
      e.target.color = t;
    }
  };
  o.prototype.getArr = function () {
    var e = {
      up: {}
    };
    e.up.color = "#" + this.upNode.color.toHEX();
    e.down = {};
    e.down.color = "#" + this.downNode.color.toHEX();
    e.left = {};
    e.left.color = "#" + this.leftNode.color.toHEX();
    e.right = {};
    e.right.color = "#" + this.rightNode.color.toHEX();
    e.blocks = [];
    for (var o = this.blocksNode.children, t = 0; t < 32; t++) {
      for (var n = 0; n < 32; n++) {
        var i = o[n + 32 * t].getChildByName("pic").color;
        if (i.r != 255 || i.g != 255 || i.b != 255) {
          var r = {};
          r.X = n;
          r.Y = t;
          r.color = "#" + o[n + 32 * t].getChildByName("pic").color.toHEX();
          e.blocks.push(r);
        }
      }
    }
    return e;
  };
  o.prototype.previewClick = function () {
    window.creatorArr = this.getArr();
    console.log(window.creatorArr);
    cc.director.loadScene("game5_shaonao");
  };
  o.prototype.changeColor = function () {
    var e = window.creator.colorLabel.getComponent(cc.Label).string;
    if (e.length >= 7) {
      var o = new cc.Color();
      cc.Color.fromHEX(o, e);
      this.colorNode.color = o;
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
  r([s(cc.Node)], o.prototype, "levelNode", undefined);
  r([s(cc.Node)], o.prototype, "blocksNode", undefined);
  r([s(cc.Prefab)], o.prototype, "blockPrefab", undefined);
  r([s(cc.Node)], o.prototype, "upNode", undefined);
  r([s(cc.Node)], o.prototype, "downNode", undefined);
  r([s(cc.Node)], o.prototype, "leftNode", undefined);
  r([s(cc.Node)], o.prototype, "rightNode", undefined);
  r([s(cc.Node)], o.prototype, "colorNode", undefined);
  r([s(cc.Label)], o.prototype, "colorLabel", undefined);
  return r([d], o);
}(cc.Component);
exports.default = u;