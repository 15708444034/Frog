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
var RoomEUI = (function (_super) {
    __extends(RoomEUI, _super);
    function RoomEUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "RoomEUISkin";
        _this.y = Data.getscreenHeight() / 2 - _this.height / 2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createScene, _this);
        _this.image.touchEnabled = true;
        _this.image0.touchEnabled = true;
        _this.image1.touchEnabled = true;
        _this.image2.touchEnabled = true;
        _this.image3.touchEnabled = true;
        _this.image4.touchEnabled = true;
        _this.image5.touchEnabled = true;
        _this.image6.touchEnabled = true;
        _this.image7.touchEnabled = true;
        return _this;
    }
    RoomEUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RoomEUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RoomEUI.prototype.createScene = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createScene, this);
        var tw = egret.Tween.get(this.buttonR, { loop: true });
        tw.to({ x: this.buttonR.x + this.buttonR.width }, 500);
        var tw2 = egret.Tween.get(this.buttonL, { loop: true });
        tw2.to({ x: this.buttonL.x - this.buttonL.width }, 500);
        this.buttonR.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
        this.buttonL.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
    };
    RoomEUI.prototype.Touch = function () {
        if (this.x > -100) {
            var tw = egret.Tween.get(this);
            tw.to({ x: this.x - this.width / 2 }, 500);
        }
        else {
            var tw = egret.Tween.get(this);
            tw.to({ x: this.x + this.width / 2 }, 500);
        }
    };
    return RoomEUI;
}(eui.Component));
__reflect(RoomEUI.prototype, "RoomEUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RoomEUI.js.map