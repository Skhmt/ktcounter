<script>
	export let store;
</script>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text"><slot></slot></span> 
		<input type="checkbox" bind:checked={$store} class="checkbox ml-3 bg-base-100" />
	</label>
</div>
