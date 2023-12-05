<script>
	// import svelteLogo from './assets/svelte.svg';
	// import viteLogo from '/vite.svg';
	import Counter from './lib/Counter.svelte';
	import Faction from './lib/Faction.svelte';
	import Row from './lib/Row.svelte';
	import Options from './lib/Options.svelte';
	import NoSleep from './lib/NoSleep.svelte';
	import Reset from './lib/Reset.svelte';

	import {p1_cp, p1_vp, p2_cp, p2_vp} from './lib/stores.js';
</script>

<main class="min-h-[100dvh]">
	<div class="navbar bg-primary mb-8">
		<div class="flex-1 text-xl">
			Killteam Counter
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
			<li><Reset /></li>
			</ul>
		</div>
	</div>

	<!-- <div class="columns-1 2xl:columns-2 relative inset-0 min-h-full"> -->
	<div class="flex flex-col 2xl:flex-row min-w-full">
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half 2xl:min-h-full min-w-[100%] 2xl:min-w-half">
			<Row>
				<input type="text" placeholder="Player 1" class="input input-bordered input-primary min-w-half" />
				<Faction />
			</Row>
			<Row>
				<Options />
			</Row>
			<Row>
				<Counter store={p1_cp}>CP</Counter>
				<Counter store={p1_vp}>VP</Counter>
			</Row>
		</div>
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half 2xl:min-h-full min-w-[100%] 2xl:min-w-half mt-10 2xl:mt-0">
			<Row>
				<input type="text" placeholder="Player 2" class="input input-bordered input-primary min-w-half" />
				<Faction />
			</Row>
			<Row>
				<Options />
			</Row>
			<Row>
				<Counter store={p2_cp}>CP</Counter>
				<Counter store={p2_vp}>VP</Counter>
			</Row>
		</div>
	</div>
</main>