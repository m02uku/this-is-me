<script lang="ts">
	import { base } from '$app/paths';
	import Contents from '$lib/components/Contents.svelte';
	import Links from '$lib/components/Links.svelte';
</script>

<svelte:head>
	<title>TOP</title>
</svelte:head>

<main>
	<!-- <h1>m02uku</h1> -->

	<a href="{base}/posts/CV">CV</a>

	<Contents />

	<!-- <hr /> -->

	<Links />
</main>
