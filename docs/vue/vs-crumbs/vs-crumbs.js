/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

Vue.component('vs-crumbs',
{
	template:
		'<ul class="vs-crumbs" v-if="crumbs.length" style="list-style:none; margin:0; padding:0; display:inline-block;">' +
			'<li v-for="(crumb, i) in crumbs" style="display:inline-block">' +
				'<router-link v-if="i < crumbs.length-1" :to="crumb.path">{{ crumb.name }}</router-link>' +
				'<span class=last v-else style="cursor:default">{{ crumb.name }}</span>' +
			'</li></ul>',

	props: { root: String },

	computed:
	{
		crumbs: function()
		{
			var path = '', title = (this.root || 'home');

			var cs = [ { name: title, path: '/'} ]; if(!this.$route) return [];

			var r = (this.$route.path                        ).split('/');
			var m = (this.$route.matched[0].meta.crumbs || '').split('/');

			for(var i = 1; i < r.length; i++)
			{
		        var name = (m[i] || r[i]); if(r[i] == '') continue;

				title += ' : '+ name;
				path  += '/'  + name;
		
		        cs.push({ name: name, path: path });
			}

			window.document.title = title;

			return cs;
		}
    }
});