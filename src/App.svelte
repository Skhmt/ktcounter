<script>
	// import svelteLogo from './assets/svelte.svg';
	// import viteLogo from '/vite.svg';
	import P1_VP from './lib/P1_VP.svelte';
	import P1_CP from './lib/P1_CP.svelte';
	import P1_Timer from './lib/P1_Timer.svelte';
	import P2_VP from './lib/P2_VP.svelte';
	import P2_CP from './lib/P2_CP.svelte';
	import P2_Timer from './lib/P2_Timer.svelte';
	import Turn from './lib/Turn.svelte';
	import Pause from './lib/Pause.svelte';
	import Settings from './lib/Settings.svelte';
	import NoSleep from './lib/NoSleep.svelte';
	import SettingsModal from './lib/SettingsModal.svelte';
</script>

<main>
	<!-- <div>
		<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
			<img src={viteLogo} class="logo" alt="Vite Logo" />
		</a>
		<a href="https://svelte.dev" target="_blank" rel="noreferrer">
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</a>
	</div> -->
	<div class="gridRow">
		<div class="gridRow controlGrid">
				<P2_VP /> <P2_CP />
		
				<Pause /> <Turn /> <Settings /> <NoSleep />
		
				<P1_VP /> <P1_CP />
		</div>
	</div>
</main>

<SettingsModal />