<script lang="ts">
	export let textType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'p';
	export let defaultClass: string = 'text';
	export let textClass: string = '';
	export let overrideClass: boolean = false;
	export let text: string = '';
	export let id: string = '';
</script>

{#if textType == 'h1'}
	<h1 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h1>
{:else if textType == 'h2'}
	<h2 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h2>
{:else if textType == 'h3'}
	<h3 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h3>
{:else if textType == 'h4'}
	<h4 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h4>
{:else if textType == 'h5'}
	<h5 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h5>
{:else if textType == 'h6'}
	<h6 class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</h6>
{:else if textType == 'p'}
	<p class={overrideClass ? textClass : defaultClass + ' ' + textClass} {id}>
		{text}
	</p>
{:else}
	<p class="font-bold">Text format error.</p>
{/if}
