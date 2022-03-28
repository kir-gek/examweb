<template>
	<v-app>
		<v-app-bar app>
			<v-toolbar-title class="mr-5">Фермерский роддом №5</v-toolbar-title>
			<v-spacer />
			<v-toolbar-title>Гекман Кирилл 201-322</v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer app>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-content>
						<v-list-item-title
							v-text="item.title"
							class="text-decoration-underline"
						/>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>
						Добрейших коровок: {{ stats.cows }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>
						Милейших кроликов: {{ stats.rabbits }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>
						Пушистейших овечек: {{ stats.sheeps }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

            <v-img src="/left_widget_img.jpg"></v-img>
		</v-navigation-drawer>

		<v-main>
			<v-container class="pa-10">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import axios from 'axios'

export default {
	async created() {
		const res = await axios('https://demo-api.vsdev.space/api/farm/left_widget')
		this.stats = res.data
	},
	data: () => ({
        stats: {},

		items: [
			{
				title: 'Главная',
				to: '/',
			},
			{
				title: 'Наши животные',
				to: '/animals',
			},
			{
				title: 'О нас',
				to: '/about',
			},
		],
	}),
}
</script>
