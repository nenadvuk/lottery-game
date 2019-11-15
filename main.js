

// New game
let newGame = document.querySelector("#newGame")

newGame.addEventListener("click", function () {
	window.location.reload()
});
document.querySelector("#playAgain").addEventListener("click", function () {
	window.location.reload()
});

// Balls container
balls = document.querySelector(".ball-box");
// Score container
scoreBox = document.querySelector(".score-box");
popupWindow = document.getElementById("popup-window");
popup = document.querySelector(".popup");
let play = document.getElementById("play")
document.querySelector("#play").addEventListener("click", function () {
	balls.style.display = "inline-block";
	const score = compareArrays(numbers, sortedChosenNumbers);
	play.style.pointerEvents = "none";

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < sortedChosenNumbers.length; j++) {
			if (numbers[i] === sortedChosenNumbers[j]) {
				document.getElementById("ball" + i).style.color = "limegreen"
			}
		}
	}
	setTimeout(function () {
		odometer.innerHTML = Number(score);
		play.style.backgroundColor = "rgb(255, 107, 107)";
		newGame.style.backgroundColor = "lightgreen"
		scoreBox.style.display = "block";
		popup.style.display = "block";
	}, 8500);
	
	

});


// Numbers
let numbers = [];
for (let i = 0; i < 7; i++) {
	let add = true;
	let randomNumber = Math.floor(Math.random() * 39) + 1;
	for (let y = 0; y < 39; y++) {
		if (numbers[y] == randomNumber) {
			add = false;
		}
	}
	if (add) {
		numbers.push(randomNumber);
	} else {
		i--;
	}
}

let highestNumber = 0;
for (let m = 0; m < numbers.length; m++) {
	for (let n = m + 1; n < numbers.length; n++) {
		if (numbers[n] < numbers[m]) {
			highestNumber = numbers[m];
			numbers[m] = numbers[n];
			numbers[n] = highestNumber;
		}
	}
}



// Displaying numbers within balls
for (i = 1; i <= 7; i++) {
	if (numbers[i - 1] < 10) {
		document.getElementById(`res${i}`).innerHTML = `0${numbers[i - 1]}`;
	} else document.getElementById(`res${i}`).innerHTML = numbers[i - 1];
}

// Ticket
// Chosing all elements with class td
let checkedFields = document.querySelectorAll("td");
let checkedNumbers = 0;
let chosenNumbers = [];
let sortedChosenNumbers = [];
let chosenSevenOrNull = false;
let count = document.getElementById("count");
let chkdNumColor = document.querySelector(".checked-numbers");
let gamesNumber = 0;
for (let i = 0; i < checkedFields.length; i++) {
	checkedFields[i].addEventListener("mousedown", function () {
		if (!chosenSevenOrNull) {
			// Adding color to clicked field
			this.classList.add('checked-field');
			// Adding class to clicked field to prevent more than one click
			this.classList.add("avoid-click");
			// Counter of clicked numbers
			checkedNumbers++;
			count.innerHTML = checkedNumbers;
			clickedNumber = Number(this.id)
			chosenNumbers.push(clickedNumber)
			sortedChosenNumbers = chosenNumbers.sort((a, b) => a - b);
			if (checkedNumbers === 7) {
				chkdNumColor.style.backgroundColor = "lightgreen"
				chosenSevenOrNull = true;
				play.style.backgroundColor = "lightgreen";
				play.style.pointerEvents = "all";
				if (play) {
					console.log("ok")
					gamesNumber++;
					localStorage.setItem("Played", gamesNumber);

				}
			}
		} console.log(sortedChosenNumbers)

	});
};

// Clear last filed

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
	chosenSevenOrNull = false;
	chkdNumColor.style.backgroundColor = "white";
	if (checkedNumbers > 0 && checkedNumbers <= 7) {
		let popped = sortedChosenNumbers.pop();
		element = document.getElementById(`${popped}`)
		element.classList.remove("checked-field");
		element.classList.remove("avoid-click");
		checkedNumbers--;
		count.innerHTML = checkedNumbers;
		play.style.backgroundColor = "rgb(255, 107, 107)";
		play.style.pointerEvents = "none";
	}
});


// Close result
document.getElementById("close").addEventListener("click", function () {
	setTimeout(function () {
		popup.style.display = "none";
	}, 200);
	// Prevent clicking clear button, because game i s over
	clear.classList.add("avoid-click");
})

// Score

console.log(sortedChosenNumbers)

function compareArrays(num, sor) {

	index = 0;
	for (i = 0; i < num.length; i++) {
		for (j = 0; j < sor.length; j++) {
			if (num[i] === sor[j]) {
				index++
			}
		}
	}
	return index
}

setTimeout(function () {
	odometer.innerHTML = 000;
}, 800);


