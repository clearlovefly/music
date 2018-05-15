<template>
  <div class="appguide">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="imgItem">
        <img :src="swiperOption.imgUrl[0].url" alt="">
      </swiper-slide>
      <swiper-slide class="imgItem">
        <img :src="swiperOption.imgUrl[1].url" alt=""> 
      </swiper-slide>
      <swiper-slide class="imgItem">
          <router-link to="/muIndex">
            <img :src="swiperOption.imgUrl[2].url" alt=""> 
        </router-link>
       
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
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart(myswiper) {

          },
          onTouchEnd: function (VueAwesomeSwiper) {
            console.log(VueAwesomeSwiper.activeIndex)
          },
          imgUrl: [{
              url: require("../../assets/images/yindaoye/yindao_03.png")
            },
            {
              url: require("../../assets/images/yindaoye/yindao_04.png")
            },
            {
              url: require("../../assets/images/yindaoye/yindao_05.png")
            }

          ]
        }
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgItem img {
    width: 100%;
    height: 100%;
  }

  element.style {
    width: 16px;
  }
  @import "../../assets/css/swiper-3.4.2.min.css";

</style>
