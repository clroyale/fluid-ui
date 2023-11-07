<script lang="ts">
	export let inputType: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' =
		'text';
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-text-input';
	export let overrideClass: boolean = false;
</script>

<input
	type={inputType}
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
