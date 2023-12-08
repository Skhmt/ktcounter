<script>
	export let store;
</script>

<label class="form-control flex flex-row mt-3">
	<div class="label mr-1">
		<span class="label-text-alt"><slot></slot></span>
	</div>
	<select class="select select-bordered select-sm" bind:value={$store}>
		<option selected>0</option>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
	</select>
</label>
