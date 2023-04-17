<script>
  import { goto } from "$app/navigation";
  export let data;
  let trickForSendSession;
  let sessionId = data.sessionId;

  function handleLogout() {
    goto("/logout");
  }
</script>

<br /><a class="logOut" on:click|preventDefault={handleLogout} href="/"
  ><strong>Log Out</strong></a
>

<div class="titleForPage">
  <stong>Create a Poll</stong><br />
  <span style="font-size:100px;">&#128512;</span>
</div>

<form id="formGeneral" action="./create" method="POST">
  <input
    class="trickForSendSession notDisplay"
    type="text"
    name="session"
    id=""
    bind:value={sessionId}
    bind:this={trickForSendSession}
  />
  <div class="pollNameTitle">
    <br /><label style="color:black" for="">Name of Poll</label><br /><br />
    <input
      type="input"
      name="title"
      placeholder="Type your name of poll here"
      required
    /><br /><br />
  </div>

  <button type="submit">Start</button>
</form>

<style>
  #formGeneral {
    position: relative;
    width: 60vw;
    text-align: center;
    margin-left: 20vw;
    border-radius: 5px;
  }

  .titleForPage {
    position: relative;
    text-align: center;
    margin-top: 15px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.5em;
  }

  input {
    width: 20vw;
    height: 5vh;
  }

  button {
    background-color: rgb(72, 6, 39);
    width: 15vw;
    color: white;
    size: medium;
    cursor: pointer;
  }

  .logOut {
    padding-right: 10px;
    float: right;
    text-decoration: none;
  }
</style>
