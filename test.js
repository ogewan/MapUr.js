!(function(){
    var test = function(){
        console.log("My World");
        var p = document.createElement("p");
        var o = document.createElement("p");
        o.id = "testingID";
        p.innerHTML = "My World";
        o.innerHTML = 0;
        
        document.body.appendChild(p);
        document.body.appendChild(o);
        //window.setInterval(function(document.getElementById("testingID").innerHTML=parseInt(document.getElementById("testingID").innerHTML)+1), 1000);
        window.setInterval(
            function(){
                document.getElementById("testingID").innerHTML = parseInt(document.getElementById("testingID").innerHTML) + 1
            }, 1000);
    }
    try {
        test();
    }
    catch(err) {
        void(window.addEventListener ? window.addEventListener("load", test, !1) : window.attachEvent ? window.attachEvent("onload", test) : window.onload = test);
    }
}());