<script>
  let courseGoal = "Course Goals";
  let color = "";

  function exclamation() {
    let reg = /[!]/;
    if (reg.test(courseGoal)) {
      console.log("woo!");
      color = "color: red";
      console.log(color);
    } else {
      color = "";
    }
  }
</script>

<div>
  <input type="text" bind:value={courseGoal} on:input={exclamation} />

  <h1 style={color}>
    {courseGoal}
  </h1>
</div>

<style>
</style>
