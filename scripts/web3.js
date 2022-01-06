const serverUrl = "https://bmvinqql3phf.usemoralis.com:2053/server";
const appId = "7yeYaQgRXlDQiZ2kZILTFSwUbYsC2aHnlBX7Ze9Z";
Moralis.start({ serverUrl, appId });

const userEthNFTs = [];

var characterMain = "./assets/images/mainCh.png";
document.getElementById("mainCh").src = characterMain;

async function onWebStart() {
  getNft();

  console.log("testing on web start");
  let user = await Moralis.User.current();
  console.log("user", user);

  if (!user) {
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
    mintNftBtn.style.display = "none";
  } else {
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
    mintNftBtn.style.display = "block";
  }
}

async function getNft() {
  const user = Moralis.User.current();
  if (user) {
    console.log("tet");
    userEthNFTs = await Moralis.Web3API.account.getNFTs({
      chain: "rinkeby",
    });
    console.log("userEthNFTsuserEthNFTs", userEthNFTs.result);

    renderNfts(userEthNFTs.result);
  }
}

// render nfts
function renderNfts(data) {
  const container = document.getElementById("nft-stats");
  container.innerHTML = data
    .map(function (row, rank) {
      var metadata = JSON.parse(row.metadata);
      console.log("metadat", row);
      if (row.name == "NFTRunners") {
        // characterMain = metadata.image;
        // document.getElementById("mainCh").src = characterMain;
      }
    })
    .join("");
}

async function displayNftsSelectScreen() {
  const user = Moralis.User.current();
  if (user) {
    const datasss = await Moralis.Web3API.account.getNFTs({
      chain: "rinkeby",
    });

    console.log("rendering nft shs", datasss);
    const container = document.getElementById("ShowNfts");
    container.innerHTML = datasss.result
      .map(function (row, rank) {
        var metadata = JSON.parse(row.metadata);
        if (metadata?.name != null && row.name == "NFTRunners") {
          console.log("mu display", metadata.image);
          return `
          <button onclick=${selectCH(metadata?.image)}>
            <li> ${metadata?.name} </li>  
            <img src=${metadata?.image}  width="250" height="300"/>
          </button>
          `;
        }
      })
      .join("");
  }
}

selectCH = (val) => {
  console.log("clicked");
  document.getElementById("mainCh").src = val;
};

// login
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  getNft();

  btnLogin.style.display = "none";
  btnLogout.style.display = "block";
  mintNftBtn.style.display = "block";
  console.log("logged in user:", user);
}

// logout
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  btnLogin.style.display = "block";
  btnLogout.style.display = "none";
  mintNftBtn.style.display = "none";
}

onWebStart();
