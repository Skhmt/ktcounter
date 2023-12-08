<script>
	export let store;
	export let placeholder;

	let name;

	let unsubscribe = store.subscribe(value => {
		if (value) name = value;
		else name = '';
	});

	function update() {
		store.set(name);
	}
</script>

<input type="text" bind:value={name} on:input={update} placeholder={placeholder} 
	class="join-item input input-bordered input-primary min-w-half input-sm mt-1" />