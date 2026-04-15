Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = cc._decorator;
n.ccclass;
n.property;
var i = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "caijiqiuqiu";
  window.model = Number(e);
  cc.game.groupList = ["default", "ball", "wall", "ground", "baffle", "kuang", "gameover", "topgo", "dwongo"];
  cc.game.collisionMatrix = [[true], [false, false, true, true, null, true, true, true, true], [false, true, false], [false, true, false, false, true], [false, false, false, true, false], [false, true, false, false, false, false], [false, true, false, false, false, false, false], [false, true, false, false, false, false, false, false], [false, true, false, false, false, false, false, false, false]];
  window.powerControl.decreasePower(function () {
    if (window.model == 1) {
      window.currentLevel = Number(cc.sys.localStorage.getItem(i.getLocalStorageLevelKey()) || 1);
    } else if (window.model == 2) {
      window.currentLevel = Number(i.getLocalStorageLevelKey() || 1);
    }
    cc.director.loadScene(i.getSceneName());
  });
};