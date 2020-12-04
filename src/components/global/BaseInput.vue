<template>
    <div class="form-group">
        <input 
            type="text" 
            class="form-control" 
            :placeholder="label"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props:{
        label: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss" scoped>

.form-group{
  position: relative;
  margin-bottom: 20px;

  .form-control{
    outline: none;
    width: 100%;
    padding: 10px 20px;
    font-size: 15px;
    outline: 0;
    font-weight: 400;
    color: #606060;
    height: 45px;
    border-radius: 3px;
    border: 1px solid #b5b5b5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
  }
}

</style>