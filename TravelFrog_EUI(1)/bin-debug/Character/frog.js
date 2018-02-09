// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Frog = (function (_super) {
    __extends(Frog, _super);
    function Frog() {
        var _this = _super.call(this) || this;
        _this.initState();
        return _this;
    }
    Frog.prototype.initState = function () {
        var temp;
        var random = Math.random();
        if (random < 0.5) {
            temp = 1;
        }
        else {
            temp = 2;
        }
        if (Data.getfrogstate()) {
            switch (temp) {
                case 1:
                    var data = RES.getRes("eat_json");
                    var txtr = RES.getRes("eat_png");
                    var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.behavior = new egret.MovieClip(mcFactory.generateMovieClipData("Eat"));
                    this.behavior.x = Data.getscreenWidth() * 0.81 - this.behavior.width;
                    this.behavior.y = Data.getscreenHeight() * 2 / 3 - this.behavior.height;
                    this.addChild(this.behavior);
                    this.behavior.gotoAndPlay(1, -1);
                    break;
                case 2:
                    var data = RES.getRes("read_json");
                    var txtr = RES.getRes("read_png");
                    var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                    this.behavior = new egret.MovieClip(mcFactory.generateMovieClipData("Read"));
                    this.behavior.x = Data.getscreenWidth() * 0.72 - this.behavior.width;
                    this.behavior.y = Data.getscreenHeight() * 0.25 - this.behavior.height;
                    this.addChild(this.behavior);
                    this.behavior.gotoAndPlay(1, -1);
                    break;
            }
        }
    };
    return Frog;
}(egret.Sprite));
__reflect(Frog.prototype, "Frog");
//# sourceMappingURL=frog.js.map