let cx = 50;
let cxx = 550;
let cy = 150;
let cyy = 100;
let d = 60;
let r = 0;
let g = 0;
let b = 255;
let rr = 255;
let bb = 0;
let gg = 0;
let xvel = 2;
let yvel = 2;
let xxvel = 5;
let yyvel = 5;
function setup() {
  createCanvas(600,600)
}


function draw() {
  background(50);
  fill(r,g,b);
  ellipse(cx,cy,d,d);
  fill(rr,gg,bb);
  ellipse(cxx,cyy,d,d);
  
  
if(cx < d/2 || cx > 600 - d/2){
  xvel = xvel * (-1);
}
  cx = cx + xvel;

if(cy < d/2 || cy > 600 - d/2){
  yvel = yvel * (-1);
}
  cy = cy + yvel;
  
  if(cxx < d/2 || cxx > 600 - d/2){
  xxvel = xxvel * (-1);
}
  cxx = cxx + xxvel;

if(cyy < d/2 || cyy > 600 - d/2){
  yyvel = yyvel * (-1);
}
  cyy = cyy + yyvel;
  
  if(cy > 600-d/2){
      b = int(random(100,255));
  }
  if(cyy < d/2){
    rr = int(random(100,255));
  }
  
  let distancia = sqrt((cx -cxx)*(cx-cxx)+(cy-cyy)*(cy-cyy));
  if(distancia< d+d){
      if (cy > cyy && cy < cyy + d){
        if ( cx+d/2 > cxx && cx - d/2 < cxx + d){
          xvel = xvel * (-1);
          xxvel = xxvel * (-1);
       
        }
      }
       if (cx > cxx && cx < cxx + d){
         if ( cy+d/2 > cyy && cy - d/2 < cyy + d){
          yvel = yvel * (-1);
          yyvel = yyvel * (-1);
            
  }
}
  }
  
  function cc(){
     r = 76;
     g = 40;
     b = 130;
     rr = 76;
     gg = 40;
     bb = 130;
  }
}
