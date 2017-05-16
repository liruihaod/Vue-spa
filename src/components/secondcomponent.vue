<template>
  <div class="hello">
    <h4 @click="zone()">这是子组件(点击报数)</h4>
    <p>这是<span>来自父组件</span>的数据：{{myMessage}}</p>
  </div>
</template>

<script>
  export default {
    name: 'child',
    props: [
      'myMessage',
    ],
    data() {
      return {
        tips: "Zone-得意小帅"
      }

    },
    methods: {
      // 这里注意 不能用 zone:()=>{} 箭头函数哟.因为这里需要用到this.$emit 箭头函数的this指向的是全局对象window而不是vue实例
      zone: function () {
        this.$emit("zone", this.myMessage)
      }
    }

  }
</script>

<style scoped>
  .hello{
    margin-top: 30px;
  }
  h4,p{
    color: #41b883;;
    text-align: left;
    font-size: 20px;
  }
  p{
    font-size: 12px;
  }
  span{
    color: #35495e;
  }
</style>