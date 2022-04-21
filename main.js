lipX=0;
lipY=0;
function preload() 
{  lipstick = loadImage("http://assets.stickpng.com/images/584c61d3269a83097a7d04c9.png");
}
function setup() 
{ canvas= createCanvas(300, 300);
    canvas.center();
canvas.position(110,250);
video=createCapture(VIDEO);
video.size=(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet initialized');
}

function draw() 
{ image(video, 0, 0, 300, 300); 
    image(lipstick,lipX,lipY,30,30);
}
function take_snapshot()
{ 
    save('YourImage.png');
}

function gotPoses(results)
 { if(results.length > 0) 
    { console.log(results);
         lipX = results[0].pose.lip.x; 
         lipY = results[0].pose.lip.y; 
         console.log("lipX= "+lipX);
         console.log("lipY= "+lipY);
    } 
}