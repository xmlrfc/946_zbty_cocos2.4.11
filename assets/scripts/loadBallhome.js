Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "ballhome";
  window.model = Number(e);
  window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 0);
  cc.game.groupList = ["default", "star", "ball"];
  cc.game.collisionMatrix = [[false], [false, true, true], [false, true, true]];
  cc.dynamicAtlasManager.enabled = false;
  window.powerControl.decreasePower(function () {
    cc.director.loadScene("game" + e + window.common_hall.getCommonObj("sceneSkin_model" + e + "_ballhome", "ballhome") + "_ballhome");
  });
};