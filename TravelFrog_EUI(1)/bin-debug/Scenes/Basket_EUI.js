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
var Basket_EUI = (function (_super) {
    __extends(Basket_EUI, _super);
    function Basket_EUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Basket_EUISkin";
        return _this;
    }
    Basket_EUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Basket_EUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Basket_EUI;
}(eui.Component));
__reflect(Basket_EUI.prototype, "Basket_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Basket_EUI.js.map