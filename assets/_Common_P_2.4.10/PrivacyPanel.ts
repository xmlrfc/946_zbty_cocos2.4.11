import Banner from "../scripts/Banner";
import PrefsManager from "./PrefsManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrivacyPanel extends cc.Component {
    static Panel: cc.Node = null;

    panel: cc.Node = null;
    content: cc.Node = null;
    disagreeButton: cc.Node = null;
    privacyLabel: cc.RichText = null;
    cb: Function = null;

    static Show(hasDisagree: boolean = true, parent: cc.Node = null, cb: Function = null) {
        cc.resources.load("PrivacyPanel", function (err, prefab: cc.Prefab) {
            if (err) {
                console.error(err);
                return;
            }

            let node = cc.instantiate(prefab);

            if (!parent) {
                parent = cc.find("Canvas");
            }

            if (cc.isValid(PrivacyPanel.Panel)) {
                PrivacyPanel.Panel.destroy();
            }

            PrivacyPanel.Panel = node;

            parent.addChild(node);
            node.setPosition(cc.Vec3.ZERO);
            node.setSiblingIndex(9999);
            let privacyPanel = node.getComponent(PrivacyPanel);
            privacyPanel.Show(hasDisagree, cb);
        });
    }

    protected onLoad(): void {
        this.panel = cc.find("ScrollView", this.node);
        this.content = cc.find("ScrollView/view/content", this.node);
        this.disagreeButton = cc.find("ScrollView/Buttons/DisagreeButton", this.node);
        this.privacyLabel = cc.find("ScrollView/view/content/PrivacyLabel", this.node).getComponent(cc.RichText);

        let str = `本游戏是<b>${Banner.Company}</b>为您提供的一款游戏产品,以下是隐私协议的相关内容,请务必仔细阅读。\n1.为了向您展示您感兴趣的广告，【本应用】将收集和处理您的以下信息，并仅在上述的目的范围内分享给第三方广告服务平台：\n1）  设备及使用信息：设备标识符、操作系统的设置信息、设备的硬件信息、应用的基本信息及使用信息、网络信息、运营商信息、华为帐号信息。\n2）广告互动信息：对广告的浏览、点击、关闭和播放信息。打开和关闭应用的时间、应用使用频率、应用错误日志。\n3）位置信息。我们会收集、使用并处理您设备的模糊位置或准确位置，这些位置信息通过 GPS、WLAN 和服务提供商的网络 ID 获取。我们会询问您要为本应用程序启用基于位置的服务。您可在设备的设置菜单中选择关闭设备上的相应权限，拒绝共享您的位置信息。\n上述数据将会传输并保存至【中华人民共和国境内】的服务器，保存期限为60天，超出这一保留时间后将删除，但法律法规另有要求除外。\n2.如果您不同意我们采集上述信息，或不同意调用相关手机权限或功能，本软件将无法正常运行。您可通过卸载或退出本软件来终止数据收集及上传。\n${Banner.Email}`;
        this.privacyLabel.string = str;
    }

    Show(hasDisagree: boolean = true, cb: Function = null) {
        cc.Tween.stopAllByTarget(this.node);

        this.panel.setScale(0, 0, 0);
        this.cb = cb;

        this.disagreeButton.active = hasDisagree;
        cc.tween(this.panel).to(0.3, { scale: 1 }, { easing: 'backOut' }).start();
    }

    OnButtonClick(event: cc.Event) {
        switch (event.target.name) {
            case "AgreeButton":
                PrefsManager.SetBool("AgreePolicy", true);
                //this.node.destroy();
                this.node.active = false;
                this.cb && this.cb();
                break;
            case "DisagreeButton":
                console.log(`退出游戏`);
                if (cc.sys.platform === cc.sys.DESKTOP_BROWSER) return;

                //@ts-ignore
                qg.exitApplication({
                    success: function () {
                        console.log("exitApplication success");
                    },
                    fail: function () {
                        console.log("exitApplication fail");
                    },
                    complete: function () {
                        console.log("exitApplication complete");
                    }
                });
                break;
        }
    }
}
