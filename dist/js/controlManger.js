!function(n,t){function e(n){this.index=index,this.len=n}e.prototype={prev:function(){return this.getIndex(-1)},next:function(){return this.getIndex(1)},getIndex:function(n){var t=this.index,e=this.len,i=(t+e+n)%e;return this.index=i}},t.controlManger=e}(window.Zepto,window.player||{});