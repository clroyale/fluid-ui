<script lang="ts">
	import Container from '../../primitives/Container/Container.svelte';
	export let modalClass: string =
		'absolute w-screen h-screen left-0 bottom-0 bg-gray flex flex-col bg-opacity-50 justify-center items-center z-0';
	export let isVisible: boolean = true;
</script>

<Container
	containerType="div"
	overrideClass={true}
	containerClass={(isVisible ? 'visible ' : 'hidden ') + modalClass}
>
	<slot />
</Container>
