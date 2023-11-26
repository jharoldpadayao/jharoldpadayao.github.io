var Prestige = 0.00;
var Money = 10000.00;
var Earnings = 1.00;
var earningBoost = 0.1;
var PrestigeGoal = 0.5;
var PrestigeMultiplier = 0.00;
var TotalEarnings = 0.00;
var CPP = 0.00;
Looper();

function checkPrestige() {
  document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

  document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

  document.getElementById("PCurrency").innerHTML = `💎=${CPP.toFixed(2)}!`;
  document.getElementById("CPTxt").innerHTML = `Are you sure? <br> You get 💎${CPP.toFixed(2)}!`;

  document.getElementById("Prestige0").innerHTML = `Prestige: 💎${Prestige.toFixed(2)}`;

  document.getElementById("Prestige1").innerHTML = `Prestige: 💎${Prestige.toFixed(2)}`;
  document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
  document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

  TotalEarnings = (Earnings + earningBoost * Prestige);

  if (Money <= PrestigeGoal) {

    const lostPoints = Math.floor((PrestigeGoal - Money) / Prestige);

    Prestige = Math.max(0, Prestige - lostPoints);

    console.log(`Oops! You lost ${lostPoints} Prestige points. Total Prestige points: ${Prestige.toFixed(1)}`);
  }
}

function Looper() {
  setInterval(() => {
    checkPrestige();
  }, 1000);
}

function StartGame() {
  var start0 = document.getElementById("GH");
  start0.style.display = 'flex';

  var start1 = document.getElementById("SG");
  start1.style.display = 'none';
}

function Earn() {
  TotalEarnings = (Earnings + earningBoost * Prestige);
  Money += TotalEarnings;


  document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
  document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

  if (Money >= PrestigeGoal) {
    CPP += 0.1;

    console.log(`Congratulations! You earned 0.1 Prestige points. Total Prestige points: ${Prestige.toFixed(1)}`);

    // Set the next prestige goal
    PrestigeGoal * 0.5; // Increase the goal by 50%
    console.log(`New prestige goal: ${PrestigeGoal}`);
  }
}

function Menu() {
  var start0 = document.getElementById("GH");
  start0.style.display = 'none';

  var USH = document.getElementById("USH");
  USH.style.display = 'none';

  var Menu = document.getElementById("MOH");
  Menu.style.display = 'flex';
}

function Continue() {
  var start0 = document.getElementById("GH");
  start0.style.display = 'flex';

  var Menu = document.getElementById("MOH");
  Menu.style.display = 'none';
}

function Settings() {
  var Settings = document.getElementById("SH")
  Settings.style.display = 'flex';

  var Menu = document.getElementById("MOH");
  Menu.style.display = 'none';
}

function LightMode() {
  var Mode = document.getElementById("LightMode");
  var DMode = document.getElementById("DMode");
  var currentMode = DMode.classList.contains("dark-mode") ? "dark" : "light";

  if (currentMode === "light") {
    var SH = document.getElementById("SH");
    SH.style.borderColor = 'black';

    var STxt = document.getElementById("STxt");
    STxt.style.borderColor = 'black';

    var Setting = document.getElementById("Setting");
    Setting.style.borderColor = 'black';

    var MenuHolder = document.getElementById("MenuHolder");
    MenuHolder.style.borderColor = 'black';

    var Menu = document.getElementById("MOH");
    Menu.style.borderColor = 'black';

    var cards = document.getElementsByClassName("Card");

    for (var i = 0; i < cards.length; i++) {
      cards[i].style.borderColor = 'black';
    }

    DMode.style.borderColor = 'black';

    var MTxt = document.getElementById("MTxt");
    MTxt.style.borderColor = 'black';

    var start0 = document.getElementById("GH");
    start0.style.borderColor = 'black';

    var MH = document.getElementById("MH");
    MH.style.borderColor = 'black';

    var CH = document.getElementById("CH");
    CH.style.borderColor = 'black';

    var GCH = document.getElementById("GCH");
    GCH.style.borderColor = 'black';

    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';

    DMode.classList.remove("light-mode");
    DMode.classList.add("dark-mode");
    Mode.innerHTML = "Change: 🌑";
  } else {
    document.body.style.backgroundColor = 'black';

    DMode.classList.remove("dark-mode");
    DMode.classList.add("light-mode");
    Mode.innerHTML = "Change: ☀️";
  }
}

function Back() {
  var Settings = document.getElementById("SH")
  Settings.style.display = 'none';

  var start0 = document.getElementById("GH");
  start0.style.display = 'flex';

  var CCH = document.getElementById("CCH");
  CCH.style.display = 'none';

  var Prestiges = document.getElementById("PH");
  Prestiges.style.display = 'none';

  var MOH = document.getElementById("MOH");
  MOH.style.display = 'none';
}

