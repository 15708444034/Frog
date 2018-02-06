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
        _this.TouchId = null;
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
        var index = 0;
        for (var i in Data.ShopTable) {
            var bsketgroup = new Basket_EUI();
            bsketgroup.Image1.source = Data.ShopTable[i][2];
            bsketgroup.Name0.text = Data.ShopTable[i][3];
            bsketgroup.Price0.text = Data.ShopTable[i][4];
            bsketgroup.id = i;
            bsketgroup.touchEnabled = true;
            bsketgroup.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
            this.Groups.addChild(bsketgroup);
            if (index % 2 == 0) {
                bsketgroup.x = index * Data.getscreenWidth() / 4;
            }
            else {
                bsketgroup.x = (index - 1) * Data.getscreenWidth() / 4;
                bsketgroup.y += 300;
            }
            index++;
        }
        this.addChildAt(this.Groups, 5);
        this.ButtonR.addEventListener(egret.TouchEvent.TOUCH_END, this.moveR, this);
        this.ButtonL.addEventListener(egret.TouchEvent.TOUCH_END, this.moveL, this);
    };
    Shop_EUI.prototype.moveR = function () {
        if (this.Groups.x > -(this.Groups.numChildren / 4 * Data.getscreenWidth()) + Data.getscreenWidth()) {
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
    Shop_EUI.prototype.Touch = function (e) {
        if (this.TouchId != e.currentTarget.id || this.TouchId == null) {
            this.TouchId = e.currentTarget.id;
            this.Txt.text = Data.ShopTable[e.currentTarget.id][6];
        }
        else {
            if (parseInt(Data.Clovernumber()) > parseInt(e.currentTarget.Price0.text)) {
                Data.subClover(e.currentTarget.Price0.text);
                Data.Buy(e.currentTarget.id);
            }
        }
    };
    return Shop_EUI;
}(eui.Component));
__reflect(Shop_EUI.prototype, "Shop_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Shop_EUI.js.map