<template>
  <div class="container">

  	<!-- 父组件内容 -->
		<h4 @click=tips()>这是父组件(点击有惊喜哟)</h4>
	<p >这是父组件正在渲染的数据：{{parentMsg}}</p>
	<input type="" v-model="parentMsg" autofocus="autofocus" placeholder="type something">

	<!-- 子组件内容 -->
	<tochild ref="children" @zone="tell" :my-message="parentMsg"></tochild>

  </div>
</template>

<script>
	import tochild from '../components/secondcomponent.vue'

	export default {
	  data () {
	    return {
	      parentMsg: ''
	    }
	  },
		methods:{
		tell:(msg=1)=>{
				alert(msg)
		},
		tips:function(){
			alert(this.$refs.children.tips)
		}
		},
	  components: {	// 挂载组件
	  	tochild
	  }
	}
</script>

<style scoped>
  h4,p{
    color: #35495e;
    text-align: left;
    font-size: 20px;
  }
  p{
  	font-size: 14px;
  }
  input{
  	margin: 4px;
  	outline: none;
  	border: 1px solid #ddd;
  	line-height: 24px;
  	min-width: 300px;
  	padding-left: 10px;
  }
</style>