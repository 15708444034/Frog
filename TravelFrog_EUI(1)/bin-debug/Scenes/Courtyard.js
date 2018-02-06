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
var Courtyard = (function (_super) {
    __extends(Courtyard, _super);
    function Courtyard() {
        var _this = _super.call(this) || this;
        _this.initialPoin = 0;
        _this.CreateScene();
        return _this;
    }
    Courtyard.prototype.CreateScene = function () {
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes("haikei_niwa_png");
        this.addChild(this.background);
        this.background.x = Data.getscreenWidth() - this.width;
        this.width = this.background.width;
        this.background.touchEnabled = true;
        this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);
        var temp = 0;
        for (var i = 0; i < Data.grasslist.length; i++) {
            if (Data.grasslist[i][2]) {
                Data.grasslist[i][3].x = Data.grasslist[i][0];
                Data.grasslist[i][3].y = Data.grasslist[i][1];
                this.addChild(Data.grasslist[i][3]);
                Data.grasslist[i][3].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
                Data.grasslist[i][3].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this);
                Data.grasslist[i][3].addEventListener(egret.Event.ENTER_FRAME, this.clear, this);
                temp++;
            }
        }
    };
    Courtyard.prototype.clear = function (event) {
        if (event.target.y < 500) {
            this.addChildAt(event.target, 0);
            event.target.removeEventListener(egret.Event.ENTER_FRAME, this.clear, this);
            for (var i = 0; i < Data.grasslist.length; i++) {
                if (event.target.x == Data.grasslist[i][0] && event.target.y == Data.grasslist[i][1]) {
                    Data.grasslist[i][2] = false;
                }
            }
        }
    };
    Courtyard.prototype.grassclear = function (event) {
        var tw = egret.Tween.get(event.target);
        tw.to({ y: 450, "alpha": 0 }, 1000);
    };
    Courtyard.prototype.move = function (evt) {
        console.log("this.width: " + this.width + "--this.background.width: " + Data.getscreenWidth());
        if (this.initialPoin != 0 && this.x >= 0 && this.x <= this.width - Data.getscreenWidth()) {
            this.x += evt.stageX - this.initialPoin;
        }
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.width - Data.getscreenWidth()) {
            this.x = this.width - Data.getscreenWidth();
        }
        this.initialPoin = evt.stageX;
    };
    Courtyard.prototype.TouchEnd = function () {
        this.initialPoin = 0;
    };
    return Courtyard;
}(egret.Sprite));
__reflect(Courtyard.prototype, "Courtyard");
//# sourceMappingURL=Courtyard.js.map