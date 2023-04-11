<script>
  import { onMount } from "svelte";

  let url = ``;

  onMount(() => (url = window.location.href));

  export let data;
  const { questions } = data;
  const { options } = data;
  let cnt = false;

  let descriptionArea;
  let description = "";

  function findOptions(question_id) {
    let arr = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].question_id === question_id) {
        arr.push(options[i].option);
      }
    }

    return arr;
  }

  function control() {
    return !cnt;
  }
</script>

<div class="pollName">
  <h1>{data.poll_name}</h1>
</div>


<div class="pollTable">
  <br />
  {#each questions as item, index}
    <h2>{++index}. {item.question}</h2>
    <h3>
      {#each findOptions(item.id) as a}
        <br /><input style="cursor:pointer"
          on:click={control}
          type="checkbox"
          name="fav_color"
          value="Red"
        />
          {a}<br />
      {/each}
    </h3>

    {#if findOptions(item.id).length === 0}
      <div class="descriptionArea" bind:this={descriptionArea}>
        <textarea name="description" id="textArea" bind:this={description} />
      </div>
    {/if}
  {/each}

  <br /><br /> <button>Share the poll</button><br><br><br>
</div>

<style>
  .pollTable {
    position: relative;
    text-align: center;
    color: rgb(158, 9, 64);
    overflow: auto;
  }

  #textArea {
    resize: none;
    width: 30vw;
    height: 7vh;
  }

  button {
    cursor: pointer;
    background-color: rgb(14, 88, 39);
    color: white;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
  }

  .pollName {
    position: relative;
    text-align: center;
  }

</style>
