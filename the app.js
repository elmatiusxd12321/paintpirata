function circle(){
    var container = document.getElementById("550344567").value;
    var big = document.getElementById("10").value;
    document.getElementById("550344567").innerHTML = "<canvas id='1224' width='+big+' height='+big+'></canvas>";

}
canvas = document.getElementById("myCanvas"); ctx= canvas.getContext("2d"); colors = "blue"; ctx.beginPath(); ctx.strokeStyle = colors; ctx.lineWidth = 2; ctx.arc(200, 200, 40 ,0 , 2*Math.PI); ctx.stroke();
