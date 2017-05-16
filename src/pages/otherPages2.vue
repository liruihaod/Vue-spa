<template>
  <div class="container">
      <input v-model="input" @keyup.enter="change()" type="text"><button @click="acquire()">获取数据</button>
      <h1>{{this.name}}</h1>
      <h1>{{this.text}}</h1>
      <ul>
        <li v-for="item in this.list">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import * as type from './../store/zone/type';

export default {
    data(){
      return{
        booklist:[],
        input:""
      }
    },
    computed:mapState({
      // 这里通过mapState 取到$store中的值
      name:state=>state.zone.name,
      text:state=>state.zone.text,
      list:state=>state.zone.queryResult
    }),
    methods: {
      acquire(){
        // 这里通过this.$store.dispatch 来派发一个事件
        this.$store.dispatch(type.SEARCH_SEARCH_LIST)
      },
      change(){
        // 和上面一个道理。改变vuex中的值。
        this.$store.dispatch(type.UPDATE_SEARCH_LIST,this.input.trim())
      }
    }

}
</script>

<style>

</style>