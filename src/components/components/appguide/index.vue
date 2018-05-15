<template>
  <div class="appguide">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->   
        <swiper-slide class="imgItem" v-for="(item,index) in swiperOption.imgUrl" :key="index">
            <img :src="item.url" alt="">
        </swiper-slide>
      <!-- Optional controls -->
      <!-- <div id="swiper-pagination" class="swiper-pagination" slot="pagination"></div> -->
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
          //autoplay: 3000,
          //loop: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          //pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart(swiper) {

          },
          imgUrl: [{
              url: require("../../../assets/images/yindaoye/yindao_03.png")
            },
            {
              url: require("../../../assets/images/yindaoye/yindao_04.png")
            },
            {
              url: require("../../../assets/images/yindaoye/yindao_05.png")
            }

          ]
        }
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgItem {
    width: 100%;
  }
  
element.style {
    width: 16px;
}

 
  @import "../../../assets/css/swiper-3.4.2.min.css";
  
</style>
