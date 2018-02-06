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
var Room = (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super.call(this) || this;
        _this.CreateScene();
        _this.createBags();
        return _this;
    }
    Room.prototype.CreateScene = function () {
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes("back_mainIn_png");
        this.addChild(this.background);
        this.background.width = Data.getscreenWidth();
        this.background.height = Data.getscreenHeight();
        this.iconTrip = new egret.Bitmap();
        this.iconTrip.texture = RES.getRes("Z11_png");
        this.addChild(this.iconTrip);
        this.iconTrip.x += 15;
        this.iconTrip.y += Data.getscreenHeight() - this.iconTrip.height - 10;
        this.iconTrip.touchEnabled = true;
        this.iconTrip.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
        this.myfrog = new Frog();
        this.addChild(this.myfrog);
    };
    Room.prototype.TouchTrip = function () {
        if (!this.getChildByName("Trip")) {
            this.addChild(this.bagsSprite);
        }
        else {
            this.removeChild(this.bagsSprite);
        }
    };
    Room.prototype.createBags = function () {
        this.bagsSprite = new egret.Sprite();
        this.bagsSprite.name = "Trip";
        var roomEUI = new RoomEUI();
        this.bagsSprite.addChild(roomEUI);
        roomEUI.buttonXL.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
        roomEUI.buttonXR.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
    };
    Room.prototype.Finish = function () {
    };
    return Room;
}(egret.Sprite));
__reflect(Room.prototype, "Room");
//# sourceMappingURL=Room.js.map