img = "";
object = "";
status = " ";
a = "";

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(800, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(800, 700);
    video.hide()
    object = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("😀HOORAY!");
    status = true;
    object.detect(video, gotResults);
}

function gotResults(error, results)
{
   if(error)
   {
       console.log(error);
   } else {
       console.log(results); 
       a = results;  
    }
}

function draw()
{
    image(video, 0, 0, 800, 700);

    r = random(255);
    b = random(255);
    g = random(255);
  if(status != " "){
    object.detect(video, gotResults);
    var i = 0;
    while(i<= a.length){
        document.getElementById("status").innerHTML = "status : object detected";
        document.getElementById("numberofobject").innerHTML = "the number of objects detected are "+a.length;
        fill(r,g,b);
        p = " "+floor(a[i].confidence*100)+" %";
        text(a[i].label+p, a[i].x, a[i].y);
        noFill();
        stroke(r,g,b);
        rect(a[i].x, a[i].y, a[i].width ,a[i].height);
        i++;
    }
   }
}
