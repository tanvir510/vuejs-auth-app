<template>
    <md-table-row>
        <md-table-cell md-numeric>{{todo.id}}</md-table-cell>
        <md-table-cell>{{todo.first_name}}</md-table-cell>
        <md-table-cell>{{todo.last_name}}</md-table-cell>
        <md-table-cell>{{todo.email}}</md-table-cell>
    </md-table-row>
</template>

<script>
export default {
    props:{
        todo: {
            type: Object,
            default: () => {}
        }
    }
}

</script>

<style lang="scss" scoped>
.todo-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    padding: 15px;
    border: 1px solid #f2f2f2;
    .todo-name{
        flex: 40%;
        box-sizing: border-box;
    }
    .todo-action{
        flex: 20%;
        box-sizing: border-box;
    }
    .todo-status{
        flex: 40%;
        box-sizing: border-box;
        text-align: left;
        button{
            outline: none;
            border: none;
            background: green;
            color: white;
            font-size: 14px;
            padding: 5px 10px;
            border-radius: 5px;
            min-width: 80px;
            &.rejected{
                background: red;
            }
        }
    }
}
</style>
