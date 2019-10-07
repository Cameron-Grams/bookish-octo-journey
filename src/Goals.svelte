<script>
    export let goal;

    $: highlight = goal.includes( "!" ) 

</script>

<style>

  .heavy {
    color: red;
  }

</style>

<p>.....</p>


<h1 class:heavy="{ highlight }" >{ goal }</h1>

