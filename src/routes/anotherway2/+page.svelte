<script lang="ts">
	export let data;

	// then we can just get the function you want from the data and dont need to call init again
	const { add } = data.wasm;
</script>

<h1>Welcome to SvelteKit</h1>
<span>wasm: 2 + 2 = {add(2, 2)}</span>
