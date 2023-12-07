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
	<div class="flex flex-col pl-4 pr-4 pt-1 bg-base-100 rounded-btn border-primary text-neutral-content">
		<span class="countdown font-mono text-xl">
			<span style="--value:{count}"></span>
		</span>
		<span><slot></slot></span>
	</div>
	<button class="btn btn-primary" on:click={increment} title="Increment">
		<Fa icon={faPlus} />
	</button>	
</div>
