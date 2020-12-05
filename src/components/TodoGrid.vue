<template>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{todo.first_name}}{{todo.last_name}}</div>
          <div class="md-subhead">{{todo.email}}</div>
        </md-card-header-text>

        <md-card-media>
          <img v-if="todo.avatar" :src="todo.avatar" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Details</md-button>
      </md-card-actions>
    </md-card>
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
  .md-card {
    flex: 0 0 49%;
    box-sizing: border-box;
    margin: 10px;
    &:nth-child(odd){
        margin-left: 0;
    }
    &:nth-child(even){
        margin-right: 0;
    }
  }
</style>