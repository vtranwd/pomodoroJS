var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

// store a reference to a Timer variable
var startTimer;

start.addEventListener('click', function(){
	if(startTimer === undefined){
		startTimer = setInterval(timer, 1000)
	} else {
		alert("Timer is already running");
	}
})
// reset timer to original values
reset.addEventListener('click', function(){
	wm.innerText = 25;
	ws.innerText = "00";

	bm.innerText = 5;
	bm.innerText = "00";

	document.getElementById('counter').innerText = 0;
	stopInterval()
	startTimer = undefined;
})

stop.addEventListener('click', function(){
	stopInterval()
	startTimer = undefined;
})

// Start Timer function
function timer(){
	if(ws.innerText != 0){
		ws.innerText--;
	} else if(wm.innerText != 0 && ws.innerText == 0){
		ws.innerText = 59;
		wm.innerText--;
	}
	// Break timer countdown
	if(wm.innerText == 0 && ws.innerText == 0){
		if(bs.innerText != 0){
			bs.innerText--;
		} else if(bm.innerText != 0 && bs.innerText == 0){
			bs.innerText = 59;
			bm.innerText--;
		}
	}
	// increment Counter by one if one full cycle is complete
	if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
		wm.innerText = 25;
		ws.innerText = "00";

		bm.innerText = 5;
		bs.innerText = "00";

		document.getElementById('counter').innerText++;
	}
}

// stop timer function
function stopInterval(){
	clearInterval(startTimer);
}

/*
document.addEventListener('DOMContentLoaded', () => {
	const timeLeftDisplay = document.querySelector('#time-left')
	const startBtn = document.querySelector('#start-button')
	let timeLeft = 10

	function countDown(){
		setInterval(function(){
			if(timeLeft <= 0 ) {
				clearInterval(timeLeft = 0)
			}
			timeLeftDisplay.innerHTML = timeLeft
			timeLeft -=1
		}, 1000)
	}

	startBtn.addEventListener('click', countDown)


})
*/