Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = "drawLineMatchStickMen";
function i(e) {
  var o = e;
  if (!(e != "1" && e != "2")) {
    o = "";
  }
  cc.director.preloadScene("game" + o + window.common_hall.getCommonObj("sceneSkin_model" + o + "_" + n) + "_" + n, function () {}, function () {
    cc.assetManager.loadBundle("resouces_" + n, function () {
      cc.director.loadScene("game" + o + window.common_hall.getCommonObj("sceneSkin_model" + o + "_" + n) + "_" + n);
    });
  });
}
exports.loadGame = function (e) {
  var o;
  var t;
  window.objectName_hall = n;
  window.model = Number(e);
  cc.game.groupList = ["default", "men", "barrier", "line", "attack", "people", "waiqiang", "qibo", "npc", "hand", "standEnemy", "cannotDraw", "anniu", "hawl"];
  cc.game.collisionMatrix = [[true, false, null, null, false, true, true, false, null, false, null, true, false], [false, true, true, true, true, null, null, null, null, null, true, null, false, true], [false, true, true, true, true, null, null, null, null, true, null, null, false, true], [false, true, true, true, true, null, null, null, null, true, null, true, true, true], [false, true, true, true, true, null, null, false, true, true, null, null, true], [true, false, false, false, false, true, true, null, null, true, null, null, false], [true, false, false, false, false, true, true, null, null, true, null, null, false], [false, false, false, false, false, false, false, false, null, true, null, null, false], [false, false, false, false, true, false, false, false, true, true, null, null, false, true], [false, false, true, true, true, true, true, true, true, true, null, null, false, true], [false, true, false, false, false, false, false, false, false, false, false, null, false], [true, false, false, true, false, false, false, false, false, false, false, false, false], [false, false, false, true, true, false, false, false, false, false, false, false, false, true], [false, true, true, true, false, false, false, false, true, true, false, false, true, false]];
  t = cc.sys.localStorage.getItem("starObj_drawLineMatchStickMen");
  window.starObj_drawLineMatchStickMen = t ? JSON.parse(t) : new Object();
  if ((o = e) == "1") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model1";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "2") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model2";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "3") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model3";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "4") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model4";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "5") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model5";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "6") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model6";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "7") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model7";
      var e = cc.sys.localStorage.getItem("levelmodel7_drawLineMatchStickMen");
      if (e) {
        if (Number(e) > 94) {
          cc.sys.localStorage.setItem("levelmodel7_drawLineMatchStickMen", "94");
        }
      } else {
        cc.sys.localStorage.setItem("levelmodel7_drawLineMatchStickMen", "1");
      }
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen"));
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "8") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model8";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "9") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model9";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "10") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model10";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "11") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model11";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "12") {
    window.gameModel = "model12";
    window.home.initModel12();
  } else if (o == "13") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model13";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "14") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model14";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "15") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model15";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  } else if (o == "16") {
    window.powerControl.decreasePower(function () {
      window.gameModel = "model16";
      window.maxLevel = Number(cc.sys.localStorage.getItem("level" + window.gameModel + "_drawLineMatchStickMen") || 1);
      window.currentLevel = window.maxLevel;
      i(o);
    });
  }
};