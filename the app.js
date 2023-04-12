canvas = document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");
 colors = document.getElementById("colors"); 
colors = document.getElementById("colors"); 
    canvas.addEventListener("mousedown",comosea);
    function comosea(hola){
    var DOC =document.getElementById("colors").value;
    mouse_x = hola.clientX - canvas.offsetLeft;
    mouse_y = hola.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y); circle(mouse_x , mouse_y);
    }   
    function circle(mouse_x,mouse_y){
        colors = document.getElementById("colors").value; 
        ctx.beginPath();
         ctx.strokeStyle = colors;
          ctx.lineWidth = 2; 
           ctx.arc(mouse_x,mouse_y , 40 ,0 , 2*Math.PI);
            ctx.stroke(); 
    }
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    }