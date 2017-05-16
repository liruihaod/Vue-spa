<!-- 首页内容渲染 -->
<template>
  <div id="app">

    <!-- 可以删掉 顶部 -->
    <HeaderCompontent></HeaderCompontent>

 <transition name="slide-fade">
    <router-view  ></router-view>
      </transition>
    <!-- 渲染出口 -->


    <!-- 可以删除 底部菜单 -->
    <FootComponent></FootComponent>

  </div>
</template>
<script>
    import HeaderCompontent from './components/header.vue'
    import FootComponent from './components/footer.vue'
    export default{
       name: 'app',
        data(){
            return{
                msg:'Hello vue',
            }
        },
        components:{
            HeaderCompontent,
            FootComponent
        }
    }
</script>
<style>

.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all 1s ease;
}
.slide-fade-enter, .slide-fade-leave{
  transform: translateX(50px);
  opacity: 0;
}
</style>
