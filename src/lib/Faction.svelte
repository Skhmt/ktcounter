<script>
	// export let store;

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
		'Veteran Guardsman'
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
		'Void-dancer Troupe'
	];
</script>

<select class="select select-bordered">
	<option disabled selected>Select Faction</option>
	<optgroup label="Bespoke Teams">
		{#each bespokeFactions as bf}
			<option>{bf}</option>
		{/each}
	</optgroup>
	<optgroup label="Compendium Teams">
		{#each compendiumFactions as cf}
			<option>{cf}</option>
		{/each}
	</optgroup>
</select>