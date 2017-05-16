<template>
  <div class="news-list">
    <h4 class="news-tit">{{msg}}</h4>
    <nav>
      <ul>
        <li v-for="item in menu">
          <router-link tag="a" :to="item.path" :class="{ 'router-link-active': currentPage == '/about' && menu.path == '/about/aboutone'}">{{item.title}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <div class="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: "啥玩意啊?",
        menu: [
          { id: 1, path: '/news/list1', name: "list1", title: "列表1" },
          { id: 2, path: '/news/list2', name: "list2", title: "列表2" },
          { id: 3, path: '/news/list3', name: "list3", title: "列表3" },
        ],
        currentPage: "/news/list1"
      }
    },
    watch: {
      '$route'(to, from) {
        this.currentPage = to.path
      }
    },
    mounted() {
      this.currentPage = this.$route.path
    }
  }
</script>
<style>
.news-list .router-link-active {
        color:red !important;
    }
  .news-tit{
    font-size: 18px;
    margin-top: 60px;
    text-align: center;
  }
</style>