

// Numbers
document.querySelector("#newGame").addEventListener("click", function () {
	window.location.reload()
})

var numbers = [];
for (var i = 0; i < 7; i++) {
	var add = true;
	var randomNumber = Math.floor(Math.random() * 39) + 1;
	for (var y = 0; y < 39; y++) {
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

var highestNumber = 0;
for (var m = 0; m < numbers.length; m++) {
	for (var n = m + 1; n < numbers.length; n++) {
		if (numbers[n] < numbers[m]) {
			highestNumber = numbers[m];
			numbers[m] = numbers[n];
			numbers[n] = highestNumber;
		}
	}
}

for (i = 1; i <= 7; i++) {

	if (numbers[i-1] < 10) {
		document.getElementById(`res${i}`).innerHTML = `0${numbers[i - 1]}`;
	} else document.getElementById(`res${i}`).innerHTML = numbers[i - 1];
	
	console.log(numbers)
}




// Ticket
// Chosing 
var checkedFileds = document.querySelectorAll("td");
var checkedNumbers = 0;
var chosenNumbers = [];
var chosenSevenOrNull = false;
var count = document.getElementById("count");
var chkdNumColor = document.querySelector(".checked-numbers");
for (var i = 0; i < checkedFileds.length; i++) {
	checkedFileds[i].addEventListener("click", function () {
		if (!chosenSevenOrNull) {
			// Adding color to clicked field
			this.classList.add('checked-filed');
			// Adding class to clicked filed to prevent more than one click
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
			}
			console.log(sortedChosenNumbers)
		}
	});
};

// Clear last filed

var clear = document.getElementById("clear");
clear.addEventListener("click", function () {
	chosenSevenOrNull = false;
	chkdNumColor.style.backgroundColor = "white";
	if (checkedNumbers > 0 && checkedNumbers <=7) {
		let popped = sortedChosenNumbers.pop();
		element = document.getElementById(`${popped}`)
		element.classList.remove("checked-filed");
		element.classList.remove("avoid-click");
		checkedNumbers--;
		count.innerHTML = checkedNumbers;
	}
	
	console.log(sortedChosenNumbers)
});
