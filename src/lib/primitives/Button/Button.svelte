<script lang="ts">
	export let buttonClass: string = '';
	export let defaultClass: string = 'fluid-button';
	export let overrideClass: boolean = false;
	export let buttonType: 'submit' | 'button' | 'reset' = 'button';
	export let isDisabled: boolean = false;
	export let buttonName: string = '';
	export let buttonValue: string = '';
	export let registerMount: (node: Node) => void = () => {};
	export let registerDestroy: (node: Node) => void = () => {};

	function registerAction(node: Node) {
		registerMount(node);
		return {
			destroy() {
				registerDestroy(node);
			}
		};
	}
</script>

<button
	use:registerAction
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
