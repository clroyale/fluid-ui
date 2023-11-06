<script lang="ts">
	export let containerType: 'div' | 'section' | 'nav' | 'footer' = 'div';
	export let defaultClass: string = 'container';
	export let containerClass: string = '';
	export let overrideClass: boolean = false;
	export let id: string = '';
</script>

{#if containerType == 'div'}
	<div class={overrideClass ? containerClass : defaultClass + ' ' + containerClass} {id}>
		<slot />
	</div>
{:else if containerType == 'section'}
	<section class={overrideClass ? containerClass : defaultClass + ' ' + containerClass} {id}>
		<slot />
	</section>
{:else if containerType == 'nav'}
	<nav class={overrideClass ? containerClass : defaultClass + ' ' + containerClass} {id}>
		<slot />
	</nav>
{:else if containerType == 'footer'}
	<nav class={overrideClass ? containerClass : defaultClass + ' ' + containerClass} {id}>
		<slot />
	</nav>
{:else}
	<p class="text-red">Container format error.</p>
{/if}
