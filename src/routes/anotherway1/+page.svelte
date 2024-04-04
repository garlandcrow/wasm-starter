<script lang="ts">
	import init from '$hellowasm';
</script>

{#await init()}
	loading wasm bundle...
	<!-- init also returns all the functions, so get here instead of importing -->
{:then { add }}
	<h1>Welcome to SvelteKit</h1>
	<span>wasm: 2 + 2 = {add(2, 2)}</span>
{/await}
