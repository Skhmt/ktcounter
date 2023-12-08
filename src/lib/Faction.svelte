<script>
	export let store;

	const compendiumFactions = [
		'Brood Coven',
		'Cadre Mercenary',
		'Chaos Daemon',
		'Commorrite',
		'Craftworld',
		'Death Guard',
		'Ecclesiarchy',
		'Greenskin',
		'Hive Fleet',
		'Hunter Cadre',
		'Imperial Guard',
		'Grey Knights',
		'Space Marine',
		'Talons of the Emperor',
		'Tomb World',
		'Traitor Space Marine',
	];

	const bespokeFactions = [
		'Blades of Khaine',
		'Blooded',
		'Chaos Cult',
		'Corsair Voidscarred',
		'Elucidian Starstrider',
		'Exaction Squad',
		'Farstalker Kinband',
		'Fellgor Ravager',
		'Gellerpox Infected',
		'Hand of the Archon',
		'Hearthkyn Salvager',
		'Hierotek Circle',
		'Hunter Clade',
		'Imperial Navy Breacher',
		'Inquisitorial Agent',
		'Intercession Squad',
		'Kasrkin',
		'Kommando',
		'Legionary',
		'Nemesis Claw',
		'Novitiate',
		'Pathfinder',
		'Phobos Strike Team',
		'Scout Squad',
		'Strike Force Justian',
		'Warpcoven',
		'Wyrmblade',
		'Veteran Guardsman',
		'Void-dancer Troupe',
	];

	let selected;

	let unsubscribe = store.subscribe(value => {
		if (value) selected = value;
		else selected = 'Select Faction';
	});

	function update() {
		store.set(selected);
	}
</script>

<select class="join-item select select-bordered select-primary select-sm mt-1" bind:value={selected} on:change={update}>
	<option disabled selected>Select Faction</option>
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
</select>
