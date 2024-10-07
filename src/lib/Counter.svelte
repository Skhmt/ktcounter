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
	<button class="join-item btn btn-secondary btn-md" on:click={decrement} title="Decrement">
		<Fa icon={faMinus} size="lg"/>
	</button>
	<div class="join-item flex flex-row btn btn-md text-lg">
		<span class="font-mono text-sm">
			{#if $$slots.preText}
				<slot name="preText"></slot>
			{/if}
			{$store < 10 ? '0' + $store : $store}
			{#if $$slots.postText}
				<slot name="postText"></slot>
			{/if}
		</span>
	</div>
	<button class="join-item btn btn-accent btn-md" on:click={increment} title="Increment">
		<Fa icon={faPlus} size="lg"/>
	</button>	
</div>
