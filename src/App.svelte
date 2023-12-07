<script>
	import ktcLogo from '/ktc192.png';
	import Counter from './lib/Counter.svelte';
	import Faction from './lib/Faction.svelte';
	import Row from './lib/Row.svelte';
	import SingleCheck from './lib/SingleCheck.svelte';
	import Name from './lib/Name.svelte';
	import NoSleep from './lib/NoSleep.svelte';
	import Reset from './lib/Reset.svelte';

	import {store} from './lib/stores.js';
</script>

<main class="min-h-[100dvh] overflow-hidden overscroll-none">
	<div class="navbar bg-primary mb-8">
		<div class="navbar-start">
			<img src={ktcLogo} class="logo w-14 h-14" alt="Kill Team Counter Logo" />
		</div>
		<div class="navbar-center">
			<Counter store={store.turn}>TP</Counter>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal px-1">
				<li><Reset /></li>
			</ul>
		</div>
	</div>

	<!-- <div class="columns-1 2xl:columns-2 relative inset-0 min-h-full"> -->
	<div class="flex flex-col md:flex-row min-w-full">
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half md:min-h-full min-w-[100%] md:min-w-half">
			<Row>
				<Name store={store.p1.name} placeholder="Player 1" />
				<Faction store={store.p1.faction} />
			</Row>
			<Row>
				<SingleCheck store={store.p1.painted}>Painted?</SingleCheck>
				<SingleCheck store={store.p1.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p1.cp}>CP</Counter>
				<Counter store={store.p1.tp1_vp}>VP</Counter>
			</Row>
		</div>
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half md:min-h-full min-w-[100%] md:min-w-half mt-10 md:mt-0">
			<Row>
				<Name store={store.p2.name} placeholder="Player 2" />
				<Faction store={store.p2.faction} />
			</Row>
			<Row>
				<SingleCheck store={store.p2.painted}>Painted?</SingleCheck>
				<SingleCheck store={store.p2.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p2.cp}>CP</Counter>
				<Counter store={store.p2.tp1_vp}>VP</Counter>
			</Row>
		</div>
	</div>
</main>