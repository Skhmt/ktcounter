<script>
    import { total_time, p1_ellapsed_time, p1_last_time, p1_isRunning, p2_isRunning } from './stores.js';
	import time from './time.js';

	let timeLeft = '0:00:00';
	let totalTime;
	let ellapsedTime;
	let lastTime;
	let isRunning;
	let otherIsRunning;
	let interval = null;

	const unsubscribeTotalTime = total_time.subscribe(value => {
		totalTime = value;

		updateTimeLeft();
	});

	const unsubscribeEllapsedTime = p1_ellapsed_time.subscribe(value => {
		ellapsedTime = value;

		updateTimeLeft();
	});

	const unsubscribeStartTime = p1_last_time.subscribe(value => {
		lastTime = value;
	});

	const unsubscribeIsRunning = p1_isRunning.subscribe(value => {
		isRunning = value;

		if (isRunning) {
			interval = setInterval(() => {
				if (lastTime === 0) p1_last_time.set(Date.now());
				p1_ellapsed_time.update(x => x + (Date.now() - lastTime));
				p1_last_time.set(Date.now());
			}, 100);
		}
		else {
			p1_last_time.set(0);
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
		}
	});

	const unsubscribeOtherIsRunning = p2_isRunning.subscribe(value => {
		otherIsRunning = value;
	});

	function updateTimeLeft() {
		const parser = time(totalTime - ellapsedTime);
		timeLeft = `${parser.hrs}:${parser.min}:${parser.sec}`;
	}

	function switchTimer() {
		if (isRunning || (!isRunning && !otherIsRunning)) { // stop and start p2
			p1_isRunning.set(false);
			p2_isRunning.set(true);
			window?.navigator?.vibrate?.(100);
		}
	}

	updateTimeLeft();

	$: buttonDown = isRunning ? '' : !otherIsRunning ? '' : 'buttonDown'; // running means button up = pressable
</script>

<button on:click={switchTimer} class="gridRow {buttonDown}" title="Toggle timer">
	{timeLeft}
</button>