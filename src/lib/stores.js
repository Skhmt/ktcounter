import { writable } from 'svelte/store';

// app state

export const showSettings = writable(false);

// overall game state

export const turn = writable(1);
export const total_time = writable(50*60*1000);

// p1 game state

export const p1_vp = writable(0);
export const p1_cp = writable(0);
export const p1_ellapsed_time = writable(0);
export const p1_last_time = writable(0);
export const p1_isRunning = writable(false);

// p2 game state

export const p2_vp = writable(0);
export const p2_cp = writable(0);
export const p2_ellapsed_time = writable(0);
export const p2_last_time = writable(0);
export const p2_isRunning = writable(false);

export const reset = () => {
    turn.set(1);
    p1_vp.set(0);
    p1_cp.set(3);
    
    p2_vp.set(0);
    p2_cp.set(3);
   
    p1_ellapsed_time.set(0);
    p1_isRunning.set(false);

    p2_ellapsed_time.set(0);
    p2_isRunning.set(false);
};

reset();