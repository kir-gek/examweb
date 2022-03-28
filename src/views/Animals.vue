<template>
    <div>
        <h1>Животные</h1>

        <CardAnimal 
            :animal="{
                type: 'cow',
                name: 'бебра',
                color: 'золотой',
                weight: '50 кг',
                sex: 'мужской'
            }"
        />
    </div>
</template>

<script>
import CardAnimal from '../components/CardAnimal.vue'

export default {
    components: { CardAnimal }
}
</script>
