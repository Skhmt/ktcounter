<script>
    import { p1_cp } from './stores.js';
	import Fa from 'svelte-fa';
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index.js';

	const increment = () => {
		p1_cp.update(x => x + 1);
		window?.navigator?.vibrate?.(100);
	};
    const decrement = () => {
		p1_cp.update(x => x > 0 ? x - 1 : 0);
		window?.navigator?.vibrate?.(100);
    };

	let count;

	const unsubscribe = p1_cp.subscribe(value => {
		count = value;
	});
</script>

<button on:click={decrement} title="Decrement CP">
	<Fa icon={faMinus} />
</button>
<div class="data">
	<span><strong>{count} CP</strong></span>
</div>
<button on:click={increment} title="Increment CP">
	<Fa icon={faPlus} />
</button>
