let width = window.innerWidth;
let height = window.innerHeight
let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = Math.random() * 5;
    this.element = document.createElement("div");
    this.element.classList.add("particle");
    this.element.style.right = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    document.body.appendChild(this.element);
  }
  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
    }
    this.element.style.right = `${this.x}px`;
  }
}

for (var i = 0; i < 50; i++) {
  particles.push(new Particle());
}

function animate() {
  for(var i = 0; i < particles.length; i++) {
    particles[i].move();
  }
  window.requestAnimationFrame(animate);
};

animate();
