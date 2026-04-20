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
                Banner.Instance.AddShortcut();
                break;
            default:
                console.log(`${event.target.name} 没有添加点击事件`);
                break;
        }
    }
}
