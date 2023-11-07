<script lang="ts">
	export let selectClass: string = '';
	export let defaultClass: string = 'fluid-label';
	export let overrideClass: boolean = false;
	export let isDisabled: boolean = false;
</script>

<select
	class={overrideClass ? selectClass : defaultClass + ' ' + selectClass}
	disabled={isDisabled}
>
	<slot />
</select>
