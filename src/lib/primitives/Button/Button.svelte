<script lang="ts">
	export let buttonClass: string = '';
	export let defaultClass: string = 'fluid-button';
	export let overrideClass: boolean = false;
	export let buttonType: 'submit' | 'button' | 'reset' = 'button';
	export let isDisabled: boolean = false;
	export let buttonName: string = '';
	export let buttonValue: string = '';
</script>

<button
	on:click
	type={buttonType}
	class={overrideClass ? buttonClass : defaultClass + ' ' + buttonClass}
	disabled={isDisabled}
	name={buttonName}
	value={buttonValue}
	{...$$restProps}
>
	<slot />
</button>
