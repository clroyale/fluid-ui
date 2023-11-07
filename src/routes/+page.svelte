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
		FileInput,
		TextInput,
		ToggleInput,
		Label,
		Link,
		Option,
		Table,
		Video
	} from '$lib/index.js';
</script>

<Container containerType="div" containerClass="bg-primaryColor">
	<Container containerType="div" containerClass="flex flex-col">
		<Audio
			src={'https://download.samplelib.com/mp3/sample-3s.mp3'}
			audioClass=""
			isControls={true}
			isLoop={false}
		/>
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Button buttonType="button" buttonClass="">
			<Text textType="p" textClass="" text="Hey" />
		</Button>
	</Container>

	<Container containerType="div" containerClass="flex flex-col" />

	<Container containerType="div" containerClass="flex flex-col">
		<Form />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Image />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<ColorInput />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<TextInput inputType="password" />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<FileInput />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<ToggleInput />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Label />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Link />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Option />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Table />
	</Container>

	<Container containerType="div" containerClass="flex flex-col">
		<Text textType="p" textClass="" text="Hey" />
	</Container>
	<Container containerType="div" containerClass="flex flex-col">
		<Video />
	</Container>
</Container>
