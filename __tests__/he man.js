(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#CC0000",
	webfonts: {},
	manifest: [
		{src:"sounds/HeyayayayawhatsGoinonBestQuality.mp3", id:"HeyayayayawhatsGoinonBestQuality"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.swordjab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(1,1,1).p("AAbhZIB1BWIBoBDIBkgkIhmCKIjcioIiiD/IAABXIjTieIBsAAIC4j0IjhifIBTh2IAABSIBxBUgAi7DeIDWk3");
	this.shape.setTransform(-17.1,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCC33").ss(1,1,1).p("ADdjvICnjzIk2CggAkTHjIHwrSABOlCInRLS");
	this.shape_1.setTransform(13.2,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,1,1).p("AERoNIguE5ABqkaIB5BGInzLi");
	this.shape_2.setTransform(24.7,-17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AlaC1IBrAAIC4jzIjhifIBTh2IAABSIBxBUIBuBUIB2BWIBoBDIBjgkIhlCKIjcipIijEAIAABXgAi7DeIDVk3g");
	this.shape_3.setTransform(-17.1,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCC00").s().p("AmDGPIHRrRICPBTIiPhTIE2igIinDzInwLSg");
	this.shape_4.setTransform(13.2,-21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AlLG4IHwrSIB4BGIh4hGICnjzIgvE5InyLig");
	this.shape_5.setTransform(18.8,-17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-70.9,106,141.9);


(lib.movie_control = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AiIiIIERAAIAAERIkRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,204,0.2)").s().p("AiICJIAAkRIERAAIAAERg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.6,29.6);


// stage content:
(lib.heman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("HeyayayayawhatsGoinonBestQuality",-1);
	}
	this.frame_56 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56).call(this.frame_56).wait(1));

	// control
	this.movieClip_1 = new lib.movie_control();
	this.movieClip_1.setTransform(98.9,77.6);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(56).to({_off:false},0).wait(1));

	// text layer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgJBFQgEgEAAgHQAAgGAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgFAAQgFAAgEgEgAgDAiQgHgvAAgTIAAgoIAUAAIAAAoQAAASgIAwg");
	this.shape.setTransform(500.1,185.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgJBFQgEgEAAgHQAAgGAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgFAAQgEAAgFgEgAgCAiQgIgvAAgTIAAgoIAUAAIAAAoQAAASgIAwg");
	this.shape_1.setTransform(492.8,185.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AAbBIIgkg+IgUgBIAAA/IgUAAIAAiNIAPgBIAVgBQAxAAAAApQABAOgJALQgIAIgMADIAqBCgAgdg0IAAAvIANABQAQAAAIgGQAIgGAAgOQAAgMgJgFQgHgGgSAAIgLABg");
	this.shape_2.setTransform(484,185.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("AgpBHIAAiNIBTAAIAAASIhAAAIAAAnIAuAAIAAAPIguAAIAAA0IA/AAIAAARg");
	this.shape_3.setTransform(472.4,185.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("AAhBIIghhhIgfBhIgGAAIgtiPIAUAAIAdBiIAfhiIAFAAIAfBiIAdhiIAUAAIgsCPg");
	this.shape_4.setTransform(458.1,185.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444444").s().p("AgrA1QgPgVAAggQAAgfAQgUQAPgWAaABQAcgBAQAUQAQATAAAiQAAAhgQAVQgQATgcABQgbgBgPgUgAgcgoQgKAOAAAaQAAAXAKAQQAKARARAAQASAAALgQQALgPAAgZQgBg3gnAAQgSAAgJAPg");
	this.shape_5.setTransform(442.9,185.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AgrBHIAAiNIAbgBQA8AAAAAqQAAAvg1gBIgPgBIAAA3gAgYg0IAAA0IAOAAQAiAAAAgbQAAgagkAAIgMABg");
	this.shape_6.setTransform(430.9,185.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AgpBHIAAiNIBTAAIAAARIhAAAIAAApIAuAAIAAAOIguAAIAAAzIA/AAIAAASg");
	this.shape_7.setTransform(503.7,160.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444444").s().p("AAfBHIAAhFIg9AAIAABFIgTAAIAAiNIATAAIAAA6IA9AAIAAg6IATAAIAACNg");
	this.shape_8.setTransform(491.4,160.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444444").s().p("AgJBHIAAh8IguAAIAAgRIBvAAIAAARIgwAAIAAB8g");
	this.shape_9.setTransform(479.1,160.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444444").s().p("AgpBHIAAiNIBTAAIAAARIhAAAIAAApIAuAAIAAAOIguAAIAAAzIA/AAIAAASg");
	this.shape_10.setTransform(462.3,160.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444444").s().p("AgDBIIg1iPIAWAAIAjBoIAjhoIAVAAIg0CPg");
	this.shape_11.setTransform(450.7,160.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444444").s().p("AAlBIIgKgeIgzAAIgLAeIgWAAIA5iPIAEAAIA2CPgAgUAbIApAAIgUg9g");
	this.shape_12.setTransform(439,160.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444444").s().p("AAfBHIAAhFIg9AAIAABFIgTAAIAAiNIATAAIAAA6IA9AAIAAg6IATAAIAACNg");
	this.shape_13.setTransform(426.5,160.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#444444").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_14.setTransform(524.4,135.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444444").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgEAAgFgEg");
	this.shape_15.setTransform(511.7,141);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#444444").s().p("AgQArIAAh0IAQAAIAABxQAAAIAFAFQAFAFAIAAIAAAQQgjAAABgfg");
	this.shape_16.setTransform(505.6,135);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#444444").s().p("AgQArIAAh0IAQAAIAABxQAAAIAFAFQAFAFAIAAIAAAQQgjAAABgfg");
	this.shape_17.setTransform(499.8,135);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444444").s().p("AgfArQgKgKAAgSIAAhDIATAAIAABBQAAAYAVAAQAHAAAHgFQAIgFACgHIAAhIIATAAIAABnIgTAAIAAgPQgCAGgKAGQgKAFgGAAQgSAAgIgKg");
	this.shape_18.setTransform(491,137.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#444444").s().p("AAYBJIggg0IgQARIAAAjIgTAAIAAiRIATAAIAABZIAnguIAVAAIgiAlIApBBg");
	this.shape_19.setTransform(481.2,134.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#444444").s().p("AggAuIAGgSQAPAKAKAAQAPAAAAgOQAAgLgOgHQgNgGgEgBIgIgHIgGgIQgBgEAAgFQAAgNAJgIQAKgHANAAQAMAAAQAHIgFASQgKgJgLAAQgFAAgFADQgEADgBAFQAAAKAMAFIAMAGQAMAFAFAGQAGAHAAALQAAAOgLAIQgJAIgQAAQgQAAgOgIg");
	this.shape_20.setTransform(471.4,137.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#444444").s().p("AgkA4QAMAAAIgGQAJgFAAgIQAAgJgDgIIgIgUIgdhHIATAAIAdBPIAchPIATAAIgtB4QgDAKgKAHQgLAGgPAAg");
	this.shape_21.setTransform(462.4,139.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#444444").s().p("AAbAyQgGgDgCgHQgLAOgVAAQgMAAgJgJQgJgJAAgNQAAgQAOgJQANgLAUAAQAGAAAHACQAAgZgUAAQgSAAgJAJIgIgPQAFgFAKgDQAJgDAIAAQAVAAALALQAKAKAAAWIAAAkQAAAOAIAEIAAAKQgLAAgGgEgAgQAGQgJAHAAAKQAAAQATAAQAMAAALgNIAAgaIgMAAQgMAAgJAGg");
	this.shape_22.setTransform(452.3,137.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#444444").s().p("AgeA1IAAhnIATAAIAAARQAKgTASAAIAOACIgHASQgHgEgFAAQgKAAgGAJQgHAJAAANIAAA6g");
	this.shape_23.setTransform(443.9,137);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444444").s().p("AgmA2QgRgUAAgiQAAgfATgVQATgUAegBQAWAAAOANIgIAQQgPgLgOAAQgUAAgNAQQgNAPAAAZQAAAYAMAPQANAQAUAAQAQAAAJgJIAAgiIgTAAIAAgPIAnAAIAAA8QgIAIgOADQgOAFgNAAQgcgBgRgTg");
	this.shape_24.setTransform(432.2,135.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444444").s().p("AgSBJIAAhXIgPAAIAAgPIAPAAQAAgUAKgMQAIgLAQAAQAIAAAKADIgGANQgFgCgFAAQgJAAgFAHQgEAGAAAKIAAAGIAUAAIAAAPIgUAAIAABXg");
	this.shape_25.setTransform(416.4,134.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AghAnQgNgPAAgYQAAgXANgPQANgPAUAAQAWAAAMAPQANAOAAAYQAAAZgNAOQgNAPgVAAQgVAAgMgPgAgTgbQgHAKAAARQAAAnAaAAQAMAAAIgLQAHgLAAgRQAAgmgbAAQgLAAgIALg");
	this.shape_26.setTransform(406.9,137.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgeA1IAAhnIASAAIAAARQALgTASAAIAOACIgIASQgFgEgHAAQgKAAgFAJQgIAJAAANIAAA6g");
	this.shape_27.setTransform(522.3,111.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444444").s().p("AggAoQgPgOABgZQAAgYAPgQQAOgOARAAQAXAAAMANQAMAMAAAUIgBAJIhJAAQAAATAKAJQAJAJAMAAQAPAAAMgJIAHANQgEAEgJAEQgLAEgOAAQgSAAgOgOgAgSgdQgIAHgBAMIA4AAQABgLgIgIQgHgIgOAAQgKAAgJAIg");
	this.shape_28.setTransform(512.2,111.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("AAeA1IgehFIgdBFIgFAAIglhpIAUAAIAVBDIAchDIADAAIAdBDIAYhDIATAAIgmBpg");
	this.shape_29.setTransform(499.3,111.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("AghAnQgNgPAAgYQAAgXANgPQANgPAUAAQAWAAAMAPQANAOAAAYQAAAZgNAOQgNAPgVAAQgVAAgMgPgAgTgbQgHAKAAARQAAAnAaAAQAMAAAIgLQAHgLAAgRQAAgmgbAAQgLAAgIALg");
	this.shape_30.setTransform(486.5,111.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("AgrBIIAAiNIAbgBQA8AAAAApQAAAug1ABIgPgCIAAA4gAgYg0IAAA0IAOAAQAiAAAAgbQAAgagkAAIgMABg");
	this.shape_31.setTransform(475.9,109.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444444").s().p("AggAoQgOgOAAgZQAAgYAPgQQAOgOARAAQAXAAANANQAMAMgBAUIgBAJIhJAAQAAATAKAJQAJAJAMAAQAQAAAKgJIAIANQgEAEgJAEQgLAEgOAAQgSAAgOgOgAgRgdQgJAHAAAMIA3AAQAAgLgHgIQgIgIgNAAQgKAAgIAIg");
	this.shape_32.setTransform(458.5,111.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AAXBJIAAhBQgBgKgFgHQgGgHgLAAQgEAAgHAEQgGAEgEAGIAABLIgTAAIAAiRIATAAIAAA2QADgGAJgDQAIgEAHAAQARAAAJALQAJALAAARIAABBg");
	this.shape_33.setTransform(447.5,109.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444444").s().p("AgJBHIAAh8IguAAIAAgRIBvAAIAAARIgwAAIAAB8g");
	this.shape_34.setTransform(436.3,109.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444444").s().p("AgkA4QAMAAAIgGQAJgFAAgIQAAgJgDgIIgIgUIgdhHIATAAIAdBPIAchPIATAAIgtB4QgDAKgKAHQgLAGgPAAg");
	this.shape_35.setTransform(419.5,113.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444444").s().p("AgsBIIAAiNIAlgCQAUAAAMAKQALAJAAARQAAAKgHAIQgIAIgIACQAQAEAIAIQAIAJAAAQQAAATgOAMQgOALgUAAgAgZABIAAA2IAQABQAQAAAJgHQAIgHABgPQAAgOgJgGQgHgHgSAAgAgZg2IAAApIAQABQAaAAgBgXQABgTgYAAIgSAAg");
	this.shape_36.setTransform(409.3,109.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).wait(40));

	// sword layer
	this.instance = new lib.swordjab();
	this.instance.setTransform(-102,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:690,x:379.1,y:272.7},15).wait(42));

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFF00").ss(1,1,1).p("Ag3ldQADAQAEAdQAAAFABAGQAEAiAHAWQACAGADAHQASAEASADQAYADALACQAEAAACABQAYAFARAIQAuATAjA6QAMATAPAfQAHAPANAeQBrAaA4ARQAPAFAJAFQAIAFAKAPQARAcAUAwQAdA/AGAOAiCkfIAYArIBUCdIBGCEQAUAkANAbQANAbAHAQQACAFACAGQAGAQAJAcQALAiAHATQAAAAAAABQAUAyAiA8QAPAcACAEQAJATAEAPAkkl4QACAEADAEQAUAfAdAiQAWAXAqApQAeAbAOAVQAJANAJATQAFAMAKAVQAEAKAGALQAfAJAiAJQAeAIAjAKQAYAFAYAHQAEAAADABQBBAQA0AOQACADABAEQAbA2A+BkAjEhzQAFAFAFAGQANAPAoA1QAgApAYAYQAeAdA0AlQASALANAJQAOASANAQQAVAWAWAQAkvkNQArA0AxBOQAIAMAHAMQBRB7AnAuQAJAKASAUQAPASAJAPQACADABACQAHAGAEADQALALAXAVQAMALAJAIQAJAIAFAFQAoAiACABQARAQAOAJQADABAEADQANAHAYAKQAWAJAiAVQADAEACAEQAhA1AJAcQADAGAFAMQAEALAGAGQAHAHAKACQALACAHgGAkjmRQAEARAIAQQAXAuA7AkQAnAZA0ARQAiAMApAIQAHATAOAdQAMAbApBQQAIAPAJARQAWAmAQAiQATAlANAdQAWAwAJAOQAVAhAZAPAjAiJQAsAPA9ARQAJATAMAWQALAVAXAoQAsBTAOAUQAFAIAFAHQAUANANAJQAWAPAEADQAFADAFAEQAvAkAcAiQAQATAjA3QAGAEAGAEAnrm2QAGAkAZAqQAFAHAVAfQAKAOANATQALARAWAiQAVAfAQATQAOARAdAgQAaAdAMAXQALAWAHAHQAGAGAYALQAfAQAfAiQAmApBFBaQAjApAeAeQAbAYAaAQQABABABAAQAZAPALAKQASAQAAASAk8k4QAFAWAIAVQAQArAeAoQAUAaApAtAlDkkQAKALAKAMAljlEQAQAOAQASQACA3ApBBQATAfAhApQASAYAmAvQAkAuACADQAXAdAUASQAOAOAZATQATAOALAIQALAUAGAIQAGAJAUARQAIAHAHAJQAIAJAHALQAHALARAcQABABAAAAQALATAVAnAk/lRQgFAVABAY");
	this.shape_37.setTransform(469.9,255.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("ABpi0QiAgJhfhfQhohoAAiUQAAiUBohpQAjgiAngYQBBgnBQgGQAEgBAEAAQAMgBAMAAQB1AABaBBQAYASAWAWQAZAZATAbQAxBHAJBWQADAVAAAXQAAAZgDAXQgFAmgMAjQgGAPgGAPQgDAFgDAGQgJARgLAQQgDAFgEAGQgHAJgHAJQgMAPgOANQhpBpiUAAQgOAAgOgBIAAEYIAAMbABpBkIpTAA");
	this.shape_38.setTransform(430.9,307.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,204,0.2)").s().p("AgbFkQiCgKhfheQhohoAAiUQAAiTBohoQAjgjAngXQBDgnBQgHQAUAfAbAhQAWAXAqApQAeAcAPAVQAIAMAJAUIAPAhIAKAVIgKgVIgPghQgJgUgIgMQgPgVgegcQgqgpgWgXQgbghgUgfIAIAAQAXAuA5AkQAnAZA0ARQg0gRgngZQg5gkgXguIAXgBQB0AABaBBIABALQAEAiAHAWIAFANIgFgNQgHgWgEgiIgBgLQAYARAWAXQAZAYATAcIgkgFIglgHQAHATAOAdIA3BqIg3hqQgOgdgHgTIAlAHIAkAFQAxBGAKBWQACAWAAAVQAAAYgDAYIgmhIIgRghIhDgRIBJCDIAgA/IgMAeIgggWIgLgPQgNgVgvhUIgig7IgVgpIBBASIhUidQAiAMApAIQgpgIgigMIBUCdIhBgSIAVApIAiA7QAvBUANAVIALAPIgggUQg1glgfgeIgBgBQgXgXgggoQgog1gNgQIgKgKIgPgYQgvhOgrg0QAQArAeAoQASAaApAtQBRB7AnAtIAbAfQAQASAJAPIACAFIgdgXQgagSgOgOQgUgSgWgeIgngwIg4hHQgegpgUgfQgphBgCg3IAUAXQgIgVgFgWQAFAWAIAVIgUgXIAAgIQAAgTAFgSQgFASAAATIAAAIQgQgSgQgPQAQAPAQASQACA3ApBBQAUAfAeApIA4BHIAnAwQAWAeAUASQAOAOAaASIAdAXQALAUAHAIQAHAJAUARIAPAQIgPgQQgUgRgHgJQgHgIgLgUIALAJIAkAfIAVATIgVgTIgkgfIgLgJIgCgFQgJgPgQgSIgbgfQgngthRh7IAKAKQANAQAoA1QAgAoAXAXIABABQAfAeA1AlIAgAUIAgAWIgGAMQgNgQgNgSQANASANAQQgJAQgKAQIgIALIgOATQgggegigpQhFhagmgqQggghgfgQQgXgMgHgFQgHgHgIgWQgMgYgbgcQgdghgOgRQgQgSgVgfIghgzIgXghIAXAhIAhAzQAVAfAQASQAOARAdAhQAbAcAMAYQAIAWAHAHQAHAFAXAMQAfAQAgAhQAmAqBFBaQAiApAgAeQgMAOgOAOQhpBpiTAAIgbgBgAFcgsIAHABIgHgBIgxgNIAxANgACnhcQg9gRgsgPQAsAPA9ARgACUjnIgXgrgAExA5IhJiDIBDARIARAhIAmBIQgFAmgMAiIggg/gAgBitQgegogQgrQArA0AvBOIAPAYQgpgtgSgagACUjnIAAAAgAhDkXIAAAAgADOkjIAAAAgAgfljIAAAAgAgXljIAAAAg");
	this.shape_39.setTransform(444.3,254.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFF00").ss(1,1,1).p("AiCkfIAYArQAiAMApAIQAHATAOAdQAMAbApBQQAIAPAJARQAWAmAQAiQATAlANAdQAWAwAJAOQAVAhAZAPAg3ldQADAQAEAdQAAAFABAGQAEAiAHAWQACAGADAHQASAEASADQAYADALACQAEAAACABQAYAFARAIQAuATAjA6QAMATAPAfQAHAPANAeQBrAaA4ARQAPAFAJAFQAIAFAKAPQARAcAUAwQAdA/AGAOAkkl4QACAEADAEQAUAfAdAiQAWAXAqApQAeAbAOAVQAJANAJATQAFAMAKAVQAEAKAGALQAfAJAiAJIBGCEQAUAkANAbQANAbAHAQQACAFACAGQAGAQAJAcQALAiAHATQAAAAAAABQAUAyAiA8QAPAcACAEQAJATAEAPAjEhzQAFAFAFAGQANAPAoA1QAgApAYAYQAeAdA0AlQASALANAJQAUANANAJQAWAPAEADQAFADAFAEQAvAkAcAiQAQATAjA3QADAEACAEQAhA1AJAcQADAGAFAMQAEALAGAGQAHAHAKACQALACAHgGAkvkNQArA0AxBOQAIAMAHAMQBRB7AnAuQAJAKASAUQAPASAJAPQACADABACQALAUAGAIQAGAJAUARQAIAHAHAJQAIAJAHALQAHALARAcQABABAAAAQALATAVAnAjAiJQAsAPA9ARQAJATAMAWQALAVAXAoQAsBTAOAUQAFAIAFAHQAOASANAQQAVAWAWAQAkjmRQAEARAIAQQAXAuA7AkQAnAZA0ARIBUCdQAeAIAjAKQAYAFAYAHQAEAAADABQBBAQA0AOQACADABAEQAbA2A+BkAnrm2QAGAkAZAqQAFAHAVAfQAKAOANATQALARAWAiQAVAfAQATQAOARAdAgQAaAdAMAXQALAWAHAHQAGAGAYALQAfAQAfAiQAmApBFBaQAjApAeAeQAbAYAaAQQABABABAAQAZAPALAKQASAQAAASAk8k4QAFAWAIAVAlDkkQAKALAKAMQAQArAeAoQAUAaApAtAljlEQAQAOAQASQACA3ApBBQATAfAhApQASAYAmAvQAkAuACADQAXAdAUASQAOAOAZATQATAOALAIQAHAGAEADQALALAXAVQAMALAJAIQAJAIAFAFQAoAiACABQARAQAOAJQADABAEADQANAHAYAKQAWAJAiAVQAGAEAGAEAk/lRQgFAVABAY");
	this.shape_40.setTransform(469.9,255.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("ABpi0QiAgJhfhfQhohoAAiUQAAiUBohpQAjgiAngYQBBgnBQgGQAEgBAEAAQAMgBAMAAQB1AABaBBQAYASAWAWQAZAZATAbQAxBHAJBWQADAVAAAXQAAAZgDAXQgFAmgMAjQgGAPgGAPQgDAFgDAGQgJARgLAQQgDAFgEAGQgHAJgHAJQgMAPgOANQhpBpiUAAQgOAAgOgBIAAEYIpTAAABpBkIAAMb");
	this.shape_41.setTransform(430.9,307.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,204,0.2)").s().p("AgbFkQiCgKhfheQhohoAAiUQAAiTBohoQAjgjAngXQBDgnBQgHQAUAfAbAhQAWAXAqApQAeAcAPAVQAIAMAJAUIAPAhIAKAVIgKgVIgPghQgJgUgIgMQgPgVgegcQgqgpgWgXQgbghgUgfIAIAAQAXAuA5AkQAnAZA0ARQg0gRgngZQg5gkgXguIAXgBQB0AABaBBIABALQAEAiAHAWIAFANIgFgNQgHgWgEgiIgBgLQAYARAWAXQAZAYATAcIgkgFIglgHQgpgIgigMQAiAMApAIQAHATAOAdIA3BqIg3hqQgOgdgHgTIAlAHIAkAFQAxBGAKBWQACAWAAAVQAAAYgDAYIgmhIIgRghIAxANIAHABIgHgBIgxgNIhDgRIBJCDIAgA/IgMAeIgggWQANASANAQQgJAQgKAQIgVgTIgkgfIgLgJIgCgFQgJgPgQgSIgbgfQgngthRh7IAKAKQANAQAoA1QAgAoAXAXIABABQAfAeA1AlIAgAUIgLgPQgNgVgvhUIgig7IgVgpIBBASIhBgSIAVApIAiA7QAvBUANAVIALAPIgggUQg1glgfgeIgBgBQgXgXgggoQgog1gNgQIgKgKIgPgYQgvhOgrg0QArA0AvBOIAPAYQgpgtgSgaQgegogQgrQgIgVgFgWQAFAWAIAVIgUgXIAUAXQAQArAeAoQASAaApAtQBRB7AnAtIAbAfQAQASAJAPIACAFQALAUAHAIQAHAJAUARIAPAQIgPgQQgUgRgHgJQgHgIgLgUIALAJIAkAfIAVATIgIALIgOATQgggegigpQhFhagmgqQggghgfgQQgXgMgHgFQgHgHgIgWQgMgYgbgcQgdghgOgRQgQgSgVgfIghgzIgXghIAXAhIAhAzQAVAfAQASQAOARAdAhQAbAcAMAYQAIAWAHAHQAHAFAXAMQAfAQAgAhQAmAqBFBaQAiApAgAeQgMAOgOAOQhpBpiTAAIgbgBgAhDkXQACA3ApBBQAUAfAeApIA4BHIAnAwQAWAeAUASQAOAOAaASIAdAXIgdgXQgagSgOgOQgUgSgWgeIgngwIg4hHQgegpgUgfQgphBgCg3IAAgIQAAgTAFgSQgFASAAATIAAAIQgQgSgQgPQAQAPAQASIAAAAgADohKIhUidgACnhcQg9gRgsgPQAsAPA9ARgACUjnIgXgrgAElCAIAgAWIgGAMQgNgQgNgSgADoCHIAAAAgAExA5IhJiDIBDARIARAhIAmBIQgFAmgMAiIggg/gAgvkAIAAAAgAhDkXIAAAAgADOkjIAAAAgAgfljIAAAAgAgXljIAAAAg");
	this.shape_42.setTransform(444.3,254.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},56).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.6,214.1,674.6,384.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;