const canvas = document.getElementById('embers');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const particles = [];
const COUNT = 80;

for (let i = 0; i < COUNT; i++) {
  particles.push(createParticle());
}

function createParticle() {
  return {
    x: Math.random() * w,
    y: h + Math.random() * h,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.3 + 0.1,
    alpha: Math.random() * 0.6 + 0.2
  };
}

function update() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < -10) {
      p.x = Math.random() * w;
      p.y = h + Math.random() * 50;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(177,28,28,${p.alpha})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(update);
}

update();
