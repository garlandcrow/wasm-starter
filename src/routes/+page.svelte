<script lang="ts">
	// import init and the function you want
	import init, { add } from '$hellowasm';
</script>

{#await init()}
	loading wasm bundle...
	<!-- dont need any of what init returns -->
{:then _module}
	<h1>Welcome to SvelteKit</h1>
	<span>wasm: 2 + 2 = {add(2, 2)}</span>
{/await}
