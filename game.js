const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let dino = { x: 50, y: 150, width: 40, height: 40, vy: 0, gravity: 2, jumpPower: -25, isJumping: false };
let cactus = { x: 800, y: 160, width: 20, height: 40 };
let gameOver = false;
let score = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !dino.isJumping) {
    dino.vy = dino.jumpPower;
    dino.isJumping = true;
  }
});

function update() {
  dino.vy += dino.gravity;
  dino.y += dino.vy;
  if (dino.y > 150) {
    dino.y = 150;
    dino.vy = 0;
    dino.isJumping = false;
  }

  cactus.x -= 10;
  if (cactus.x < -cactus.width) {
    cactus.x = 800;
    score++;
  }

  // 衝突判定
  if (
    dino.x < cactus.x + cactus.width &&
    dino.x + dino.width > cactus.x &&
    dino.y < cactus.y + cactus.height &&
    dino.y + dino.height > cactus.y
  ) {
    gameOver = true;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 恐竜
  ctx.fillStyle = "black";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

  // サボテン
  ctx.fillStyle = "green";
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

  // スコア
  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText("Score: " + score, 650, 30);
}

function loop() {
  if (!gameOver) {
    update();
    draw();
    requestAnimationFrame(loop);
  } else {
    ctx.font = "30px sans-serif";
    ctx.fillText("Game Over", 320, 100);
  }
}

loop();
