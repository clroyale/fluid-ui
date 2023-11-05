<script lang="ts">
	import type { ButtonProps } from './buttonTypes.js';

	export let buttonProps: ButtonProps;
</script>

<button type={buttonProps.buttonType}>
	<slot />
</button>
