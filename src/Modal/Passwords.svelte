<script>
  let password = "";
  let passwords = [];
  let passwordStatus = "short";

  $: if (password.length < 5) {
    passwordStatus = "short";
  } else if (password.length > 10) {
    passwordStatus = "long";
  } else {
    passwordStatus = "valid";
  }

  function checkPassword() {
    if (passwordStatus === "valid") {
      passwords = [...passwords, password];
    }
  }

  function deletePass(index) {
    // passwords.splice(index, 1);
    // passwords = passwords;
    passwords = passwords.filter((pw, idx) => {
      return idx !== index;
    });
  }
</script>

<div>
  <input type="password" placeholder="password" bind:value={password} />
  <button on:click={checkPassword}>Submit Password</button>
</div>

{#if passwordStatus === "valid"}
  <p>Password: {password}</p>
{:else if passwordStatus === "short"}
  <p>Password is too short, try again.</p>
{:else if passwordStatus === "long"}
  <p>Password is too long, try again.</p>
{/if}

<ul>
  {#each passwords as pass, i (pass)}
    <li on:click={deletePass.bind(this, i)}>{pass}</li>
  {/each}
</ul>

<style>
  div {
    padding-top: 2rem;
    padding-left: 2rem;
  }
</style>
