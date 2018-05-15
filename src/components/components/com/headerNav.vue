<template>
  <div class="music">
    <div  :class="[zhezhao ? 'ccc' : 'ccc ddd']">
      <SideBar/>
    </div>
    <div class="zhezhao" v-on:click="sideshowhide" v-if="zhezhao">
    </div>
    <img class="side_bar" :src="sidebar" alt="" v-on:click="sideBarNav">
    <ul class="header_nav">
      <li>
        <router-link to="/muindex/recommend">音沐</router-link>
      </li>
      <li>
        <router-link to="/myIndex/mylike">我的</router-link>
      </li>
      <li>
        <router-link to="/dynamicIndex">动态</router-link>
      </li>
    </ul>
    <router-link to="/sousuo">
      <img class="search" :src="search" alt="">
    </router-link>
  </div>
  </div>

</template>
<script>
  import SideBar from "../sideBar/index.vue"
  export default {
    name: "Header",
    data() {
      return {
        zhezhao: false,
       sideBarFlag : false,
        sidebar: require("../../../assets/images/Crunchies/list.png"),
        search: require("../../../assets/images/Crunchies/search.png"),
      }
    },
    components: {
      SideBar
    },
    methods: {
      sideBarNav(event) {
        this.zhezhao = true;
        this.sideBarFlag = true;
      },
      sideBarhide(event) {
        if (event.target.className == "zhezhao1" || event.target.className == "zhezhao2") {
          this.sideBarFlag = false;
        }

      },
      sideshowhide(event) {
        if (event.target.className !== "side_bar") {
         
          this.zhezhao = false;
        }
        console.log(event.target)
      }
    }
  }

</script>
<style scoped lang="less">
  @width: 75rem;
  .ccc{
    margin-left: -1px;
    transition:0.4s;
  }
  .ddd{
    margin-left: -262/@width;
 
  }
  .header_nav li .router-link-active {
    color: #fff;
  }

  .side_bar {
    float: left;
    padding: 20/@width;
    padding-right: 120/@width;
  }

  .zhezhao {
    position: absolute;
    top: 0px;
    width: 100%;
    bottom: 0px;
    z-index: 99;
    background: rgba(0, 0, 0, 0.6)
  }

  .zhezhao2 {
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 9998;
    bottom: 0px;
    background: rgba(245, 239, 239, 0.9);
    opacity: 1;
  }

  zhezhao1 {
    opacity: 0;
  }

  .search {
    float: right;
    padding-top: 20/@width;
    padding-right: 22/@width;
  }

  .header_nav {
    float: left;
  }

  .music {
    height: 88/@width;

    background: linear-gradient(to right, #6e2ad9, #e01f81)
  }

  .header_nav {
    height: 88/@width;
  }

  .header_nav li {
    padding-right: 80/@width;
  }

  .header_nav li a {
    font-size: 38/@width;
    color: #c596d6;
    display: block;
    line-height: 88/@width;
  }

  .header_nav {
    height: 88/@width;
    font-size: 38/@width;
    overflow: hidden;
  }

  .header_nav li {
    float: left;
  }

</style>
