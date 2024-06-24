<script>
	import Counter from "./lib/Counter.svelte";
	import Faction from "./lib/Faction.svelte";
	import Row from "./lib/Row.svelte";
	import SingleCheck from "./lib/SingleCheck.svelte";
	import Name from "./lib/Name.svelte";
	import Primary from "./lib/Primary.svelte";
	import Tacop from "./lib/Tacop.svelte";
	import VP from "./lib/VP.svelte";
	import TP from "./lib/TP.svelte";
	import Reset from "./lib/Reset.svelte";
	import { store } from "./lib/stores.js";
	import krillLogo from "/krill192.png";

	// fix for iphone zoom issue
	// https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Safari-Textbox-Zooming
	if (navigator.userAgent.indexOf("iPhone") > -1) {
		document
			.querySelector("[name=viewport]")
			.setAttribute(
				"content",
				"width=device-width, initial-scale=1, maximum-scale=1",
			);
	}
</script>

<main class="min-h-[100dvh] overflow-hidden overscroll-none bg-[black]">
	<div class="navbar bg-primary mb-0">
		<div class="navbar-start">
			<img
				src={krillLogo}
				class="logo w-14 h-14"
				alt="Kill Team Counter Logo"
			/>
		</div>
		<div class="navbar-center">
			<TP store={store.turn} />
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal px-1">
				<li><Reset /></li>
			</ul>
		</div>
	</div>

	<div class="flex flex-col lg:flex-row min-w-full">
		<div
			class="flex flex-col content-center justify-center bg-neutral min-h-half lg:min-h-full min-w-[100%] lg:min-w-half lg:mr-1 mt-2 py-1 max-w-md"
		>
			<Row>
				<div class="join max-w-full">
					<Name store={store.p1.name} placeholder="Player 1" />
					<Faction store={store.p1.faction} />
				</div>
			</Row>
			<Row>
				<SingleCheck store={store.p1.painted}>Painted?</SingleCheck>
				<kbd class="kbd mt-1 mb-2">
					<VP player={store.p1} />
				</kbd>
				<SingleCheck store={store.p1.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p1.cp}>
					<span slot="postText">CP</span>
				</Counter>

				<Counter store={store.p1.bespokePoints}>
					<span slot="postText">🐈</span>
				</Counter>
			</Row>
			<Row>
				<Primary store={store.p1.tp1_vp}>TP1</Primary>
				<Primary store={store.p1.tp2_vp}>TP2</Primary>
				<Primary store={store.p1.tp3_vp}>TP3</Primary>
				<Primary store={store.p1.tp4_vp}>TP4</Primary>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p1.taco1_name}
					storeVP1={store.p1.taco1_vp1}
					storeVP2={store.p1.taco1_vp2}
					storeFaction={store.p1.faction}
				/>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p1.taco2_name}
					storeVP1={store.p1.taco2_vp1}
					storeVP2={store.p1.taco2_vp2}
					storeFaction={store.p1.faction}
				/>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p1.taco3_name}
					storeVP1={store.p1.taco3_vp1}
					storeVP2={store.p1.taco3_vp2}
					storeFaction={store.p1.faction}
				/>
			</Row>
		</div>
		<div
			class="max-w-md flex flex-col content-center justify-center bg-neutral min-h-half lg:min-h-full min-w-[100%] lg:min-w-half lg:ml-1 mt-2 py-1"
		>
			<Row>
				<div class="join max-w-full">
					<Name store={store.p2.name} placeholder="Player 2" />
					<Faction store={store.p2.faction} />
				</div>
			</Row>
			<Row>
				<SingleCheck store={store.p2.painted}>Painted?</SingleCheck>
				<kbd class="kbd mt-1 mb-2">
					<VP player={store.p2} />
				</kbd>
				<SingleCheck store={store.p2.init}>Attacker?</SingleCheck>
			</Row>
			<Row>
				<Counter store={store.p2.cp}>
					<span slot="postText">CP</span>
				</Counter>
				<Counter store={store.p2.bespokePoints}>
					<span slot="postText">🦐</span>
				</Counter>
			</Row>
			<Row>
				<Primary store={store.p2.tp1_vp}>TP1</Primary>
				<Primary store={store.p2.tp2_vp}>TP2</Primary>
				<Primary store={store.p2.tp3_vp}>TP3</Primary>
				<Primary store={store.p2.tp4_vp}>TP4</Primary>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p2.taco1_name}
					storeVP1={store.p2.taco1_vp1}
					storeVP2={store.p2.taco1_vp2}
					storeFaction={store.p2.faction}
				/>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p2.taco2_name}
					storeVP1={store.p2.taco2_vp1}
					storeVP2={store.p2.taco2_vp2}
					storeFaction={store.p2.faction}
				/>
			</Row>
			<Row>
				<Tacop
					storeTacoName={store.p2.taco3_name}
					storeVP1={store.p2.taco3_vp1}
					storeVP2={store.p2.taco3_vp2}
					storeFaction={store.p2.faction}
				/>
			</Row>
		</div>
	</div>
</main>
