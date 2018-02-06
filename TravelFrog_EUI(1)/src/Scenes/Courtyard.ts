class Courtyard extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();

	}


	//private backgroundSprite:egret.Sprite;
	private background: egret.Bitmap;
	private icon: egret.Bitmap;

	private backgroundSprite: egret.Sprite;



	private CreateScene() {

		this.background = new egret.Bitmap();
		this.background.texture = RES.getRes("haikei_niwa_png");
		this.addChild(this.background);
		this.background.x = Data.getscreenWidth() - this.width;

		this.width = this.background.width;
		this.background.touchEnabled = true;
		this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
		this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);

		for (let i: number = 0; i < Data.grasslist.length; i++) {

			if (Data.grasslist[i][2] == 1) {

				let grass = new egret.Bitmap();
				grass.texture = RES.getRes(Data.grasslist[i][3])

				grass.x = Data.grasslist[i][0];
				grass.y = Data.grasslist[i][1];
				grass.touchEnabled = true;
				this.addChild(grass);
				
					grass.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
					grass.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this);
					grass.addEventListener(egret.Event.ENTER_FRAME, this.clear, this);

				


			}
		}

	}
	 
	

	private clear(event: egret.Event) {

		if (event.target.y < 500 && event.target.y != 0) {

			this.removeChild(event.target);
			
			Data.AddClover();
			Data.save();
			event.target.removeEventListener(egret.Event.ENTER_FRAME, this.clear, this);


		}
	}

	private grassclear(event: egret.Event) {
		for (let i: number = 0; i < Data.grasslist.length; i++) {
			if (event.target.x == Data.grasslist[i][0] && event.target.y == Data.grasslist[i][1]) {
				Data.grasslist[i][2] = 0;

			}
		}
		Data.savelist();
		event.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
		event.target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this);
		var tw = egret.Tween.get(event.target);
		tw.to({ y: 450, "alpha": 0 }, 1000);

	}



	private initialPoin: number = 0;
	private move(evt: egret.TouchEvent) {
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
	}

	private TouchEnd() {
		this.initialPoin = 0;
	}
}
