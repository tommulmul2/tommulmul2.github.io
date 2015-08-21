var Points = 0;
var PPS = 0;
var firstClick = true;
var firstUpgrade = true;
var unlockedUpgrade = false;
var upgradeCost = 100;
var clickValue = 1;



setInterval(cycle, 500); //updates the counter once every 0.5s

function makeClickpopUp() { //makes the click popup
	var clickPopUp = document.createElement("div");
	clickPopUp.innerHTML = "+" + clickValue;
	clickPopUp.setAttribute("class", "clickPopUp unselectable default")
	clickPopUp.style.left = cursorX + "px";
	clickPopUp.style.top = cursorY + "px";

	var body = document.getElementById("mainDiv");
	body.insertBefore(clickPopUp, body.lastChild);
	setTimeout(function() {body.removeChild(clickPopUp)}, 2000);
}



document.onmousemove = function(e) { //gets mouse POS as CursorX and Y
	cursorX = e.pageX;
	cursorY = e.pageY;
}



function cycle() { //updates the counter
	Points += PPS*0.5;
	update();
}

function upgrade() { //updates: PPS counter (unhides), upgrade cost, counter
	document.getElementById("PPS").style.display = "block";
	document.getElementById("PPS").innerHTML = "PPS: " + Math.round(PPS);
	document.getElementById("upgradeCost").innerHTML = Math.round(upgradeCost);
	document.getElementById("counter").innerHTML = Math.round(Points);
}


function update() { //unhides the upgradebutton/upgradecost/counter
	if (unlockedUpgrade == false) {
		if (Points >= 100) {
			unlockedUpgrade = true;
			document.getElementById("upgrade").style.display = "block";
			document.getElementById("upgradeCost").style.display = "block";
		}
	}

	if (firstClick == false) {
		document.getElementById("counter").innerHTML = Math.round(Points);
	}
}

function buttonClick() { //handles clicking on the button

	if (firstClick == true) {
		firstClick = false
	}


	Points += clickValue;
	update();
	makeClickpopUp();
}

function upgradeClick() { //handles purchasing an upgrade
	if (Points >= upgradeCost) {
		Points -= upgradeCost
		upgradeCost *= 1.1
		PPS += 1
		upgrade();
	}
}