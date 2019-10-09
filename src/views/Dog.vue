<template>
    <div class="dog">
        <h2>{{dog.name}}</h2>
        <img :src="dog.imageURL" :alt="dog.name" />
        <p>Votes: {{dog.votes}}</p>
        <button @click="upvoteDog">Vote!</button>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("fetchDogs") //from computed
    },
    computed: {
        dogId(){
            return this.$route.params.id //id because that's what we named the route
        },
        dog(){
            return this.$store.getters.dog(this.$route.params.id) //this good indicator for computed ^
        }
    },
    methods: {
        upvoteDog(){
            this.$store.dispatch("upvoteDog", this.dogId)
        }
    }
}
</script>

<style lang="scss">
.dog {
    padding: 2rem;
    img{
        width: 200px;
    }
}
</style>