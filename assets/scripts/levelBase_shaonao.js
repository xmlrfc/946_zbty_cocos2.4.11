const { default: Banner } = require("./Banner");

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
    o.levelItemName = "levelItem_shaonao";
    o.homeName = "home";
    o.itemPrefab = null;
    o.content = null;
    o.scrollView = null;
    o.bgsprite = [];
    return o;
  }
  i(o, e);
  o.prototype.start = function () {
    this.showItem();
    if (window.gameRecorderManagerStartFlag) {
      window.adUtil.stopRecord();
    }
  };
  o.prototype.showItem = function () {
    return a(this, undefined, undefined, function () {
      var e;
      var o;
      var t;
      var n;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (window.model != 6 && window.model != 7) {
              return [3, 1];
            } else {
              e = window.levelRes.length;
              return [3, 3];
            }
          case 1:
            return [4, window.adUtil.loadDirByBundleSync("resources_" + window.model + "_shaonao", "json/json" + window.model)];
          case 2:
            o = i.sent();
            e = o.length;
            i.label = 3;
          case 3:
            if (window.home && window.home.isModelNowInModel12()) {
              e = window.model12Arr.length;
            }
            t = 0;
            for (; t < e; t++) {
              (n = cc.instantiate(this.itemPrefab)).getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgsprite[1];
              n.getComponent(this.levelItemName).init(t + 1);
              n.parent = this.content;
            }
            this.scrollView.scrollToOffset(cc.v2(0, 0));
            return [2];
        }
      });
    });
  };
  o.prototype.close = function () {
    cc.director.loadScene("home" + window.common_hall.getCommonObj("homeSceneSkin"));
    Banner.Instance.ShowCustomAd();
  };
  r([s(cc.Prefab)], o.prototype, "itemPrefab", undefined);
  r([s(cc.Node)], o.prototype, "content", undefined);
  r([s(cc.ScrollView)], o.prototype, "scrollView", undefined);
  r([s([cc.SpriteFrame])], o.prototype, "bgsprite", undefined);
  return r([d], o);
}(cc.Component);
exports.default = u;