function preload() 
{}
function setup() 
{ canvas= createCanvas(1000, 900);
    canvas.center();
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
} 

function draw() 
{ image(video, 0, 0, 1000, 900); 
    tint(tint_color);
 fill(190,32,249); 
 stroke(160,32,240);  
}
function take_snapshot()
{ 
    save('YourImage.png');
}