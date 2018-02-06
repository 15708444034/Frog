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
// TypeScript file
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        var _this = _super.call(this) || this;
        _this.Createhomeicon();
        return _this;
    }
    Control.prototype.Createhomeicon = function () {
        if (egret.localStorage.getItem(Data.isfirst) != "no") {
            Data.initlist();
        }
        else {
            Data.loadlist();
        }
        this.store = new Shop_EUI();
        this.room = new Room();
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);
        this.Courtyardicon = new egret.Bitmap();
        this.Courtyardicon.texture = RES.getRes("icon_out_84_88_png");
        this.addChildAt(this.Courtyardicon, 0);
        this.Courtyardicon.x = Data.getscreenWidth() - this.Courtyardicon.width - 15;
        this.Courtyardicon.y = Data.getscreenHeight() - this.Courtyardicon.height - 10;
        this.Courtyardicon.touchEnabled = true;
        this.Courtyardicon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadCourtyard, this);
        this.homeicon = new egret.Bitmap();
        this.homeicon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(this.homeicon);
        this.homeicon.x = Data.getscreenWidth() - this.homeicon.width - 15;
        this.homeicon.y = Data.getscreenHeight() - this.homeicon.height - 10;
        this.homeicon.touchEnabled = true;
        this.homeicon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadRoom, this);
        this.shop = new egret.Bitmap();
        this.shop.texture = RES.getRes("icon_shop_84_88_png");
        this.addChild(this.shop);
        this.shop.x = this.Courtyardicon.x;
        this.shop.y = this.Courtyardicon.y - this.Courtyardicon.height - 10;
        this.shop.touchEnabled = true;
        this.shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadshop, this);
        this.clover = new egret.Bitmap();
        this.clover.texture = RES.getRes("sys_clover_window_png");
        this.addChild(this.clover);
        this.clover.x = 15;
        this.clover.y = 10;
        this.clovertext = new egret.TextField;
        this.clovertext.addEventListener(egret.Event.ENTER_FRAME, this.numberchange, this);
        this.clovertext.textColor = 0;
        this.clovertext.x = 150;
        this.clovertext.y = 30;
        this.addChild(this.clovertext);
        //重置
        this.reset = new egret.Bitmap();
        this.reset.texture = RES.getRes("raffle_84_88_png");
        this.addChild(this.reset);
        this.reset.touchEnabled = true;
        this.reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { Data.reset(); }, this);
    };
    Control.prototype.loadRoom = function () {
        this.addChildAt(this.homeicon, 0);
        this.addChild(this.room);
        this.Courtyardicon.y = Data.getscreenHeight() - this.Courtyardicon.height - 10;
        this.addChild(this.Courtyardicon);
        this.addChild(this.shop);
        this.addChild(this.clover);
        this.addChild(this.clovertext);
        this.addChild(this.reset);
    };
    Control.prototype.loadshop = function () {
        this.addChild(this.store);
        this.addChild(this.homeicon);
        this.Courtyardicon.y = this.shop.y;
        this.addChild(this.Courtyardicon);
    };
    Control.prototype.numberchange = function () {
        if (egret.localStorage.getItem(Data.key) == null) {
            Data.save();
            this.clovertext.text = egret.localStorage.getItem(Data.key);
        }
        else {
            this.clovertext.text = egret.localStorage.getItem(Data.key);
        }
    };
    Control.prototype.loadCourtyard = function () {
        this.addChildAt(this.Courtyardicon, 0);
        this.addChild(this.courtyard);
        this.addChild(this.homeicon);
        this.addChild(this.shop);
        this.addChild(this.clover);
        this.addChild(this.clovertext);
        this.addChild(this.reset);
    };
    return Control;
}(egret.Sprite));
__reflect(Control.prototype, "Control");
//# sourceMappingURL=Control.js.map