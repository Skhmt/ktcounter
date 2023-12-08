<script>
// @ts-nocheck

	import Fa from 'svelte-fa';
	import { faTrashCan } from '@fortawesome/free-solid-svg-icons/index.js';

	import { store } from './stores.js';

	let reset = document.getElementById('reset_modal');

	function resetCounter() {
		store.reset();
		window?.navigator?.vibrate?.(100);
	}
</script>

<!-- <button class="btn btn-secondary pt-4" on:click={reset.showModal}  title="Reset Counter">
	<Fa icon={faTrashCan} />
</button> -->

<!-- Open the modal using ID.showModal() method -->
<button class="btn btn-secondary pt-4" title="Reset Counter" onclick="my_modal_5.showModal()">
	<Fa icon={faTrashCan} />
</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Clear all scores?</h3>
		<p class="py-4">Selecting "Reset" will wipe out all the scores saved.</p>
		<p>This cannot be undone.</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn mr-3" on:click={resetCounter}>Reset</button>
				<button class="btn btn-accent">Cancel</button>
			</form>
		</div>
	</div>
</dialog>