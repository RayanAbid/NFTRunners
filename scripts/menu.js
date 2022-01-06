var newGame = document.getElementById("newGame");
var theHead = document.getElementById("theHead");
var Nfts = document.getElementById("Nfts");
var mintNftBtn = document.getElementById("mintNftBtn");
var credits = document.getElementById("credits");
var main = document.getElementById("main");
var creditBtn = document.getElementById("creditBtn");
var backBtn = document.getElementById("backBtn");
var btnLogin = document.getElementById("btn-login");
var btnLogout = document.getElementById("btn-logout");
var isPlayingSpan = document.getElementById("isPlaying");
var menuScreenMain = document.getElementById("menuScreenMain");
var selectNftScreen = document.getElementById("selectNftScreen");
var selectNftBtn = document.getElementById("selectNftBtn");

var isPlaying = false;

var runGame = function () {
  menuScreenMain.style.display = "none";
  selectNftScreen.style.display = "none";

  // game div
  main.style.display = "block";

  Start();
};

var showCredits = function () {
  // theHead.style.display = "none";
  creditBtn.style.display = "none";
  selectNftBtn.style.display = "none";
  newGame.style.display = "none";
  mintNftBtn.style.display = "none";
  btnLogout.style.display = "none";
  credits.style.display = "block";
  backBtn.style.display = "block";
  selectNftScreen.style.display = "none";
};

var showNft = function () {
  // theHead.style.display = "none";
  creditBtn.style.display = "none";
  selectNftBtn.style.display = "none";

  mintNftBtn.style.display = "none";
  newGame.style.display = "none";
  credits.style.display = "none";
  backBtn.style.display = "block";
  btnLogout.style.display = "none";
  Nfts.style.display = "block";
  selectNftScreen.style.display = "none";
};

var goBack = function () {
  backBtn.style.display = "none";
  Nfts.style.display = "none";
  main.style.display = "none";
  credits.style.display = "none";
  theHead.style.display = "block";
  newGame.style.display = "block";
  creditBtn.style.display = "block";
  selectNftBtn.style.display = "block";

  btnLogout.style.display = "block";
  mintNftBtn.style.display = "block";
  selectNftScreen.style.display = "none";
};

var selectNftScreenCall = function () {
  displayNftsSelectScreen();
  console.log("milll");
  creditBtn.style.display = "none";
  selectNftBtn.style.display = "none";

  mintNftBtn.style.display = "none";
  newGame.style.display = "none";
  credits.style.display = "none";
  backBtn.style.display = "block";
  btnLogout.style.display = "none";
  selectNftScreen.style.display = "block";
};

var menuMusicControl = function () {
  if (!isPlaying) {
    isPlaying = true;
    menuMusic.play();
    isPlayingSpan.innerHTML = "On";
  } else {
    isPlaying = false;
    menuMusic.stop();
    isPlayingSpan.innerHTML = "Off";
  }
};
