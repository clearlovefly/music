<template>
  <div class="qidong">
    <img class="qidong_big_bg" :src="qidong[0].url" alt="">
    <img class="qidong_bg_font" :src="qidong[2].url" alt="">
    <img class="qidong_bg_logo" :src="qidong[4].url" alt="">
    <p class="qidong_yindao">
      <router-link to="/yindaoye">
        <img :src="qidong[1].url" alt="">
        <img :src="qidong[3].url" alt="">
      </router-link>
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        qidong: [{
            url: require("../../assets/images/startpage/startpage_bg.png")
          },
          {
            url: require("../../assets/images/startpage/startpage_border.png")
          },
          {
            url: require("../../assets/images/startpage/startpage_bg_font.png")
          },
          {
            url: require("../../assets/images/startpage/startpage_font.png")
          },
          {
            url: require("../../assets/images/startpage/startpage_LOGO.png")
          }
        ]
      }
    }
  }

</script>
<style scoped lang="less">
    @width:75rem;
  .qidong {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

  .qidong_big_bg {
    width: 100%;
  }

  .qidong_bg_font {
    position: absolute;
    top: 490/@width;
    left: 50%;
    width: 260/@width;
    transform: translateX(-130/@width)
  }

  .qidong_bg_logo {
    position: absolute;
    top: 430/@width;
    left: 50%;
    transform: translateX(-75/@width);
    width: 150/@width;
  }

  .qidong_yindao {
    position: absolute;
    bottom: 116/@width;
    width: 204/@width;
    height: 54/@width;
    left: 50%;
    transform: translateX(-102/@width);
  }

  .qidong_yindao img:nth-child(1) {
    position: absolute;
    top: 0/@width;
    left: 0/@width;
    width:204/@width;
    height:53/@width;
  }

  .qidong_yindao img:nth-child(2) {
    position: absolute;
    left: 50%;
    width: 146/@width;
    height: 20/@width;
    transform: translateX(-73/@width);
    top: 17/@width;
  }

</style>
