Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "bachudingzi";
  window.model = Number(e);
  if (window.model == 1) {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("model" + window.model + "_bachudingzi") || 1);
      window.levelMaxModel = n.getModelLength();
      if (window.currentLevel > window.levelMaxModel) {
        window.currentLevel = window.levelMaxModel;
      }
      cc.director.loadScene(n.getSceneName());
    });
  }
};