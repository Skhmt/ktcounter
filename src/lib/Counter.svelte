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
</script>

<div class="flex flex-row">
	<button class="btn btn-secondary btn-sm" on:click={decrement} title="Decrement">
		<Fa icon={faMinus} />
	</button>
	<div class="flex flex-row px-4 pt-1 bg-base-100 rounded-btn border-primary text-neutral-content">
		{#if $$slots.preText}
			<span class="text-sm pr-1"><slot name="preText"></slot></span>
		{/if}
		<span class="countdown font-mono text-sm pt-1">
			<span style="--value:{$store}"></span>
		</span>
		{#if $$slots.postText}
			<span class="text-sm pl-1"><slot name="postText"></slot></span>
		{/if}
	</div>
	<button class="btn btn-accent btn-sm" on:click={increment} title="Increment">
		<Fa icon={faPlus} />
	</button>	
</div>
