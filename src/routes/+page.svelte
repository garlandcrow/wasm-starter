<script lang="ts">
	import init, { add } from '../../hellowasm/pkg';
</script>

{#await init()}
	loading wasm bundle...
{:then _module}
	<h1>Welcome to SvelteKit</h1>
	<span>wasm: 2 + 2 = {add(2, 2)}</span>
{/await}
