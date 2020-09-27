function setup() {
  createCanvas(450, 650);
  
  fade1 = 0;
  fade2 = 0;
  fade3 = 0;
  
  
  speed = int(random(10, 20));
  sentits = [-1, 1];
  posr1 = [25, 50, 50, 25, 75, 50, 50, 75];
  posr2 = [325, 50, 350, 25, 375, 50, 350, 75]
  sentitx = sentits[int(random(0,2))];
  sentity = sentits[int(random(0,2))];
  sentitx1 = sentits[int(random(0,2))];
  sentity1 = sentits[int(random(0,2))];
  time = 0;
  
}

function draw() {
  if (time >= 2){
  background(245, 121, 33, fade2);
    if (fade2 < 255){
  fade2 += 1 * (deltaTime / speed);
  }
  }
  
  time = time + int(deltaTime)*0.001
  
  
  if (time >= 7){
  //------------Primer Rombe-----------
    if (fade3 < 255){
      fade3 += 1 * (deltaTime / speed);
    }
    blendMode(BLEND);

    noFill();
    stroke(255, 255, 255, fade3);
    strokeWeight(10);
    for(let i=0; i <8; i++){
    quad(posr1[0]-i*30, posr1[1], posr1[2], posr1[3]-i*30, posr1[4]+i*30, posr1[5], posr1[6], posr1[7]+i*30);
    }


    //------------Segon Rombe-----------

    blendMode(MULTIPLY);
    noFill();
    stroke(5, 156, 199, fade3);
    strokeWeight(10);
    for(let i=0; i <8; i++){
    quad(posr2[0]-i*30, posr2[1], posr2[2], posr2[3]-i*30, posr2[4]+i*30, posr2[5], posr2[6], posr2[7]+i*30);
    }
  }
  //------------Moviment rombe 1----------
  for (let i=0; i<= 7; i++){
    if (i % 2 == 0){
        posr1[i] = posr1[i] + sentitx * (deltaTime / speed);
    } else {
        posr1[i] = posr1[i] + sentity * (deltaTime / speed);
    }
    
  }
  if (posr1[4] >= 450){
      sentitx = sentitx * -1;
  }else if (posr1[0]<= 0){
      sentitx = sentitx * -1;
  }else if (posr1[3]<= 0){
      sentity = sentity * -1;      
  }else if (posr1[7]>= 650){
      sentity = sentity * -1;
  }
  
  
  
  //------------Moviment rombe 2----------
  for (let i=0; i<= 7; i++){
    if (i % 2 == 0){
        posr2[i] = posr2[i] + sentitx1 * (deltaTime / speed);
    } else {
        posr2[i] = posr2[i] + sentity1 * (deltaTime / speed);
    }
    
  }
  if (posr2[4] >= 450){
      sentitx1 = sentitx1 * -1;
  }else if (posr2[0]<= 0){
      sentitx1 = sentitx1 * -1;
  }else if (posr2[3]<= 0){
      sentity1 = sentity1 * -1;      
  }else if (posr2[7]>= 650){
      sentity1 = sentity1 * -1;
  }
  
  //------------Text and titile-----------
  
  blendMode(BLEND);
  textStyle(BOLD);
  textSize(60);
  textFont(myFont);
  
  if (time >= 5){
  stroke(245, 121, 33);
  strokeWeight(15);
  fill(0, 0, 0, fade1);
  if (fade1 < 255){
  fade1 += 1 * (deltaTime / speed);
  }
  text('the clash', 30, 530);
  
  strokeWeight(8);
  textSize(10.5);
  text('with the brattles and dead kennedys', 30, 590, 105, 650);
  text('matinee and eve saturday / june 13 1981', 145, 590, 130, 650);
  text('bonds international casino in times square, new york city', 300, 590, 150, 650);
  }

}

  //------------Reset Sketch------------
function mouseClicked() {
    background(255);
    time = 0;
    fade1 = 0;
    fade2 = 0;
    fade3 = 0;
    speed = int(random(10, 20));
    posr1 = [25, 50, 50, 25, 75, 50, 50, 75];
    posr2 = [325, 50, 350, 25, 375, 50, 350, 75]
    sentitx = sentits[int(random(0,2))];
    sentity = sentits[int(random(0,2))];
    sentitx1 = sentits[int(random(0,2))];
    sentity1 = sentits[int(random(0,2))];
}

function deviceShaken() {
    background(255);
    time = 0;
    fade1 = 0;
    fade2 = 0;
    fade3 = 0;
    speed = int(random(10, 20));
    posr1 = [25, 50, 50, 25, 75, 50, 50, 75];
    posr2 = [325, 50, 350, 25, 375, 50, 350, 75]
    sentitx = sentits[int(random(0,2))];
    sentity = sentits[int(random(0,2))];
    sentitx1 = sentits[int(random(0,2))];
    sentity1 = sentits[int(random(0,2))];
}

let myFont;
function preload() {
  myFont = loadFont('assets/fonts/SourceSansPro-Bold.ttf');
}