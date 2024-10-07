<script>
	import Counter from "./lib/Counter.svelte";
	import Text from "./lib/Text.svelte";
	import Faction from "./lib/Faction.svelte";
	import Row from "./lib/Row.svelte";
	// import SingleCheck from "./lib/SingleCheck.svelte";
	import Name from "./lib/Name.svelte";
	// import Tacop from "./lib/Tacop.svelte";
	import VP from "./lib/VP.svelte";
	import TP from "./lib/TP.svelte";
	import Reset from "./lib/Reset.svelte";
	import { store } from "./lib/stores.js";
	import krillLogo from "/krill192.png";
	import Primary from "./lib/Primary.svelte";

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
				<Counter store={store.p1.cp}>
					<span slot="postText">CP</span>
				</Counter>
				<kbd class="kbd">
					<VP player={store.p1} />
				</kbd>
			</Row>
			<!-- <Row>
				<Counter store={store.p1.bespokePoints}>
					<span slot="postText">🐈</span>
				</Counter>
			</Row> -->
			<Row>
				<Text>Kill Op</Text>
				<Counter store={store.p1.kill_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Tac Op</Text>
				<Counter store={store.p1.taco_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Crit Op</Text>
				<Counter store={store.p1.crit_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Primary Op</Text>
				<Primary store={store.p1.primary} />
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
				<Counter store={store.p2.cp}>
					<span slot="postText">CP</span>
				</Counter>
				<kbd class="kbd">
					<VP player={store.p2} />
				</kbd>
			</Row>
			<!-- <Row>
				<Counter store={store.p2.bespokePoints}>
					<span slot="postText">🦐</span>
				</Counter>
			</Row> -->
			<Row>
				<Text>Kill Op</Text>
				<Counter store={store.p2.kill_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Tac Op</Text>
				<Counter store={store.p2.taco_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Crit Op</Text>
				<Counter store={store.p2.crit_vp}>
					<span slot="postText">VP</span>
				</Counter>
			</Row>
			<Row>
				<Text>Primary Op</Text>
				<Primary store={store.p2.primary} />
			</Row>
		</div>
	</div>
</main>
