(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"persona_lower_third_atlas_1", frames: [[0,0,1080,1080]]},
		{name:"persona_lower_third_atlas_2", frames: [[0,0,1080,1080]]},
		{name:"persona_lower_third_atlas_3", frames: [[1082,0,885,886],[0,0,1080,1080]]}
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



(lib.profileImage_1080_circlepngcopy2 = function() {
	this.initialize(ss["persona_lower_third_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.profileImage_1080_circlepngcopy3 = function() {
	this.initialize(ss["persona_lower_third_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.profileImage_1080_circlepngcopy4 = function() {
	this.initialize(ss["persona_lower_third_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.profileImageSource = function() {
	this.initialize(ss["persona_lower_third_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.WhiteBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggpAIXQjeAAididQicidgBjdQABjdCcidQCdicDeAAMBBTAAAQDeAACcCcQCeCdAADdQAADdieCdQicCdjeAAg");
	this.shape.setTransform(242.55,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WhiteBg, new cjs.Rectangle(-20,0,525.1,107), null);


(lib.subhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var urlParams = new URLSearchParams(window.location.search);
		this.subhead.text = urlParams.get("title");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.subhead = new cjs.Text("Project Manager", "20px 'Roboto Light'");
	this.subhead.name = "subhead";
	this.subhead.lineHeight = 25;
	this.subhead.lineWidth = 373;
	this.subhead.parent = this;
	this.subhead.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.subhead).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subhead, new cjs.Rectangle(0,0,377.1,27.5), null);


(lib.portraitkhalil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.profileImage_1080_circlepngcopy3();
	this.instance.setTransform(0,0,0.1209,0.1208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,107);


(lib.portraitconnie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.profileImage_1080_circlepngcopy2();
	this.instance.setTransform(0,0,0.1209,0.1208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,107);


(lib.portraitcarey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.profileImageSource();
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


(lib.portraitbuck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.profileImage_1080_circlepngcopy4();
	this.instance.setTransform(0,0,0.1209,0.1208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,107);


(lib.header = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var urlParams = new URLSearchParams(window.location.search);
		this.personaName2.text = urlParams.get("name");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.personaName2 = new cjs.Text("Buck Smith", "bold 30px 'Roboto'");
	this.personaName2.name = "personaName2";
	this.personaName2.lineHeight = 37;
	this.personaName2.lineWidth = 373;
	this.personaName2.parent = this;
	this.personaName2.setTransform(2,-128.05);

	this.timeline.addTween(cjs.Tween.get(this.personaName2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(0,-130,377.1,39.099999999999994), null);


(lib.carey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {image:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var urlParams = new URLSearchParams(window.location.search);
		
		var personas = [
			"khalil",
			"connie",
			"buck",
			"carey"
		];
		
		personas.forEach((item) => {
			this['portrait_'+item].alpha = 0;
		});
		
		var urlParams = new URLSearchParams(window.location.search);
		var persona = urlParams.get("persona");
		console.log(persona);
		this['portrait_'+persona].alpha = 1;
		
		//switch(urlParams.get("persona")) {
		//	case "carey":
		//		this.portraitBuck.alpha = 0;
		//		break;
			
			
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// khalil
	this.portrait_khalil = new lib.portraitkhalil("synched",0);
	this.portrait_khalil.name = "portrait_khalil";
	this.portrait_khalil.setTransform(53.5,53.5,1,1,0,0,0,53.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.portrait_khalil).wait(1));

	// connie
	this.portrait_connie = new lib.portraitconnie("synched",0);
	this.portrait_connie.name = "portrait_connie";
	this.portrait_connie.setTransform(53.5,53.5,1,1,0,0,0,53.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.portrait_connie).wait(1));

	// buck
	this.portrait_buck = new lib.portraitbuck("synched",0);
	this.portrait_buck.name = "portrait_buck";
	this.portrait_buck.setTransform(53.5,53.5,1,1,0,0,0,53.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.portrait_buck).wait(1));

	// carey
	this.portrait_carey = new lib.portraitcarey("synched",0);
	this.portrait_carey.name = "portrait_carey";
	this.portrait_carey.setTransform(54,54,1,1,0,0,0,54,54);

	this.timeline.addTween(cjs.Tween.get(this.portrait_carey).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


// stage content:
(lib.personalowerthird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19];
	// timeline functions:
	this.frame_0 = function() {
		//this.portrait.children[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1920px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg";
		console.log(this.portrait);
	}
	this.frame_19 = function() {
		this.stop();this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// subhead
	this.instance = new lib.subhead();
	this.instance.setTransform(346.65,95.65,1,0.0364,0,0,0,188.6,13.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:13.7,scaleY:1,y:98.85},10).wait(1));

	// header
	this.instance_1 = new lib.header();
	this.instance_1.setTransform(346.65,65.6,1,0.0255,0,0,0,188.6,21.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:19.6,scaleY:1,y:195.65},10).wait(1));

	// Portrait
	this.portrait = new lib.carey();
	this.portrait.name = "portrait";
	this.portrait.setTransform(85,197,0.0741,1,0,0,0,54,54);
	this.portrait._off = true;

	this.timeline.addTween(cjs.Tween.get(this.portrait).wait(1).to({_off:false},0).to({scaleX:1,y:77},8).wait(11));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("Eh32AT8MgCbgn3MDoZAAbIMLTtIq9Tvg");
	var mask_graphics_10 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDoaAAbIMKTtIq8Tvg");
	var mask_graphics_11 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDoaAAbIMLTtIq9Tvg");
	var mask_graphics_12 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDobAAbIMJTtIq8Tvg");
	var mask_graphics_13 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDoaAAbIMLTtIq9Tvg");
	var mask_graphics_14 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDobAAbIMJTtIq8Tvg");
	var mask_graphics_15 = new cjs.Graphics().p("Eh32AT8MgCbgn3MDoZAAbIMLTtIq9Tvg");
	var mask_graphics_16 = new cjs.Graphics().p("Eh32AT8MgCcgn3MDobAAbIMJTtIq8Tvg");
	var mask_graphics_17 = new cjs.Graphics().p("Eh32AT8MgCbgn3MDoZAAbIMLTtIq9Tvg");
	var mask_graphics_18 = new cjs.Graphics().p("Eh32AT8MgCbgn3MDoaAAbIMJTtIq8Tvg");
	var mask_graphics_19 = new cjs.Graphics().p("EBi+AT8MhfoAAAIgoAAIh0AAMh4wAAAMgCcgn3MDoaAAbICSDsIBIB1IAZAnIIYNlIq9Tvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-843.6,y:79.65}).wait(1).to({graphics:mask_graphics_10,x:-762,y:79.65}).wait(1).to({graphics:mask_graphics_11,x:-680.35,y:79.65}).wait(1).to({graphics:mask_graphics_12,x:-598.75,y:79.65}).wait(1).to({graphics:mask_graphics_13,x:-517.1,y:79.65}).wait(1).to({graphics:mask_graphics_14,x:-435.5,y:79.65}).wait(1).to({graphics:mask_graphics_15,x:-353.9,y:79.65}).wait(1).to({graphics:mask_graphics_16,x:-272.25,y:79.65}).wait(1).to({graphics:mask_graphics_17,x:-190.65,y:79.65}).wait(1).to({graphics:mask_graphics_18,x:-109,y:79.65}).wait(1).to({graphics:mask_graphics_19,x:-27.4,y:79.65}).wait(1));

	// whiteBg
	this.instance_2 = new lib.WhiteBg();
	this.instance_2.setTransform(314.65,76.75,1,1,0,0,0,262.6,53.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,30);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,614.1,251);
// library properties:
lib.properties = {
	id: '5B23178B4498440AA352E5A282946D88',
	width: 800,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/persona_lower_third_atlas_1.png?1666856508390", id:"persona_lower_third_atlas_1"},
		{src:"images/persona_lower_third_atlas_2.png?1666856508390", id:"persona_lower_third_atlas_2"},
		{src:"images/persona_lower_third_atlas_3.png?1666856508390", id:"persona_lower_third_atlas_3"}
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
an.compositions['5B23178B4498440AA352E5A282946D88'] = {
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