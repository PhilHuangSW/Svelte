<script>
  import { createEventDispatcher } from "svelte";

  export let productTitle;
  export let price;
  export let bestseller = false;
  export let id;

  const dispatch = createEventDispatcher();

  function addToCart() {
    dispatch("add-to-cart");
  }

  function deleteFromCart() {
    dispatch("delete-from-cart");
  }
</script>

<article>
  <h1>{productTitle}</h1>
  <h2>${price}</h2>
  {#if bestseller}
    <h4>BESTSELLER!</h4>
  {/if}
  <button on:click={addToCart}>Add to Cart</button>
  <button on:click={deleteFromCart}>Delete</button>
</article>
