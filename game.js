var Points = 0;
var PPS = 0;
var firstClick = true;
var firstUpgrade = true;
var unlockedUpgrade = false;
var upgradeCost = 100;



setInterval(cycle, 500);

function unlockUpgrade() {
	document.getElementById("upgrade").style.display = "block";
	document.getElementById("upgradeCost").style.display = "block";
}



function cycle() {
	Points += PPS*0.5;
	update();
}

function upgrade() {
	document.getElementById("PPS").style.display = "block";
	document.getElementById("PPS").innerHTML = "PPS: " + Math.round(PPS);
	document.getElementById("upgradeCost").innerHTML = Math.round(upgradeCost);
}


function update() {
	if (unlockedUpgrade == false) {
		if (Points >= 100) {
			unlockedUpgrade = true;
			unlockUpgrade();
		}
	}

	if (firstClick == false) {
		document.getElementById("counter").innerHTML = Math.round(Points);
	}
}

function buttonClick() {

	if (firstClick == true) {
		firstClick = false
	}


	Points += 1;
	update();
}

function upgradeClick() {
	if (Points >= upgradeCost) {
		Points -= upgradeCost
		upgradeCost *= 1.1
		PPS += 1
		upgrade();
	}
}