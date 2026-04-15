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
    window.addShortcut = this;
    if (window.miniPlatForm == "tt") {
      try {
        tt.onTouchEnd(function () {
          if (window.addShortcut.clickAddShortcutFlag) {
            window.addShortcut.ttAddShortcut();
            window.addShortcut.clickAddShortcutFlag = false;
          }
        });
      } catch (e) {}
    }
    this.node.on(cc.Node.EventType.TOUCH_END, this.clickAddShortcut, this);
  };
  o.prototype.start = function () {};
  o.prototype.clickAddShortcut = function () {
    window.addShortcut.clickAddShortcutFlag = true;
    if (window.miniPlatForm == "oppo") {
      this.oppoAddShortcut();
    }
    if (window.miniPlatForm == "vivo") {
      this.vivoAddShortcut();
    }
    if (window.miniPlatForm == "qq") {
      this.qqAddShortcut();
    }
  };
  o.prototype.ttAddShortcut = function () {
    try {
      tt.addShortcut({
        success: function () {
          console.log("添加桌面成功");
          window.adUtil.toast("已添加至桌面");
          window.addShortcut.getReward();
        },
        fail: function (e) {
          console.log("添加桌面失败", e.errMsg);
        }
      });
    } catch (e) {}
  };
  o.prototype.oppoAddShortcut = function () {
    try {
      qg.hasShortcutInstalled({
        success: function (e) {
          if (e == 0) {
            qg.installShortcut({
              success: function () {},
              fail: function (e) {
                console.log(JSON.stringify(e));
              },
              complete: function () {}
            });
          }
        },
        fail: function () {},
        complete: function () {}
      });
    } catch (e) {}
  };
  o.prototype.vivoAddShortcut = function () {
    try {
      qg.hasShortcutInstalled({
        success: function (e) {
          if (e) {
            console.log("已创建");
          } else {
            console.log("未创建");
            qg.installShortcut({
              success: function () {
                console.log("创建成功");
                window.adUtil.toast("已添加至桌面");
                window.addShortcut.getReward();
              }
            });
          }
        }
      });
    } catch (e) {}
  };
  o.prototype.qqAddShortcut = function () {
    try {
      qq.saveAppToDesktop({
        success: function () {
          window.adUtil.toast("已添加至桌面");
          console.log("创建成功");
          window.addShortcut.getReward();
        },
        fail: function (e) {
          window.adUtil.toast("添加失败");
          console.log("创建失败" + e);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  o.prototype.getReward = function () {};
  return r([c], o);
}(cc.Component);
exports.default = l;