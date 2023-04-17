<script>
  import { goto } from "$app/navigation";
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

  function sendPoll() {
    goto(`/anonymous/${data.poll_id}/poll/finish`);
  }
</script>

<div class="pollName">
  <h1>{data.pollDetails.name}</h1>
</div>

<div class="pollTable">
  <br />
  {#each questions as item, index}
    <h2>{++index}. {item.question}</h2>
    <h3>
      {#each findOptions(item.id) as a}
        {#if item.type === "Multiple Choice"}
          <br /><input
            style="cursor:pointer"
            on:click={control}
            type="checkbox"
            name="fav_color"
            value="Red"
          />
          {a}<br />
        {:else if item.type === "Optional Choice"}
          <br /><input
            style="cursor:pointer"
            on:click={control}
            type="radio"
            name="fav_color"
            value="Red"
          />
          {a}<br />
        {/if}
      {/each}
    </h3>

    {#if findOptions(item.id).length === 0}
      <div class="descriptionArea" bind:this={descriptionArea}>
        <textarea name="description" id="textArea" bind:this={description} />
      </div>
    {/if}
  {/each}

  <br /><br /> <button on:click={sendPoll}><strong>Save</strong></button><br
  /><br /><br />
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

  input[type="checkbox"],
  [type="radio"] {
    transform: scale(1.5);
  }

  .pollName {
    position: relative;
    text-align: center;
  }
</style>
