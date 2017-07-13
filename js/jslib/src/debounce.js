
js.debounce = function(fn, delay) // returns a function to add delay to fn; if called again sooner the delay is reset
{
	return function()
	{
		clearTimeout(this.timer);
		
		var self = this, args = arguments;

		this.timer = setTimeout(function(){ fn.apply(self, args); }, delay);
	};
};

js.throttle = function(fn, delay, immediate) // returns a function to add delay to fn; if called again sooner the call is ignored
{
	return function()
	{
		if(this.timer) return;

		var self = this, args = arguments;

		if(immediate) fn.apply(self, args);

		this.timer = setTimeout(function(){ self.timer = null; fn.apply(self, args); }, delay);
	};
};//___________________________________________________________________________
