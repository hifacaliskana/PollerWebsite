<script>
  import { onMount } from "svelte";
  ///
  import OptionPage from "./optionPage.svelte";

  ///
  let optionsType = ["Multiple Choice", "Description"];
  let showTextArea = false;
  let optionList;
  let optionTypePoll;
  let newItem;
  let modal1;
  let question;
  let description = "";
  let currentQuestion = {};

  onMount(() => {
    optionTypePoll.selectedIndex = 0;
    modal1.style.display = "block";
  });

  ///
  function changeInMultipleChoice() {
    if (optionTypePoll.selectedIndex == 0) {
      modal1.style.display = "block";
    } else {
      modal1.style.display = "none";
    }
  }

  function addData() {
    currentQuestion = {
      question: question.value,
      description: description?.value ?? "",
      optionList: optionList.map((e) => e.text),
    };
    nextPage();
  }

  async function nextQuestion() {
    addData();
    console.log(currentQuestion);
    const res = await fetch("/poll/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(currentQuestion),
    });
    const data = await res.json();
    console.log(data);
    currentQuestion = {};
  }

  function nextPage() {
    question.value = "";
    showTextArea = false;
    newItem = "";
    optionList = [...optionList.splice(optionList.length, optionList.length)];
    optionTypePoll.selectedIndex = 0;
    modal1.style.display = "block";
  }

  async function sendAllData() {}
</script>

<!--    TITLE   -->
<div class="titleForPage">
  <stong>Create a Poll</stong><br />
  <span style="font-size:100px;">&#128512;</span>
</div>

<!--    FORM   -->
<form id="formGeneral" on:submit|preventDefault>
  <br /><label class="titleForForm" style="color:black" for="">Title</label><br
  /><br />
  <input
    bind:this={question}
    name="title"
    placeholder="Type your question here"
  /><br /><br /><br />

  <label class="titleForForm" style="color:black" for=""
    >Description (optionel)</label
  ><br /><br />

  <button
    style="background-color:rgb(9, 10, 42);"
    on:click={() => (showTextArea = !showTextArea)}
    ><strong>+</strong> Add Description</button
  ><br /><br />

  {#if showTextArea}
    <textarea name="" id="textArea" bind:this={description} /><br /><br />
  {/if}

  <strong style="color: black;">Question type</strong><br /><br />

  <select on:change={changeInMultipleChoice} bind:this={optionTypePoll}>
    {#each optionsType as value}<option {value}>{value}</option>{/each}
  </select><br /><br />

  <div class="modal1 notDisplay" bind:this={modal1}>
    <OptionPage bind:optionList bind:newItem />
  </div>
  <br /><br />

  <button on:click={nextQuestion}>Next Question</button>
  <button on:click={sendAllData}>Create</button>
</form>

<style>
  .titleForPage {
    position: relative;
    text-align: center;
    margin-top: 15px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.5em;
  }

  #formGeneral {
    position: relative;
    width: 60vw;
    height: 100vh;
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
