/** @preserve mapur.js (c) 2015 Oluwaseun Ogedengbe, MIT*/
/**
* @suppress {globalThis}
*/
(function(open) {
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        // Do some magic
        console.log("OUTER: getting http");
        //open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest.prototype.open);
!function(){
    //console.log(window.XMLHttpRequest);
    //window.XMLHttpRequest = function XMLHttpRequest(){return 0};
    //console.log(XMLHttpRequest);
    /*XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        //overites native XMLHttpRequest

        open.call(this, method, url, async, user, pass);
    };*/
    mU = function(){
        var css = document.createElement("LINK"),
            jcl = document.createElement("SCRIPT"),
            tbr = document.createElement("UL"),
            frm = document.createElement("IFRAME");
        /*!function(){
                console.log(frm,frm.contentWindow);
                var window_ = frm.contentWindow;
                preserve={};
                for (var name in window_) {
                    preserve[name]=window_[name];
                }
            }();*/
        css.rel="stylesheet";
        css.href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";
        document.head.appendChild(css);
        tbr.innerHTML='<li style="display:block;"><div class="fa fa-paint-brush" style="display:inline;"></div> <input class="color" style="height:100%;width:50%" onchange="document.getElementsByTagName('+"'canvas'"+')[0].setAttribute('+"'style'"+','+"'background-color: #'"+'+this.color.toString())"></li><li style="display:block;"><input style="display:inline;" type="file" id="input" size="10" accept=".js,.css,.html,.htm"></li>';
        tbr.
        setAttribute("style","padding: 0px;margin:0px;position: fixed; top: 5%; left: 5%; width: 15%; height: auto;");
        document.body.appendChild(tbr);
        frm.setAttribute("id","lab");
        frm.setAttribute("style","padding: 0px;margin:0px;position: fixed; bottom: 5%; right: 5%; width: 35%; height: auto;");
        document.body.appendChild(frm);
        
        var Jsf = function() {
            this.sts = []; 
        }
        var Ftn = function() {
            this.pms = [];
            this.sts = [];
        }
        var Cif = function() {
            this.if = [];
            this.e1 = [];
            this.e_ = [];
        }
        var Csw = function() {
            this.c1 = [];
            this.c2 = [];
            this.d_ = [];
        }
        var Cfr = function() {
            this.head = {
                init: '',
                cond: '',
                iter: ''
            };
            this.sts = [];
        }
        var Cwh = function() {
            this.cond = '';
            this.sts = [];
        }
        
        var parse = function(f,z,c) {
            //clean+split
            if(c==true){                
                var work = f;
            } else {
                z = 0;
                //var work = f.replace(/ /g,'');
                var work = f.replace(/{/g,'\n{\n');
                work = work.replace(/}/g,'\n}\n');
                work = work.replace(/ /g,'');
                console.log(work)
                work = work.split("\n");
            }
            var test = [];
            var nugg = '';
            var itertrk = 0;
            var nugtar = 0;
            var thing;
            var res;
            for(i = z; i < work.length; i++){
                nugg = work[i];//.replace(/ /g,'');
                //console.log(nugg,nugg.indexOf("//"))
                if(nugg.indexOf("\/\/")==0)
                    continue;
                nugg = nugg.split('"');
                nugtar = Math.ceil(nugg.length/2)
                while(nugtar<nugg.length){//get rid of strings
                    nugg.splice(1+itertrk, 1);
                    itertrk++;
                }
                itertrk=0;
                nugg = nugg.join('');
                //console.log(nugg)
                if(nugg.indexOf("function")+1){
                    thing = new Ftn();
                    thing.pms = nugg.slice(nugg.indexOf('(',nugg.indexOf("function"))+1,nugg.indexOf(')'),nugg.indexOf('(',nugg.indexOf("function"))).split(",");
                    res = parse(work,i+1,true);
                    //console.log(res,res[1])
                    thing.sts = res[0];
                    i = res[1];
                    test.push(thing)
                } else if(nugg.indexOf("}")+1) {
                    break;
                } else {
                    test.push(nugg)
                }
                //console.log(nugg)
            }
            //console.log(jsfile)
            if(c!=true){
                var temp = test;
                test = new Jsf();
                test.sts = temp;
            }
            //console.log((test,i),test,i)
            return [test,i];//(test,i);
        }
        var reader = new FileReader();
        reader.onloadend = function(e) {
            var text = reader.result;
            //console.log(text);
            //console.log(eval(text))
            var parsed = parse(text);
            console.log(parsed[0])
            var virtualtask = document.createElement("SCRIPT");
            virtualtask.innerHTML = text;
            document.getElementById("lab").contentWindow.document.head.appendChild(virtualtask);
            /*g.onDraw = function(g){
                var cnv = g.canvas;
                var ctx = g.ctx;
                ctx.clearRect(0, 0, g.width, g.height);
                ctx.font = "12px Arial";
                ctx.fillStyle = "blue";
                ctx.textAlign = "center";
                ctx.fillText(text,0,0);
            }*/
            mUobj.meths._update();
        }
        reader.onerror = function(e){
            var err = reader.error;
            /*g.onDraw = function(g){
                var cnv = g.canvas;
                var ctx = g.ctx;
                ctx.clearRect(0, 0, g.width, g.height);
                ctx.font = "12px Arial";
                ctx.fillStyle = "red";
                ctx.textAlign = "center";
                ctx.fillText(err,0,0);
            }*/
        }
        function handleFiles(direct) {
            var file = (this.files!==void 0)?this.files[0]:direct;
            //console.log(file,direct,this.files)
            /*g.onDraw = function(g){
                var cnv = g.canvas;
                var ctx = g.ctx;
                ctx.clearRect(0, 0, g.width, g.height);
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillText(file.name+","+file.size+","+file.type,cnv.width/2, cnv.height/2);
            }*/
            console.log(file)
            reader.readAsText(file);
        }
        function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        }
        function dragover(e) {
            e.stopPropagation();
            e.preventDefault();
        }
        function drop(e) {
            e.stopPropagation();
            e.preventDefault();
            handleFiles(e.dataTransfer.files[0]);
        }
        document.getElementById("input").addEventListener("change", handleFiles, false);
        /*g.canvas.addEventListener("dragenter", dragenter, false);
        g.canvas.addEventListener("dragover", dragover, false);
        g.canvas.addEventListener("drop", drop, false);*/
        !function(){
            var window_ = document.getElementById("lab").contentWindow;
            (function(open) {
                window_.XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
                    // Do some magic
                    console.log("INNER: getting http");
                    open.call(this, method, url, async, user, pass);
                };
            })(window_.XMLHttpRequest.prototype.open);
            window.onerror = window_.onerror = function(err,urel,num,col,e){
                //alert(e.type);
                console.log("ONERROR",e.type);//,e.target);
                //return e.type;
            };
            window.addEventListener('error', function(e) {
                console.log("ONERROR",e.type);
            }, true);
            //a.b = 0;
            document.getElementById("lab").addEventListener('error', function(e) {
                console.log("I am Error",e.type);
            }, true);
            preserve={};
            for (var name in window_) {
                preserve[name]=window_[name];
            }
        }();
        mUobj = {
            _window: document.getElementById("lab").contentWindow,
            meths: {
                _update: function(){
                    var window_ = document.getElementById("lab").contentWindow;
                    for (var name in window_) {
                        if (!mUobj.props.hasOwnProperty(name)&&!preserve.hasOwnProperty(name)) {
                            mUobj.props[name]=(name!="mUobj")?window_[name]:{};
                        }
                    }
                    //window_.XMLHttpRequest.prototype.onreadystatechange = 
                    //window_.XMLHttpRequest.__proto__.onreadystatechange = 
                    return mUobj;
                }
            }, props: {}
        };
        //mUobj._update();
        //console.log("mUobj",mUobj,"preserve",preserve,"win",document.getElementById("lab").contentWindow);
    };
    void(window.addEventListener ? window.addEventListener("load", mU, !1) : window.attachEvent ? window.attachEvent("onload", mU) : window.onload = mU);
}();