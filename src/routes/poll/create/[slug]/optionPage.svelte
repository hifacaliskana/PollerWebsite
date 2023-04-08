<script>
  export let optionList = [];
  export let newItem = "";

  function addToList() {
    if (newItem === "") return;
    optionList = [...optionList, { text: newItem }];
    console.log(" 🍟  ");
    console.log(optionList);
    newItem = "";
  }

  function removeFromList(index) {
    optionList.splice(index, 1);
    optionList = optionList;
  }
</script>

<input bind:value={newItem} type="text" placeholder="Option for poll.." /><br />
<button on:click={addToList} type="button">Add Option</button>

<br />

{#each optionList as item, index}
  <span class:checked={item.status}>{item.text}</span>
  <button on:click={() => removeFromList(index)}>❌</button>
  <br />
{/each}

<style>
  .checked {
    text-decoration: line-through;
  }

  button {
    cursor: pointer;
    background-color: rgb(9, 10, 42);
    color: white;
    margin-top: 10px;
  }

  input {
    width: 20vw;
    height: 5vh;
  }
</style>
