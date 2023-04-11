<script>
  export let data;
  ///
  import "$lib/global.css";
  ///
  import { onMount } from "svelte";
  ///
  import OptionPage from "./optionPage.svelte";
  ///
  import { goto } from "$app/navigation";
  ///

  let optionsType = ["Multiple Choice", "Optional Choice" ,"Description"];
  let optionList;
  let optionTypePoll;
  let newItem;
  let modal1;
  let modalDescription;
  let question;
  let description = "";
  let isDescription = false;

  let trickForSendSession;
  let trickForSendPollName;
  let trickForSendOptions;

  let sessionId = data.login;
  let pollName = data.pollName;

  let options;

  $: optionListValue = JSON.stringify(optionList);



  onMount(() => {
    optionTypePoll.selectedIndex = 0;
    modal1.style.display = "block";
  });

  ///

  function changeInMultipleChoice() {
    if (optionTypePoll.selectedIndex == 0 || optionTypePoll.selectedIndex == 1) {
      modal1.style.display = "block";
    } else {
      modal1.style.display = "none";
    }
  }

  ///

  function showDescription() {
    if (!isDescription) {
      isDescription = true;
      modalDescription.style.display = "block";
    } else {
      isDescription = false;
      modalDescription.style.display = "none";
    }
  }

  ///

  async function sendAllData() {
    goto("/poll/submit");
  }
  
</script>

<!--    FORM   -->
<form id="formGeneral" action="/poll/create/form" method="POST">
  <input
    class="trickForSendSession notDisplay"
    type="text"
    name="session"
    id=""
    bind:value={sessionId}
    bind:this={trickForSendSession}
  />
  <input
    class="trickForSendPollName notDisplay"
    type="text"
    name="pollName"
    id=""
    bind:value={pollName}
    bind:this={trickForSendPollName}
  />

  <br /><label class="titleForForm" style="color:black" for="">Question</label
  ><br /><br />
  <input
    bind:this={question}
    name="question"
    placeholder="Type your question here"
    required
  /><br /><br /><br />

  <label class="titleForForm" style="color:black" for=""
    >Description (optionel)</label
  ><br /><br />

  <button
    style="background-color:rgb(9, 10, 42);"
    type="button"
    on:click={showDescription}><strong>+</strong> Add Description</button
  ><br /><br />

  <div class="modalDescription notDisplay" bind:this={modalDescription}>
    <textarea name="description" id="textArea" bind:this={description} />
  </div>
  <br /><br />

  <strong style="color: black;">Question type</strong><br /><br />

  <select on:change={changeInMultipleChoice} bind:this={optionTypePoll}>
    {#each optionsType as value}<option {value}>{value}</option>{/each}
  </select><br /><br />

  <div class="modal1" bind:this={modal1}>
    <OptionPage bind:optionList bind:newItem />
  </div>

  <input
    class="trickForSendOptions notDisplay"
    type="text"
    name="options"
    id=""
    bind:value={optionListValue}
    bind:this={trickForSendOptions}
  />

  <br /><br />
  <button type="submit">Next Question</button>
  <button on:click={sendAllData}>Submit</button>
</form>

<style>
  #formGeneral {
    position: relative;
    width: 60vw;
    text-align: center;
    margin-left: 20vw;
    border-radius: 5px;
  }

  #textArea {
    resize: none;
    width: 20vw;
    height: 6vh;
  }

  button {
    background-color: rgb(72, 6, 39);
    width: 15vw;
    color: white;
    size: medium;
    cursor: pointer;
  }

  input {
    width: 20vw;
    height: 5vh;
  }
</style>
