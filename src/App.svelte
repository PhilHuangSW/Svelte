<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";

  let y;
  let mouse;
  let title = "My App";

  $: console.log(y);
  $: console.log(mouse);

  let familyStructure = [
    {
      isParent: true,
      name: "Chris",
      children: [
        {
          isParent: true,
          name: "Moe",
          children: [{ isParent: false, name: "Julie" }],
        },
      ],
    },
    { isParent: false, name: "Anna" },
  ];

  // let showProduct = true;
  let renderedComponent = { cmp: Product, title: "Test Product", id: "p1" };

  // function toggle() {
  //   showProduct = !showProduct;
  // }
  function toggle() {
    if (renderedComponent === Product) {
      renderedComponent = { cmp: CartItem, title: "Another Product", id: "p2" };
    } else {
      renderedComponent = { cmp: Product, title: "Test Product", id: "p1" };
    }
  }

  function switchTitle() {
    title = "Switched app!";
  }
</script>

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter={mouse} />

<!-- Can set the right META tags here for SEO -->
<svelte:head>
  <title>{title}</title>
  <link />
</svelte:head>

<button on:click={switchTitle}>Switch Title</button>

<div>
  <button on:click={toggle}>Toggle Display</button>

  <svelte:component
    this={renderedComponent.cmp}
    title={renderedComponent.title}
    id={renderedComponent.id}
  />

  {#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
  {/each}
  <!-- Instead of THIS BELOW, use the svelte:component ABOVE-->
  <!-- {#if showProduct}
  <Product title="Test Product" id="p1" />
{:else}
  <CartItem title="Another Product" id="p2" />
{/if} -->
</div>

<style>
  div {
    height: 3000px;
  }
</style>
