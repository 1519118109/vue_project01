<template>
    <div>
        <h3>用户详情</h3>
        <h4>用户id:{{$route.params.id}}</h4>
        <h4>用户姓名:{{$route.params.name}}</h4>
        <h4>用户年龄:{{$route.params.age}}</h4>
        <h4>用户介绍:{{$route.params.content}}</h4>
        <br>
        <button><router-link to="/home">返回首页</router-link></button>
        <button><router-link to="/user">返回用户列表</router-link></button>
    </div>
</template>

<script>
    export default {
        name: "UserDetail"
    }
</script>

<style scoped>

</style>
