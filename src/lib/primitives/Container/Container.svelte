<script lang="ts">
	export let containerClass: string = '';
	export let defaultClass: string = 'fluid-container';
	export let overrideClass: boolean = false;
	export let containerType: 'div' | 'section' | 'nav' | 'footer' = 'div';
</script>

{#if containerType == 'div'}
	<div
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</div>
{:else if containerType == 'section'}
	<section
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</section>
{:else if containerType == 'nav'}
	<nav
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else if containerType == 'footer'}
	<nav
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else}
	<p class="text-red">Container format error.</p>
{/if}
