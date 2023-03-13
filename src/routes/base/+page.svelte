<script>
    export let data;
</script>

<h1>Welcome to /base! Choose a link to see as slug</h1>

{#each data.items as choice}
    <div>
        <p>{choice.text}</p>
        <a href={`/base/${choice.name}`}>{choice.name}</a>
    </div>
{/each}

