<script>
	export let store;

	let selected;

	let unsubscribe = store.subscribe((value) => {
		if (value) selected = value;
		else selected = "";
	});

	function update() {
		store.set(selected);
	}
</script>

<select
	class="join-item select select-primary select-sm"
	bind:value={selected}
	on:change={update}
>
	<option value="" selected>Unknown</option>
	<option value="kill">Kill Op</option>
	<option value="taco">Tactical Op</option>
	<option value="crit">Critical Op</option>
</select>
