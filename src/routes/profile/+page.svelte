<script>
  import { goto } from "$app/navigation";

  export let data;
  console.log(data);

  function handleLogout() {
    goto("/logout");
  }
</script>

<br /><a class="logOut" on:click|preventDefault={handleLogout} href="/"
  ><strong>Log Out</strong></a
>

<br /><br />
<div class="createPoll">
  <h1>Welcome to my world dear {data.userName} 🤩</h1>
  <a style="text-decoration: none;" href="/poll/create">Create Poll</a>
  <br /><br />
  <a style="text-decoration: none;" href="/poll/existed_polls">My Polls</a>
</div>

<style>
  .createPoll {
    position: relative;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }

  a:hover {
    color: red;
  }

  .logOut {
    padding-right: 10px;
    float: right;
    text-decoration: none;
  }
</style>
