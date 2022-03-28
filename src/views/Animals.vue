<template>
	<div class="wrapper">
		<v-row>
			<v-col cols="4" v-for="animal in animals" :key="animal.id">
				<CardAnimal :animal="animal" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CardAnimal from '../components/CardAnimal.vue'

export default {
	components: { CardAnimal },

	async mounted() {
		await this.$store.dispatch('fetchAnimals')
	},

	computed: {
		animals() {
			return this.$store.state.animals
		}
	}
}
</script>
