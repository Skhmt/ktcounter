<script>
    import { p2_cp } from './stores.js';
	import Fa from 'svelte-fa';
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index.js';

	const increment = () => {
		p2_cp.update(x => x + 1);
		window?.navigator?.vibrate?.(100);
	};
    const decrement = () => {
		p2_cp.update(x => x > 0 ? x - 1 : 0);
		window?.navigator?.vibrate?.(100);
    };

	let count;

	const unsubscribe = p2_cp.subscribe(value => {
		count = value;
	});
</script>

<button on:click={increment} title="Increment CP">
	<Fa icon={faPlus} />
</button>

<div class="data">
	<span><strong>{count} CP</strong></span>
</div>
<button on:click={decrement} title="Decrement CP">
	<Fa icon={faMinus} />
</button>
