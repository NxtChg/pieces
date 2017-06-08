/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

Math.log10 = Math.log10 || function(x){ return Math.log(x) * Math.LOG10E; };
//_____________________________________________________________________________

var s = document.createElement("style"); s.type = 'text/css'; // add spinner keyframes

document.getElementsByTagName('head')[0].appendChild(s);

s.sheet.insertRule('@keyframes spin { 100% { transform: rotate(360deg); } }', 0);
//_____________________________________________________________________________

Vue.component('vue-submit',
{
	template:
		'<button class="vue-submit" type="submit" :disabled="locked" style="position:relative;" @click="$emit(\'click\', $event)">' +
			'<slot>Submit</slot>' +
			'<span class="spinner"  :style="spn_style" v-if="in_progress"></span>' +
			'<div  class="progress" :style="bar_style" v-if="in_progress"></div>' +
		'</button>',

	props:{ progress: Number, autoProgress: Number, disabled: Boolean },

	data: function()
	{
		return{ at: 0, t: 0,
				dt:      (typeof(this.autoProgress) != 'undefined' ? this.autoProgress : 3000),
				enabled: (typeof(this.disabled    ) == 'undefined' || this.disabled != true)
		};
	},

	watch:
	{
		disabled: function(v){ this.enabled = !v; },

		progress: function(v)
		{
			if(!this.enabled) return;

			var prev = this.in_progress; this.at = v;

			if(this.dt > 0)
			{
				if(!prev &&  this.in_progress){ this.at = 1; this.t = 0; this.tick(); } // start auto progress
				if( prev && !this.in_progress){ this.at = 0; } // stop
			}
		}
	},

	computed:
	{
		in_progress: function(){ return (this.at > 0 && this.at < 100); },

		locked: function(){ return (!this.enabled || this.in_progress); },

		bar_style: function()
		{
			return{	position: 'absolute', top: 0, left: 0, bottom: 0, backgroundColor: '#fff', transition: 'width 200ms linear', opacity: '0.4',
					width: this.at + '%', height: '100%', zIndex: 3
			};
		},

		spn_style: function()
		{
			return{ position: 'relative', border: '3.5px solid rgba(255,255,255,0.5)', borderRightColor: '#fff', borderRadius: '50%', display: 'inline-block',
					width: '1.33em', height: '1.33em', zIndex: 2, marginLeft:'6px', verticalAlign: 'text-top', top: '-1px',
					animation: 'spin 0.75s linear', animationIterationCount: 'infinite', // background: 'url("loading.gif") center center no-repeat'
			};
		}
    },

	methods:
	{
		tick: function()
		{
			if(!this.enabled || !this.in_progress) return;

			this.at = Math.round(100 + Math.log10(0.1 + this.t / this.dt) * 100);

			if(this.at <  1) this.at =  1;
			if(this.at > 95) this.at = 95;

			this.t += 200;
			
			var self = this; setTimeout(function(){ self.tick(); }, 200);
		}
	}
});