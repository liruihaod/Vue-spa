<template>
  <div class="header">
    <img src="../assets/logo.png">
  </div>
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
    .header{
        width: 100%;
    }
    .header img{
        width: 50%;
        margin: 20px auto 10px;
        display: block;
    }
</style>
