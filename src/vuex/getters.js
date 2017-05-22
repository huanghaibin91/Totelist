export default {
    // 获取未完成列表
    incompleteList (state) {
        return state.todoList.filter(todo => {
            return todo.status == 1;
        })
    },
    // 获取已完成列表
    completeList (state) {
        return state.todoList.filter(todo => {
            return todo.status == 2;
        });
    },
    // 获取已取消列表
    cancelList (state) {
        return state.todoList.filter(todo => {
            return todo.status == 3;
        });
    },
}