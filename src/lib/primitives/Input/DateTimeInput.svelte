<script lang="ts">
	export let inputType: 'date' | 'datetime-local' | 'month' | 'time' | 'week' = 'date';
	export let inputClass: string = '';
	export let defaultClass: string = 'fluid-date-time-input';
	export let overrideClass: boolean = false;
</script>

<input
	type={inputType}
	class={overrideClass ? inputClass : defaultClass + ' ' + inputClass}
	{...$$restProps}
/>
a
