
const POW2_32 = Math.pow(2, 32);
const POW2_64 = Math.pow(2, 64);

function Int64(v)
{
	this.hi = this.lo = 0; if(typeof(v) != 'undefined') this.from(v);
}//____________________________________________________________________________

Int64.prototype.is_eq  = function(v){ return (this.hi == v.hi && this.lo == v.lo); };
Int64.prototype.is_nul = function(v){ return (this.hi == 0 && this.lo == 0); };
Int64.prototype.is_neg = function(v){ return (this.hi | 0) < 0; };

Int64.prototype.cmp = function(v, unsign) // compare: +1, 0, -1
{
	var a = (unsign ? this.hi >>> 0 : this.hi | 0);
	var b = (unsign ?    v.hi >>> 0 :    v.hi | 0);

	if(a < b) return -1;
	if(a > b) return +1;

	if(this.lo < v.lo) return -1;
	if(this.lo > v.lo) return +1;

	return 0;
};//___________________________________________________________________________

Int64.prototype.neg = function()
{
	if(this.hi == 2147483648 && this.lo == 0){ this.hi--; this.lo = POW2_32-1; return; } // special case for 0x80000000|00000000

	var a = this.lo >>> 0;

	this.lo = (-a) >>> 0;
	
	var r = (a | (~a & this.lo)) >>> 31;

	this.hi = (-(this.hi >>> 0) - r) >>> 0;
};//___________________________________________________________________________

Int64.prototype.abs = function(){ if(this.is_neg()) this.neg(); };

Int64.prototype.not = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

    this.hi = (~this.hi) >>> 0;
    this.lo = (~this.lo) >>> 0;
};

Int64.prototype.and = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

    this.hi = (this.hi & v.hi) >>> 0;
    this.lo = (this.lo & v.lo) >>> 0;
};

Int64.prototype.or = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

    this.hi = (this.hi | v.hi) >>> 0;
    this.lo = (this.lo | v.lo) >>> 0;
};

Int64.prototype.xor = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

    this.hi = (this.hi ^ v.hi) >>> 0;
    this.lo = (this.lo ^ v.lo) >>> 0;
};
//_____________________________________________________________________________

Int64.prototype.from = function(v)
{
	if(v instanceof Int64){ this.hi = v.hi; this.lo = v.lo; return this; }

	var vi = Math.floor(Math.abs(v)) % POW2_64;

	this.hi = (vi / POW2_32) >>> 0;
	this.lo = (vi % POW2_32) >>> 0;

	if(v < 0) this.neg();

	return this;
};//___________________________________________________________________________

Int64.prototype.add = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

	var t =  (this.lo + v.lo) >>> 0;
	var c = ((this.lo & v.lo) | (this.lo | v.lo) & ~t) >>> 31;

	this.lo = t; this.hi = (this.hi + v.hi + c) >>> 0;

	return this;
};//___________________________________________________________________________

Int64.prototype.sub = function(v)
{
	if(!(v instanceof Int64)) v = new Int64(v);

	var t =  ( this.lo - v.lo) >>> 0;
	var r = ((~this.lo & v.lo) | (~(this.lo ^ v.lo) & t)) >>> 31;

	this.lo = t; this.hi = (this.hi - v.hi - r) >>> 0;

	return this;
};//___________________________________________________________________________

Int64.prototype.shl_1 = function()  // shift left by one bit
{
	this.hi = ((this.hi << 1) | this.lo >>> 31) >>> 0;
	this.lo =  (this.lo << 1) >>> 0;
};

Int64.prototype.shr_1 = function(unsign)  // shift right by one bit
{
	this.lo = ((this.lo >>> 1) | (this.hi << 31)) >>> 0;
	this.hi =  (unsign ? this.hi >>> 1 : (this.hi >> 1) >>> 0 );
};

Int64.prototype.shl = function(n) // shift left by n bits
{
	n %= 64; if(n < 1) return;

	this.hi = ((this.hi << n) | (this.lo >>> (32 - n))) >>> 0;
	this.lo =  (this.lo << n) >>> 0;

	return this;
};

