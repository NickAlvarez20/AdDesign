var explosion = 1;
var goop = 1;

rect(33,18,334,84,-32);
fill(255, 0, 0);
textSize(64);
text("SPACE X!", 59, 87);


rect(51,104,296,49);
fill(245, 154, 17);
textSize(40);
text("Building a Future", 59, 141);

fill(255, 149, 0);
rect(55,167, 296, 50);
fill(216, 255, 41);
textSize(28);
text("Going To Mars by 2050!", 63, 198);


    
draw = function(){
    noFill();
    rect(-18, 102, explosion, explosion);
    explosion += 1.0;
    textSize(60);
    fill(255, 255, 255);
    text("Apply Today!", 112, 224, 235, 203);
    fill(30, 0, 255);
    textSize(33);
    text("Www.Space.com", 82, 358, 210, 360);
    image(getImage("cute/Star"), 101, 192, goop, 200);
    goop += 1.8;
    image(getImage("space/rocketship"), 101, 192, goop, 200);
    
};

image(getImage("space/planet"), -41, 153, 321, 293);
image(getImage("space/rocketship"), 126, 150, 272, 293);
