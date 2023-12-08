<script>
	export let player;
	
	import { derived } from 'svelte/store';
	
	const {
		tp1_vp, tp2_vp, tp3_vp, tp4_vp,
		taco1_vp1, taco1_vp2,
		taco2_vp1, taco2_vp2,
		taco3_vp1, taco3_vp2,
		painted,
	} = player;
	
	let vp = derived([
		tp1_vp, tp2_vp, tp3_vp, tp4_vp,
		taco1_vp1, taco1_vp2,
		taco2_vp1, taco2_vp2,
		taco3_vp1, taco3_vp2,
		painted,
	], ([
		$tp1_vp, $tp2_vp,$tp3_vp, $tp4_vp,
		$taco1_vp1, $taco1_vp2,
		$taco2_vp1, $taco2_vp2,
		$taco3_vp1, $taco3_vp2,
		$painted,
	]) => {
		let total = 0;
		
		total += parseInt($tp1_vp+'');
		total += parseInt($tp2_vp+'');
		total += parseInt($tp3_vp+'');
		total += parseInt($tp4_vp+'');
		if ($taco1_vp1) total++;
		if ($taco1_vp2) total++;
		if ($taco2_vp1) total++;
		if ($taco2_vp2) total++;
		if ($taco3_vp1) total++;
		if ($taco3_vp2) total++;
		if ($painted) total+= 2;
		
		return total;
	}, 0);
</script>


<div class="flex flex-row">
	<span class="countdown font-mono text-2xl pt-[.15em]">
		<span style="--value:{$vp}"></span>
	</span>
	<span class="text-2xl pl-2">VP</span>
</div>
