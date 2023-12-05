<script>
	import Fa from 'svelte-fa';
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index.js';

	export let store;

	const increment = () => {
		store.update(x => x + 1);
		window?.navigator?.vibrate?.(100);
	};
    const decrement = () => {
		store.update(x => x > 0 ? x - 1 : 0);
		window?.navigator?.vibrate?.(100);
    };

	let count;

	const unsubscribe = store.subscribe(value => {
		count = value;
	});
</script>

<div class="flex flex-row">
	<button class="btn btn-secondary" on:click={decrement} title="Decrement">
		<Fa icon={faMinus} />
	</button>
	<kbd class="kbd kbd-lg border-primary">
		<span><strong>{count} <slot></slot></strong></span>
	</kbd>
	<button class="btn btn-primary" on:click={increment} title="Increment">
		<Fa icon={faPlus} />
	</button>	
</div>
