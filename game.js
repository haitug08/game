const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const dinoImg = document.getElementById("dinoImage");

let dino = { x: 50, y: 150, width: 48, height: 48, vy: 0, gravity: 2, jumpPower: -25, isJumping: false };
let cactus = { x: 800, y: 160, width: 20, height: 40 };
let score = 0;
let gameOver = false;
let gameStarted = false;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (!gameStarted) {
      gameStarted = true;
      gameOver = false;
      cactus.x = 800;
      score = 0;
      dino.y = 150;
      loop();
    } else if (gameOver) {
      gameStarted = true;
      gameOver = false;
      cactus.x = 800;
      score = 0;
      dino.y = 150;
      loop();
    } else if (!dino.isJumping) {
      dino.vy = dino.jumpPower;
      dino.isJumping = true;
    }
  }
});

function update() {
  // 恐竜ジャンプ
  dino.y += dino.vy;
  dino.vy += dino.gravity;
  if (dino.y >= 150) {
    dino.y = 150;
    dino.vy = 0;
    dino.isJumping = false;
  }

  // サボテン移動
  cactus.x -= 8;
  if (cactus.x < -cactus.width) {
    cactus.x = 800;
    score++;
  }

  // 当たり判定
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

  // 地面
  ctx.strokeStyle = "#888";
  ctx.beginPath();
  ctx.moveTo(0, 190);
  ctx.lineTo(800, 190);
  ctx.stroke();

  // キャラ画像
  ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

  // サボテン
  ctx.fillStyle = "green";
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

  // スコア表示
  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText("Score: " + score, 650, 30);

  // メッセージ表示
  if (!gameStarted) {
    ctx.font = "28px sans-serif";
    ctx.fillText("スペースキーでスタート", 260, 100);
  }

  if (gameOver) {
    ctx.font = "28px sans-serif";
    ctx.fillText("ゲームオーバー！スペースで再開", 220, 120);
  }
}

function loop() {
  if (!gameOver && gameStarted) {
    update();
    draw();
    requestAnimationFrame(loop);
  } else {
    draw();
  }
}
