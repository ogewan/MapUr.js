!(function(){
    var test = function(){
        console.log("My World");
        var p = document.createElement("p")
        p.innerHTML = "My World";
        document.body.appendChild(p);
    }
    test()
   //void(window.addEventListener ? window.addEventListener("load", test, !1) : window.attachEvent ? window.attachEvent("onload", test) : window.onload = test);
}());