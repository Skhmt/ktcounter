import { writable } from 'svelte/store';

export const store = {
	turn: storable('turn', '1'),
	p1: {
		crit_vp: storable('p1_crit_vp', 0),
		taco_name: storable('p1_taco_name', ''),
		taco_vp: storable('p1_taco_vp', 0),
		kill_vp: storable('p1_kill_vp', 0),
		cp: storable('p1_cp', 2),
		bespokePoints: storable('p1_bespokePoints', 0),
		name: storable('p1_name', ''),
		faction: storable('p1_faction', ''),
		primary: storable('p1_primary', ''),
		init: storable('p1_init', false),
	},
	p2: {
		crit_vp: storable('p2_crit_vp', 0),
		taco_name: storable('p2_taco_name', ''),
		taco_vp: storable('p2_taco_vp', 0),
		kill_vp: storable('p2_kill_vp', 0),
		cp: storable('p2_cp', 2),
		bespokePoints: storable('p2_bespokePoints', 0),
		name: storable('p2_name', ''),
		faction: storable('p2_faction', ''),
		primary: storable('p2_primary', ''),
		init: storable('p2_init', false),
	},
	reset() {
		this.turn.default();
		for (let x of Object.entries(this.p1)) {
			x[1].default();
		}
		for (let y of Object.entries(this.p2)) {
			y[1].default();
		}
	}
};

function storable(name, defaultVal) {
	// set default in localStorage if it doesn't exist 
	if (!localStorage.getItem(name)) {
		const dataString = JSON.stringify(defaultVal);
		localStorage.setItem(name, dataString);
	}

	const privateStore = writable(JSON.parse(localStorage.getItem(name)));

	// whenever store updates, set localStorage
	privateStore.subscribe(newVal => {
		localStorage.setItem(name, JSON.stringify(newVal));
	});

	// pass through store's methods
	const { subscribe, set, update } = privateStore;
	return {
		subscribe,
		set,
		update,
		default() {
			privateStore.set(defaultVal);
		}
	};
}