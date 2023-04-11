<script>
    import Modal from "./modal.svelte";
    export let data;
   
</script>

<div class="title">

<h1>Question</h1>

<!--<h1>Question {data.login}</h1>-->

</div>

<Modal {data}/>

<style>
    .title {
        position: relative;
        width: 60vw;
        text-align: center;
        margin-left: 20vw;
        border-radius: 5px;
    }
</style>