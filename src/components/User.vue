<template>
    <div>
        <h3>用户信息列表</h3>
        <table border="1" cellspacing="0">
            <tr align="center">
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.content}}</td>
<!--                /{{user.name}}/{{user.age}}/{{user.content}}/-->
                <td> 删除 | <router-link :to="`/detail/${user.id}/${user.name}/${user.age}/${user.content}`">用户详情</router-link> </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data:function () {
            return{
                users: [
                    {id: 1, name: "小黄", age: 23, content: "我是小黄"},
                    {id: 2, name: "小红", age: 23, content: "我是小红"},
                    {id: 3, name: "小绿", age: 23, content: "我是小绿"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