function BackC() {
  var MOH = document.getElementById("MOH");
  MOH.style.display = 'flex';

  var CCH = document.getElementById("CCH");
  CCH.style.display = 'none';
}

function Credits() {
  console.log("Credits function called");
  var CCH = document.getElementById("CCH");
  CCH.style.display = 'flex';

  var MOH = document.getElementById("MOH");
  MOH.style.display = 'none';
}

function Upgrade() {
  var USH = document.getElementById("USH");
  USH.style.display = 'flex';

  var MOH = document.getElementById("MOH");
  MOH.style.display = 'none';

  var start0 = document.getElementById("GH");
  start0.style.display = 'none';
}

function Done() {
  var USH = document.getElementById("USH");
  USH.style.display = 'none';

  var start0 = document.getElementById("GH");
  start0.style.display = 'flex';
}

function PrestigeM() {
  var start0 = document.getElementById("GH");
  start0.style.display = 'none';

  var PH = document.getElementById("PH");
  PH.style.display = 'flex';
}

function PBC() {
  var CPB = document.getElementById("CPH");
  CPB.style.display = 'flex';

  var PH = document.getElementById("PH");
  PH.style.display = 'none';
}

function Confirm() {
  if (CPP >= 1.0) {
    Prestige += CPP;
    CPP -= CPP;
    Money = 0;
    Earnings = 1;
    console.log(Prestige);
    
    var U0 = document.getElementById("U0");
    U0.style.display = 'block';
    var U1 = document.getElementById("U1");
    U1.style.display = 'block';
    var U2 = document.getElementById("U2");
    U2.style.display = 'block';
    var U3 = document.getElementById("U3");
    U3.style.display = 'block';
    var U4 = document.getElementById("U4");
    U4.style.display = 'block';
    var U5 = document.getElementById("U5");
    U5.style.display = 'block';
    var U6 = document.getElementById("U6");
    U6.style.display = 'block';

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`

    document.getElementById("PCurrency").innerHTML = "💎=" + CP;
    document.getElementById("CPTxt").innerHTML = "Are you sure? <br> You Get 💎" + CPP + "!";
    document.getElementById("Prestige0").innerHTML = `Prestige: 💎${Prestige.toFixed(2)}`;

    document.getElementById("Prestige1").innerHTML = `Prestige: 💎${Prestige.toFixed(2)}`;

    var CPH = document.getElementById("CPH");
    CPH.style.display = 'none';
    var start1 = document.getElementById("GH");
    start1.style.display = 'flex';

  } else {
    alert("Not Enough Convertible Prestige Points! Need At least 💎1.0!");
  }
}

function PCancel() {
  var CPH = document.getElementById("CPH");
  CPH.style.display = 'none';

  var PH = document.getElementById("PH");
  PH.style.display = 'flex';
}

function U0() {
  if (Money >= 20) {
    Money -= 20;
    Earnings += 1;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U0 = document.getElementById("U0");
    U0.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U1() {
  if (Money >= 40) {
    Money -= 40;
    Earnings += 2;
    
    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    
    var U1 = document.getElementById("U1");
    U1.style.display = 'none';

  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U2() {
  if (Money >= 80) {
    Money -= 80;
    Earnings += 4;
    
    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U2 = document.getElementById("U2");
    U2.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';
      
      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U3() {
  if (Money >= 160) {
    Money -= 160;
    Earnings += 5;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U3 = document.getElementById("U3");
    U3.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U4(){
  if (Money >= 300) {
    Money -= 300;
    Earnings += 6;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U4 = document.getElementById("U4");
    U4.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U5(){
  if (Money >= 500) {
    Money -= 500;
    Earnings += 10;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U5 = document.getElementById("U5");
    U5.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}
function U6() {
  if (Money >= 800) {
    Money -= 800;
    Earnings += 12;

    document.getElementById("DollarC").innerHTML = `Money: 💰${Money.toFixed(2)}`;
    document.getElementById("DollarC0").innerHTML = `Money: 💰${Money.toFixed(2)}`;

    document.getElementById("Earning").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;

    document.getElementById("Earning0").innerHTML = `Earnings: 💰${TotalEarnings.toFixed(2)}/Click`;
    var U6 = document.getElementById("U6");
    U6.style.display = 'none';
  } else {
    var Alert = document.getElementById("AH");
    Alert.style.display = 'flex';

    var USH = document.getElementById("USH");
    USH.style.display = 'none';

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      var Alert = document.getElementById("AH");
      Alert.style.display = 'none';

      var USH = document.getElementById("USH");
      USH.style.display = 'flex';

      document.body.style.backgroundColor = 'black';
    }, 2000);
  }
}