import { writable } from 'svelte/store';

export const store = {
	turn: storable('turn', '1'),
	p1: {
		tp1_vp: storable('p1_tp1_vp', 0),
		tp2_vp: storable('p1_tp2_vp', 0),
		tp3_vp: storable('p1_tp3_vp', 0),
		tp4_vp: storable('p1_tp4_vp', 0),
		taco1_name: storable('p1_taco1_name', ''),
		taco2_name: storable('p1_taco2_name', ''),
		taco3_name: storable('p1_taco3_name', ''),
		taco1_vp1: storable('p1_taco1_vp1', false),
		taco2_vp1: storable('p1_taco2_vp1', false),
		taco3_vp1: storable('p1_taco3_vp1', false),
		taco1_vp2: storable('p1_taco1_vp2', false),
		taco2_vp2: storable('p1_taco2_vp2', false),
		taco3_vp2: storable('p1_taco3_vp2', false),
		cp: storable('p1_cp', 3),
		bespokePoints: storable('p1_bespokePoints', 0),
		name: storable('p1_name', ''),
		faction: storable('p1_faction', ''),
		painted: storable('p1_painted', true),
		init: storable('p1_init', false),
	},
	p2: {
		tp1_vp: storable('p2_tp1_vp', 0),
		tp2_vp: storable('p2_tp2_vp', 0),
		tp3_vp: storable('p2_tp3_vp', 0),
		tp4_vp: storable('p2_tp4_vp', 0),
		taco1_name: storable('p2_taco1_name', ''),
		taco2_name: storable('p2_taco2_name', ''),
		taco3_name: storable('p2_taco3_name', ''),
		taco1_vp1: storable('p2_taco1_vp1', false),
		taco2_vp1: storable('p2_taco2_vp1', false),
		taco3_vp1: storable('p2_taco3_vp1', false),
		taco1_vp2: storable('p2_taco1_vp2', false),
		taco2_vp2: storable('p2_taco2_vp2', false),
		taco3_vp2: storable('p2_taco3_vp2', false),
		cp: storable('p2_cp', 3),
		bespokePoints: storable('p2_bespokePoints', 0),
		name: storable('p2_name', ''),
		faction: storable('p2_faction', ''),
		painted: storable('p2_painted', true),
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
	const {subscribe, set, update} = privateStore;
	return {
		subscribe,
		set,
		update,
		default() {
			privateStore.set(defaultVal);
		}
	};
}