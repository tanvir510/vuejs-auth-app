<template>
<div class="info-area">
    <div class="info-inner">
        <h3 class="info-title">ChyBuzz</h3>
        <p class="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem Ipsum</p>
        <button class="custom-btn">View More</button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.info-area{
    flex: 0 0 40%;
    max-width: 40%;
    background: #E57301;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    left: -80px;
    padding: 50px 20px;
    
    .info-inner{

        .info-title{
            color: #fff;
            font-size: 24px;
        }
        .info-text{
            color: #fff;
            line-height: 23px;
            font-size: 15px;
            padding: 10px 10px;

        }
        .custom-btn{
            max-width: 150px;
            display: inline-block;
            padding: 10px 10px;
            background: #fff;
            color: #E57301;
        }
    }
}

</style>