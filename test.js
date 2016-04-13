!(function(){
    //μ = {clone: };
    //μ.base = μ.clone(window);
    var test = function(){
        var simpledeep = function(obj){
            var cache = [];
            var res = JSON.stringify(obj, function(key, value) {
                if (typeof value === 'object' && value !== null){
                    if (cache.indexOf(value) !== -1) {
                        return;
                    }
                    cache.push(value);
                }
                return value;
            });
            cache = null;
            return JSON.parse(res);
        }
        
        mU = {clone: simpledeep, base: simpledeep(window), poll: null, cycles: 0, pause: function(){mU.remote=0}, start: function(){mU.remote=1;mU.poll()}, remote: 1, garage: {}};
        mU.sidereal = function(par,obj){
            var mobj = {};
            var active = simpledeep(obj);
            for(var item in active){
                if(par[item]===void 0){
                    mobj[item] = active[item];
                } else if (typeof mU.base[item]==="object"){
                    mobj[item] = mU.sidereal(active[item]);
                }
            }
            return mobj;
        }
        mU.poll = function(){
            mU.cycles++;
            mU.garage = {};
            var active = simpledeep(window);
            for(var item in active){
                if(mU.base[item]===void 0){
                    mU.garage[item] = active[item];
                } else if (typeof mU.base[item]==="object"){
                    //mU.garage[item] = mU.sidereal(mU.base[item],active[item])
                }
            }
            mU.draw();
            if(mU.remote) return setTimeout(mU.poll,500);
        }
        mU.draw = function(){
            if(mU.canvas===void 0){
                try {
                    mU.canvas = document.createElement('canvas');
                    mU.canvas.width = window.innerWidth;
                    mU.canvas.height = window.innerHeight;
                    document.body.appendChild(mU.canvas);
                    mU.ctx = mU.canvas.getContext('2d');
                }
                catch(err) {
                    mU.canvas = void 0;
                    return setTimeout(mU.draw,100);
                }
            }
            //resize canvas
            mU.canvas.width = window.innerWidth;
            mU.canvas.height = window.innerHeight;
            //draw objects in garage
            var cnt, cur=0;
            for(var i in mU.garage){
                if(mU.garage.hasOwnProperty(i)) {
                    cnt++;
                }
            }
            for(var item in mU.garage){
                if(mU.garage.hasOwnProperty(item)) {
                    //mU.garage[item];
                    mU.ctx.fillRect(50,50*cur,25,25);
                    cur++;
                }
            }
        }
        mU.poll();
        FLAG = "NEW WINDOW VARIABLE!";
    }
    try {
        test();
    }
    catch(err) {
        void(window.addEventListener ? window.addEventListener("load", test, !1) : window.attachEvent ? window.attachEvent("onload", test) : window.onload = test);
    }
}());