<template>
    <div class="note-list">
        <div>
            <div class="select" @click="todoListFilter">
                <div class="select-value" @click="changeSelectFlag">{{ selectValue }}</div>
                <div class="select-option" v-if="selectFlag" @click="changeSelect">
                    <div>全部</div>
                    <div>未完成</div>
                    <div>已完成</div>
                    <div>已取消</div>
                </div>
            </div>
            <input type="text" placeholder="输入关键字查询" v-model="searchValue">
        </div>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>内容</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todolist">
                    <td>{{ index + 1 }}</td>
                    <td>{{ todo.text }}</td>
                    <td>{{ todo.status | statusText }}</td>
                    <td><button class="delete" @click='changePopupFlag(index)'>删除记录</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import { mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'note-list',
        data () {
            return {
                selectFlag: false,
                selectValue: '筛选类型',
                todolist: this.$store.state.todoList,
                searchValue: '',
            }
        },
        computed: {
            ...mapGetters([
                'incompleteList',
                'completeList',
                'cancelList',
            ]),
            
        },
        watch: {
            // 查询todo事件
            searchValue: function (newSearchValue) {
                this.todoListFilter ();
                if (newSearchValue !== '') {
                    this.todolist = this.todolist.filter(function (todo) {
                        return todo.text.indexOf(newSearchValue) !== -1;
                    });
                } else {
                    this.todolist = this.todolist;
                }
            }
        },
        methods: {
            // 切换筛选条件
            changeSelect (e) {
                let value = e.target.innerText;
                this.selectValue = value;
                this.selectFlag = false;
            },
            // 切换select-option隐藏显示
            changeSelectFlag () {
                return this.selectFlag = !this.selectFlag;
            },
            // 筛选todo事件
            todoListFilter () {
                if (this.selectValue == '筛选类型' || this.selectValue == '全部') {
                    this.todolist = this.$store.state.todoList;
                } else if (this.selectValue == '未完成') {
                    this.todolist = this.incompleteList;
                } else if (this.selectValue == '已完成') {
                    this.todolist = this.completeList;
                } else if (this.selectValue == '已取消') {
                    this.todolist = this.cancelList;
                }
            },
            changePopupFlag (index) {
                this.$store.commit('changePopupFlag', index);
            },
        },
        filters: {
            // 切换select-value显示
            statusText (status) {
                if (status === 1) {
                    return '未完成';
                } else if (status === 2) {
                    return '已完成';
                } else if (status === 3) {
                    return '已取消';
                }
            }
        }
    }
</script>

<style lang="scss">
    .note-list {
        max-width: 800px;
        margin: 0 auto;
        >div {
            height: 60px;
            font: 18px 'Microsoft YaHei';
            .select, input {
                margin-top: 10px;
            }
            .select {
                width: 20%;
                height: 38px;
                border: 1px solid #ccc;
                float: left;
                cursor: pointer;
                .select-value {
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                }
                .select-option {
                    position: relative;
                    top: -1px;
                    left: -1px;
                    background: #eaffd0;
                    >div {
                        width: 100%;
                        height: 39px;
                        text-align: center;
                        line-height: 40px;
                        border: 1px solid #ccc;
                        border-top: none;
                        &:hover {
                            background: #5be7c4;
                        }
                    }
                }
            }
            input {
                width: 70%;
                height: 36px;
                padding: 0 10px;
                float: right;
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            border: 1px solid #ccc;
            thead {
                border-bottom: 1px solid #ccc;
                tr{
                    height: 40px;
                    line-height: 40px;
                    font: 18px 'Microsoft YaHei';
                }
            }
            tbody {
                tr {
                    height: 40px;
                    line-height: 40px;
                    font: 16px 'Microsoft YaHei';
                    border-bottom: 1px solid #ccc;
                    td:nth-child(1) {
                        width: 10%
                    }
                    td:nth-child(2) {
                        width: 60%
                    }
                    td:nth-child(3) {
                        width: 15%
                    }
                    td:nth-child(4) {
                        widows: 15%;
                    }
                }
                button {
                    border: 1px solid #ccc;
                    background: white;
                    border: 1px solid #e84a5f;
                    color: #e84a5f;
                    border-radius: 3px;
                    width: 80px;
                    height: 30px;
                    position: relative;
                    &:hover {
                        background: #e84a5f;
                        color: white;
                    }
                }
            }
        }
    }
</style>
