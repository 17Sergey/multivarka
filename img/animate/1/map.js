(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"map_atlas_1", frames: [[0,0,1280,960]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.photo_20240929_163414 = function() {
	this.initialize(ss["map_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Пробка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("probkawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.047)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape.setTransform(-5,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.498)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_1.setTransform(-5,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_2.setTransform(-5,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-55.9,158,117);


(lib.Насос = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("nasoswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.047)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape.setTransform(-5,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.498)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_1.setTransform(-5,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_2.setTransform(-5,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-55.9,158,117);


(lib.Манометр = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("vod_manometrwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.047)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape.setTransform(-5,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.498)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_1.setTransform(-5,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_2.setTransform(-5,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-55.9,158,117);


(lib.Кран = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("kranwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.047)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape.setTransform(-5,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.498)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_1.setTransform(-5,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_2.setTransform(-5,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-55.9,158,117);


(lib.Баллон = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("stekl_ballonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.047)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape.setTransform(-5,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.498)").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_1.setTransform(-5,2.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AsVJJIAAyRIYrAAIAASRg");
	this.shape_2.setTransform(-5,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-55.9,158,117);


// stage content:
(lib.map = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Манометр();
	this.instance.setTransform(1062.45,447.75,0.7184,7.2239,0,0,0,-5,2.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.Баллон();
	this.instance_1.setTransform(1071.85,628.9,1.8789,3.2445);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.Пробка();
	this.instance_2.setTransform(1315.3,842.65,0.6968,1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.instance_3 = new lib.Кран();
	this.instance_3.setTransform(852.35,800.4,0.4337,0.4359);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.instance_4 = new lib.Насос();
	this.instance_4.setTransform(619.95,938.8,0.6824,2.1629,20.9801,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.instance_5 = new lib.photo_20240929_163414();
	this.instance_5.setTransform(-1,-146,1.5008,1.3573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959,394,961.0999999999999,763);
// library properties:
lib.properties = {
	id: '51052BD2A9678540A20451EB97D4A606',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/map_atlas_1.png", id:"map_atlas_1"},
		{src:"sounds/kranwav.mp3", id:"kranwav"},
		{src:"sounds/nasoswav.mp3", id:"nasoswav"},
		{src:"sounds/probkawav.mp3", id:"probkawav"},
		{src:"sounds/stekl_ballonwav.mp3", id:"stekl_ballonwav"},
		{src:"sounds/vod_manometrwav.mp3", id:"vod_manometrwav"}
	],
	preloads: []
};



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
an.compositions['51052BD2A9678540A20451EB97D4A606'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;