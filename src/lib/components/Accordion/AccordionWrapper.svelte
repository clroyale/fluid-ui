<script lang="ts">
	import Container from '../../primitives/Container/Container.svelte';
	export let accordionClass: string = 'flex flex-col';
</script>

<Container containerType="div" overrideClass={true} containerClass={accordionClass}>
	<slot />
</Container>
