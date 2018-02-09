class Data {
    public static grasstime: string = "grasstime";
    public static key: string = "clovernumber";
    public static isfirst: string = "isfirst";
    public static gametime: string = "gametime";
    public static state: string = "state";
    private static _screenWidth: number = 0;
    private static _screenHeight: number = 0;
    private static clovernumber: number = 500;
    private static frogstate: boolean = true;
    public static grasslist: any[] =
    [[600, 0, 1, ""],
    [40, 550, 1, ""],
    [0, 560, 1, ""],
    [-50, 570, 1, ""],
    [-200, 580, 1, ""],
    [-300, 590, 1, ""],
    [20, 600, 1, ""],
    [-400, 550, 1, ""],
    [-150, 620, 1, ""],
    [-250, 620, 1, ""],
    [-350, 630, 1, ""],
    [-450, 640, 1, ""],
    [-100, 650, 1, ""],
    [-50, 650, 1, ""],
    [30, 630, 1, ""],
    [-312, 680, 1, ""],
    [-134, 680, 1, ""],
    [-412, 680, 1, ""],
    [-234, 680, 1, ""],
    [-80, 680, 1, ""]];
    public static getscreenWidth(): number {
        if (Data._screenWidth == 0) {
            Data._screenWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return Data._screenWidth;
    }

    public static getfrogstate(): boolean {
        let myfrogstate: boolean;
        if (egret.localStorage.getItem(this.state) == null) {
            this.savestate();
            myfrogstate = this.frogstate;
        } else {
            if (egret.localStorage.getItem(this.state) == "true") {
                myfrogstate = true;
            } else {
                myfrogstate = false;
            }

        }
        return myfrogstate;
    }




    public static Clovernumber(): string {

        return this.clovernumber.toString();
    }

    public static subClover(num: string) {
        this.clovernumber = parseInt(egret.localStorage.getItem(this.key));
        this.clovernumber -= parseInt(num);
        this.save();
    }
    public static AddClover() {


        this.clovernumber = parseInt(egret.localStorage.getItem(this.key));
        this.clovernumber++;
        this.save();

    }
    public static getscreenHeight(): number {
        if (Data._screenHeight == 0) {
            Data._screenHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    }

    public static initlist() {

        var temp: number = 0;
        for (let i: number = 0; i < this.grasslist.length; i++) {
            var x = Math.random();
            this.grasslist[i][2] = 1;
            let str: string;
            if (x < 0.1) {
                this.grasslist[i][3] = "clover_166_png";
                str = "clover_166_png";
            } else if (x < 0.55) {
                this.grasslist[i][3] = "clover_160_png";
                str = "clover_160_png";
            } else {
                this.grasslist[i][3] = "clover_154_png";
                str = "clover_154_png";
            }

            var firstvalue: string = "no";
            egret.localStorage.setItem(this.isfirst, firstvalue);
            var value: string = this.grasslist[i][0].toString() + "," + this.grasslist[i][1].toString() + "," + this.grasslist[i][2].toString() + "," + str;
            egret.localStorage.setItem(temp.toString(), value);
            temp++;
        }

    }
    public static reset() {
        egret.localStorage.clear();
        var value: string = "yes";
        egret.localStorage.setItem(this.isfirst, value);
    }
    public static savelist() {
        for (let i: number = 0; i < this.grasslist.length; i++) {
            var value: string = this.grasslist[i][0].toString() + "," + this.grasslist[i][1].toString() + "," + this.grasslist[i][2].toString() + "," + this.grasslist[i][3];
            egret.localStorage.setItem(i.toString(), value);

        }
    }
    public static loadlist() {
        for (let i: number = 0; i < this.grasslist.length; i++) {
            let str = egret.localStorage.getItem(i.toString())
            let strArray: string[] = str.split(",");
            this.grasslist[i][0] = parseInt(strArray[0]);
            this.grasslist[i][1] = parseInt(strArray[1]);
            this.grasslist[i][2] = parseInt(strArray[2]);
            this.grasslist[i][3] = strArray[3];
        }
    }
    public static ShopTable: { [key: string]: string[]; } = {};
    public static BackpackTable: { [key: string]: number } = {};

    public static readShopTable() {

        let str: string = RES.getRes("PropsTable_txt");
        let strArray: string[] = str.split("\n");
        let strArray2: string[][] = [];
        for (let i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        let temp: number = 0;
        for (let i = 1; i < strArray2.length; i++) {
            this.ShopTable[strArray2[i][0]] = strArray2[i];
            if (egret.localStorage.getItem(strArray2[i][0]) == null) {
               
                this.initbackpack();
            }else{
                 this.BackpackTable[strArray2[i][0]]= parseInt(egret.localStorage.getItem(strArray2[i][0]));
            }

            this.BackpackTable[strArray2[i][0]] = 0;
        }
    }
    public static initbackpack() {
         let str: string = RES.getRes("PropsTable_txt");
        let strArray: string[] = str.split("\n");
        let strArray2: string[][] = [];
        for (let i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        let temp: number = 0;
        for (let i = 1; i < strArray2.length; i++) {
            let value: string = "0";

            egret.localStorage.setItem(strArray2[i][0], value);

        }
        
    }
    public static savebackpack() {
        let str: string = RES.getRes("PropsTable_txt");
        let strArray: string[] = str.split("\n");
        let strArray2: string[][] = [];
        for (let i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        let temp: number = 0;
        for (let i = 1; i < strArray2.length; i++) {
            let value: string = this.BackpackTable[strArray2[i][0]].toString();

            egret.localStorage.setItem(strArray2[i][0], value);

        }
    }

    public static Buy(id: string) {
        this.BackpackTable[id] += 1;
        this.savebackpack();
    }

    public static save() {

        var value: string = this.clovernumber.toString();
        egret.localStorage.setItem(this.key, value);
    }
    public static loadtime(str: string): number {
        let timestr = egret.localStorage.getItem(str);
        let time = parseInt(timestr);
        return time;
    }
    public static savetime(str: string) {
        let timestamp3 = new Date().getTime();
        var value: string = timestamp3.toString();
        egret.localStorage.setItem(str, value);
    }

    public static Photo:{[key: string]: number }={
        "meisyo_01_png":1,
        "meisyo_02_png":1,
        "meisyo_03_png":1,
        "meisyo_04_png":1,
        "meisyo_05_png":1,
        "meisyo_06_png":1,
        "meisyo_07_png":1,
        "meisyo_08_png":1,
        "meisyo_09_png":1,
        "meisyo_10_png":1
    };

    public static savestate() {

        let myfrogstate = this.frogstate;
        var value: string = myfrogstate.toString();
        egret.localStorage.setItem(this.state, value);
    }
    public static changestate() {
        if (this.frogstate == true) {
            this.frogstate = false;
        } else {
            this.frogstate = true;
        }
    }



}