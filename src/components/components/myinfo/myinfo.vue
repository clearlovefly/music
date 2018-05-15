<template>
  <div class="myinfo">
    <div class="myinfo_header">
      <router-link to="/muindex/recommend">
        <img :src="url" alt="">
      </router-link>
      <span>我的信息</span>
    </div>
    <div class="myinfo_list">
      <ul>
        <li>
          <router-link to="/myinfo/sixin">私信</router-link>
        </li>
        <li>
          <router-link to="/myinfo/pinlun">评论</router-link>
        </li>
        <li>
          <router-link to="/myinfo/callmy">@我</router-link>
        </li>
        <li>
          <router-link to="/myinfo/tongzhi">通知</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myinfo",
    data() {
      return {
        url: require("../../../assets/images/common/back.png")
      }
    }
  }

</script>
<style scoped lang="less">
  @width: 75rem;

  .myinfo_header {
    overflow: hidden;
    height: 90/@width;
    line-height: 90/@width;
    background: linear-gradient(to right, #6e2ad9, #e01f81);
    img {
      float: left;
      margin-top: 30/@width;
      width: 38/@width;
      margin-left: 20/@width;
      margin-right: 20/@width;
    }
    span {
      float: left;
      font-size: 38/@width;
      color: #ffffff;
    }
  }

  .myinfo_list {
    ul {
      li {
        float: left;
        width: 25%;
        font-size: 38/@width;
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
        text-align: center;
        height: 90/@width;
        line-height: 90/@width;
        a {
          width: 100%;
          height: 100%;
          display:block;
        
        }
      }
    }
  }
 .router-link-active{
     background: #f1f1f1;
 }

</style>
