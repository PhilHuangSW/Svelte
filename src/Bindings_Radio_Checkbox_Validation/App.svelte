<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  let val = "";
  let selectedOption = 1;
  $: console.log(selectedOption);

  let favColor = "red";
  // $: console.log(favColor);

  let Redgb = 1;
  // $: console.log(Redgb);
  let rGreenb = 25;
  let rgBlue = 10;

  let styles = {
    bg: `${Redgb}`,
  };

  $: console.log(styles.bg);
  $: cssVarStyles = Object.entries(styles)
    .map(([key, value]) => `--${key}:rgb(${value}, 1, 1)`)
    .join(";");

  let singleFavColor = "red";
  $: console.log(singleFavColor);
  // bind:value={val} does the exact same thing as below
  // $: console.log(val);
  // function setValue(event) {
  //   val = event.target.value;
  // }
  // function redTrigger() {
  //   Redgb = Redgb;
  // }
  // $: console.log(Redgb);
</script>

<body>
  <!-- // same as below -->
  <!-- <input type="text" value={val} on:input={setValue} /> -->
  <input type="text" bind:value={val} />
  <h1>{val}</h1>

  <Toggle bind:chosenOption={selectedOption} />

  <label>
    <input type="range" bind:value={Redgb} min="0" max="255" />
    <h1>{Redgb} - Red</h1>
  </label>
  <label>
    <input type="range" bind:value={rGreenb} min="0" max="255" />
    <h1>{rGreenb} - Green</h1>
  </label>
  <label>
    <input type="range" bind:value={rgBlue} min="0" max="255" />
    <h1>{rgBlue} - Blue</h1>
  </label>

  <select bind:value={singleFavColor}>
    <option value="green">Green</option>
    <option value={Redgb}>Red</option>
    <!-- objects are fine too! -->
    <option value="blue">Blue</option>
  </select>
</body>

<style>
  body {
    background-color: var(--bg, white);
  }
  /* body.red {
    background-color: rgba(255, 0, 0, 0.5);
  }
  body.green {
    background-color: rgba(0, 255, 0, 0.5);
  }
  body.blue {
    background-color: rgba(0, 0, 255, 0.5);
  } */
</style>
