<script>
	export let store;
</script>

<div class="join border border-neutral">
	<input class="join-item btn btn-square" bind:group={$store} type="radio" name="tp" aria-label="1" value="1" checked />
	<input class="join-item btn btn-square" bind:group={$store} type="radio" name="tp" aria-label="2" value="2" />
	<input class="join-item btn btn-square" bind:group={$store} type="radio" name="tp" aria-label="3" value="3" />
	<input class="join-item btn btn-square" bind:group={$store} type="radio" name="tp" aria-label="4" value="4" />
</div>