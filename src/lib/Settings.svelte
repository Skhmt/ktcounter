<script>
	import Fa from 'svelte-fa';
	import { faGear } from '@fortawesome/free-solid-svg-icons/index.js';

	import { showSettings } from './stores.js';

	function openSettings() {
		showSettings.set(true);
		window?.navigator?.vibrate?.(100);
	}
</script>

<button on:click={openSettings}  title="Settings">
	<Fa icon={faGear} />
</button>