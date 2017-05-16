<template>
    <div>
        <button v-on:click="loadList()">加载试试</button>
        <div>
            <ul>
                <li v-for="(item, index) in listArr">
                    <a >{{index}} 《{{item.name}}》</a>
                </li>
            </ul>
        </div>
        <div class="loading" v-if="loading">
          Loading...
        </div>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'

    export default{
        data () {
            return{
                loading: false,
                listArr: [],
                
            }
        },
        mounted () {
            this.loadList();
        },
        methods: {
            loadList: function() {
                var _this = this;
                _this.loading = true;
                axios.get('static/template.json'
                )
                .then(function (response) {
                  _this.loading = false;
                  _this.listArr = _this.listArr.concat(response.data.item);
                  console.log("加载完成")
                })
                
            }
        }
    }
</script>

<style>
  button{
    display: block;
    margin: 0 auto;
    line-height: 30px;
    border: 1px solid #ddd;
    color: #41b883;
  }
  a{
    color: #35495e;
    font-size: 16px;
  }
  ul{
    margin-bottom: 60px;
  }
  li{
    line-height: 32px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
  }
  b{
    font-size: 12px;
    color: #35495e;
  }
  .loading{
    text-align: center;
  }
</style>
