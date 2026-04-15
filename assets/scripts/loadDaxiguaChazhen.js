Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
exports.loadGame = function () {
  window.objectName_hall = "daxiguaChazhen";
  cc.game.groupList = ["default ", "fruits", "knifes"];
  cc.game.collisionMatrix = [[false, false], [false, false, false], [false, false, true]];
};