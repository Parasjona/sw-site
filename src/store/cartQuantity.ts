import { persisted } from 'svelte-local-storage-store';

export const cartQuantity = persisted('cartQuantity', 0);
