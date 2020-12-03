<template>
    <div class="add-todo">
        <md-field>
            <label>Add new item</label>
            <md-input v-model="name" @keyup.enter="submitItem"></md-input>
            <span class="md-error">There is an error</span>
        </md-field>
    </div>
</template>

<script>

export default {
    data(){
        return{
            name: '',
            id: 5,
        }
    },
    methods:{
        submitItem(e){
            e.preventDefault();
            let payload = {
                name: this.name,
                completed: false,
                id: this.id,
            }
            this.$emit('changed', payload)
            this.name =  ''
            this.id++
        }
    }
}
</script>

<style lang="scss" scoped>
.add-todo{
    margin-bottom: 30px;
    input{
        outline: none;
        padding: 10px 15px;
        min-width: 350px;
        border: 1px solid #f1f1f1;
    }
}
</style>