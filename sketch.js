

var img1
function preload(){
  image1 = loadImage("image_part_001.jpg");
  image2 = loadImage("image_part_002.jpg");
  image3 = loadImage("image_part_003.jpg");
  image4 = loadImage("image_part_004.jpg");
  image5 = loadImage("image_part_005.jpg");
  image6 = loadImage("image_part_006.jpg");
  image7 = loadImage("image_part_007.jpg");
  image8 = loadImage("image_part_008.jpg");
  image9 = loadImage("image_part_009.jpg");
}


function setup() {
  createCanvas(1500,800);
  



  
 img1 = createSprite(50,50,40,40);
 img1.addImage(image1);
 img1.scale = 0.4;
 img2 = createSprite(200,50,40,40);
 img2.addImage(image2);
 img2.scale = 0.4;
 img3 = createSprite(350,50,40,40);
 img3.addImage(image3);
 img3.scale = 0.4;
 img4 = createSprite(500,50,40,40);
 img4.addImage(image4);
 img4.scale = 0.4;
 img5 = createSprite(650,50,40,40);
 img5.addImage(image5);
 img5.scale = 0.4;
 img6 = createSprite(800,50,40,40);
 img6.addImage(image6);
 img6.scale = 0.4;
 img7 = createSprite(950,50,40,40);
 img7.addImage(image7);
 img7.scale = 0.4;
 img8 = createSprite(1100,50,40,40);
 img8.addImage(image8);
 img8.scale = 0.4;
 img9 = createSprite(1250,50,40,40);
 img9.addImage(image9);
 img9.scale = 0.4;
}

function draw() {
  background('pink');  

  rectMode(CENTER)
  fill("#20eecd")
  rect(700,450,600,600)
  stroke(0)
  
  line(350,350,950,350)
  line(350,550,950,350)


  drawSprites();
}


function mouseDragged(){

}