var n = this && this.__awaiter || function (e, o, t, n) {
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
var i = this && this.__generator || function (e, o) {
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
exports.loadGame = undefined;
var r = require("./levelMessage_hall");
var a = "_wenzizhaobutong";
function c() {
  cc.director.loadScene(r.getSceneName());
}
function l() {
  window.powerControl.decreasePower(function () {
    window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
    if (window.currentLevel > window.levelMaxModel) {
      window.currentLevel = window.levelMaxModel;
    }
    c();
  });
}
function d() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function s() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/naoli")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function u() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/jielong")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function h() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function w() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function p() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function f() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function y() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function g() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function m() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/naoli")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function v() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/jielong")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function _() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/jielong")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function b() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/jielong")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function A() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function C() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.length;
          l();
          return [2];
      }
    });
  });
}
function N() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
function O() {
  return n(this, undefined, undefined, function () {
    var e;
    return i(this, function (o) {
      switch (o.label) {
        case 0:
          e = window;
          return [4, window.adUtil.loadJsonByBundleSync("resources" + a, "json/json" + window.model + "/level")];
        case 1:
          e.levelResModel = o.sent();
          window.levelMaxModel = window.levelResModel.json.data.length;
          l();
          return [2];
      }
    });
  });
}
exports.loadGame = function (e) {
  window.objectName_hall = "wenzizhaobutong";
  window.model = Number(e);
  cc.game.groupList = ["default", "barrier", "item"];
  cc.game.collisionMatrix = [[true], [false, false, true], [false, true, true]];
  if (e == "1") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "2") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "3") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "4") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "5") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "6") {
    d();
  } else if (e == "7") {
    s();
  } else if (e == "8") {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("level" + window.model + a) || 1);
      c();
    });
  } else if (e == "9") {
    u();
  } else if (e == "10") {
    h();
  } else if (e == "11") {
    w();
  } else if (!(e == "12")) {
    if (e == "13") {
      p();
    } else if (e == "14") {
      f();
    } else if (e == "15") {
      y();
    } else if (e == "16") {
      g();
    } else if (e == "17") {
      m();
    } else if (e == "18") {
      v();
    } else if (e == "19") {
      _();
    } else if (e == "20") {
      b();
    } else if (e == "21") {
      A();
    } else if (e == "22") {
      window.powerControl.decreasePower(function () {
        c();
      });
    } else if (e == "23") {
      C();
    } else if (e == "24") {
      N();
    } else if (e == "25") {
      O();
    }
  }
};