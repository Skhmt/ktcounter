<script>
	export let store;

	import teams from "../data/teams.js";

	const bespokeFactions = [];
	const compendiumFactions = [];
	const narrativeFactions = [];

	teams.forEach((v, k) => {
		if (v.type == "bespoke") bespokeFactions.push(k);
		else if (v.type == "compendium") compendiumFactions.push(k);
		else narrativeFactions.push(k);
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
	class="join-item select select-bordered select-primary select-sm mt-1"
	bind:value={selected}
	on:change={update}
>
	<option selected>Select Faction</option>
	<optgroup label="Bespoke Teams">
		{#each bespokeFactions as bf}
			<option value={bf}>{bf}</option>
		{/each}
	</optgroup>
	<optgroup label="Compendium Teams">
		{#each compendiumFactions as cf}
			<option value={cf}>{cf}</option>
		{/each}
	</optgroup>
	<optgroup label="Narrative Teams">
		{#each narrativeFactions as nf}
			<option value={nf}>{nf}</option>
		{/each}
	</optgroup>
</select>
