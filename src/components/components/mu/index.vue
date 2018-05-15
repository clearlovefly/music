<template>
  <div>
<HeaderNav/>
    <div class="mu_list_nav">
      <ul>
        <li>
          <router-link to="/muindex/recommend">推荐</router-link>
        </li>
        <li>
          <router-link to="/muindex/list">歌单</router-link>
        </li>
        <li>
          <router-link to="/muindex/radioDtation">电台</router-link>
        </li>
        <li>
          <router-link to="/muindex/songSheet">榜单</router-link>
        </li>
      </ul>
    </div>
    <div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
  </div>

</template>

<script>
  import HeaderNav from "../com/headerNav.vue"
  export default {
    name: "mu",
    data() {
      return {

      }
    },
    components:{
      HeaderNav
    }
  }

</script>

<style scoped  lang="less">
 @width: 75rem;
.mu_list_nav{
  height: 80/@width;

}
.mu_list_nav ul{
  height: 80/@width;
  overflow: hidden;
  width: 100%;
}
.mu_list_nav ul li a{
 margin: 0 auto;
 display: block;
  width: 144/@width;
  text-align: center;
  line-height: 76/@width;
  color:#1f1e1f;
}
.mu_list_nav ul li {
  font-size: 34/@width;
  line-height: 80/@width;
  float: left;
  width: 25%;
}
.mu_list_nav ul li .router-link-active{
  border-bottom: 6/@width solid #6e2ad9;
  border-inline-start-color: #6e2ad9;
  border-inline-end-color: #e01f81;
  color:#e41f6e;
}

</style>
