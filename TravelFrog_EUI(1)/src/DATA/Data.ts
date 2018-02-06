class Data {

    private static _screenWidth: number = 0;
    public static getscreenWidth(): number {
        if (Data._screenWidth == 0) {
            Data._screenWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return Data._screenWidth;
    }


    private static _screenHeight: number = 0;
    public static getscreenHeight(): number {
        if (Data._screenHeight == 0) {
            Data._screenHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    }
    public static grasslist: any[] = [[600, 0, true, new egret.Bitmap()],
    [40, 550, true, new egret.Bitmap()],
    [0, 560, true, new egret.Bitmap()],
    [-50, 570, true, new egret.Bitmap()],
    [-200, 580, true, new egret.Bitmap()],
    [-300, 590, true, new egret.Bitmap()],
    [20, 600, true, new egret.Bitmap()],
    [-400, 550, true, new egret.Bitmap()],
    [-150, 620, true, new egret.Bitmap()],
    [-250, 620, true, new egret.Bitmap()],
    [-350, 630, true, new egret.Bitmap()],
    [-450, 640, true, new egret.Bitmap()],
    [-100, 650, true, new egret.Bitmap()],
    [-50, 650, true, new egret.Bitmap()],
    [30, 630, true, new egret.Bitmap()],

    [-312, 680, true, new egret.Bitmap()],
    [-134, 680, true, new egret.Bitmap()],
    [-412, 680, true, new egret.Bitmap()],
    [-234, 680, true, new egret.Bitmap()],
    [-80, 680, true, new egret.Bitmap()]];
    public static initlist() {


        for (let i: number = 0; i < this.grasslist.length; i++) {
            var x = Math.random();
            if (x < 0.1) {
                this.grasslist[i][3].texture = RES.getRes("clover_166_png");
            } else if (x < 0.55) {
                this.grasslist[i][3].texture = RES.getRes("clover_160_png");
            } else {
                this.grasslist[i][3].texture = RES.getRes("clover_154_png");
            }
            this.grasslist[i][3].touchEnabled = true;
        }

    }

    public static ShopTable: { [key: string]: string[]; } = {};
    public static BackpackTable:{[key:string]:number}={};

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

            this.BackpackTable[strArray2[i][0]]=0;
        }

    }

    
   public static Buy(id:string)
   {   
       this.BackpackTable[id] +=1;
   }

}