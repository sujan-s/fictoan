<template>
    <div id="fictoan-site" class="page-with-sidebar">
        <side-bar></side-bar>
        <content-container></content-container>
    </div>
</template>

<script>
    import sideBar from "@/components/side-bar.vue"
    import contentContainer from "@/components/content-container.vue"

    export default {
        name: "fictoanSite",

        components: {
            sideBar, contentContainer
        },

        data() {
            return {
                showSideBar: true,
            }
        }
    }
</script>

<style lang="scss"></style>