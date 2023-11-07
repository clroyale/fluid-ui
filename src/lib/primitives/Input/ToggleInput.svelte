<script lang="ts">
	export let inputType: 'checkbox' | 'radio' = 'checkbox';
	export let inputClass: string = 'input';
	export let defaultClass: string = 'fluid-toggle-input';
	export let overrideClass: boolean = false;
</script>

<input
	type={inputType}
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
