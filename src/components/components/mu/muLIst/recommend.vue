<template>
  <div>
    <div class="tuijian">
      <div>
        <Banner :sweiperData="recomends" />
      </div>
      <div class="tuijian_list">
        <ul>
          <li v-for="item in imgUrl">
            <img :src="item.url" alt="">
          </li>
        </ul>
      </div>
      <div>
        <TuijanList :data="filterData" />
      </div>

    </div>
    <div class="musicplay">
      <a-player :music="songs" ref="player"></a-player>
    </div>
  </div>
</template>

<script>
  import Banner from "../../com/swiper.vue"
  import TuijanList from "./tuijanList.vue"
  import VueAplayer from 'vue-aplayer'
  import {
    getRecomend,
    getDiscList
  } from "../../../../api/recommend.js"
  export default {
    name: "mu",
    data() {
      return {
        imgUrl: [{
            url: require("../../../../assets/images/common/daily_special.png")
          },
          {
            url: require("../../../../assets/images/common/TOPMUSICS.png")
          },
          {
            url: require("../../../../assets/images/common/party.png")
          }
        ],
        listContent: [],
        recomends: [],
        songs: [{
          title: 'hehehe',
          author: 'Hans Zimmer/Richard Harvey',
          url: 'http://ws.stream.qqmusic.qq.com/109188999.m4a?fromtag=46',
          pic: 'http://devtest.qiniudn.com/Preparation.jpg',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }]
      }
    },
    components: {
      Banner,
      TuijanList,
      'a-player': VueAplayer
    },
    created() {
      this._getRecomend()
      this._getPlaylist()
    },
    methods: {
      _getRecomend() {
        getRecomend().then((res) => {
          this.recomends = res.data.slider;
        })
      },
      _getPlaylist() {
        getDiscList().then((res) => {
          this.listContent = res.data.list
        })
      }
    },
    mounted() {
      let aplayer = this.$refs.player.control
      aplayer.play()
    },
    computed: {
      filterData: function () {
        let data = [];
        let infoQQ = this.listContent;

        for (let i = 0; i < infoQQ.length; i++) {
          if (infoQQ[i].dissname.length > 14) {
            infoQQ[i].dissname = infoQQ[i].dissname.substring(0, 14) + "..."
          }
          data.push({
            url: infoQQ[i].imgurl,
            textstr: infoQQ[i].dissname
          })
        }
        return data;
      }
    }
  }

</script>

<style  lang="less">
  @width: 75rem;
  .tuijian {
    position: absolute;
    top: 168/@width;
    bottom: 88/@width;
    width: 100%;
    overflow-y: auto;
  }

  .tuijian_list {
    ul {
      overflow: hidden;
      margin: 20/@width 0;
      li {
        float: left;
        width: 33.3333%;
        text-align: center;
        img {
          margin: 0 auto;
        }
      }
    }
  }
.musicplay{
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: #f1f1f1;
  width: 100%;
}
.aplayer{
  height: 130px;
}
.aplayer .aplayer-info{
padding: 0px;
height: 0px;
}
.aplayer-music{
  margin: 0px;
}
.aplayer-title{
  font-size: 34/@width;
}
.aplayer .aplayer-pic{
  width: 120/@width;
  height: 120/@width;
}
.aplayer .aplayer-info .aplayer-music .aplayer-title{
  font-size: 30/@width;
}
.aplayer .aplayer-info .aplayer-music .aplayer-author{
  font-size: 24/@width;
}
</style>
