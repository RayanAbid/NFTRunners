const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Variables
let score;
let scoreText;
let coinsCollected;
let coinsCollectedText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let collectibles = [];
let gameSpeed;
let keys = {};
// bg music
let bgMusic = new music("./assets/bgMusics/bgMusic.mp3");
let menuMusic = new music("./assets/bgMusics/menu.mp3");

let jumpSound = new soundFx("./assets/soundeffects/jump1.wav");
let slideSound = new soundFx("./assets/soundeffects/slip.mp3");
let failSound = new soundFx("./assets/soundeffects/fail.mp3");
let levelUp = new soundFx("./assets/soundeffects/levelUp.mp3");
