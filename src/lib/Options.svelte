<script>
	export let paintedstore;
	export let initstore;

	let painted;
	let init;

	let unsubscribePainted = paintedstore.subscribe(value => {
		painted = value;
	});

	function updatePainted() {
		paintedstore.set(painted);
	}
	
	let unsubscribeInit = initstore.subscribe(value => {
		init = value;
	});

	function updateInit() {
		initstore.set(init);
	}
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text">Painted?</span> 
		<input type="checkbox" bind:checked={painted} on:change={updatePainted} class="checkbox ml-3" />
	</label>
</div>

<div class="form-control ml-10">
	<label class="label cursor-pointer">
		<span class="label-text">Attacker?</span> 
		<input type="checkbox" bind:checked={init} on:change={updateInit} class="checkbox ml-3" />
	</label>
</div>