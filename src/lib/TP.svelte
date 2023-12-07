<script>
	export let store;

	let selected;

	let unsubscribe = store.subscribe(value => {
		selected = value;
	});

	function update() {
		store.set(selected);
	}
</script>

<label class="form-control flex flex-row mt-3">
	<div class="label mr-1">
		<span class="label-text-alt"><slot></slot></span>
	</div>
	<select class="select select-bordered select-sm" bind:value={selected} on:change={update}>
		<option selected>0</option>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
	</select>
</label>