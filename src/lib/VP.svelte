<script>
	export let player;

	let total;

	let data = {
		tp1: 0,
		tp2: 0,
		tp3: 0,
		tp4: 0,
		taco1_1: 0,
		taco1_2: 0,
		taco2_1: 0,
		taco2_2: 0,
		taco3_1: 0,
		taco3_2: 0,
		painted: 0,
	}

	function recalc() {
		return Object.values(data).reduce((partial, a) => partial + a, 0);
	}

	player.tp1_vp.subscribe(val => {
		if (val) data.tp1 = parseInt(val);
		total = recalc();
	});

	player.tp2_vp.subscribe(val => {
		data.tp2 = parseInt(val);
		total = recalc();
	});

	player.tp3_vp.subscribe(val => {
		data.tp3 = parseInt(val);
		total = recalc();
	});

	player.tp4_vp.subscribe(val => {
		data.tp4 = parseInt(val);
		total = recalc();
	});

	player.taco1_vp1.subscribe(val => {
		data.taco1_1 = val ? 1 : 0;
		total = recalc();
	});

	player.taco1_vp2.subscribe(val => {
		data.taco1_2 = val ? 1 : 0;
		total = recalc();
	});

	player.taco2_vp1.subscribe(val => {
		data.taco2_1 = val ? 1 : 0;
		total = recalc();
	});

	player.taco2_vp2.subscribe(val => {
		data.taco2_2 = val ? 1 : 0;
		total = recalc();
	});

	player.taco3_vp1.subscribe(val => {
		data.taco3_1 = val ? 1 : 0;
		total = recalc();
	});

	player.taco3_vp2.subscribe(val => {
		data.taco3_2 = val ? 1 : 0;
		total = recalc();
	});

	player.painted.subscribe(val => {
		data.painted = val ? 2 : 0;
		total = recalc();
	});
</script>


<!-- <div class="flex flex-row px-4 pt-1 mt-0 bg-base-100 rounded-btn border-primary text-neutral-content"> -->
<div class="flex flex-row">
	<span class="countdown font-mono text-2xl pt-[.2em]">
		<span style="--value:{total}"></span>
	</span>
	<span class="text-2xl pl-2">VP</span>
</div>
