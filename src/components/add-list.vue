<template>
    <div class="add-list">
        <input id="text" type="text" placeholder="输入事项~~~" v-model="text" @keyup.enter="addTodo">
        <button @click="addTodo">提交</button>
    </div>
</template>

<script>
    export default {
        name: 'add-list',
        data () {
            return {
                text: ''
            }
        },
        methods: {
            // 添加todo事件
            addTodo () {
                if (this.text !== '') {
                    let newTodo = {
                        text: this.text,
                        status: 1, 
                    }
                    this.$store.commit('addTodo', newTodo);
                    this.text = '';          
                }
            }
        }
    }
</script>

<style lang="scss">
    .add-list {
        max-width: 800px;
        margin: 0 auto;
        height: 40px;
        padding: 20px 10px;
        input {
            width: 83%;
            height: 38px;
            font: 18px 'Microsoft YaHei';
            margin-right: 5%;
            padding: 0 10px;
            border-radius: 5px;
            border: 1px solid #08d9d6;
        }
        button {
            width: 8%;
            height: 40px;
            background: #08d9d6;
            font: 18px 'Microsoft YaHei';
            color: white;
            border: none;
            border-radius: 5px;
            float: right;
        }
    }
</style>
