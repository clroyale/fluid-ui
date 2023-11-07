<script lang="ts">
	import '../app.css';
	import {
		Button,
		Container,
		Text,
		Audio,
		Form,
		Image,
		ColorInput,
		DateTimeInput,
		Select,
		FileInput,
		TextInput,
		ToggleInput,
		Label,
		Link,
		Option,
		Table,
		Video,
		Avatar,
		AccordionWrapper,
		AccordionHeader,
		AccordionContent,
		ModalContainer
	} from '$lib/index.js';
	let isOpen = false;
</script>

<Container containerClass="w-full" overrideClass={true}>
	<Container containerType="div" containerClass="flex flex-col">
		<AccordionWrapper>
			<AccordionHeader
				on:click={() => {
					console.log(isOpen);
					isOpen = !isOpen;
				}}
			>
				<Text>aaa</Text>
				<Text>aaa</Text>
			</AccordionHeader>
			<AccordionContent bind:isVisible={isOpen}
				><Text
					>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam eius repudiandae,
					delectus officia asperiores, cumque commodi unde quo accusamus iste totam aliquam ipsam,
					aperiam magni obcaecati accusantium pariatur dolore nulla? {isOpen}</Text
				></AccordionContent
			>
		</AccordionWrapper>
	</Container>
	<Container overrideClass={true} />
	<ModalContainer isVisible={isOpen} isOutsideClose={true}>
		<Container containerClass="flex flex-col z-10">
			<Container containerClass="flex flex-row justify-between">
				<Text>sadfasdfasdf</Text>
				<Button
					on:click={() => {
						isOpen = !isOpen;
					}}>Close</Button
				>
			</Container>
		</Container>
	</ModalContainer>
</Container>
