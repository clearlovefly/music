<template>
    <div class="like_container">
      <SongSheet/> 
      <SongSheet/>
    </div> 
</template>
        
<script>
import SongSheet from "./components/songSheet.vue"
export default {
    name:"myLike",
    data(){
        return{

        }
    },
    components:{
    SongSheet
    }
}

</script>

<style scoped  lang="less">
@width: 75rem;
    .like_container{
      position: absolute;
      width: 100%;
      overflow-y: auto;
      top: 168/@width;
      bottom: 88/@width;
    }
</style>