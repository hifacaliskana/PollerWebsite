<script>
  import { goto } from "$app/navigation";
  import Modal from "./modal.svelte";
  export let data;

  function handleLogout() {
    goto("/logout");
  }
</script>

<br /><a class="logOut" on:click|preventDefault={handleLogout} href="/"
  ><strong>Log Out</strong></a
>

<div class="title">
  <h1>Question</h1>

  <!--<h1>Question {data.login}</h1>-->
</div>

<Modal {data} />

<style>
  .title {
    position: relative;
    width: 60vw;
    text-align: center;
    margin-left: 20vw;
    border-radius: 5px;
  }

  .logOut {
    padding-right: 10px;
    float: right;
    text-decoration: none;
  }
</style>
