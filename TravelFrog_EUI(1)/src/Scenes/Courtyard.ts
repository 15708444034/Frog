class Courtyard extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();

	}

	
	//private backgroundSprite:egret.Sprite;
	private background:egret.Bitmap;
	private icon:egret.Bitmap;

	private backgroundSprite: egret.Sprite;


	
	private CreateScene() {
		
		this.background = new egret.Bitmap();
		this.background.texture = RES.getRes("haikei_niwa_png");
		this.addChild(this.background);
		this.background.x = Data.getscreenWidth() - this.width;
		this.width=this.background.width;
		this.background.touchEnabled = true;
		this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
		this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);
		let temp: number = 0;
		for (let i: number = 0; i < Data.grasslist.length; i++) {

			if (Data.grasslist[i][2]) {
				

				
				Data.grasslist[i][3].x =Data.grasslist[i][0];
				Data.grasslist[i][3].y = Data.grasslist[i][1];
				
				this.addChild(Data.grasslist[i][3]);
				Data.grasslist[i][3].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
				Data.grasslist[i][3].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this)
				Data.grasslist[i][3].addEventListener(egret.Event.ENTER_FRAME,this.clear,this);
				temp++;
				
			}
		}

	}

	private clear(event: egret.Event){
		if(event.target.y<500){
			this.addChildAt(event.target,0);
			event.target.removeEventListener(egret.Event.ENTER_FRAME,this.clear,this);
			for (let i: number = 0; i <Data.grasslist.length; i++) {
				if(event.target.x== Data.grasslist[i][0]&&event.target.y== Data.grasslist[i][1]){
					Data.grasslist[i][2]=false;
				}
			}

		}
	}

	private grassclear(event: egret.Event) {
		
		var tw = egret.Tween.get(event.target);
		tw.to({ y: 450,"alpha":0}, 1000)
		
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
