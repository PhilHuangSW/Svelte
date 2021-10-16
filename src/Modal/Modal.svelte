<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
  let agreed = false;

  function closeModal() {
    dispatch("close-modal");
  }
</script>

<div class="backdrop" on:click={closeModal} />

<div class="modal">
  <header>
    <slot name="header" />
  </header>
  <div class="content">
    <slot />
  </div>
  <div>
    <p>Agree to terms and conditions before continuing.</p>
    {#if !agreed}
      <button on:click={() => (agreed = true)}>Agree</button>
    {:else}
      <button on:click={() => (agreed = false)}>Disagree</button>
    {/if}
  </div>
  <footer>
    <slot name="footer" didAgree={agreed}>
      <button on:click={closeModal} disabled={!agreed}>Close</button>
    </slot>
  </footer>
</div>

<style>
  header {
    border-bottom: 1px solid #000;
  }

  .backdrop {
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
</style>
