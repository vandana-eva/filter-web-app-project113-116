lipstickX=0;
lipstickY=0;
function preload() 
{  lipstick = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8Fo-JHeIdTmuZhfef3NyEl-lM4aoaKpm7g&usqp=CAU");
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
    image(lipstick,lipstickX,lipstickY,30,30);
}
function take_snapshot()
{ 
    save('YourImage.png');
}

function gotPoses(results)
 { if(results.length > 0) 
    { console.log(results);
         lipstickX = results[0].pose.lipstick.x=15; 
         lipstickY = results[0].pose.lipstick.y=15; 
    } 
}