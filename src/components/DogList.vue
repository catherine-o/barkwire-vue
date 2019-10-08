<template>
    <ul class="dog-list">
        <li v-for="dog in dogs" :key="dog.id">
            <DogListing @click.native="upvoteDog(dog.id)" :dog="dog" />
        </li>
    </ul>
</template>

<script>
import DogListing from "@/components/DogListing"
export default {
    components: {
        DogListing
    },
    props: {
        dogs: Array,
    },
    methods: {
        upvoteDog(id){
            this.$emit("upvoteDog", id)
        }
    }
}
</script>

<style>
.dog-list {
        list-style: none;
    }
    h3 {
        padding: 0;
        margin: 0;
    }

</style>