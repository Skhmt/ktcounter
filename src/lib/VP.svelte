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
		
		total += $tp1_vp|0 + $tp2_vp|0 + $tp3_vp|0 + $tp4_vp|0;
		total += $taco1_vp1|0 + $taco1_vp2|0;
		total += $taco2_vp1|0 + $taco2_vp2|0;
		total += $taco3_vp1|0 + $taco3_vp2|0;
		total += $painted ? 2 : 0;
		
		return total;
	}, 0);
</script>


<!-- <div class="flex flex-row px-4 pt-1 mt-0 bg-base-100 rounded-btn border-primary text-neutral-content"> -->
<div class="flex flex-row">
	<span class="countdown font-mono text-2xl pt-[.2em]">
		<span style="--value:{$vp}"></span>
	</span>
	<span class="text-2xl pl-2">VP</span>
</div>
