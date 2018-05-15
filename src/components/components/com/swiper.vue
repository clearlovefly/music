<template>
  <div class="hello">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->

      <swiper-slide class="imgItem" v-for="(item,index) in filterSweiperUrl" :key="index">
        <img :src="item.url" alt="">
      </swiper-slide>


      <!-- Optional controls -->
      <div id="swiper-pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper)


  export default {
    name: 'HelloWorld',
    data() {
      return {
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart(swiper) {

          },
          imgUrl: [{
              url: require("../../../assets/images/radio/banner1.png")
            },
            {
              url: require("../../../assets/images/radio/banner2.png")
            },
            {
              url: require("../../../assets/images/radio/banner3.png")
            },
            {
              url: require("../../../assets/images/radio/banner4.png")
            }

          ]
        }

      }

    },
    props:["sweiperData"],
    computed:{
      filterSweiperUrl:function(){
        let data=this.sweiperData;
        let arr=[];

        for(let i=0;i<data.length;i++){
            arr.push({
              url:data[i].picUrl
            })
        }
       return arr;

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgItem {
    width: 100%;
  }
.imgItem img{
  width: 100%;
}
  element.style {
    width: 16px;
  }


  @import "../../../assets/css/swiper-3.4.2.min.css";

</style>
