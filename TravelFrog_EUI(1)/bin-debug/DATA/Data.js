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
    Data.getfrogstate = function () {
        var myfrogstate;
        if (egret.localStorage.getItem(this.state) == null) {
            this.savestate();
            myfrogstate = this.frogstate;
        }
        else {
            if (egret.localStorage.getItem(this.state) == "true") {
                myfrogstate = true;
            }
            else {
                myfrogstate = false;
            }
        }
        return myfrogstate;
    };
    Data.Clovernumber = function () {
        return this.clovernumber.toString();
    };
    Data.subClover = function (num) {
        this.clovernumber = parseInt(egret.localStorage.getItem(this.key));
        this.clovernumber -= parseInt(num);
        this.save();
    };
    Data.AddClover = function () {
        this.clovernumber = parseInt(egret.localStorage.getItem(this.key));
        this.clovernumber++;
        this.save();
    };
    Data.getscreenHeight = function () {
        if (Data._screenHeight == 0) {
            Data._screenHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    };
    Data.initlist = function () {
        var temp = 0;
        for (var i = 0; i < this.grasslist.length; i++) {
            var x = Math.random();
            this.grasslist[i][2] = 1;
            var str = void 0;
            if (x < 0.1) {
                this.grasslist[i][3] = "clover_166_png";
                str = "clover_166_png";
            }
            else if (x < 0.55) {
                this.grasslist[i][3] = "clover_160_png";
                str = "clover_160_png";
            }
            else {
                this.grasslist[i][3] = "clover_154_png";
                str = "clover_154_png";
            }
            var firstvalue = "no";
            egret.localStorage.setItem(this.isfirst, firstvalue);
            var value = this.grasslist[i][0].toString() + "," + this.grasslist[i][1].toString() + "," + this.grasslist[i][2].toString() + "," + str;
            egret.localStorage.setItem(temp.toString(), value);
            temp++;
        }
    };
    Data.reset = function () {
        egret.localStorage.clear();
        var value = "yes";
        egret.localStorage.setItem(this.isfirst, value);
    };
    Data.savelist = function () {
        for (var i = 0; i < this.grasslist.length; i++) {
            var value = this.grasslist[i][0].toString() + "," + this.grasslist[i][1].toString() + "," + this.grasslist[i][2].toString() + "," + this.grasslist[i][3];
            egret.localStorage.setItem(i.toString(), value);
        }
    };
    Data.loadlist = function () {
        for (var i = 0; i < this.grasslist.length; i++) {
            var str = egret.localStorage.getItem(i.toString());
            var strArray = str.split(",");
            this.grasslist[i][0] = parseInt(strArray[0]);
            this.grasslist[i][1] = parseInt(strArray[1]);
            this.grasslist[i][2] = parseInt(strArray[2]);
            this.grasslist[i][3] = strArray[3];
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
            if (egret.localStorage.getItem(strArray2[i][0]) == null) {
                this.initbackpack();
            }
            else {
                this.BackpackTable[strArray2[i][0]] = parseInt(egret.localStorage.getItem(strArray2[i][0]));
            }
        }
    };
    Data.initbackpack = function () {
        var str = RES.getRes("PropsTable_txt");
        var strArray = str.split("\n");
        var strArray2 = [];
        for (var i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        var temp = 0;
        for (var i = 1; i < strArray2.length; i++) {
            var value = "0";
            egret.localStorage.setItem(strArray2[i][0], value);
        }
    };
    Data.savebackpack = function () {
        var str = RES.getRes("PropsTable_txt");
        var strArray = str.split("\n");
        var strArray2 = [];
        for (var i = 0; i < strArray.length; i++) {
            strArray2[i] = strArray[i].split(",");
        }
        var temp = 0;
        for (var i = 1; i < strArray2.length; i++) {
            var value = this.BackpackTable[strArray2[i][0]].toString();
            egret.localStorage.setItem(strArray2[i][0], value);
        }
    };
    Data.Buy = function (id) {
        this.BackpackTable[id] += 1;
        this.savebackpack();
    };
    Data.save = function () {
        var value = this.clovernumber.toString();
        egret.localStorage.setItem(this.key, value);
    };
    Data.loadtime = function (str) {
        var timestr = egret.localStorage.getItem(str);
        var time = parseInt(timestr);
        return time;
    };
    Data.savetime = function (str) {
        var timestamp3 = new Date().getTime();
        var value = timestamp3.toString();
        egret.localStorage.setItem(str, value);
    };
    Data.savestate = function () {
        var myfrogstate = this.frogstate;
        var value = myfrogstate.toString();
        egret.localStorage.setItem(this.state, value);
    };
    Data.changestate = function () {
        if (this.frogstate == true) {
            this.frogstate = false;
        }
        else {
            this.frogstate = true;
        }
    };
    Data.grasstime = "grasstime";
    Data.key = "clovernumber";
    Data.isfirst = "isfirst";
    Data.gametime = "gametime";
    Data.state = "state";
    Data._screenWidth = 0;
    Data._screenHeight = 0;
    Data.clovernumber = 500;
    Data.frogstate = true;
    Data.grasslist = [[600, 0, 1, ""],
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
    Data.ShopTable = {};
    Data.BackpackTable = {};
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map