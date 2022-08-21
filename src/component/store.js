import { writable } from 'svelte/store';

export const amount = writable(0);
export const from = writable('BRL');
export const to = writable('BRL');
export const converted = writable(0);