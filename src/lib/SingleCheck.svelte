<script>
	export let store;

	let check;

	let unsubscribe = store.subscribe(value => {
		check = value;
	});

	function update() {
		store.set(check);
	}
	

</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text"><slot></slot></span> 
		<input type="checkbox" bind:checked={check} on:change={update} class="checkbox ml-3" />
	</label>
</div>