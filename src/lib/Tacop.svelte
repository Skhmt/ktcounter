<script>
	/*
'Farstalker Kinband',
{
	name: 'Farstalker Kinband',
	type: 'bespoke',
	faction: [
		'Butcher',
		'Balance The Books',
		'Bounty Hunters'
	],
	archetypes: [
		'seek',
		'sec',
		'infil',
		'recon',
	]
}
	*/
	import SingleCheck from "./SingleCheck.svelte";
	import { seek, sec, infil, recon } from "../data/tacops.js";
	import teams from "../data/teams.js";

	export let storeTacoName;
	export let storeVP1;
	export let storeVP2;
	export let storeFaction;

	let selected;
	let faction;

	let unsubscribeTaco = storeTacoName.subscribe((value) => {
		if (value) selected = value;
		else selected = "Select Tac Op";
	});

	function updateTaco() {
		storeTacoName.set(selected);
	}

	let unsubscribeFaction = storeFaction.subscribe((value) => {
		if (value) faction = value;
		else faction = "Select Faction";
	});
</script>

<div class="flex flex-row content-center justify-center mt-2 md:mt-1">
	<select
		class="select select-bordered select-sm mt-1"
		bind:value={selected}
		on:change={updateTaco}
	>
		<option disabled selected>Select Tac Op</option>
		{#if !teams.has(faction)}
			<optgroup label="Factions">
				<option value="Faction 1">Faction 1</option>
				<option value="Faction 2">Faction 2</option>
				<option value="Faction 3">Faction 3</option>
			</optgroup>
		{:else if teams.get(faction).faction?.length > 0}
			<optgroup label="Faction">
				{#each teams.get(faction).faction as x}
					<option value={x}>{x}</option>
				{/each}
			</optgroup>
		{/if}
		{#if !teams.has(faction) || teams
				.get(faction)
				.archetypes?.includes("sec")}
			<optgroup label="Security">
				{#each sec as x}
					<option value={x}>{x}</option>
				{/each}
			</optgroup>
		{/if}
		{#if !teams.has(faction) || teams
				.get(faction)
				.archetypes?.includes("seek")}
			<optgroup label="Seek & Destroy">
				{#each seek as x}
					<option value={x}>{x}</option>
				{/each}
			</optgroup>
		{/if}
		{#if !teams.has(faction) || teams
				.get(faction)
				.archetypes?.includes("recon")}
			<optgroup label="Recon">
				{#each recon as x}
					<option value={x}>{x}</option>
				{/each}
			</optgroup>
		{/if}
		{#if !teams.has(faction) || teams
				.get(faction)
				.archetypes?.includes("infil")}
			<optgroup label="Infiltration">
				{#each infil as x}
					<option value={x}>{x}</option>
				{/each}
			</optgroup>
		{/if}
	</select>

	<SingleCheck store={storeVP1}></SingleCheck>
	<SingleCheck store={storeVP2}></SingleCheck>
</div>
