

//document.getElementById("generate").addEventListener("click", function () {
//document.getElementById("result-box").style = "display:inline-block"
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
// setTimeout(function () {}, 2500)
for (i = 1; i <= 7; i++) {
	document.getElementById(`res${i}`).innerHTML = numbers[i - 1]
}


//})




