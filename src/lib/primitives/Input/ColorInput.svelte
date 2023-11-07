<script lang="ts">
	export let inputClass: string = 'input';
	export let defaultClass: string = 'fluid-color-input';
	export let overrideClass: boolean = false;
</script>

<input
	type="color"
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
