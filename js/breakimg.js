const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const triggerSection = document.getElementById('trigger-section');

let particles = [];
const image = new Image();
// Replace with your preferred background image URL (Ensure CORS allows pixel reading)
image.src = '../images/tmpbnzadmea.png'; 

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y, r, g, b) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    // Store raw color values to dynamically modify alpha
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 1;
    // Random directions for explosion
    this.vx = (Math.random() - 0.5) * 12;
    this.vy = (Math.random() - 0.5) * 12;
    this.size = 3; 
  }

  update(progression) {
    // Particles explode outwards based on progression
    this.x = this.originX + this.vx * progression * 60;
    this.y = this.originY + this.vy * progression * 60;

    // Fade out effect: Fade starts after 20% scroll, fully gone at 90% scroll
    if (progression > 0.2) {
      this.alpha = 1 - (progression - 0.2) / 0.7;
      if (this.alpha < 0) this.alpha = 0;
    } else {
      this.alpha = 1;
    }
  }

  draw() {
    if (this.alpha <= 0) return; // Skip rendering if completely invisible
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

image.onload = function() {
  const imgWidth = 800;
  const imgHeight = 600;
  const startX = (canvas.width - imgWidth) / 2;
  const startY = (canvas.height - imgHeight) / 2;

  ctx.drawImage(image, startX, startY, imgWidth, imgHeight);
  const imgData = ctx.getImageData(startX, startY, imgWidth, imgHeight);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const step = 6; // Performance optimizer
  for (let y = 0; y < imgHeight; y += step) {
    for (let x = 0; x < imgWidth; x += step) {
      const index = (y * imgWidth + x) * 4;
      const r = imgData.data[index];
      const g = imgData.data[index + 1];
      const b = imgData.data[index + 2];
      const a = imgData.data[index + 3];

      if (a > 128) { 
        // Pass RGB values individually to manage particle alpha
        particles.push(new Particle(startX + x, startY + y, r, g, b));
      }
    }
  }
  
  requestAnimationFrame(animate);
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rect = triggerSection.getBoundingClientRect();
  const sectionHeight = triggerSection.offsetHeight;
  
  let progression = 0;
  if (rect.top < 0) {
    progression = Math.abs(rect.top) / (sectionHeight - window.innerHeight);
  }
  progression = Math.max(0, Math.min(progression, 2));

  // Dynamic Blur Effect: Scales up to 15px max blur as you scroll deep into the breakdown
  particles.forEach(p => {
    p.update(progression);
    p.draw();
  });

  // Reset the filter so it doesn't break other canvas clear actions in the next frame
  ctx.filter = 'none';

  requestAnimationFrame(animate);
}
