<script>
  export let data;
  console.log(data);

</script>

<br /><br />
<div class="createPoll">
  <h1>Welcome to my world dear {data.user}</h1>
  <a style="text-decoration: none;" href="/poll/create">Create Poll</a>
</div>

<style>
  .createPoll {
    position: relative;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 30px;
  }

  a:hover {
    color: red;
  }
</style>
