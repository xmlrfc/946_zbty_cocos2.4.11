import Banner from "../scripts/Banner";
import PrefsManager from "./PrefsManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingPanel extends cc.Component {
    //是否打开音乐
    public static get IsMusicOn(): boolean {
        return PrefsManager.GetBool("Constant.Key.IsMusicOn", true);
    }
    public static set IsMusicOn(value: boolean) {
        PrefsManager.SetBool("Constant.Key.IsMusicOn", value);
    }

    //是否打开音效
    public static get IsSoundOn(): boolean {
        return PrefsManager.GetBool("Constant.Key.IsSoundOn", true);
    }
    public static set IsSoundOn(value: boolean) {
        PrefsManager.SetBool("Constant.Key.IsSoundOn", value);
    }

    //是否打开震动
    public static get IsVibrateOn(): boolean {
        return PrefsManager.GetBool("Constant.Key.IsVibrateOn", true);
    }
    public static set IsVibrateOn(value: boolean) {
        PrefsManager.SetBool("Constant.Key.IsVibrateOn", value);
    }

    public static Show(parent: cc.Node = null) {
        cc.resources.load("SettingPanel", function (err, prefab: cc.Prefab) {
            let node = cc.instantiate(prefab);

            if (!parent) {
                parent = cc.find("Canvas");
            }

            parent.addChild(node);
            node.setPosition(cc.Vec3.ZERO);
            let panel = node.getComponent(SettingPanel);
            panel.Show();
        });

    }

    panel: cc.Node = null;
    MusicToggle: cc.Node = null;
    SoundToggle: cc.Node = null;
    VibrateToggle: cc.Node = null;

    protected onLoad(): void {
        this.panel = cc.find("Panel", this.node);
        this.MusicToggle = cc.find("Panel/Toggles/MusicToggle", this.node);
        this.SoundToggle = cc.find("Panel/Toggles/SoundToggle", this.node);
        this.VibrateToggle = cc.find("Panel/Toggles/VibrateToggle", this.node);

        this.Show();
    }

    Show() {
        this.RefreshToggle(this.MusicToggle, SettingPanel.IsMusicOn);
        this.RefreshToggle(this.SoundToggle, SettingPanel.IsSoundOn);
        this.RefreshToggle(this.VibrateToggle, SettingPanel.IsVibrateOn);

        cc.Tween.stopAllByTarget(this.node);
        this.panel.setScale(0, 0, 0);
        cc.tween(this.panel).to(0.3, { scale: 1 }, { easing: 'backOut' }).start();
    }

    RefreshToggle(nd: cc.Node, on: boolean) {
        let toggle = nd.getChildByName("ToggleSp");
        toggle.scaleX = on ? 1 : -1;
        toggle.color = on ? cc.color().fromHEX("#3AC569") : cc.color().fromHEX("#787878");
        nd.getChildByName("ToggleLb").getComponent(cc.Label).string = on ? "开" : "关";
    }

    OnButtonClick(event: cc.Event) {
        switch (event.target.name) {
            case "CloseButton":
                this.node.destroy();
                break;
            case "MusicToggle":
                SettingPanel.IsMusicOn = !SettingPanel.IsMusicOn;
                this.RefreshToggle(this.MusicToggle, SettingPanel.IsMusicOn);
                break;
            case "SoundToggle":
                SettingPanel.IsSoundOn = !SettingPanel.IsSoundOn;
                this.RefreshToggle(this.SoundToggle, SettingPanel.IsSoundOn);
                break;
            case "VibrateToggle":
                SettingPanel.IsVibrateOn = !SettingPanel.IsVibrateOn;
                this.RefreshToggle(this.VibrateToggle, SettingPanel.IsVibrateOn);
                break;
        }
    }


}
