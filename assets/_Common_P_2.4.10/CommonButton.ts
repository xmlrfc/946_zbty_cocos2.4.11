import Banner from "../scripts/Banner";
import PrivacyPanel from "./PrivacyPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonButton extends cc.Component {
    @property(cc.Node)
    SetPrivacy: cc.Node = null;
    protected onLoad(): void {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "CommonButton";// 这个是代码文件名
        clickEventHandler.handler = "OnButtonClick";
        clickEventHandler.customEventData = "foobar";

        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);

        //vivo隐藏隐私政策
        if (this.node.name == "PrivacyButton" && Banner.Is_VIVO_GAME) this.node.active = false;
    }

    OnButtonClick(event, customEventData) {
        console.log(`点击：${event.target.name}`);

        switch (event.target.name) {
            case "PrivacyButton":
                PrivacyPanel.Show(false);
                break;
            case "SetPrivacy":
                this.SetPrivacy.active = true;
                break;
            case "AddShortCut":
                Banner.Instance.AddShortcut(() => {
                    (window as any).powerControl.addPower(10);
                    (window as any).adUtil.toast("获得体力+10");
                });
                break;
            case "BtnShare":
                Banner.Instance.TikTokShare(() => {
                    // 分享成功后执行的回调函数
                    let node = event.target;
                    while (node && node.name != "addPowerbyShare") {
                        node = node.parent;
                    }
                    if (node && (window as any).powerControl && (window as any).powerControl.markAddPowerByShare) {
                        (window as any).powerControl.markAddPowerByShare();
                    }
                    (window as any).powerControl.addPower(3);
                    (window as any).adUtil.toast("获得体力+3");
                    if (node) {
                        node.destroy();
                    }
                });
                break;
            case "BtnRank":
                Banner.Instance.TikTokRankingListGet();
                break;
            default:
                console.log(`${event.target.name} 没有添加点击事件`);
                break;
        }
    }
}
