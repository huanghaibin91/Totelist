<template>
    <header>
        <div>
            <h1>Todolist</h1>
            <a class="search" title="弹出事项列表" @click="changeListFlag"><span></span><span></span><span></span></a>
        </div>
    </header>
</template>
<script>

import { mapActions } from 'vuex'

export default {
    name: 'header',
    methods: mapActions([
        'changeListFlag',
    ])
}
</script>

<style lang="scss">
    header {
        position: relative;
        width: 100%;
        height: 60px;
        background: #08d9d6;
        div {
            max-width: 800px;
            height: 60px;
            margin: 0 auto;
            h1 {
                float: left;
                width: 150px;
                height: 60px;
                font: 28px "Microsoft YaHei";
                text-align: center;
                line-height: 60px;
                color: white;
            }
            a {
                display: block;
                width: 60px;
                height: 60px;
                float: right;
                cursor: pointer;
                span {
                    display: block;
                    width: 40px;
                    height: 5px;
                    content: '';
                    background: white;
                    margin: 0 auto;
                    position: relative;
                }
                span {
                    top: 14px;
                    &:nth-child(2) {
                        top: 23px;
                    }
                    &:nth-child(3) {
                        top: 31px;
                    }
                }
            }
        }
    }
</style>

