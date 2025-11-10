import type { PageLoad } from './$types';
import type { Component } from 'svelte';

type PostModule = { default: Component };

export const load: PageLoad = async ({ params }) => {
	const loaders = import.meta.glob('/src/lib/posts/*.{svx,svelte}') as Record<
		string,
		() => Promise<unknown>
	>;
	const base = `/src/lib/posts/${params.slug}`;
	const loader = (loaders[`${base}.svx`] ?? loaders[`${base}.svelte`])!;
	const module = (await loader()) as PostModule;
	return { content: module.default };
};
