<template>
  <div class="radioCpntewnt">
    <Banner :sweiperData="recomends"/>
    <div>
      <div class="diantai_list">
        <ul>
          <li v-for="(item,index) in diantaiList">
            <img :src="item.url" :alt="item.tishi">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <DiantaiImg/>
    </div>
  </div>

</template>

<script>
  import Banner from "../../com/swiper.vue";
  import DiantaiImg from "./diantaiImg.vue";
  import {getRecomend} from "../../../../api/recommend.js"
  export default {
    name: "mu",
    data() {
      return {
        diantaiList: [{
            url: require("../../../../assets/images/common/radio.png"),
            title: "电台分类",
            tishi: "fenlei"
          },
          {
            url: require("../../../../assets/images/common/riao_list.png"),
            title: "电台排行",
            tishi: "paihang"
          }
        ],
        recomends:[]

      }
    },
    components: {
      Banner,
      DiantaiImg
    },
    created(){
      this._getRecomend()
    },
    methods:{
      _getRecomend(){
        getRecomend().then((res)=>{
         this.recomends=res.data.slider;
        })
      }
    }
  }

</script>

<style scoped lang="less">
  @width: 75rem;
  .radioCpntewnt{
    position: absolute;
    width: 100%;
    overflow-y: auto;
    
    top: 168px;
    bottom: 88px;
  }
  .diantai_list {
    margin: 0 26/@width;
    ul {
      height: 140/@width;
      overflow: hidden;
      li {
        float: left;
        font-size: 30/@width;
        width: 50%;
        padding-left: 100/@width;
        box-sizing: border-box;
        height: 100px;
        margin: 20/@width 0;
        img {
          width: 65/@width;
          height: 65/@width;
          float: left;
          padding: 20/@width 0;
        }

        span {
          padding: 28/@width 20/@width;
          display: inline-block;
        }
      }
      li:nth-child(1) {
        border-right: 1/@width solid #ccc;
      }
    }
  }

</style>
