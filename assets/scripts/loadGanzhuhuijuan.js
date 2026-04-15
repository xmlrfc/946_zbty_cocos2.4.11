Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "ganzhuhuijuan";
  window.model = Number(e);
  cc.game.groupList = ["default", "animal_zhaogedan", "bottle_saimanpingzi", "ball_saimanpingzi", "animal_dongwuxiaoxiao", "animal_ganzhuhuijuan", "floor_ganzhuhuijuan", "animalCheckMove_ganzhuhuijuan"];
  cc.game.collisionMatrix = [[false, false], [false, true], [false, false, false, true], [false, false, true, true], [false, false, false, false, true], [false, false, false, false, false, true, true, true], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false, false]];
  window.powerControl.decreasePower(function () {
    window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
    cc.director.loadScene(n.getSceneName());
  });
};