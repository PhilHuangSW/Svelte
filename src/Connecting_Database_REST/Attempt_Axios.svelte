<script>
  import axios from "axios";

  let hobbies = [];
  let hobbyInput;
  let isLoading = true;

  function addHobby() {
    isLoading = true;
    console.log(hobbyInput.value);
    const options = {
      url: "https://meet-2a75b-default-rtdb.firebaseio.com/newHobbies",
      method: "POST",
      data: {
        hobby: hobbyInput.value,
      },
    };
    console.log(options);
    axios
      .request(options)
      .then((res) => {
        console.log("entered then");
        console.log(res);
      })
      .catch((err) => {
        console.log("entered error");
        console.log(err);
      });
  }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}
