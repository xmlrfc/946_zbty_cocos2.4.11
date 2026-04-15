Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "saimanpingzi";
  window.model = Number(e);
  cc.game.groupList = ["default", "animal_zhaogedan", "bottle_saimanpingzi", "ball_saimanpingzi"];
  cc.game.collisionMatrix = [[false, false], [false, true], [false, false, false, true], [false, false, true, true]];
  window.powerControl.decreasePower(function () {
    window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
    if (window.currentLevel > n.getModelLength()) {
      window.currentLevel = n.getModelLength();
    }
    cc.director.loadScene(n.getSceneName());
  });
};