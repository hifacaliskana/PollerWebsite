<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  let url = ``;
  onMount(() => (url = window.location.href));
  export let data;

  function handleLogout() {
    goto("/logout");
  }

  const { totalPolls } = data;
</script>

<br /><a class="logOut" on:click|preventDefault={handleLogout} href="/"
  ><strong>Log Out</strong></a
>

<div class="polls">
  <h1>Dear {data.userName}, polls you've created before 🥳</h1>

  {#each totalPolls as item}
    <h2>
      <a href="./existed_polls/poll_page" style="text-decoration: none;"
        >{item.name}</a
      >
    </h2>
  {/each}
</div>

<style>
  .polls {
    position: relative;
    text-align: center;
    color: black;
    font-weight: bold;
  }
  .logOut {
    padding-right: 10px;
    float: right;
    text-decoration: none;
  }
</style>
