<template>
	<div class="wrapper">
		<div class="d-flex align-center">
			<v-select
				v-model="type"
				:items="['cow', 'rabbit', 'sheep']"
				label="Тип животного"
				required
			></v-select>

			<v-text-field
				class="ml-5"
				v-model="name"
				label="Имя"
				required
			></v-text-field>
			<v-text-field
				class="ml-5"
				v-model="weight"
				label="Вес"
				required
			></v-text-field>
			<v-text-field
				class="ml-5"
				v-model="color"
				label="Цвет"
				required
			></v-text-field>

			<v-select
				class="ml-5"
				v-model="sex"
				:items="['Девочка', 'Мальчик']"
				label="Пол"
				required
			></v-select>

			<v-btn class="ml-5" @click="handleForm"> Отправить </v-btn>
		</div>

		<v-row>
			<v-col cols="4" v-for="animal in animals" :key="animal.id">
				<CardAnimal :animal="animal" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import axios from 'axios'
import CardAnimal from '../components/CardAnimal.vue'

export default {
	components: { CardAnimal },

	data: () => ({
		type: 'cow',
		name: '',
		weight: '',
		color: '',
		sex: '',
	}),

	async mounted() {
		await this.$store.dispatch('fetchAnimals')
	},

	computed: {
		animals() {
			return this.$store.state.animals
		},
	},

	methods: {
		async handleForm() {
			try {
				const data = {
					type: this.type,
					name: this.name,
					weight: this.weight,
					color: this.color,
					sex: this.sex,
				}

				await axios.post('https://demo-api.vsdev.space/api/farm/baby', data)

				await this.$store.dispatch('fetchAnimals')

				this.type = ''
				this.name = ''
				this.weight = ''
				this.color = ''
				this.sex = ''
			} catch (e) {
				console.log(e)
			}
		},
	},
}
</script>
