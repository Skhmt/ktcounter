<script>
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons/index.js';
	import Reset from './Reset.svelte';
</script>


<div class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-start justify-start">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button">
			<Fa icon={faBars} size="lg" translateY="" />
		</label>
	</div> 
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
		<ul class="menu p-4 w-60 z-10 right-4 h-screen bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<div class="pb-1 text-primary text-lg">Kill Team Counter</div>
			<div class="divider">Features</div>
			<li><a>View Previous Games</a></li> <!-- https://daisyui.com/components/table/ -->
			<li><a>Pre-Game Reference</a></li> <!-- https://daisyui.com/components/accordion/ -->
			<div class="divider">Settings</div>
			<li><a>Core or '22 & '23 Tac Ops</a></li>
			<select class="select select-sm select-ghost w-full max-w-xs pl-[1.05em]">
				<option disabled selected>Color Theme</option>
				<option>Homer</option>
				<option>Marge</option>
				<option>Bart</option>
				<option>Lisa</option>
				<option>Maggie</option>
			</select>
			<div class="divider">External</div>
			<li><a href="https://linktr.ee/killteam21" target="_new">Kill Team Resources</a></li>
			<li><a href="https://github.com/Skhmt/ktcounter" target="_new">Github</a></li>
			<li class="absolute bottom-3"><Reset toggleCheckBox="my-drawer-2">Reset scores</Reset></li>
		</ul>
	</div>
</div>