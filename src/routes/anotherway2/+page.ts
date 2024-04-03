import type { PageLoad } from './$types';
import init from '../../../hellowasm/pkg';

export const ssr = false;

export const load: PageLoad = async function () {
	return {
		// use sveltekit page load to call init so we dont have to in the page
		wasm: await init()
	};
};
