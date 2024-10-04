<script>
	export let player;

	import { derived } from "svelte/store";

	const { crit_vp, taco_vp, kill_vp, primary } = player;

	let vp = derived(
		[crit_vp, taco_vp, kill_vp, primary],
		([$crit_vp, $taco_vp, $kill_vp, $primary]) => {
			let total = 0;

			let kill = parseInt($kill_vp + "");
			let taco = parseInt($taco_vp + "");
			let crit = parseInt($crit_vp + "");

			if ($primary === "taco") {
				taco = Math.ceil(taco * 1.5);
			} else if ($primary === "crit") {
				crit = Math.ceil(crit * 1.5);
			} else if ($primary === "kill") {
				kill = Math.ceil(kill * 1.5);
			}

			total += kill + taco + crit;

			return total;
		},
		0,
	);
</script>

<div class="flex flex-row">
	<span class="font-mono text-xl">{$vp < 10 ? "0" + $vp : $vp} VP</span>
</div>
