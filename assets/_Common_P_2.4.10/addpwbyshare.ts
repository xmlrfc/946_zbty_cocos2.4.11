// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    close(){
        this.node.destroy();
        if ((window as any).powerControl && (window as any).powerControl.showAddPower) {
            (window as any).powerControl.showAddPower();
        }
    }

    onClick(){
        const powerControl = (window as any).powerControl;
        const adUtil = (window as any).adUtil;
        const success = () => {
            if (powerControl && powerControl.markAddPowerByShare) {
                powerControl.markAddPowerByShare();
            }
            if (powerControl && powerControl.addPower) {
                powerControl.addPower(5);
            }
            if (adUtil && adUtil.toast) {
                adUtil.toast("获得体力+5");
            }
            this.node.destroy();
        };
        if ((window as any).Banner && (window as any).Banner.Instance && (window as any).Banner.Instance.TikTokShare) {
            (window as any).Banner.Instance.TikTokShare(success);
        } else {
            success();
        }
    }

    // update (dt) {}
}
