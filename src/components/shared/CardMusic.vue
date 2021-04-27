<template>
    <div class="card">
        <div class="card__content">
            <div class="image">
                <div class="play d-flex justify-center align-center red">
                    <img src="@/assets/images/play.png" alt="">
                </div>
            </div>
            <div class="description">

            </div>
        </div>
    </div>
</template>
<script>
export default {
name:'CardMusic',
props:{
    url:String
},
components:{

}
}
</script>
<style scoped>
.card{
    width:210px;
    height: 250px;
    border: 1px solid #000;
    margin-bottom: 3px;
}
</style>