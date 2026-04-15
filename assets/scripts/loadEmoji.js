Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
exports.loadGame = function (e) {
  window.objectName_hall = "emoji";
  window.model = Number(e);
  if (window.model == 3) {
    window.combineModel2WithModel3Flag = false;
  }
  cc.director.loadScene("login_emoji");
};