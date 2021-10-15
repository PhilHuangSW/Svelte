<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "";
	let age = 32;
	let jobTitle = "";
	let description = "";
	let url = "";
	let formState = "";
	let contactCards = [];

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

	function showCard() {
		if (
			name.trim().length === 0 ||
			jobTitle.trim().length === 0 ||
			description.trim().length === 0 ||
			url.trim().length === 0
		) {
			formState = "invalid";
		} else {
			formState = "good";
			contactCards = [
				...contactCards,
				{
					name: name,
					jobTitle: jobTitle,
					description: description,
					url: url,
				},
			];
		}
	}
</script>

<h1>Hello {upperCaseName}! My age is {age}.</h1>
<button on:click={incrementAge}>Add Age</button>
<button on:click={resetAge}>Reset Age</button>
<button on:click={changeName}>Change Name</button>

<div>
	Name: <input type="text" placeholder="name" bind:value={name} />
</div>

<div>
	Job Title: <input type="text" placeholder="job title" bind:value={jobTitle} />
</div>

<div>
	Description: <input
		type="text"
		placeholder="description"
		bind:value={description}
	/>
</div>

<div>
	Img Src: <input type="text" placeholder="url" bind:value={url} />
</div>

<button on:click={showCard}>Create Card</button>

<!-- <input type="text" value={name} on:input={nameInput} /> -->
{#if formState === "good"}
	<p>Created new card!</p>
{:else if formState === "invalid"}
	<p>Invalid form.</p>
{/if}

{#each contactCards as card, index}
	<h2># {index + 1}</h2>
	<ContactCard
		name={card.name}
		jobTitle={card.jobTitle}
		description={card.description}
		url={card.url}
	/>
{:else}
	<p>Please start adding some contacts!</p>
{/each}

<style>
	h1 {
		color: purple;
	}
</style>
