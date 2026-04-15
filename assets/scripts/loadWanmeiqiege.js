Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "wanmeiqiege";
  window.model = Number(e);
  cc.game.groupList = ["default", "animal_zhaogedan", "bottle_saimanpingzi", "ball_saimanpingzi", "animal_dongwuxiaoxiao", "animal_ganzhuhuijuan", "floor_ganzhuhuijuan", "animalCheckMove_ganzhuhuijuan", "nail_bachudingzi", "nailHead_bachudingzi", "nailTail_bachudingzi", "protrusion_bachudingzi", "car_xiaochufeiji"];
  cc.game.collisionMatrix = [[false, false], [false, true], [false, false, false, true], [false, false, true, true], [false, false, false, false, true], [false, false, false, false, false, true, true, true], [false, false, false, false, false, true, false], [false, false, false, false, false, true, false, false], [false, false, false, false, false, false, false, false, false, null, null, false], [false, false, false, false, false, false, false, false, false, false, null, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false, true]];
  window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
  if (window.currentLevel > n.getModelLength()) {
    window.currentLevel = n.getModelLength();
  }
  window.powerControl.decreasePower(function () {
    cc.director.loadScene(n.getSceneName());
  });
};