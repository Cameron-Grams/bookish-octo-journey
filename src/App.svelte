<script>
    import Contact from './ContactCard.svelte';
    import Goals from './Goals.svelte';

	let age = 50;
    let name = "Cam";
    let job = "";
    let roleDescription = "";
    let image = "https://images-na.ssl-images-amazon.com/images/I/51i5f642ZHL._UL1018_.jpg"
    let goalDescription = "";

//    let image = false;

    $:nameUpper = name.toUpperCase()

    function changeName(){
        name = "Grambo"
    }

    function increment(){
        console.log( age );
         
        age = age + 1;
        return age;
    }

    function eventInput( event ){
        goalDescription = event.target.value;
    }

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello, {nameUpper} is {age}!</h1>
<button on:click="{ increment }">Older</button>
<button on:click="{changeName}">Change</button>
<!-- <input type="text" value="{ name }" on:input="{ eventInput }" > -->
<input type="text" bind:value="{ name }" >
<input type="text" bind:value="{ job }" >
<textarea rows="3" bind:value="{ roleDescription }" ></textarea>
<input type="text" bind:value="{ image }" >

<Contact 
    userName={ name } 
    jobTitle={job}
    { roleDescription }
    userImage={ image }
/>

<input type="text" bind:value="{ goalDescription }" on:input="{ eventInput }" >

<Goals goal="{ goalDescription }" />








