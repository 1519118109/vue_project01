<template>
  <div id="app">
    <h3>百知教育管理系统</h3>
      <router-link to="/home">首页</router-link>
      <router-link to="/user">用户信息</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
    name: 'App',
}
</script>

<style>

</style>
