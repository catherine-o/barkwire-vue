<template>
    <div class="dogs">
        <h2>Dogs</h2>
        <DogList :dogs="dogs" @upvoteDog="upvoteDog"/>
    </div>
</template>

<script>
import DogList from "@/components/DogList"
export default {
    components: {
        DogList,
    },
    mounted(){
        this.$store.dispatch("fetchDogs")
    },
   computed: {
       dogs(){
           return this.$store.state.dogs
       }
    },
    methods: {
        upvoteDog(id){
            this.$store.dispatch("upvoteDog", id)
        }
    }
}
</script>

<style lang="scss">
</style>