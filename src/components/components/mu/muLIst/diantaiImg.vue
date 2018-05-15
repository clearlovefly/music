<template>
  <div class="diantai_content">
   <div class="diantai_list" v-for="(item,index) in list" :key="index">
        <img :src="item.url" alt="">
        <span>{{item.title}}</span>
   </div>

  </div>
</template>
<script>
  export default {
    name: "diantaiImg",
    data() {
      return {
        list: [{
            url: require("../../../../assets/images/radio/radio1.png"),
            title: "感情信箱   微微一笑 奈何倾城"
          },
          {
            url: require("../../../../assets/images/radio/radio2.png"),
            title: "每期一讲个轻松小故事"
          },
          {
            url: require("../../../../assets/images/radio/radio3.png"),
            title: "愿有故事的人被温柔对待"
          },
          {
            url: require("../../../../assets/images/radio/radio4.png"),
            title: "音乐是心灵的力量 奈何倾城"
          },
          {
            url: require("../../../../assets/images/radio/radio5.png"),
            title: "流行音乐是无尽的碰撞"
          },
          {
            url: require("../../../../assets/images/radio/radio6.png"),
            title: "爱情的滋润 感恩的力量"
          },
          {
            url: require("../../../../assets/images/radio/radio2.png"),
            title: "每期一讲个轻松小故事"
          },
          {
            url: require("../../../../assets/images/radio/radio3.png"),
            title: "愿有故事的人被温柔对待"
          },
          {
            url: require("../../../../assets/images/radio/radio4.png"),
            title: "音乐是心灵的力量 奈何倾城"
          },
          {
            url: require("../../../../assets/images/radio/radio5.png"),
            title: "流行音乐是无尽的碰撞"
          },
          {
            url: require("../../../../assets/images/radio/radio6.png"),
            title: "爱情的滋润 感恩的力量"
          },
          {
            url: require("../../../../assets/images/radio/radio6.png"),
            title: "爱情的滋润 感恩的力量"
          }
        ]
      }
    }
  }

</script>
<style scoped lang="less">
    @width:75rem;
    .diantai_content{
        margin: 0 20/@width;
        overflow: hidden;
    }
.diantai_list{
    width: 226/@width;
    height: 322/@width;
    margin: 0 5/@width;
    overflow: hidden;
    float: left;
    font-size:26/@width;
    span{
        display: block;
        padding: 16/@width 0;
    }
    
   
}

</style>
