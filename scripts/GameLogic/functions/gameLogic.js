// Event Listeners
document.addEventListener("keydown", function (evt) {
  keys[evt.code] = true;
});
document.addEventListener("keyup", function (evt) {
  keys[evt.code] = false;
});

// Game Functions
function RandomIntInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Start() {
  menuMusic.stop();
  bgMusic.play();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "20px sans-serif";

  gameSpeed = 10;
  gravity = 1;

  score = 0;
  coinsCollected = 0;
  highscore = 0;
  if (localStorage.getItem("highscore")) {
    highscore = localStorage.getItem("highscore");
  }

  player = new Player(55, 0, 100, 100, "rgba(0,0,0,0)");

  scoreText = new Text("Score: " + score, 25, 25, "left", "white", "20");
  highscoreText = new Text(
    "Highscore: " + highscore,
    canvas.width - 25,
    25,
    "right",
    "white",
    "20"
  );
  coinsCollectedText = new Text(
    "Coins: " + coinsCollected,
    canvas.width - 550,
    25,
    "right",
    "white",
    "20"
  );

  requestAnimationFrame(Update);
}

let initialSpawnTimer = 100;
let spawnTimer = initialSpawnTimer;
function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    SpawnCollectibles();
    console.log(collectibles);

    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  //   Spawn collectibles
  for (let i = 0; i < collectibles.length; i++) {
    let o = collectibles[i];

    // if (o.x + o.w < 0) {
    //   collectibles.splice(i, 1);
    // }

    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
    ) {
      levelUp.play();
      coinsCollected += 10;
      coinsCollectedText.t = "Coins collected: " + coinsCollected;
    }

    o.Update();
  }

  // Spawn Enemies
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }

    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
    ) {
      bgMusic.stop();
      failSound.play();
      alert(`Fail try again?
      score: ${score}
      highscore: ${highscore}
      coinsCollected: ${coinsCollected}
      `);
      obstacles = [];
      collectibles = [];

      score = 0;
      coinsCollected = 0;
      coinsCollectedText.t = "Coins collected: " + coinsCollected;

      spawnTimer = initialSpawnTimer;
      gameSpeed = 10;
      window.localStorage.setItem("highscore", highscore);
      bgMusic.play();
    }

    o.Update();
  }

  player.Animate();

  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }

  if (score % 100 === 0) {
    let rnd = randomIntFromInterval(1, 3);
    console.log("random ", rnd);
  }

  highscoreText.Draw();
  coinsCollectedText.Draw();

  gameSpeed += 0.003;
}
