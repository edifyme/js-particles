import {randInt, colors} from './utils.js';

const [WIDTH, HEIGHT] = [800, 600];
let bgColor = 'aliceblue';
let drawColor = 'black';
let fillColor = 'aliceblue';

const canvas = document.getElementById('canvas');
const cx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = bgColor;
const [centerX, centerY] = [canvas.width/2, canvas.height/2];

class Particle {
  constructor(x=centerX, y=centerY, radius=1, color=fillColor) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.color = color;
    this.vel = {x:0, y:0};
    this.step = 0;
  }

  draw() {
    cx.beginPath();
    cx.fillStyle = this.color;
    cx.strokeStyle = drawColor;
    cx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    cx.fill();
    // cx.stroke();
  }
  
  update() {
    this.x = Math.cos(this.vel.x)*this.step+centerX;
    this.y = Math.sin(-this.vel.y)*this.step+centerY;
    this.draw();
  }
}

const particles = Array(1000).fill().map(() => 
  new Particle(centerX,Math.random()*100|0,4));

function animate() {
  cx.fillStyle = 'rgba(240, 248, 255, 0.05)';
  cx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(item => {
    // item.color = colors[randInt(0,3)];
    const r = Math.random()*250;
    const g = Math.random()*250;
    const b = Math.random()*250;
    item.color = `rgba(${r},${g},${b},0.3)`;
    item.vel.x += 0.02;
    item.vel.y += 0.02;
    item.step = randInt(0,300);
    item.update();
    
  });
  requestAnimationFrame(animate);
}
animate();