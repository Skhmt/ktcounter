<script>
	import Fa from 'svelte-fa';
	import { faRotateRight } from '@fortawesome/free-solid-svg-icons/index.js';

	import { reset } from './stores.js';

	function resetCounter() {
		reset();
		window?.navigator?.vibrate?.(100);
	}
</script>

<button class="btn btn-secondary pt-4" on:click={resetCounter}  title="Reset Counter">
	<Fa icon={faRotateRight} />
</button>