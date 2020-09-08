<template>
 <div>
     <h3>留言板</h3>
     <input type="text" v-model="message">
     <button @click="add_note">添加留言</button>

     <br>
     <ul>
         <li v-for="(value, index) in msg_list" :key="index">
             <span>{{value}}</span>
             <a href="javascript:void(0);" @click="delmessage(index)">删除</a>
         </li>
     </ul>
     <h3><input type="button" value="删除全部" @click="delall" v-show="msg_list.length!=0"></h3>
     <h3>留言共：{{msg_list.length}}条</h3>
 </div>
</template>

<script>
    export default {
        name: "Home",
        data:function () {
            return{
                message: "",
                // 判断localStorage.msgs 有值 则显示 如果没有  则设置为后面的空列表
                msg_list: localStorage.msgs ? JSON.parse(localStorage.msgs) : [],
            }
            },
        methods:{
            add_note(){
                let msg = this.message;
                if(msg){
                    this.msg_list.unshift(this.message);
                    // 将用户发表的数据持久化到localStorage
                    // 储存前将数据进行序列化
                    localStorage.msgs = JSON.stringify(this.msg_list);
                    this.message = "";
                }
            },
            delmessage(index){
                this.msg_list.splice(index,1)
                localStorage.msgs = JSON.stringify(this.msg_list);
            },
            delall(){
                this.msg_list=[]
                localStorage.clear();
            },
        }
    }
</script>

<style scoped>

</style>
