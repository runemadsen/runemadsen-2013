/* Column
_________________________________________________________ */

var Column = Backbone.View.extend({

	words:[],
	top:undefined,
	offset_y: 40,

	initialize: function()
	{
		this.words = $(this.el).attr("data-keywords").split(",");
	}
	
});

/* Word
_________________________________________________________ */

var Word = Backbone.View.extend({

	word:undefined,

	initialize: function()
	{
		this.word = $(this.el).text();
	}
	
});

/* App
_________________________________________________________ */

var Front = Backbone.View.extend({

	columns:[],
	cur_column:{},
	words:[],

	initialize: function()
	{		
		_.extend(this, Modules.fixie);
		
		this.setup_fixie({
			els : ".fixie",
			offset_y : 25
		});
		
		this.columns = _.map($(".column_2, .column_3").toArray().reverse(), function(word) {
			return new Column({el:word});
		});
		
		this.add_highlight_classes();
		
		this.init_scroll_events();
		
		this.words = _.map($("span.highlight"), function(word) {
			return new Word({el:word});
		});
	},
	
	add_highlight_classes: function()
	{
		var all_words = _.map(this.columns, function(c) {
			return c.words;
		}, this);
		
		all_words = _.flatten(all_words);
		
		var template = '<span class="highlight">$1</span>';
		
		var content_box = $(".fixie");
		
		_.each(all_words, _.bind(function(word) {
			var pattern = new RegExp("("+word+")","ig");
			content_box.html(content_box.html().replace(pattern, template));
		}, this));
	},
	
	init_scroll_events: function()
	{
		$(window).bind('scroll', _.bind(this.detect_scroll, this));
	},
	
	detect_scroll: function()
	{
		var window_top = $(document).scrollTop();
		
		var column = _.detect(this.columns, function(c) {
			return window_top >= $(c.el).offset().top - c.offset_y;
		});
		
		if(column)
		{
			if(!$(".fixie").hasClass("tonedown"))
			{
				$(".fixie").addClass("tonedown")
			}
		}
			
		if(column && column !== this.cur_column)
		{	
			this.cur_column = column;
			this.highlight_words();
		}
		else if(!column)
		{
			if($(".fixie").hasClass("tonedown"))
			{
				$(".fixie").removeClass("tonedown")
			}
		}
	},
	
	highlight_words: function()
	{
		_.each(this.words, function(view) {
			$(view.el).removeClass("active");
		});
		
		_.each(this.cur_column.words, function(word) {
			_.each(this.words, function(view) {
				if(word == view.word)
				{
					$(view.el).addClass("active");
				}
			}, this)
		}, this);
	}
	
});