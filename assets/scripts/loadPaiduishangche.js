Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
var n = require("./levelMessage_hall");
exports.loadGame = function (e) {
  window.objectName_hall = "paiduishangche";
  window.model = Number(e);
  if (window.model == 1) {
    window.powerControl.decreasePower(function () {
      window.currentLevel = Number(cc.sys.localStorage.getItem("model" + window.model + "_" + window.objectName_hall) || 1);
      cc.director.loadScene(n.getSceneName());
    });
  }
};