/* Slideshow Container
-------------------------------------------------------- */

var Slideshow = Backbone.Model.extend({});

var SlideshowView = Backbone.View.extend({
	
	tagName: "div",
	id: "slideshow_container",
	imageTemplate: _.template('<img class="loadItem" src="<%= showItem %>" />'),
	videoTemplate: _.template('Im a video!'),
	slideshowElements: [],
	slideWindow: {},
	
	initialize: function()
	{		
		// make all h2 headings data-slideshow
		_.each($("h2"), function(el) {
			$(el).attr("data-slideshow", "self");
		});
		
		this.slideshowElements = $("*[data-slideshow]");
		this.model.bind("change", this.render, this);
		this.add_events();
	},
	
	add_events: function()
	{	
		var t = this;
		
		$("#open-slides").click(function() {
			t.open_slideshow();
			return false;
		});
			
		this.slideshowElements.click(function() {
			var index = t.slideshowElements.index(this);
			t.change_slides(index);
			return false;
		});
	},
	
	open_slideshow: function()
	{
		var t = this;
		this.slideWindow = window.open("/printing-code-2012/slideshow-blank");
		this.slideWindow.onload = function() { 
			t.change_slides(0); 
		};
	},
	
	change_slides: function(index)
	{
		var attr = $(this.slideshowElements[index]).attr("data-slideshow");
				
		// simple check for self or data-slideshow attribute
		if(attr == "self")
			this.model.set({showItem:$(this.slideshowElements[index])[0].outerHTML, useTemplate:false});
		else
			this.model.set({showItem:$(this.slideshowElements[index]).attr("data-slideshow"), useTemplate:true});
			
		$(".slideshow-active").removeClass("slideshow-active");
		$(this.slideshowElements[index]).addClass("slideshow-active");
	},
	
	render: function()
	{	
		var t = this;
		var useTemplate = this.model.get("useTemplate")
		
		// just render into element on every change
		if(useTemplate)
		{
			$(this.slideWindow.document.body).html(this.imageTemplate(this.model.toJSON()));
			
			$(this.slideWindow.document.body).find(".loadItem").load(function() {
				t.fit_to_screen(this);
			});
		}
		else
		{
			$(this.slideWindow.document.body).html(this.model.get("showItem"));
		}
		
		return this;
	},
	
	fit_to_screen: function(el)
	{
		var window_height = this.slideWindow.document.body.clientHeight;
		var window_width  = this.slideWindow.document.body.clientWidth;
		var image_width   = $(el).width();
		var image_height  = $(el).height();
		var height_ratio  = window_height / image_height;
		var width_ratio   = window_width / image_width;
		
		if(image_width > window_width || image_height > window_height)
		{
			if (height_ratio < width_ratio)
			{
				$(el).css("width", "auto")
				$(el).css("height", "100%")

			}
			else
			{
				$(el).css("width", "100%")
				$(el).css("height", "auto")
			}
		}
		
		var w = $(el).width();
		$(el).css("position", "absolute");
		$(el).css("left", "50%");
		$(el).css("margin-left", -w/2);
		
		var h = $(el).height();
		$(el).css("position", "absolute");
		$(el).css("top", "50%");
		$(el).css("margin-top", -h/2);
	}
	
});


/* App Code
-------------------------------------------------------- */

var SlideshowApp = Backbone.View.extend({
	
	slideshow: {},
	slideshowView: {},
	
	initialize: function()
	{		
		this.slideshow = new Slideshow({enabled:false, showItem:undefined});
		this.slideshowView = new SlideshowView({model:this.slideshow});
	}
	
});

$(function(){
	window.app = new SlideshowApp();
})