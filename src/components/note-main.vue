<template>
    <div class="note-main">
        <div class="incomplete">
            <p>未完成</p>
            <ul>
                <li v-for="todo in incompleteList">
                    <span>{{ todo.text }}</span><button class="complete-btn" @click="complete(todo)">完成</button><button class="cancel-btn" @click="cancel(todo)">取消</button>
                </li>
            </ul>
        </div>
        <div class="complete">
            <p>已完成</p>
            <ul>
                <li v-for="complete in completeList">
                    <span>{{ complete.text }}</span><span class="time"></span>
                </li>
            </ul>
        </div>
        <div class="cancel">
            <p>已取消</p>
            <ul>
                <li v-for="cancel in cancelList">
                    <span>{{ cancel.text }}</span><button class="recovery-btn" @click="recovery(cancel)">恢复</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'incompleteList',
                'completeList',
                'cancelList',
            ]),
        },
        methods: {
            // 改变todo事件状态
            complete (todo) {
                todo.status = 2;
            },
            cancel (todo) {
                todo.status = 3;
            },
            recovery (todo) {
                todo.status = 1;
            },
        }
    }
</script>

<style lang="scss">
    .note-main {
        max-width: 800px;
        margin: 0 auto;
        >div {
            width: 100%;
            border-top: 2px solid white;
            p {
                height: 40px;
                background: #08d9d6;
                font: 16px "Microsoft YaHei";
                color: white;
                text-indent: 1em;
                line-height: 40px;
            }
            ul {
                li {
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #ccc;
                    border-top: none;
                    span {
                        display: inline-block;
                        max-width: 600px;
                        height: 40px;
                        overflow: hidden;
                        text-indent: 1em;
                    }
                    .time {
                        float: right;
                        font: 14px 'Microsoft YaHei';
                        color: #e84a5f;
                        line-height: 40px;
                        padding-right: 20px;
                    }
                    button {
                        border: 1px solid #ccc;
                        background: white;
                        border-radius: 5px;
                        width: 50px;
                        height: 30px;
                        margin-right: 1em;
                        float: right;
                        position: relative;
                        top: 5px;
                        &.complete-btn:hover {
                            border: 1px solid #00e0ff;
                            color: #00e0ff;
                        }
                        &.cancel-btn:hover {
                            border: 1px solid #e84a5f;
                            color: #e84a5f;
                        }
                        &.recovery-btn:hover {
                            border: 1px solid green;
                            color: green;
                        }
                    }
                }
            }
        }
    }
</style>

