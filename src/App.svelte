<script>
	import ktcLogo from '/ktc192.png';
	import Counter from './lib/Counter.svelte';
	import Faction from './lib/Faction.svelte';
	import Row from './lib/Row.svelte';
	import SingleCheck from './lib/SingleCheck.svelte';
	import Name from './lib/Name.svelte';
	import TP from './lib/TP.svelte';
	import Tacop from './lib/Tacop.svelte';
	import VP from './lib/VP.svelte';
	import Reset from './lib/Reset.svelte';

	import {store} from './lib/stores.js';
</script>

<main class="min-h-[100dvh] overflow-hidden overscroll-none bg-[black]">
	<div class="navbar bg-primary mb-0">
		<div class="navbar-start">
			<img src={ktcLogo} class="logo w-14 h-14" alt="Kill Team Counter Logo" />
		</div>
		<div class="navbar-center">
			<Counter store={store.turn}>
				<span slot="preText">TP</span>
			</Counter>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal px-1">
				<li><Reset /></li>
			</ul>
		</div>
	</div>

	<div class="flex flex-col md:flex-row min-w-full">
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half md:min-h-full min-w-[100%] md:min-w-half mt-5 md:mt-0 py-1">
			<Row>
				<Name store={store.p1.name} placeholder="Player 1" />
				<Faction store={store.p1.faction} />
			</Row>
			<Row>
				<SingleCheck store={store.p1.painted}>Painted?</SingleCheck>
				<SingleCheck store={store.p1.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p1.cp}>
					<span slot="postText">CP</span>
				</Counter>
				<VP player={store.p1} />
			</Row>
			<Row>
				<TP store={store.p1.tp1_vp}>TP1</TP>
				<TP store={store.p1.tp2_vp}>TP2</TP>
				<TP store={store.p1.tp3_vp}>TP3</TP>
				<TP store={store.p1.tp4_vp}>TP4</TP>
			</Row>
			<Row>
				<Tacop storeTaco={store.p1.taco1_name} storeVP1={store.p1.taco1_vp1} storeVP2={store.p1.taco1_vp2} />
			</Row>
			<Row>
				<Tacop storeTaco={store.p1.taco2_name} storeVP1={store.p1.taco2_vp1} storeVP2={store.p1.taco2_vp2} />
			</Row>
			<Row>
				<Tacop storeTaco={store.p1.taco3_name} storeVP1={store.p1.taco3_vp1} storeVP2={store.p1.taco3_vp2} />
			</Row>
		</div>
		<div class="container flex flex-col content-center justify-center bg-neutral min-h-half md:min-h-full min-w-[100%] md:min-w-half mt-5 md:mt-0 py-1">
			<Row>
				<Name store={store.p2.name} placeholder="Player 2" />
				<Faction store={store.p2.faction} />
			</Row>
			<Row>
				<SingleCheck store={store.p2.painted}>Painted?</SingleCheck>
				<SingleCheck store={store.p2.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p2.cp}>
					<span slot="postText">CP</span>
				</Counter>
				<VP player={store.p2} />
			</Row>
			<Row>
				<TP store={store.p2.tp1_vp}>TP1</TP>
				<TP store={store.p2.tp2_vp}>TP2</TP>
				<TP store={store.p2.tp3_vp}>TP3</TP>
				<TP store={store.p2.tp4_vp}>TP4</TP>
			</Row>
			<Row>
				<Tacop storeTaco={store.p2.taco1_name} storeVP1={store.p2.taco1_vp1} storeVP2={store.p2.taco1_vp2} />
			</Row>
			<Row>
				<Tacop storeTaco={store.p2.taco2_name} storeVP1={store.p2.taco2_vp1} storeVP2={store.p2.taco2_vp2} />
			</Row>
			<Row>
				<Tacop storeTaco={store.p2.taco3_name} storeVP1={store.p2.taco3_vp1} storeVP2={store.p2.taco3_vp2} />
			</Row>
		</div>
	</div>
</main>
