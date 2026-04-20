const { ccclass, property } = cc._decorator;
declare var tt: any;
@ccclass
export default class NewClass extends cc.Component {
    start() {
        // // 检查是否是抖音环境
        // if (typeof tt === 'undefined') {
        //     this.node.active = false;
        //     return;
        // }
    }

    @property(cc.Node)
    GiftPanel: cc.Node = null;
    ShowGiftPanel() {
        this.GiftPanel.active = true;
    }
}
