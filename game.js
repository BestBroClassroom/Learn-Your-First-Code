// Simple bouncing ball to simulate game placeholder
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let x = 100, y = 100, dx = 2, dy = 3, radius = 20;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'orange';
  ctx.fill();
  ctx.closePath();

  if(x + dx > canvas.width - radius || x + dx < radius) dx = -dx;
  if(y + dy > canvas.height - radius || y + dy < radius) dy = -dy;

  x += dx;
  y += dy;

  requestAnimationFrame(drawBall);
}

drawBall();
