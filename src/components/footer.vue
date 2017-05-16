<template >
    <footer class="fixed-bottom clearfix">
        <div class="col4">
          <router-link to="/index">axios</router-link>
        </div>
        <div class="col4">
          <router-link to="/news">router嵌套</router-link>
        </div>
        <div class="col4">
          <router-link to="/second">组件通讯</router-link>
        </div>
        <div class="col4">
          <router-link to="/third">vuex</router-link>
        </div>
    </footer>
</template>
<script>
    export default{
        data(){
            return{
                msg: 'Hello vue'
            }
        }
    }
</script>
<style>
    .fixed-bottom .router-link-active {
        color:red !important;
    }
    .fixed-bottom {
        position: fixed;
        background: #fff;
        width: 100%;
        bottom: 0;
        z-index: 99;
        border-top: 1px solid #ccc;
    }
    .fixed-bottom div {
        display: inline-block;
        float: left;
        text-align: center;
    }
    .fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 50px;
    }
</style>
