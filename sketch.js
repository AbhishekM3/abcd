

var img1
var cases=0;
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
  strokeWeight(3)
  line(400,350,1000,350)
  line(400,550,1000,550)

  line(600,150,600,750)
  line(800,150,800,750)

  drawSprites();
  checkMap()

   
  if(mousePressedOver(img1)){
    cases=1
  }
  if(mousePressedOver(img2)){
    cases=2
  }
  if(mousePressedOver(img3)){
    cases=3
  }
  
  if(mousePressedOver(img4)){
    cases=4
  }
  if(mousePressedOver(img5)){
    cases=5
  }
  if(mousePressedOver(img6)){
    cases=6
  }

  if(mousePressedOver(img7)){
    cases=7
  }
  if(mousePressedOver(img8)){
    cases=8
  }
  if(mousePressedOver(img9)){
    cases=9
  }
  
  switch(cases){
    case 1:
      img1.x=mouseX;
      img1.y=mouseY;
      img1.scale=0.58
      img1.width=200
      img1.height=200
      break;

    case 2:
      img2.x=mouseX;
      img2.y=mouseY;
      img2.scale=0.58
      img2.width=200
      img2.height=200
      break;
    
    case 3:
      img3.x=mouseX;
      img3.y=mouseY;
      img3.scale=0.58
      img3.width=200
      img3.height=200
      break;

    case 4:
      img4.x=mouseX;
      img4.y=mouseY;
      img4.scale=0.58
      img4.width=200
      img4.height=200
      break;

    case 5:
      img5.x=mouseX;
      img5.y=mouseY;
      img5.scale=0.58
      img5.width=200
      img5.height=200
      break;
    
    case 6:
      img6.x=mouseX;
      img6.y=mouseY;
      img6.scale=0.58
      img6.width=200
      img6.height=200
      break;
      
    case 7:
      img7.x=mouseX;
      img7.y=mouseY;
      img7.scale=0.58
      img7.width=200
      img7.height=200
     break;
    
    case 8:
      img8.x=mouseX;
      img8.y=mouseY;
      img8.scale=0.58
      img8.width=200
      img8.height=200
      break;
      
    case 9:
      img9.x=mouseX;
      img9.y=mouseY;
      img9.scale=0.58
      img9.width=200
      img9.height=200
      break;

    default: break;


  }
   
  

}


function mouseDragged(){
  
}
function mouseReleased(){
  console.log(mouseX,mouseY)
  console.log(img1.x,img1.y)
}
function mouseOut(){

}

function checkMap(){
if(img1.x>400 && img1.x<600 && img1.y>150 && img1.y<350
 && img2.x>600 && img2.x<800 && img2.y>150 && img2.y<350
 && img3.x>800 && img3.x<1000 && img3.y>150 && img3.y<350
 && img4.x>400 && img4.x<600 && img4.y>350 && img4.y<550
 && img5.x>600 && img5.x<800 && img5.y>350 && img5.y<550
 && img6.x>800 && img6.x<1000 && img6.y>350 && img6.y<550
 &&img7.x>400 && img7.x<600 && img7.y>550 && img7.y<750
 && img8.x>600 && img8.x<800 && img8.y>550 && img8.y<750
 && img9.x>800 && img9.x<1000 && img9.y>550 && img9.y<750
 ){
alert('You Win')
textSize(30)
fill(255)
text('WELL DONE',800,600)
 }
}

