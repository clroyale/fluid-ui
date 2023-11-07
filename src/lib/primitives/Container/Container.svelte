<script lang="ts">
	export let containerClass: string = '';
	export let defaultClass: string = 'fluid-container';
	export let overrideClass: boolean = false;
	export let containerType: 'div' | 'section' | 'nav' | 'footer' = 'div';
	export let registerMount: Function = () => {};
	export let registerDestroy: Function = () => {};

	function registerAction(node: Node) {
		registerMount(node);
		return {
			destroy() {
				registerDestroy();
			}
		};
	}
</script>

{#if containerType == 'div'}
	<div
		use:registerAction
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</div>
{:else if containerType == 'section'}
	<section
		use:registerAction
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</section>
{:else if containerType == 'nav'}
	<nav
		use:registerAction
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else if containerType == 'footer'}
	<nav
		use:registerAction
		class={overrideClass ? containerClass : defaultClass + ' ' + containerClass}
		{...$$restProps}
	>
		<slot />
	</nav>
{:else}
	<p class="text-red">Container format error.</p>
{/if}
