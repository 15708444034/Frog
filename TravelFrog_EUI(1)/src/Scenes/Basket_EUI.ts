class Basket_EUI extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();

		this.skinName="Basket_EUISkin";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public id:string="";
	public Basket:eui.Group;
	public Image0:eui.Image;
	public Image1:eui.Image;
	public Name0:eui.Label;
	public Price0:eui.Label;


	
}