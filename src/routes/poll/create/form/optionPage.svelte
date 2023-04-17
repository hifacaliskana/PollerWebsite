<script>
  export let optionList = [];
  export let newItem = "";

  function addToList() {
    if (newItem === "") return;
    optionList = [...optionList, { text: newItem }];
    newItem = "";
  }

  function removeFromList(index) {
    optionList.splice(index, 1);
    optionList = optionList;
  }
</script>

<input bind:value={newItem} type="text" placeholder="Option for poll.." /><br
/><br />
<button on:click={addToList} type="button"><strong>+ </strong>Add Option</button
>

<br />

{#each optionList as item, index}
  <span class:checked={item.status}><strong>{item.text}</strong></span>
  <button style="width:7.5vw" on:click={() => removeFromList(index)}>❌</button>
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
    width: 50vw;
  }

  input {
    width: 50vw;
    height: 5vh;
  }

  span {
    width: 50vw;
    margin-right: 10px;
  }
</style>
