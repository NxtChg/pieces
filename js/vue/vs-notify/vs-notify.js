/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var s = document.createElement("style"); s.type = 'text/css';

document.getElementsByTagName('head')[0].appendChild(s);

s.innerHTML =
		'.vs-notify{ position:fixed; width:300px; z-index:9999; }'+
		'.vs-notify .ntf{ font-size:14px; padding:10px; margin:0 5px 5px; color:#fff; background:#44A4FC; border-left:5px solid #187FE7; box-sizing:border-box; text-align:left; cursor:pointer; }'+
		'.vs-notify .warn   { background:#ffb648; border-left-color:#f48a06; }'+
		'.vs-notify .error  { background:#E54D42; border-left-color:#B82E24; }'+
		'.vs-notify .success{ background:#68CD86; border-left-color:#42A85F; }'+

		'.ntf-left-enter-active, .ntf-left-leave-active, .ntf-right-enter-active, .ntf-right-leave-active, .ntf-top-enter-active, .ntf-top-leave-active,'+
		'.ntf-bottom-enter-active, .ntf-bottom-leave-active{ transition: all 0.3s; }'+
		'.ntf-left-enter,  .ntf-left-leave-to { opacity:0; transform:translateX(-300px); }'+
		'.ntf-right-enter, .ntf-right-leave-to{ opacity:0; transform:translateX(300px); }'+
		'.ntf-fade-enter-active, .ntf-fade-leave-active{ transition: opacity 0.5s; }'+
		'.ntf-fade-enter, .ntf-fade-leave-to{ opacity: 0; }'+
		'.ntf-top-enter,  .ntf-top-leave-to{ opacity:0; transform: translateY(-120px); }'+
		'.ntf-bottom-enter, .ntf-bottom-leave-to{ opacity:0; transform: translateY(120px); }';
//_____________________________________________________________________________

var VsNotify =
{
 install: function(Vue)
 {
 	var self = this; this.g = {};

	var $notify = function(group, text, type, time){ if(self.g[group]) self.g[group](text, type, time); };

	Object.defineProperty(Vue.prototype, '$notify', { get: function(){ return $notify; } });
 }
};

Vue.use(VsNotify);

Vue.component('vs-notify',
{
	template:
		'<div :class="[\'vs-notify\', group]" :style="styles"><transition-group :name="trans" mode="out-in">'+
			'<div :class="it.type" v-for="it in list" :key="it.id">'+
				'<slot name="body" :class="it.type" :item="it" :close="function(){ end(it) }">'+
					'<div @click.stop="end(it)" v-html="it.text"></div>'+
				'</slot>'+
			'</div>'+
		'</transition-group></div>',

	props:
	{
		group: String, transition: String,
		position: { type: String,  default: 'top right' },
		duration: { type: Number,  default: 3000 },
		reverse:  { type: Boolean, default: false }
	},

	data: function()
	{
		var d = !this.reverse, p = this.position, t = this.transition;
		
		if(p.indexOf('bottom')+1) d = !d;

		if(!t && p.indexOf('left' )+1) t = 'ntf-left';
		if(!t && p.indexOf('right')+1) t = 'ntf-right';
		
		return{ dir:d, trans: t, list:[] }
	},

	created: function()
	{
		var ids = 1, self = this;

		VsNotify.g[this.group] = function(text, type, time)
		{
			if(text === undefined){ self.end(); return; }

			var it = { id: ids++, text: text, type: 'ntf' + (type ? ' '+type : '') };

			time = (time !== undefined ? time : self.duration);

			if(time > 0){ it.timer = setTimeout(function(){ self.end(it); }, time); }

			self.dir ? self.list.push(it) : self.list.unshift(it);
		};
	},

	//destroyed: function(){ }, // do we need it? if so - remove group from VsNotify

	computed:
	{
		styles: function()
		{
			var s = {}, pa = this.position.split(' ');

			for(var i = 0; i < pa.length; i++)
            {
            	if(pa[i] == 'center'){ s.left = s.right = 0; s.margin = 'auto'; } else if(pa[i] != '') s[pa[i]] = 0;
            }

			return s;
		}
	},

	methods:
	{
		find: function(id){ for(var i = 0; i < this.list.length; i++) if(this.list[i].id == id) return i; return -1; },

		end_no: function(n){ if(n+1){ clearTimeout(this.list[n].timer); this.list.splice(n, 1); } },

		end: function(it)
		{
			if(it === undefined){ while(this.list.length) this.end_no(0); return; } // kill all

			this.end_no(this.find(it.id));
		}
	}
});
