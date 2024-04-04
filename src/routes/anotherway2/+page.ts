import init from '$hellowasm';

export const ssr = false;

export async function load({ params }) {
	return {
		// use sveltekit page load to call init so we dont have to in the page
		wasm: await init()
	};
}
