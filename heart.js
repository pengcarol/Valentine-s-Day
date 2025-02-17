let hearts = []; 
let colors = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colors = ["#f28b94", "#f5a7a6", "#f6beb8", "#f8dcd5"];
}

function draw() {
  background(220);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
  }

  for(let i = 0; i < hearts.length; i++) {
    if (hearts[i].y > height + 20) {
      hearts.splice(i, 1);
    }
  }
}

function mouseDragged() {
  hearts.push(new Heart(mouseX, mouseY));
}

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(1, 2);

    this.dy = random(2, 4);

    this.c = colors[floor(random(colors.length))];
  }
  
  display() {
    push();
    fill(this.c);
    translate(this.x, this.y);
    let t = map(mouseX, 0, width, 0, 360);
    beginShape();
    for (let i = 0; i < 360; i++) {
      let x = this.r*16*pow(sin(i), 3); 
      let y = -this.r*(13*cos(i) - 5*cos(2*i) - 2*cos(3*i) - cos(4*i));
      vertex(x, y);
    }
    endShape();
    pop();
  }

  fall() {
    this.y += this.dy;
  }
}

