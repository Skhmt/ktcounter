<script>
	import Fa from 'svelte-fa';
	import { faFloppyDisk, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons/index.js';

	import { showSettings } from './stores.js';
	import { 
		total_time,
		p2_isRunning, 
		p1_isRunning,
		reset,
	} from './stores.js';

	let isVisible;
	let totalTime;
	let totalTimeMinutes;

	const unsubscribeTotalTime = total_time.subscribe(value => {
		totalTime = value;
		totalTimeMinutes = totalTime / (60*1000);
	})

	const unsubscribeSettings = showSettings.subscribe(value => {
		isVisible = value;
		if (isVisible) {
			p1_isRunning.set(false);
			p2_isRunning.set(false);
		}
	});

	function closeSettings() {
		showSettings.set(false);
		window?.navigator?.vibrate?.(100);
	}

	function resetClock() {
		reset();
		window?.navigator?.vibrate?.(100);
	}

	function saveTime() {
		if (!isNaN(totalTimeMinutes) && totalTimeMinutes > 0) {
			total_time.set(totalTimeMinutes*60*1000);
			reset();
			window?.navigator?.vibrate?.(100);
		}
	}

	function timeMod(mod) {
		totalTimeMinutes += mod;
	}

	function saveModTime() {

	}

	$: visibility = isVisible ? 'display: block;' : 'display: none;';
</script>

<div style="{visibility}" class="modal">
	<button on:click={closeSettings} title="Close Settings" class="modalButton xButton">
		<Fa icon={faXmark} />
	</button>
	<div class="modalGrid">
		<div class="modalContent" style="grid-area: 1 / 1 / 2 / 3;">
			<h1>Settings</h1>
		</div>

		<div class="modalContent">
			<strong>Reset</strong>
			(resets time and scores)
		</div>
		<div class="modalControl">
			<button on:click={resetClock} title="Reset" class="modalButton">
				<Fa icon={faRotateRight} />
			</button>
		</div>

		<div class="modalContent">
			<strong>Minutes Per Player</strong>
			(saving resets the clock)
			<div>
				<button on:click={_=>{timeMod(-5)}}> -5 </button>
				<button on:click={_=>{timeMod(-1)}}> -1 </button>
				<strong>{totalTimeMinutes} minutes</strong>
				<button on:click={_=>{timeMod(1)}}> +1 </button>
				<button on:click={_=>{timeMod(5)}}> +5 </button>
			</div>
			<!-- <input type="text" bind:value={totalTimeMinutes} /> -->
		</div>
		<div class="modalControl">
			<button on:click={saveTime} title="Set Total Time" class="modalButton">
				<Fa icon={faFloppyDisk} />
			</button>
		</div>

		<div class="modalContent">
			<strong>Modify Time</strong>
		</div>
		<div class="modalControl">
			<button on:click={saveModTime} title="Set Modified Time" class="modalButton">
				<Fa icon={faFloppyDisk} />
			</button>
		</div>


		<div class="modalContent">
			<h1>About</h1>
			<p>github: <a href="https://github.com/Skhmt/ktclock" target="_blank">github.com/Skhmt/ktclock</a></p>
		</div>
	</div>
</div>
