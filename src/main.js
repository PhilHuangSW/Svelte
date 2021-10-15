import App from './App.svelte';
import Assignment from './Assignment.svelte';
import Passwords from './Passwords.svelte';
import Product from './Product.svelte';

const app = new App({
	target: document.body,
});

// const app = new Assignment({
// 	target: document.body
// });

// const app = new Passwords({
// 	target: document.body
// });

// const app = new Products({
// 	target: document.body
// });

export default app;