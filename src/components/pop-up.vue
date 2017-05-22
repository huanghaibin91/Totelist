<template>
    <div class="popup">
        <h3>提示</h3>
        <p>删除后数据不可恢复，是否继续？</p>
        <div>
            <button @click="changePopupFlag">取消</button>
            <button @click="deleteTodo">确认</button>
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'changePopupFlag',
                'deleteTodo',
            ]),
        }
    }
</script>

<style lang="scss">
    .popup {
        max-width: 300px;
        background: white;
        border: 1px solid #ccc;
        padding: 20px;
        margin: 0 auto;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -150px;
        p {
            text-align: center;
            font: 16px 'Microsoft YaHei';
            color: #484848;
            padding: 30px 0;
        }
        >div {
            text-align: right;
            button {
                border: 1px solid #ccc;
                background: white;
                border: 1px solid #3490de;
                color: #3490de;
                border-radius: 3px;
                width: 50px;
                height: 30px;
                position: relative;
                &:hover {
                    background: #3490de;
                    color: white;
                }
            }
        }
    }
</style>
