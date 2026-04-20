const { ccclass, property } = cc._decorator;

@ccclass
export default class PrefsManager extends cc.Component {

    public jsonData: { [key: string]: any } = {};

    public static ClearData() {
        cc.sys.localStorage.clear();
    }

    public static GetItem(key: string) {
        return cc.sys.localStorage.getItem(key);
    }

    public static SetItem(key: string, value: any) {
        cc.sys.localStorage.setItem(key, value.toString());
    }

    public static GetBool(key: string, defaultValue: boolean = false): boolean {
        const val = cc.sys.localStorage.getItem(key);
        if (val === null || val == "" || val == undefined) return defaultValue;
        return val === "1";
    }

    public static SetBool(key: string, value: boolean) {
        cc.sys.localStorage.setItem(key, Number(value).toString());
    }

    public static SetNumber(key: string, value: any) {
        cc.sys.localStorage.setItem(key, value.toString());
    }

    public static GetNumber(key: string, defaultValue: number = 0) {
        if (PrefsManager.GetItem(key) && Number(cc.sys.localStorage.getItem(key))) {
            return Number(cc.sys.localStorage.getItem(key));
        }
        return defaultValue;
    }
}