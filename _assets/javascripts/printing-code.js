/* Automatic Processing Run
-------------------------------------------------------- */

/*var CodeBlock = Backbone.View.extend({
	
	canvas:{},
	
	initialize: function()
	{		
		this.check_code();
	},
	
	check_code: function()
	{
		var t = this;
		var code = $(this.el).text();
		
		if(code.match(/autorun/))
		{
			this.canvas = $("<canvas class='processingjs'></canvas>");
			$(this.el).before(this.canvas);
			new Processing(this.canvas[0], code);
			$(this.el).addClass("processingjs");
			
			if(code.match(/autohide/))
			{
				$(this.el).hide();
				this.canvas.click(function() {
					$(t.el).toggle();
				});
			}
		}
	}
	
});

var ProcessingRunner = Backbone.View.extend({
	
	codeBlocks: [],
	
	initialize: function()
	{		
		_.each($('pre'), function(pre, i) {
			this.codeBlocks.push( new CodeBlock({el:pre, id:i}));
		}, this);
	}
	
});*/

/* App Code
-------------------------------------------------------- */

var PrintingCode = Backbone.View.extend({
	
	processingRunner: {},
	
	initialize: function()
	{		
		this.create_toc();
		this.add_events();
		//this.processingRunner = new ProcessingRunner();
	},
	
	create_toc : function()
	{
		$("h2").each(function() {

		  var org = $(this).text();
		  alias = org.replace(/\ /g, "-").replace(/:/g, "").toLowerCase();

		  // create anchor
		  $("<a id='"+alias+"'></a>").insertBefore(this);

		  // create link in toc ul
			$("#toc").append("<li><a href='#"+alias+"'>"+org+"</a></li>")
		});
	},
	
	add_events: function()
	{
		$("*[data-slideshow]").click(function() {
			window.open($(this).attr("data-slideshow"), '_blank');
		});
	}
	
});

$(function(){
	window.app = new PrintingCode();
});
