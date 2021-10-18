<script context="module">
  console.log("Runs once!");
</script>

<script>
  export let member;
  console.log("Runs multiple times!");
</script>

<h1>{member.name}</h1>
{#if member.isParent}
  <ul>
    {#each member.children as child}
      <svelte:self member={child} />
    {/each}
  </ul>
{/if}
