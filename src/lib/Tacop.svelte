<script>
	import SingleCheck from './SingleCheck.svelte';

	export let storeTaco;
	export let storeVP1;
	export let storeVP2;

	const faction = [
		'Faction Tac Op 1',
		'Faction Tac Op 2',
		'Faction Tac Op 3',
	];

	const security = [
		'Central Control',
		'Escort Operative',
		'Hold Them Back',
		'Protect Assets',
		'Secure Centre Line',
		'Seize Ground/Access Point',
	];

	const seek = [
		'Assassinate Target',
		'Eliminate Guards',
		'Executioner',
		'Headhunter',
		'Rob & Ransack',
		'Rout',
	];

	const recon = [
		'Courier',
		'Outflank',
		'Plant Transponder',
		'Recover Item',
		'Secure Vantage/Unexplored Rooms',
		'Surge Forward',
	];

	const infil = [
		'Gather Surveillance',
		'Implant',
		'Install Device',
		'Seize Defences',
		'Stalk Target',
		'Subversive Control',
	];

	let selected;

	let unsubscribeTaco = storeTaco.subscribe(value => {
		if (value) selected = value;
		else selected = 'Select Tac Op';
	});

	function updateTaco() {
		storeTaco.set(selected);
	}
</script>

<div class="flex flex-row content-center justify-center mt-3 md:mt-1">
	<select class="select select-bordered select-sm mt-1" bind:value={selected} on:change={updateTaco}>
		<option disabled selected>Select Tac Op</option>
		<optgroup label="Faction">
			{#each faction as x}
				<option value={x}>{x}</option>
			{/each}
		</optgroup>
		<optgroup label="Security">
			{#each security as x}
				<option value={x}>{x}</option>
			{/each}
		</optgroup>
		<optgroup label="Seek & Destroy">
			{#each seek as x}
				<option value={x}>{x}</option>
			{/each}
		</optgroup>
		<optgroup label="Recon">
			{#each recon as x}
				<option value={x}>{x}</option>
			{/each}
		</optgroup>
		<optgroup label="Infiltration">
			{#each infil as x}
				<option value={x}>{x}</option>
			{/each}
		</optgroup>
	</select>

	<SingleCheck store={storeVP1}></SingleCheck>
	<SingleCheck store={storeVP2}></SingleCheck>
</div>
