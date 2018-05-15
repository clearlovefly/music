<template>
  <div class="listImg">
    <p class="tuijianTitle">推荐</p>
    <div class="tuijianContent">
      <div class="listtuijian" v-for="item in data">
        <img :src="item.url" alt="">
        <p>{{item.textstr}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "tuijain",
    data() {
      return {

      }
    },
    props: ["data"]
  }

</script>
<style lang="less" scoped>
  @width: 75rem;
  .listImg {
    .tuijianTitle {
      font-size: 24/@width;
      padding-left: 15/@width;
      margin-left: 4/@width;
      border-left: 6/@width solid #9844a1;
      margin-bottom: 24/@width ;
    }
    .tuijianContent {
      margin: 0 21/@width ;
      overflow: hidden;
      .listtuijian {
          float: left;
          width: 226/@width;
          height: 320/@width;
          margin:0 5/@width ;
          img{
            width: 226/@width;
          }
          p{
              font-size: 26/@width;
              line-height: 30/@width;
              padding: 16/@width 0;
              
          }
      }
    }
  }

</style>
