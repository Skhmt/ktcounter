<script>
	export let store;

	import teams from "../data/teams.js";

	const bespokeFactions = [];

	teams.forEach((v, k) => {
		bespokeFactions.push(k);
	});

	let selected;

	let unsubscribe = store.subscribe((value) => {
		if (value) selected = value;
		else selected = "Select Faction";
	});

	function update() {
		store.set(selected);
	}
</script>

<select
	class="join-item select select-bordered select-primary select-sm mt-2"
	bind:value={selected}
	on:change={update}
>
	<option selected disabled>Select Faction</option>
	{#each bespokeFactions as bf}
		<option value={bf}>{bf}</option>
	{/each}
</select>
