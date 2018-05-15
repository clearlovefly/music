<template>
    <div>
        <div>
            <Headers/>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Headers from "./com/headerNav.vue"
    export default{
        component:{
            Headers
        }
    }
</script>
<style></style>