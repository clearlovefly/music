<template>
  <div class="bangdan">
    <Banner :sweiperData="recomends"/>
    <BangdanList></BangdanList>
  </div>

</template>

<script>
  import Banner from "../../com/swiper.vue"
  import BangdanList from "./bangdanList.vue"

  
  export default {
    name: "mu",
    data() { 
      return {
        recomends:[]
      }
    },
    components: {
      Banner,
      BangdanList
    },
    created(){
      
    },
    methods:{
      
     
    }
  }

</script>

<style lang="less">
  @width: 75rem;
  .bangdan {
    position: absolute;
    width: 100%;
    bottom: 88px;
    overflow-y: auto;
    top: 169px;
  }

</style>
