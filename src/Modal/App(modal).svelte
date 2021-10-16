<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

  let products = [
    {
      id: "p1",
      productTitle: "A Book",
      price: 9.99,
    },
    {
      id: "p2",
      productTitle: "An Apple",
      price: 1.99,
    },
  ];
  let showModal = false;
  let closeable = false;

  function addToCart(event) {
    // console.log(event);
    alert(`Added ${products[event].productTitle} to Cart!`);
  }
  function deleteFromCart(event) {
    // console.log(event);
    alert(`Deleted ${products[event].productTitle} from Cart!`);
  }
</script>

{#each products as product, i}
  <Product
    {...product}
    on:add-to-cart={addToCart.bind(this, i)}
    on:delete-from-cart={deleteFromCart.bind(this, i)}
  />
{/each}

<button on:click={() => (showModal = true)}> Show Modal </button>

{#if showModal}
  <Modal on:close-modal={() => (showModal = false)} let:didAgree={closeable}>
    <h1 slot="header">Hi!</h1>
    <h2>how are you?</h2>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closeable}
      >Confirm
    </button>
  </Modal>
{/if}
