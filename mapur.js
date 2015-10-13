/** @preserve mapur.js (c) 2015 Oluwaseun Ogedengbe, MIT| Goo: github.com/johnrobinsn/goo.js (MIT) (c) 2013 John Robinson*/
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
    var Goo=function(e){function h(){if(a.fullscreen){var b=window.innerWidth,c=window.innerHeight;a.canvas.width!=b&&(a.canvas.width=b);a.canvas.height!=c&&(a.canvas.height=c)}b=k();if(a.onDraw)a.onDraw(a,b);if(a.animate){if(60<f++){a.fps=1E3*(f/(b-l));if(a.onFrameRate)a.onFrameRate(a);f=0;l=b}m(h)}}var a=this;a.type="2d";a.animate=!0;a.fullscreen=!1;a.keysDown={};a.userData={};if(e)for(var g in e)e.hasOwnProperty(g)&&(a[g]=e[g]);a.canvas=document.createElement("canvas");a.canvas&&(a.ctx=a.canvas.getContext(a.type));
if(!a.canvas||!a.ctx&&a.onFailure)a.onFailure();else{a.canvas.width=a.width;a.canvas.height=a.height;a.__defineGetter__&&a.__defineSetter__?(a.__defineGetter__("width",function(){return a.canvas.width}),a.__defineSetter__("width",function(b){a.canvas.width=b}),a.__defineGetter__("height",function(){return a.canvas.height}),a.__defineSetter__("height",function(b){a.canvas.height=b})):Object.defineProperty&&(Object.defineProperty(a,"width",{get:function(){return a.canvas.width},set:function(b){a.canvas.width=
b}}),Object.defineProperty(a,"height",{get:function(){return a.canvas.height},set:function(b){a.canvas.height=b}}));a.fullscreen&&(a.container=document.body,document.body.style.margin="0px",document.body.style.padding="0px",document.body.style.overflow="hidden");a.container&&a.container.appendChild(a.canvas);var m=function(){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;a||(a=function(a){window.setTimeout(a,
1E3/30)});return a}(),k=Date.now?Date.now:function(){return(new Date).getTime()};a.updateMouse=function(a,c){for(var d=this.canvas;d;)c-=d.offsetTop,a-=d.offsetLeft,d=d.offsetParent;this.prevMouseX=this.mouseX;this.prevMouseY=this.mouseY;this.mouseX=a;this.mouseY=c};document.addEventListener("mousedown",function(b){if(b.target==a.canvas){a.updateMouse(b.pageX,b.pageY);if(a.onMouseDown)a.onMouseDown(a);a.dragging=!0}},!1);document.addEventListener("mouseup",function(b){if(a.dragging){a.updateMouse(b.pageX,
b.pageY);if(a.onMouseUp)a.onMouseUp(a);a.dragging=!1}},!1);document.addEventListener("mousemove",function(b){a.updateMouse(b.pageX,b.pageY);if(a.mouseX!=a.prevMouseX||a.mouseY!=a.prevMouseY)if(a.dragging&&a.onMouseDrag)a.onMouseDrag(a);else if(a.onMouseMove&&b.target==a.canvas)a.onMouseMove(a)},!1);document.addEventListener("touchstart",function(b){if(b.target==a.canvas){a.updateMouse(b.pageX,b.pageY);if(a.onMouseDown)a.onMouseDown(a);a.dragging=!0}},!1);document.addEventListener("touchend",function(b){if(a.onMouseUp)a.onMouseUp(a);
a.dragging=!1},!1);document.addEventListener("touchmove",function(b){a.dragging&&(a.updateMouse(b.pageX,b.pageY),a.onMouseDrag(a),b.preventDefault())},!1);document.addEventListener("click",function(b){a.updateMouse(b.pageX,b.pageY);if(a.onMouseClick)a.onMouseClick(a)},!1);document.addEventListener("keydown",function(b){a.keyCode=b.keyCode;a.key=String.fromCharCode(a.keyCode);a.keysDown[a.keyCode]=!0;if(a.onKeyDown)a.onKeyDown(a)},!1);document.addEventListener("keyup",function(b){a.keyCode=b.keyCode;
a.key=String.fromCharCode(a.keyCode);delete a.keysDown[a.keyCode];if(a.onKeyUp)a.onKeyUp(a)},!1);document.addEventListener("keypress",function(b){a.keyCode=b.keyCode;a.key=String.fromCharCode(a.keyCode);if(a.onKeyPress)a.onKeyPress(a)},!1);var f=0,l=k();m(h)}},
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
            tbr.setAttribute("style","padding: 0px;margin:0px;position: fixed; top: 5%; left: 5%; width: 15%; height: auto;");
            document.body.appendChild(tbr);
            frm.setAttribute("id","lab");
            frm.setAttribute("style","padding: 0px;margin:0px;position: fixed; bottom: 5%; right: 5%; width: 35%; height: auto;");
            document.body.appendChild(frm);
            var g = new Goo({
                fullscreen: true,
                container: document.body,
                userData: {startAngle: 0},
                onDraw: function(g) {
                    var canvas = g.canvas;
                    var ctx = g.ctx;
                    ctx.clearRect(0, 0, g.width, g.height);

                    // Draw a sun-like figure by rotating and adding rectangles in a loop
                    ctx.globalAlpha = 0.20;
                    var n = 5;
                    var a = g.userData.startAngle + ((2* 3.1415) / n);
                    var s = ((canvas.width < canvas.height)?canvas.width:canvas.height)/2;
                    for (var i = 0; i < n; i++) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.translate(canvas.width/2, canvas.height/2);
                        ctx.rotate(i * a);
                        ctx.translate(-s/2,-s/2);
                        ctx.rect(0, 0, s, s);
                        ctx.fillStyle="#E30B5D"; // raspberry
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                },
                onMouseDrag: function(g) {
                    var delta = (g.mouseX - g.prevMouseX) + (g.mouseY - g.prevMouseY);
                    g.userData.startAngle += ((delta * Math.PI) / 180) / 2;
                }
            });
            var reader = new FileReader();
            reader.onloadend = function(e) {
                var text = reader.result;
                //console.log(text);
                //console.log(eval(text))
                var virtualtask = document.createElement("SCRIPT");
                virtualtask.innerHTML = text;
                document.getElementById("lab").contentWindow.document.head.appendChild(virtualtask);
                g.onDraw = function(g){
                    var cnv = g.canvas;
                    var ctx = g.ctx;
                    ctx.clearRect(0, 0, g.width, g.height);
                    ctx.font = "12px Arial";
                    ctx.fillStyle = "blue";
                    ctx.textAlign = "center";
                    ctx.fillText(text,0,0);
                }
                mUobj.meths._update();
            }
            reader.onerror = function(e){
                var err = reader.error;
                g.onDraw = function(g){
                    var cnv = g.canvas;
                    var ctx = g.ctx;
                    ctx.clearRect(0, 0, g.width, g.height);
                    ctx.font = "12px Arial";
                    ctx.fillStyle = "red";
                    ctx.textAlign = "center";
                    ctx.fillText(err,0,0);
                }
            }
            function handleFiles(direct) {
                var file = (this.files!==void 0)?this.files[0]:direct;
                //console.log(file,direct,this.files)
                g.onDraw = function(g){
                    var cnv = g.canvas;
                    var ctx = g.ctx;
                    ctx.clearRect(0, 0, g.width, g.height);
                    ctx.font = "30px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText(file.name+","+file.size+","+file.type,cnv.width/2, cnv.height/2);
                }
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
            g.canvas.addEventListener("dragenter", dragenter, false);
            g.canvas.addEventListener("dragover", dragover, false);
            g.canvas.addEventListener("drop", drop, false);
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