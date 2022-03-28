<template>
	<v-card>
		<v-img :src="`/` + animal.type + `_img.jpg`" height="250"></v-img>

		<v-card-text>
			<p class="title text-black" style="color: #000">{{ animal.name }}</p>
			<p class="title text-black">Цвет: {{ animal.color }}</p>
			<p class="title text-black">Вес:{{ animal.weight }}кг</p>
			<p class="title text-black">Пол: {{ animal.sex }}</p>
		</v-card-text>
	</v-card>
</template>

<script>
export default { props: ['animal'] }
</script>
