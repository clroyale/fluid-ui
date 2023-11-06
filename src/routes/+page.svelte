<script lang="ts">
	import '../app.css';
	import { Button, Container, Text } from '$lib/index.js';
</script>

<Container containerType="div" containerClass="">
	<Button buttonType="button" buttonClass="" onClick={async (e) => console.log(e)}>
		<Text textType="p" textClass="" text="Hey" />
	</Button>
</Container>
