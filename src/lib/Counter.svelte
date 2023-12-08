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

<div class="join flex flex-row">
	<button class="join-item btn btn-secondary btn-sm" on:click={decrement} title="Decrement">
		<Fa icon={faMinus} />
	</button>
	<div class="join-item flex flex-row btn btn-sm">
		{#if $$slots.preText}
			<span class="text-sm"><slot name="preText"></slot></span>
		{/if}
		<span class="countdown font-mono text-sm">
			<span style="--value:{$store}"></span>
		</span>
		{#if $$slots.postText}
			<span class="text-sm"><slot name="postText"></slot></span>
		{/if}
	</div>
	<button class="join-item btn btn-accent btn-sm" on:click={increment} title="Increment">
		<Fa icon={faPlus} />
	</button>	
</div>
