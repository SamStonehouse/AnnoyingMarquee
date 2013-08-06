(function($){
    $.marquee = function(el, options){
        var base = this;
        
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("marquee", base);
        
        base.init = function(){           
            base.options = $.extend({},$.marquee.defaultOptions, options);
            
            var html, first;

            setInterval(
              function() {
	            	html = base.$el.html();
	            	first = html.slice(0,1);
	            	html = html.substring(1) + first;
	            	base.$el.html(html);
	            }, 
	            base.options.time
	        );

        };
        
        base.init();
    };
    
    $.marquee.defaultOptions = {
        time: 50
    };
    
    $.fn.marquee = function(options){
        return this.each(function(){
            (new $.marquee(this, options));
        });
    };
})(jQuery);
