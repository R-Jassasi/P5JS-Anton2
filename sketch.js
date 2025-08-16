var cnv;

let step;
let x;
let y;
let c;

let si;

let test;
let testArr = [];

let yellow =['rgba(246, 184, 80, 0.85)','rgba(251, 225, 106, .85)','rgba(246, 236, 176, 0.85)'];
let randColy;

let yellow2 =['rgba(246, 184, 80, 0.5)','rgba(251, 225, 106, .5)','rgba(246, 236, 176, 0.5)'];
let randColy2;

let blue = ['rgba(6, 19, 60, 0.5)','rgba(33, 131, 192, 0.5)','rgba(73, 193, 239, 0.5)','rgba(198, 231, 248, 0.5)','rgba(240, 249, 254, 0.5)']
let randColb;
let blue2 = ['rgba(6, 19, 60, 0.2)','rgba(33, 131, 192, 0.2)','rgba(73, 193, 239, 0.2)','rgba(198, 231, 248, 0.2)','rgba(240, 249, 254, 0.2)']
let randColb2;






function centerCanvas(){
  var Xwindow = (windowWidth-width)/2;
  var Ywindow = (windowHeight-height)/2;
  cnv.position(Xwindow,Ywindow);
}

function setup() {
  cnv = createCanvas(800,800);
  centerCanvas();
  clear();

  background("#000038");
  blendMode(LIGHTEST);

  randColb = random(blue.length);
  randColb = floor(randColb);

  randColy2 = random(yellow2.length);
  randColy2 = floor(randColy2);

  randColb2 = random(blue2.length);
  randColb2 = floor(randColb2);



  for(let i = 0; i<170; i++){
    testArr.push(new gradientLine(random(0,width),random(0,height),40));
  }

 

}

function windowResized(){
  centerCanvas();
}





function draw() {

  

  for(let i = 0; i < 170; i++){
    testArr[i].gradient();
  }

  

  for (let si = 10; si < 1500; si = si + 40){
    noFill();
    stroke(random(200.255));
    strokeWeight(random(.6,2.5));
    ellipse(400,400,si,si);
  
  }
  noLoop();
 

 

}

function gradient(){
}


class gradientLine{
  constructor(x1,y1,size){
    
   randColb = random(blue.length);
   randColb = floor(randColb);

   randColy2 = random(yellow2.length);
   randColy2 = floor(randColy2);

    this.x1 = x1;
    this.y1= y1;
    this.x2 = x1 + -50|50;
    this.y2 = y1 + -50|50;


    this.c1 = color(blue[randColb]);
    this.c2 = color(yellow2[randColy2]);
    this.size = size;
    

   
  }

  gradient(){

   let d = dist(this.x1,this.y1,this.x2,this.y2);




    for (let i = 0; i < d; i++){
    

     let step = map(i, 0, d, 0, 1);
     let x = lerp(this.x1, this.x2, step);
     let y = lerp(this.y1, this.y2, step);
     let c = lerpColor(this.c1, this.c2, step);
     fill(c);
     noStroke();
     ellipse(x,y,this.size,this.size);
    

    }
  }
}


