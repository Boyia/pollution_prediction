                                (function (lib, img, cjs, an) {

var p; // shortcut to reference prototypes

// library properties
lib.properties = {
    width: 728,
    height: 90,
    fps: 24,
    color: '#FFFFFF',
};




// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0JG4IAAtvMAoTAAAIAANvg");
	this.shape.setTransform(129,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_bg, new cjs.Rectangle(0,0,258,88), null);


(lib.stub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stub
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0)").s().p("ApXGQIAAsfISvAAIAAMfg");
	this.shape.setTransform(60,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stub, new cjs.Rectangle(0,0,120,80), null);


(lib.slash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5AKIAAgTIHzAAIAAATg");
	this.shape.setTransform(25,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.slash, new cjs.Rectangle(0,0,50,2), null);


(lib.image = function() {
    this.initialize();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.div_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AldAAIK7AA");
	this.shape.setTransform(35,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.div_shape, new cjs.Rectangle(-1,-1,72,2), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A13GQIAAsfMArvAAAIAAMfg");
	this.shape.setTransform(140,40);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,80);


(lib.percent_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AldCMIAAkXIK7AAIAAEXg");
	this.shape.setTransform(35,14);
    this.shape.set({ drawPath: "AldCMIAAkXIK7AAIAAEXg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent_shape, new cjs.Rectangle(0,0,70,28), null);


(lib.nav_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAAIBPgxIAABjg");
	this.shape.setTransform(3.9845,5.0133,1.0063,1.005);
    this.shape.set({ drawPath: "AgnAAIBPgxIAABjg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nav_shape, new cjs.Rectangle(0,0,8,10), null);


(lib.cta_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AolCCIAAkDIRLAAIAAEDg");
	this.shape.setTransform(55,13);
    this.shape.set({ drawPath: "AolCCIAAkDIRLAAIAAEDg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_shape, new cjs.Rectangle(0,0,110,26), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slash
	this.slash = new lib.slash();
	this.slash.name = "slash";
	this.slash.parent = this;
	this.slash.setTransform(100.5,29.75,1,1,0,0,0,25,1);

	this.timeline.addTween(cjs.Tween.get(this.slash).wait(1));

	// sale_price
	this.sale_price = new cjs.Text("$138", "bold 14px 'Montserrat'", "#FF0000");
    this.sale_price.set({ designHeight: 21.05});
    this.sale_price.name = "sale_price";
	this.sale_price.textAlign = "center";
	this.sale_price.lineHeight = 17;
	this.sale_price.lineWidth = 196;
	this.sale_price.parent = this;
	this.sale_price.setTransform(100,7.5);

	this.timeline.addTween(cjs.Tween.get(this.sale_price).wait(1));

	// text
	this.title = new cjs.Text("Green Freak Subscription", "12px 'Montserrat'");
    this.title.set({ designHeight: 33.2});
    this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 15;
	this.title.lineWidth = 196;
	this.title.parent = this;
	this.title.setTransform(100,44);

	this.price = new cjs.Text("$138", "bold 14px 'Montserrat'");
    this.price.set({ designHeight: 21.05});
    this.price.name = "price";
	this.price.textAlign = "center";
	this.price.lineHeight = 17;
	this.price.lineWidth = 196;
	this.price.parent = this;
	this.price.setTransform(100,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.price},{t:this.title}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,5.5,200,69.7), null);


(lib.percent_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.percent_off = new cjs.Text("50% OFF", "bold 14px 'Montserrat'", "#FFFFFF");
    this.percent_off.set({ designHeight: 29.05});
    this.percent_off.name = "percent_off";
	this.percent_off.textAlign = "center";
	this.percent_off.lineHeight = 17;
	this.percent_off.lineWidth = 71;
	this.percent_off.parent = this;
	this.percent_off.setTransform(35.8,5.45);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(1));

	// bg
	this.percent_shape = new lib.percent_shape();
	this.percent_shape.name = "percent_shape";
	this.percent_shape.parent = this;
	this.percent_shape.setTransform(24.75,10,1.1285,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.percent_shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent_off, new cjs.Rectangle(-3.7,0,79,32.5), null);


(lib.nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.nav_shape = new lib.nav_shape();
	this.nav_shape.name = "nav_shape";
	this.nav_shape.parent = this;
	this.nav_shape.setTransform(4,5,1,1,0,0,0,4,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nav_shape,p:{alpha:1}}]}).to({state:[{t:this.nav_shape,p:{alpha:0.5}}]},1).to({state:[{t:this.nav_shape,p:{alpha:1}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,30,30);


(lib.dscempty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// percent_off
	this.percent_off = new lib.percent_off();
	this.percent_off.name = "percent_off";
	this.percent_off.parent = this;
	this.percent_off.setTransform(329.55,9.6,0.8608,0.86,0,0,0,27.1,10);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(10));

	// image
	this.image = new lib.image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(89.35,75,1.1666,1.1666,0,0,0,60.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(10));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(190,32.1,1,1,0,0,0,60,30.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10));

	// div_shape
	this.div_shape = new lib.div_shape();
	this.div_shape.name = "div_shape";
	this.div_shape.parent = this;
	this.div_shape.setTransform(110,62.5,0.875,1,90,0,0,60,0);
	this.div_shape.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.div_shape).wait(10));

	// white_bg
	this.white_bg = new lib.white_bg();
	this.white_bg.name = "white_bg";
	this.white_bg.parent = this;
	this.white_bg.setTransform(87.4,94.1,1.3334,0.8866,0,0,0,64.8,105);

	this.timeline.addTween(cjs.Tween.get(this.white_bg).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,370,78);


(lib.action = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.cta = new cjs.Text("Shop Now", "bold 13px 'Montserrat'", "#FFFFFF");
    this.cta.set({ designHeight: 25.55});
    this.cta.name = "cta";
	this.cta.textAlign = "center";
	this.cta.lineHeight = 18;
	this.cta.lineWidth = 116;
	this.cta.parent = this;
	this.cta.setTransform(55,3.95);

	this.timeline.addTween(cjs.Tween.get(this.cta).to({_off:true},3).wait(1));

	// cta bg
	this.cta_shape = new lib.cta_shape();
	this.cta_shape.name = "cta_shape";
	this.cta_shape.parent = this;
	this.cta_shape.setTransform(60.9,13,1.1818,1,0,0,0,60,13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AqJCpIAAlRIUTAAIAAFRg");
	this.shape.setTransform(55,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cta_shape,p:{alpha:1}}]}).to({state:[{t:this.cta_shape,p:{alpha:0.6992}}]},1).to({state:[{t:this.cta_shape,p:{alpha:1}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-3.9,130,33.8);


(lib.dsc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// button
	this.button = new lib.button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(81.3,105.9,1.2357,1,0,0,0,65.8,105.9);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(10));

	// percent_off
	this.percent_off = new lib.percent_off();
	this.percent_off.name = "percent_off";
	this.percent_off.parent = this;
	this.percent_off.setTransform(329.55,9.6,0.8608,0.86,0,0,0,27.1,10);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(10));

	// cta
	this.action = new lib.action();
	this.action.name = "action";
	this.action.parent = this;
	this.action.setTransform(12,40.05,0.7692,0.7692);
	this.action.alpha = 0;
	new cjs.ButtonHelper(this.action, 0, 1, 2, false, new lib.action(), 3);

	this.timeline.addTween(cjs.Tween.get(this.action).wait(1).to({regX:55,regY:13,x:54.3,y:47.95,alpha:0.2098},0).wait(1).to({y:46.1,alpha:0.395},0).wait(1).to({y:44.45,alpha:0.5556},0).wait(1).to({y:43.1,alpha:0.6913},0).wait(1).to({y:42,alpha:0.8024},0).wait(1).to({y:41.15,alpha:0.8889},0).wait(1).to({y:40.5,alpha:0.9506},0).wait(1).to({y:40.15,alpha:0.9876},0).wait(1).to({y:40.05,alpha:1},0).wait(1));

	// image
	this.image = new lib.image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(89.35,75,1.1666,1.1666,0,0,0,60.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1).to({regX:30,regY:30,x:54.2,y:39.85,alpha:0.8951},0).wait(1).to({alpha:0.8025},0).wait(1).to({alpha:0.7222},0).wait(1).to({alpha:0.6543},0).wait(1).to({alpha:0.5988},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5247},0).wait(1).to({alpha:0.5062},0).wait(1).to({alpha:0.5},0).wait(1));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(190,32.1,1,1,0,0,0,60,30.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(10));

	// div_shape
	this.div_shape = new lib.div_shape();
	this.div_shape.name = "div_shape";
	this.div_shape.parent = this;
	this.div_shape.setTransform(110,62.5,0.875,1,90,0,0,60,0);
	this.div_shape.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.div_shape).wait(10));

	// white_bg
	this.white_bg = new lib.white_bg();
	this.white_bg.name = "white_bg";
	this.white_bg.parent = this;
	this.white_bg.setTransform(87.4,94.1,1.3334,0.8866,0,0,0,64.8,105);

	this.timeline.addTween(cjs.Tween.get(this.white_bg).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,371,80);


// stage content:
(lib.product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.initCode == true) return;
		this.initCode = true;
		var root = this;
		
		// put this line in when you want to use a google web font
		// put the name that google calls it here
		// TAKE THIS OUT when not using a custom font or else it will download it anyway
		this.customFont = [ { name: "Montserrat:400,700:latin", source: "google"} ];					
		this.maxTitleLength = 79;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,0,3).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,44.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13));

	// logo stub
	this.logo = new lib.stub();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(58,45,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(13));

	// action
	this.action = new lib.action();
	this.action.name = "action";
	this.action.parent = this;
	this.action.setTransform(647,44.95,1,1,0,0,0,55,13.8);
	new cjs.ButtonHelper(this.action, 0, 1, 2, false, new lib.action(), 3);

	this.timeline.addTween(cjs.Tween.get(this.action).wait(13));

	// previous
	this.previous = new lib.nav();
	this.previous.name = "previous";
	this.previous.parent = this;
	this.previous.setTransform(154,45,1,1,0,0,0,4,5);
	new cjs.ButtonHelper(this.previous, 0, 1, 2, false, new lib.nav(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous).wait(13));

	// next
	this.next = new lib.nav();
	this.next.name = "next";
	this.next.parent = this;
	this.next.setTransform(553.5,45,1,1,0,0,180,4,5);
	new cjs.ButtonHelper(this.next, 0, 1, 2, false, new lib.nav(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(13));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyRHCIAAuDMA9PAAAIAAODg");
	mask.setTransform(275.0229,45);

	// dsc1
	this.dsc1 = new lib.dsc();
	this.dsc1.name = "dsc1";
	this.dsc1.parent = this;
	this.dsc1.setTransform(308,59.4,1,1,0,0,0,130,54.4);

	var maskedShapeInstanceList = [this.dsc1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc1).wait(1).to({regX:185.5,regY:40,x:299.3,y:45},0).wait(1).to({x:240.65},0).wait(1).to({x:187.6},0).wait(1).to({x:140.2},0).wait(1).to({x:98.35},0).wait(1).to({x:62},0).wait(1).to({x:31.35},0).wait(1).to({x:6.2},0).wait(1).to({x:-13.35},0).wait(1).to({x:-27.3},0).wait(1).to({x:-35.65},0).wait(1).to({x:-38.5},0).wait(1));

	// dsc2
	this.dsc2 = new lib.dscempty();
	this.dsc2.name = "dsc2";
	this.dsc2.parent = this;
	this.dsc2.setTransform(690,59.4,1,1,0,0,0,130,54.4);

	var maskedShapeInstanceList = [this.dsc2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc2).wait(1).to({regX:186,regY:40,x:685,y:45},0).wait(1).to({x:629.25},0).wait(1).to({x:578.85},0).wait(1).to({x:533.75},0).wait(1).to({x:494},0).wait(1).to({x:459.5},0).wait(1).to({x:430.3},0).wait(1).to({x:406.45},0).wait(1).to({x:387.85},0).wait(1).to({x:374.6},0).wait(1).to({x:366.65},0).wait(1).to({x:364},0).wait(1));

	// bg
	this.instance = new lib.bg();
    this.instance.name = "bkgrd";
    this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,46);




// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E869B2895DC94BCA8E719E27D0F856BC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(lib = AdRollLiquidAds.flashLib, img = AdRollLiquidAds.flashImgs, createjs = AdRollLiquidAds.createJS, {});