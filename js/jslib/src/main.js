/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var js = {}; // it all starts with a small first step

function defined(a){ return (a !== void 0 && a !== null); }

js.$ = function(id){ return document.getElementById(id); }

js.cb = function(obj, fn){ return function(){ return fn.apply(obj, arguments); }; }; // bind 'this' and function together
//_____________________________________________________________________________
