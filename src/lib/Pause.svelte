<script>
	import Fa from 'svelte-fa';
	import { p1_isRunning, p2_isRunning } from './stores.js';
	import { faPause } from '@fortawesome/free-solid-svg-icons/index.js';

	const pause = () => {
		p1_isRunning.set(false);
		p2_isRunning.set(false);
		window?.navigator?.vibrate?.(100);
	};
</script>

<button on:click={pause} title="Pause">
	<Fa icon={faPause} />
</button>