Int64.prototype.shr = function(n, unsign)  // shift right by n bits
{
	n %= 64; if(n < 1) return;

	this.lo = ((this.lo >>> n) | (this.hi << (32 - n))) >>> 0;
	this.hi =  (unsign ? this.hi >>> n : (this.hi >> n) >>> 0);

	return this;
};//___________________________________________________________________________

Int64.prototype.mul = function(v)
{
	var a = new Int64(this);
	var b = new Int64(v);

	this.hi = this.lo = 0; if(a.is_nul() || b.is_nul()) return this;

	var an = a.is_neg(); if(an) a.neg();
	var bn = b.is_neg(); if(bn) b.neg();

	if(a.cmp(b, true) < 0){ var tmp = a; a = b; b = tmp; }
	
	while(!b.is_nul())
	{
		if(b.lo & 1) this.add(a);

		a.shl_1(); b.shr_1();
	}

	if(an != bn) this.neg();

	return this;
};//___________________________________________________________________________

if(!Math.clz32){ Math.clz32 = function(x){ return (x === 0 ? 32 : 31 - Math.floor(Math.log(x >>> 0) * Math.LOG2E)); }; }

Int64.prototype.clz = function(){ return this.hi ? Math.clz32(this.hi) : Math.clz32(this.lo) + 32; };

Int64.prototype._do_div = function(a, b, mod)
{
	var q = new Int64();

	switch(a.cmp(b, true))
	{
		case -1:/*a = a; q = new Int64( );*/ break;
		case  0:  a = q; q = new Int64(1);   break;
		case +1:
		{
			var shift = b.clz() - a.clz(); b.shl(shift);
		
			while(shift-- >= 0)
			{
				q.shl_1();
		
				if(!a.is_nul() && a.cmp(b, true) >= 0){ a.sub(b); q.lo |= 1; }
		
				b.shr_1();
			}
		}
	}
	
	this.from(mod ? a : q);
};

Int64.prototype.div = function(v, mod)
{
	var a = new Int64(this);
	var b = new Int64(v); if(b.is_nul()) throw 'division by zero';

	//if(b.is_one()) return;

	var an = a.is_neg(); if(an) a.neg();
	var bn = b.is_neg(); if(bn) b.neg();

	this._do_div(a, b, mod);

	if((mod && an) | (!mod && an != bn)) this.neg();

	return this;
};

Int64.prototype.mod = function(v){ this.div(v, true); return this; };
//_____________________________________________________________________________

Int64.prototype.toNumber = function()
{
	if(this.is_neg()){ var t = new Int64(this); t.neg(); return -(t.hi * POW2_32 + t.lo); }

	return (this.hi * POW2_32 + this.lo);
};//___________________________________________________________________________

Int64.prototype.toString = function(base)
{
	var sign = '', t = new Int64(this); base = base || 10;
	
	if(t.is_neg()){ t.neg(); sign = '-'; }

	var s = '', n, v0 = t.lo, v1 = t.hi;

	if(base == 2)
	{
		for(n = 0; n < 32; n++) s = ((v0 >> n) & 1).toString(base) + s;
		for(n = 0; n < 32; n++) s = ((v1 >> n) & 1).toString(base) + s;

		return sign + s.replace(/^0+/, '') || '0';
	}

	if(base == 16)
	{
		for(n = 0; n < 32; n += 4) s = ((v0 >> n) & 0xF).toString(base) + s;
		for(n = 0; n < 32; n += 4) s = ((v1 >> n) & 0xF).toString(base) + s;

		return sign + s.replace(/^0+/, '') || '0';
	}

	return this.toNumber().toString(base);
};//___________________________________________________________________________

Int64.prototype.print = function()
{
	var a = ('00000000' + this.hi.toString(16)).slice(-8);
	var b = ('00000000' + this.lo.toString(16)).slice(-8);

	console.log('['+a+'|'+b+']', this.toNumber());
}
