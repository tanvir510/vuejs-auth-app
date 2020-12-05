<template>
  <div class="page-wrapper todos">
    <div class="container">
        <div class="todos-header">
            <div class="todos-title">User Lists</div>
            <div class="custom-tabs">
                <ul class="tab-area">
                    <li @click="activeTab = 1" :class="activeTab === 1 ? 'tab-list active' :'tab-list'" ><span class="material-icons">format_list_bulleted</span></li>
                    <li @click="activeTab = 2" :class="activeTab === 2 ? 'tab-list active' :'tab-list'" ><span class="material-icons">apps</span></li>
                </ul>
            </div>
        </div>
        <div class="todos-area">
            <md-table md-card v-if="activeTab === 1">
                <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>First Name</md-table-head>
                    <md-table-head>Last Name</md-table-head>
                    <md-table-head>Email</md-table-head>
                </md-table-row>
                <TodoList v-for="todo in items.data" :key="todo.id" :todo="todo" />
            </md-table>

            <div class="grid-view" v-if="activeTab === 2">
                <TodoGrid v-for="todo in items.data" :key="todo.id" :todo="todo"/>
            </div>
            
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
import Pagination from '@/components/common/Pagination'
import TodoGrid from '@/components/TodoGrid'
export default {
    components:{
        TodoList,
        TodoGrid,
        AddTodo,
        Pagination,
    },
    data(){
        return{
            message: false,
            activePage: 1,
            activeTab: 1,
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
    }
}
</script>

<style lang="scss" scoped>
.todos-title{
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
}
.pagination-area{
    max-width: 70%;
    margin: 0 auto;
}
.todos-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.grid-view{
    display: flex;
    flex-wrap: wrap;
}
.tab-area{
    display: flex;
    align-items: center;
    .tab-list{
        margin-left: 10px;
        &.active{
            .material-icons{
                color: #E57301;
            }
        }
        .material-icons{
            font-size: 25px;
            cursor: pointer;
        }
    }
}
</style>