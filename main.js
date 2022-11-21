img = "";
status = "";
function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup() 
{   
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object ";
}
function modalLoaded()
{
    console.log("ModalLoaded !");
    status = true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results)
{
    if (error){
        console.log(error);
    }
    console.log(results);
}




function draw()
{
    image(img , 0 , 0 , 640 , 420 );
    fill("red");
    text("dog" , 45 , 75);
    noFill();
    stroke("red");
    rect(30 , 60 , 400 , 400 );

    fill("red");
    text("cat" , 300 , 120 );
    noFill();
    stroke("red");
    rect(300, 90 , 270 , 320 );
}

