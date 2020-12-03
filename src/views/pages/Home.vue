<template>
  <div class="page-wrapper todos">
    <div class="container">
        <h1 class="todos-title">User Lists</h1>
        <AddTodo @changed="changed" />
        <div class="todos-area">
            <md-table md-card>
                <md-table-toolbar>
                    <h1 class="md-title">Todo Information: </h1>
                </md-table-toolbar>
                <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>First Name</md-table-head>
                    <md-table-head>Last Name</md-table-head>
                    <md-table-head>Email</md-table-head>
                </md-table-row>
                <TodoList v-for="todo in items.data" :key="todo.id" :todo="todo" />
            </md-table>
            
            <!-- Global Pagination Component -->
            <div class="pagination-area">
                <Pagination
                    v-if="items && items.total_pages !== 1"
                    :pages="items && items.total_pages"
                    :current="activePage"
                    @changed="changedPage"
                />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Pagination from '@/components/global/Pagination'
export default {
    components:{
        TodoList,
        AddTodo,
        Pagination
    },
    data(){
        return{
            message: false,
            activePage: 1,
        }
    },
    methods: {
        changed(value){
            this.addTodo(value)
        },
        changedPage(page){
            this.activePage = page
            this.fetchPagination(page)
        },
        ...mapActions({
            fetchTodos: 'todos/fetchTodos',
            addTodo: 'todos/addTodo',
            fetchPagination: 'todos/fetchPagination'
        })
    },
    mounted(){
        this.fetchTodos()
    },
    computed:{
        ...mapGetters({
            items: 'todos/getTodos',
        })
    },
    watch:{

    }
}
</script>

<style lang="scss" scoped>
.todos-title{
    margin-bottom: 30px;
    margin-top: 30px;
}
.pagination-area{
    max-width: 70%;
    margin: 0 auto;
}
</style>