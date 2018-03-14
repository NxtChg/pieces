/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

function fetchit(url, data, options)
{
	return new Promise(function(resolve, reject)
	{
		'use strict';

		options = (options || {});

		var xhr = new XMLHttpRequest;

		var ue = false, method = (options.method || 'GET').toUpperCase();

		if(data instanceof FormData)
		{
			method = 'POST';
		}
		else if(data)
		{
			data = 'data=' + encodeURIComponent(JSON.stringify(data));

			if(method == 'POST') ue = true; else
			if(method == 'GET' )
			{
				url += (url.indexOf('?') < 0 ? '?' : '&') + data; data = null;
			}
		}

		xhr.open(method, url, true);

		xhr.onreadystatechange = function()
		{
			if(this.readyState !== 4) return;

			if(this.status === 200)
			{
				var r = this.responseText;

				if(r.length > 1 && (r[0] == '{' || r[0] == '['))
				{
					try{ r = JSON.parse(r); } catch(e){ reject('bad response'); return; }

					// if(r.error != 'ok'){ reject(r.error); return; }  // uncomment if you use 'error' member with 'ok' as success value
				}

				resolve(r);
			}
			else
			{
				reject('network error' + (this.status > 0 ? ': '+this.status : ''));
			}
		};

		xhr.timeout = (options.timeout || 5) * 1000; // time in milliseconds

		if(options.credentials === 'include'){ xhr.withCredentials = true;  } else
		if(options.credentials === 'omit'   ){ xhr.withCredentials = false; }

		if(options.header) option.headers.forEach(function(value, name){ xhr.setRequestHeader(name, value); });

		if(ue) xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		xhr.send(data);
	});
}
