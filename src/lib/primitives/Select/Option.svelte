<script lang="ts">
	export let optionClass: string = '';
	export let defaultClass: string = 'fluid-label';
	export let overrideClass: boolean = false;
	export let value: string = '';
</script>

<option class="{overrideClass ? optionClass : defaultClass + ' ' + optionClass} {value}">
	<slot />
</option>
