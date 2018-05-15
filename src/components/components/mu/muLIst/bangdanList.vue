<template>
  <div class="bangdanComponent">
    <div v-for="item in bangdanImg">
      <img :src="item.url" alt="">
      <p>
        {{item.title}}
      </p>
      <ul>
        <li v-for=" li  in  item.list">{{li}}</li>
      </ul>
    </div>
  </div>

</template>
<script>
  export default {
    name: "bangdanList",
    data() {
      return {
        bangdanImg: [{
            url: require("../../../../assets/images/radio/bang1.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "飙升榜"
          },
          {
            url: require("../../../../assets/images/radio/bang2.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "热歌榜"
          },
          {
            url: require("../../../../assets/images/radio/bang3.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "原创榜单"
          },
          {
            url: require("../../../../assets/images/radio/bang4.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "热歌榜单"
          },
          {
            url: require("../../../../assets/images/radio/bang4.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "热歌榜单"
          },
          {
            url: require("../../../../assets/images/radio/bang2.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "热歌榜"
          },
          {
            url: require("../../../../assets/images/radio/bang3.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "原创榜单"
          },
          {
            url: require("../../../../assets/images/radio/bang4.png"),
            list: [
              "1.BOOM歌 - Tiësto / Sevenn", "2.不能怕 - 红花会/BrAnTB"
            ],
            title: "热歌榜单"
          }
        ]
      }
    }
  }

</script>
<style scoped lang="less">
  @width: 75rem;
  .bangdanComponent {
    overflow: hidden;
    padding: 10/@width 0 8/@width 10/@width;

    div {
      position: relative;
      padding-right: 5/@width;
      float: left;
      width: 50%;
      box-sizing: border-box;
      font-size: 24/@width;
      height: 368/@width;
      ul {
        margin-top: 30/@width;
        li {
          height: 38/@width;
        }
      }
      p {
        width: 100%;
        position: absolute;
        top: 140/@width;
        color: #f1f1f1;
        font-size: 40/@width;
        text-align: center;
      }
    }
  }

</style>
