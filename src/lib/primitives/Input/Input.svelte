<script lang="ts">
	export let inputType:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week' = 'text';
	export let inputClass: string = 'input';
	export let overrideClass: boolean = false;
	export let id: string = '';
</script>

<input type={inputType} class={overrideClass ? inputClass : 'input ' + inputClass} {id} />
