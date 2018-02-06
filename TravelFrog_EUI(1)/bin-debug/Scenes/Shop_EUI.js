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
var Shop_EUI = (function (_super) {
    __extends(Shop_EUI, _super);
    function Shop_EUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Shop_EUISkin";
        _this.width = Data.getscreenWidth();
        _this.height = Data.getscreenHeight();
        _this.GenerateGroup();
        return _this;
    }
    Shop_EUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Shop_EUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Shop_EUI.prototype.GenerateGroup = function () {
        this.Groups = new eui.Component();
        var index = 1;
        for (var i in Data.ShopTable) {
            var bsketgroup = new Basket_EUI();
            bsketgroup.Image0.source = Data.ShopTable[i][2];
            bsketgroup.Name0.text = Data.ShopTable[i][3];
            bsketgroup.Price0.text = Data.ShopTable[i][4];
            this.Groups.addChild(bsketgroup);
            bsketgroup.x = index * 300;
            index++;
        }
        //this.Groups.y=Data.getscreenHeight()/2-this.Groups.height/2;
        this.addChild(this.Groups);
        this.ButtonR.addEventListener(egret.TouchEvent.TOUCH_END, this.moveR, this);
        this.ButtonL.addEventListener(egret.TouchEvent.TOUCH_END, this.moveL, this);
    };
    Shop_EUI.prototype.moveR = function () {
        if (this.Groups.x > -this.Groups.width) {
            var tw = egret.Tween.get(this.Groups);
            tw.to({ x: this.Groups.x - Data.getscreenWidth() }, 500);
        }
    };
    Shop_EUI.prototype.moveL = function () {
        if (this.Groups.x < 0) {
            var tw = egret.Tween.get(this.Groups);
            tw.to({ x: this.Groups.x + Data.getscreenWidth() }, 500);
        }
    };
    return Shop_EUI;
}(eui.Component));
__reflect(Shop_EUI.prototype, "Shop_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Shop_EUI.js.map