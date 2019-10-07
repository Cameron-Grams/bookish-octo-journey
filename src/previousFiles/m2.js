import App from './App.svelte';
import Contact from './Contact.svelte';

export const app = new App({
	target: document.body,
});

export const contact = new Contact({
    target: document.div,
});

