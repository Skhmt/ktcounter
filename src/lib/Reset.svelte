<script>
// @ts-nocheck

	import Fa from 'svelte-fa';
	import { faTrashCan } from '@fortawesome/free-solid-svg-icons/index.js';

	import { store } from './stores.js';

	function resetCounter() {
		store.reset();
		window?.navigator?.vibrate?.(100);
	}
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn btn-secondary pt-4" title="Reset Counter" onclick="reset_modal.showModal()">
	<Fa icon={faTrashCan} />
</button>

<dialog id="reset_modal" class="modal justify-center content-center">
	<div class="modal-box min-w-[300px] ">
		<h3 class="font-bold text-lg">Reset all scores to default?</h3>
		<p class="py-4">This can't be undone.</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn mr-3" on:click={resetCounter}>Reset</button>
				<button class="btn btn-accent">Cancel</button>
			</form>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop w-[90dvw] h-[90dvh]">
		<button>close</button>
	</form>
</dialog>