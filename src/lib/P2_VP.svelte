<script>
    import { p2_vp } from './stores.js';
	import Fa from 'svelte-fa';
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index.js';

	const increment = () => {
		p2_vp.update(x => x + 1);
		window?.navigator?.vibrate?.(100);
	};
    const decrement = () => {
		p2_vp.update(x => x > 0 ? x - 1 : 0);
		window?.navigator?.vibrate?.(100);
    };

	let count;

	const unsubscribe = p2_vp.subscribe(value => {
		count = value;
	});
</script>

<button on:click={increment} title="Increment VP">
	<Fa icon={faPlus} />
</button>
<div class="data">
	<span><strong>{count} VP</strong></span>
</div>
<button on:click={decrement} title="Decrement VP">
	<Fa icon={faMinus} />
</button>