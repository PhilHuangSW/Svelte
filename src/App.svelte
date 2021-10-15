<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "Phil";
	let age = 32;
	let jobTitle = "Software Engineer";
	let description = "lorem ipsum";
	let url = "";

	$: upperCaseName = name.toUpperCase();

	$: if (name === "Philip") {
		age = 23;
	}

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		name = "Philip";
	}

	function resetAge() {
		age = 32;
	}

	function nameInput(event) {
		const enteredValue = event.target.value;
		name = enteredValue;
	}
</script>

<h1>Hello {upperCaseName}! My age is {age}.</h1>
<button on:click={incrementAge}>Add Age</button>
<button on:click={resetAge}>Reset Age</button>
<button on:click={changeName}>Change Name</button>

<div>
	Name: <input type="text" bind:value={name} />
</div>

<div>
	Job Title: <input type="text" bind:value={jobTitle} />
</div>

<div>
	Description: <textarea bind:value={description} cols="50" rows="3" />
</div>

<div>
	Img Src: <input type="text" bind:value={url} />
</div>

<!-- <input type="text" value={name} on:input={nameInput} /> -->

<ContactCard {name} {jobTitle} {description} {url} />

<style>
	h1 {
		color: purple;
	}
</style>
