<script>
  import { onMount } from "svelte";
  import hobbyStore from ".../hobby-store.js";

  let hobbies = [];
  let hobbyInput;
  let isLoading = true;

  onMount(() => {
    isLoading = true;
    fetch("https://meet-2a75b-default-rtdb.firebaseio.com/hobbies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed GETting data");
        }
        isLoading = false;
        return res.json();
      })
      .then((data) => {
        // hobbies = Object.values(data); //just getting the data
        // let keys = Object.keys(data); //just getting the keys
        // for (const key in data) {
        //   console.log(`key: ${key} -- data: ${data[key]}`);
        // } //gets everything
        hobbyStore.setHobbies(Object.values(data));
      })
      .catch((err) => {
        isLoading = false;
        console.log(err);
      });
  });

  // let getHobbies = fetch(
  //   "https://meet-2a75b-default-rtdb.firebaseio.com/hobbies.json"
  // )
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error("Failed GETting data");
  //     }
  //     isLoading = false;
  //     return res.json();
  //   })
  //   .then((data) => {
  //     hobbies = Object.values(data); //just getting the data
  //     let keys = Object.keys(data); //just getting the keys
  //     for (const key in data) {
  //       console.log(`key: ${key} -- data: ${data[key]}`);
  //     } //gets everything
  //     return hobbies;
  //   })
  //   .catch((err) => {
  //     isLoading = false;
  //     console.log(err);
  //   });

  // onMount(() => {
  //   isLoading = true;
  //   fetch("https://meet-2a75b-default-rtdb.firebaseio.com/hobbies.json")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Failed GETting data");
  //       }
  //       isLoading = false;
  //       return res.json();
  //     })
  //     .then((data) => {
  //       hobbies = Object.values(data); //just getting the data
  //       let keys = Object.keys(data); //just getting the keys
  //       for (const key in data) {
  //         console.log(`key: ${key} -- data: ${data[key]}`);
  //       } //gets everything
  //     })
  //     .catch((err) => {
  //       isLoading = false;
  //       console.log(err);
  //     });
  // });

  function addHobby() {
    // hobbies = [...hobbies, hobbyInput.value];
    hobbyStore.addHobby(hobbyInput.value);

    isLoading = true;
    fetch("https://meet-2a75b-default-rtdb.firebaseio.com/hobbies.json", {
      method: "POST",
      body: JSON.stringify(hobbyInput.value),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        isLoading = false;
        if (!res.ok) {
          throw new Error("Failed POSTing Data");
        }
        hobbyInput.value = "";
        // alert("Data Saved!");
        // res.json() => Promise with an object that contains the id
      })
      .catch((err) => {
        isLoading = false;
        console.log(err);
      });
  }

  // function addHobby() {
  //   hobbies = [...hobbies, hobbyInput.value];

  //   isLoading = true;
  //   fetch("https://meet-2a75b-default-rtdb.firebaseio.com/hobbies.json", {
  //     method: "POST",
  //     body: JSON.stringify(hobbyInput.value),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       isLoading = false;
  //       if (!res.ok) {
  //         throw new Error("Failed POSTing Data");
  //       }
  //       hobbyInput.value = "";
  //       // alert("Data Saved!");
  //     })
  //     .catch((err) => {
  //       isLoading = false;
  //       console.log(err);
  //     });
  // }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby (hobby)}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}

<!-- {#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    {#each hobbyData as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await} -->
