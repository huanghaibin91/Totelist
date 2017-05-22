export default  {
    // 切换noto-list显示隐藏
    changeListFlag (state) {
        state.listFlag = !state.listFlag;
    },
    // 切换pop-up显示隐藏
    changePopupFlag (state, index) {
        state.popupFlag = !state.popupFlag;
        state.deleteIndex = index;
    },
    // 添加todo事件
    addTodo (state, newTodo) {
        state.todoList.push(newTodo);
    },
    // 删除todo事件
    deleteTodo (state, index) {
        state.popupFlag = !state.popupFlag;
        state.todoList.splice(state.deleteIndex, 1);
    }
}