<template>
    <div class="ff-content-container">
        <router-view />
    </div>
</template>

<script>
    export default {
        name : "content-container",

        components : {
        },

        data() {
            return {
            }
        },

        updated() {
            Prism.highlightAll();
        }
    }
</script>


<style scoped>
    
</style>