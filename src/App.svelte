<script>
	let name = "Phil";
	let age = 32;

	function incrementAge() {
		age += 1;
	}

	function resetAge() {
		age = 32;
	}
</script>

<h1>Hello {name}! My age is {age}.</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={resetAge}>Reset Age</button>

<style>
	h1 {
		color: purple;
	}
</style>
