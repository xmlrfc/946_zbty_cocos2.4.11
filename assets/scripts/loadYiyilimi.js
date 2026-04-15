Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGame = undefined;
exports.loadGame = function () {
  window.objectName_hall = "yiyilimi";
  cc.game.groupList = ["default", "player", "enemy", "enemyWeapon", "playerWeapon", "barrier", "droppedWeapon", "energyBall"];
  cc.game.collisionMatrix = [[false], [false, false, false, true, null, false, true, true], [false, false, false, null, true, false], [false, true, false, false, true, false], [false, false, true, true, false, false, true, false], [false, false, false, false, false, false], [false, true, false, false, true, false, false], [false, true, false, false, false, false, false, false]];
};