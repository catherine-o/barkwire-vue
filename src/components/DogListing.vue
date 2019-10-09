<template>
     <div class="dog-listing">
        <img :src="dog.imageURL" alt="dog">
        <h3>
            <router-link :to="{
                name: 'dog', 
                params: {id: dog.id}
            }">
                {{dog.name}}
            </router-link>
        </h3>
    </div>
</template>

<script>
export default {
    props:{
        dog: Object
    }
}
</script>

<style lang="scss">
    .dog-listing {
        margin-bottom: 2em;
        img{
            width: 200px;
        }
    }
</style>