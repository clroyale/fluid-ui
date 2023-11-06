<script lang="ts">
	export let id: string = '';
	export let defaultClass: string = 'button';
	export let buttonClass: string = 'button';
	export let buttonType: 'submit' | 'button' | 'reset' = 'button';
	export let overrideClass: boolean = false;
	export let onClick = async function name(e: Event) {
		console.log('Unimplemented Button');
	};
</script>

<button
	on:click={(e) => onClick(e)}
	type={buttonType}
	class={overrideClass ? buttonClass : defaultClass + ' ' + buttonClass}
	{id}
>
	<slot />
</button>
