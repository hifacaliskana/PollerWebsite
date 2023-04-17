<script>
  import { onMount } from "svelte";
  let url = ``;
  let lastSlash = 0;
  let id = "";
  let poll_id;
  onMount(
    () => (
      (url = window.location.href),
      (lastSlash = url.lastIndexOf("/")),
      (id = url.substring(lastSlash + 1))
    )
  );
</script>

<br /><br />
<form class="form" action="./{id}" method="POST">
  <input
    class="poll_id notDisplay"
    type="text"
    name="pollId"
    id=""
    bind:this={poll_id}
    bind:value={id}
  />
  <button type="submit">Start the poll</button>
</form>

<style>
  .form {
    position: relative;
    text-align: center;
    color: rgb(158, 9, 64);
    overflow: auto;
  }
  button {
    background-color: rgb(14, 88, 39);
    color: white;
    padding: 14px 20px;
    border-radius: 5px;
    margin: 7px 0;
    font-size: 18px;
    cursor: pointer;
  }
</style>
