<script>
    import NoSleep from 'nosleep.js';
	import Fa from 'svelte-fa';
	import { faExpand } from '@fortawesome/free-solid-svg-icons/index.js';

	const noSleep = new NoSleep();

	const toggleNoSleep = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			noSleep.enable();
		}
		else if (document.exitFullscreen) {
			document.exitFullscreen();
			// noSleep.disable();
		}
		window?.navigator?.vibrate?.(100);
	};
</script>

<button on:click={toggleNoSleep} title="Full Screen">
	<Fa icon={faExpand} />
</button>