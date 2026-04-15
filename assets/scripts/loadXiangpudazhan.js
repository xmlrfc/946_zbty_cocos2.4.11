Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "xiangpudazhan";
  window.model = Number(e);
  window.currentLevel = Number(cc.sys.localStorage.getItem(n.getLocalStorageLevelKey()) || 1);
  if (window.currentLevel > n.getModelLength()) {
    window.currentLevel = n.getModelLength();
  }
  window.powerControl.decreasePower(function () {
    cc.director.loadScene(n.getSceneName());
  });
};