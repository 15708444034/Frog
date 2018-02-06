var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.getscreenWidth = function () {
        if (Data._screenWidth == 0) {
            Data._screenWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return Data._screenWidth;
    };
    Data.getscreenHeight = function () {
        if (Data._screenHeight == 0) {
            Data._screenHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    };
    Data.initlist = function () {
        for (var i = 0; i < this.grasslist.length; i++) {
            var x = Math.random();
            if (x < 0.1) {
                this.grasslist[i][3].texture = RES.getRes("clover_166_png");
            }
            else if (x < 0.55) {
                this.grasslist[i][3].texture = RES.getRes("clover_160_png");
            }
            else {
                this.grasslist[i][3].texture = RES.getRes("clover_154_png");
            }
            this.grasslist[i][3].touchEnabled = true;
        }
    };
    Data.readShopTable = function () {
        var str = RES.getRes("PropsTable_txt");
        var strArray = str.split("\n");
        var strArray2 = [];
        for (var i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        var temp = 0;
        for (var i = 1; i < strArray2.length; i++) {
            this.ShopTable[strArray2[i][0]] = strArray2[i];
            this.BackpackTable[strArray2[i][0]] = 0;
        }
    };
    Data.Buy = function (id) {
        this.BackpackTable[id] += 1;
    };
    Data._screenWidth = 0;
    Data._screenHeight = 0;
    Data.grasslist = [[600, 0, true, new egret.Bitmap()],
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
    Data.ShopTable = {};
    Data.BackpackTable = {};
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map