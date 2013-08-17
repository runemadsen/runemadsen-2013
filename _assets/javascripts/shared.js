var Modules = {};

Modules.fixie = {};
Modules.fixie = {
	
	setup_fixie : function(options)
	{
		this.first_time = true;
		this.fixie_el = $(this.el).find(options.els);
		
		this.fixie_settings = {
	    snapped       : false,
	    position    : this.fixie_el.position(),
	    offset      : this.fixie_el.offset(),
	    offset_y     : 0,
			original		: {
	      position  : this.fixie_el.css('position'),
	      top       : this.fixie_el.css('top'),
	      right     : this.fixie_el.css('right'),
	      bottom    : this.fixie_el.css('bottom'),
	      left      : this.fixie_el.css('left')                        
	    },
			dimensions	: {
				width    : this.fixie_el.width(),
	      height   : this.fixie_el.height()
			}
	  }
	
		_.extend(this.fixie_settings, options);
	
		this.check_browser();
	},
	
	check_browser : function()
	{
		if(is_ios())	this.bind_events_absolute();
		else					this.bind_events_fixed();
	},
	
	bind_events_fixed : function() 
	{
		$(window).bind('scroll', _.bind(this.handle_scroll_fixed, this));
    $(window).bind('resize', _.bind(this.on_reflow_fixed, this));
	},
	
	handle_scroll_fixed : function() 
	{
		if(this.fixie_settings.snapped)
		{
			if($(window).scrollTop() <= this.fixie_settings.offset.top - this.fixie_settings.offset_y){     
        this.fixie_el.css(this.fixie_settings.original);
        this.fixie_settings.snapped = false;
      }
    }
    else
		{
      if($(window).scrollTop() >= this.fixie_settings.offset.top - this.fixie_settings.offset_y)
			{
				// sometimes images will load late and therefore add a scrollbar to the window changing the offset.
				// therefore we get the position every time we switch
				this.detect_postition();
	
        this.fixie_el.css({ position: 'fixed', left: this.fixie_settings.offset.left, top: this.fixie_settings.offset_y, width : this.fixie_settings.dimensions.width });
        this.fixie_settings.snapped = true;
        return;
      }
    }
	},
	
	on_reflow_fixed : function() {
		this.fixie_settings.offset = this.fixie_el.offset();
	  this.handle_scroll_fixed();
	},
	
	detect_postition : function() {
		this.fixie_settings.position = this.fixie_el.position();
	  this.fixie_settings.offset = this.fixie_el.offset();
	  this.fixie_settings.original = {
	      position  : this.fixie_el.css('position'),
	      top       : this.fixie_el.css('top'),
	      right     : this.fixie_el.css('right'),
	      bottom    : this.fixie_el.css('bottom'),
	      left      : this.fixie_el.css('left')                        
	  },
		this.fixie_settings.dimensions = {
				width    : this.fixie_el.width(),
	      height   : this.fixie_el.height()
		}
	}
}

/* To Query Params
______________________________________________________ */


// Convert object to query params
function to_query_params(data)
{
  var r = [];
  for(var k in data) {
    r.push(k+"="+escape(data[k]));
  }
  return r.join('&');
}

/* Detect browser
______________________________________________________ */

function is_ios()
{
	return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i);
}

function detect_browser()
{
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion); 
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	 browserName = "Opera";
	 fullVersion = nAgt.substring(verOffset+6);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	 browserName = "Microsoft Internet Explorer";
	 fullVersion = nAgt.substring(verOffset+5);
	}
	// In Chrome, the true version is after "Chrome" 
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	 browserName = "Chrome";
	 fullVersion = nAgt.substring(verOffset+7);
	}
	// In Safari, the true version is after "Safari" or after "Version" 
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	 browserName = "Safari";
	 fullVersion = nAgt.substring(verOffset+7);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In Firefox, the true version is after "Firefox" 
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	 browserName = "Firefox";
	 fullVersion = nAgt.substring(verOffset+8);
	}
	// In most other browsers, "name/version" is at the end of userAgent 
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
	{
	 browserName = nAgt.substring(nameOffset,verOffset);
	 fullVersion = nAgt.substring(verOffset+1);
	 if (browserName.toLowerCase()==browserName.toUpperCase()) {
	  browserName = navigator.appName;
	 }
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix=fullVersion.indexOf(";"))!=-1) fullVersion=fullVersion.substring(0,ix);
	if ((ix=fullVersion.indexOf(" "))!=-1) fullVersion=fullVersion.substring(0,ix);

	majorVersion = parseInt(''+fullVersion,10);
	if (isNaN(majorVersion)) {
	 fullVersion  = ''+parseFloat(navigator.appVersion); 
	 majorVersion = parseInt(navigator.appVersion,10);
	}
	
	return { browserName : browserName, fullVersion : parseFloat(fullVersion), majorVersion : majorVersion };
}

/* Crazy Fullscreen API code
-------------------------------------------------------- */

(function() {
    var fullScreenApi = {
            supportsFullScreen: false,
            isFullScreen: function() { return false; },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: '',
            prefix: ''
        },
        browserPrefixes = 'webkit moz o ms khtml'.split(' ');
 
    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
        fullScreenApi.supportsFullScreen = true;
    } else {
        // check for fullscreen support by vendor prefix
        for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
            fullScreenApi.prefix = browserPrefixes[i];
 
            if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
                fullScreenApi.supportsFullScreen = true;
 
                break;
            }
        }
    }
 
    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
        fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
 
        fullScreenApi.isFullScreen = function() {
            switch (this.prefix) {
                case '':
                    return document.fullScreen;
                case 'webkit':
                    return document.webkitIsFullScreen;
                default:
                    return document[this.prefix + 'FullScreen'];
            }
        }
        fullScreenApi.requestFullScreen = function(el) {
            return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
        }
        fullScreenApi.cancelFullScreen = function(el) {
            return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
        }
    }
 
    // jQuery plugin
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function() {
 
            return this.each(function() {
                if (fullScreenApi.supportsFullScreen) {
                    fullScreenApi.requestFullScreen(this);
                }
            });
        };
    }
 
    // export api
    window.fullScreenApi = fullScreenApi;
})();