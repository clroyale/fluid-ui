<script lang="ts">
	export let inputType: 'file' | 'image' = 'file';
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-file-input';
	export let overrideClass: boolean = false;
</script>

<input
	type={inputType}
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
