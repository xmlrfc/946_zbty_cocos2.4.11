Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
function n(e) {
  cc.sys.localStorage.setItem("model_migong", e + "");
  var o = cc.sys.localStorage.getItem("model" + e + "Level_migong");
  if (!o) {
    cc.sys.localStorage.setItem("model" + e + "Level_migong", "1");
  }
  o = Number(cc.sys.localStorage.getItem("model" + e + "Level_migong"));
  window.currentLevel = o;
  if (e == 5) {
    window.mainthis["Model" + e + "LevelMax"] = null;
    cc.director.loadScene("game" + e + "_migong");
  } else {
    cc.assetManager.loadBundle("resources_migong", function (t, n) {
      n.loadDir("JSONs/model" + e, function (t, n) {
        window.mainthis["Model" + e + "LevelMax"] = n.length;
        if (o > n.length) {
          o = n.length;
          cc.sys.localStorage.setItem("model" + e + "Level_migong", o + "");
          window.currentLevel = o;
        }
        cc.director.loadScene("game" + e + "_migong");
      });
    });
  }
}
exports.loadGame = function (e) {
  window.objectName_hall = "migong";
  window.model = Number(e);
  cc.game.groupList = ["default", "Ground", "prop", "wo", "gui", "men", "bean", "car"];
  cc.game.collisionMatrix = [[true, true, true], [true, false], [true, false, false], [false, false, false, false, true, true, true], [false, false, false, true, false], [false, false, false, true, false, false], [false, false, false, true, false, false, false], [false, false, false, false, false, false, false, true]];
  if (!window.lastPopTime) {
    window.lastPopTime = new Date().getTime();
  }
  window.mainthis = {};
  var o = Number(e);
  if (o != 8) {
    window.powerControl.decreasePower(function () {
      n(o);
    });
  }
};