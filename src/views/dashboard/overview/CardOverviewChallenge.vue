<template>
    <div id="card-overview-challenge" >
        <img :src="props.bgImage" alt="" style="width:100%; height: 100%">
        <div>
            <h3>{{ props.title }}</h3>
            <div>
                <p>{{ props.quantity }}</p>
                <a-button @click="handleRedirect(props.id)" type="primary">Xem tất cả</a-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import PropTypes from 'vue-types';
    import router from '@/router';

    const props = defineProps({
        title: PropTypes.string,
        bgImage: PropTypes.string,
        quantity: PropTypes.number,
        id: PropTypes.number,
    });
    const handleRedirect = (id: number) => {
        console.log(id);
        router.push({name: 'overviewChallengeDetail', params: {id}});
    }
</script>
<style scoped>
#card-overview-challenge {
    border-radius: 40px;
    overflow: hidden;
}
#card-overview-challenge > div > h3 {
    padding: 10px 20px;
    border-bottom: 1px solid #F0F2F5;
    font-weight: 600;
    font-size: 30px;
    color: #ffffff;
}
#card-overview-challenge > div {
    height: 100%;
}
#card-overview-challenge > div > h3,
#card-overview-challenge > div > div {
    position: relative;
    z-index: 3; 
}
#card-overview-challenge > div > div {
    align-self: end;
    width: 50% !important;
    text-align: center;
    margin-top: 25px;
}
#card-overview-challenge > div > div > p {
    font-weight: 600;
    font-size: 40px;
    color: #ffffff;
    text-align: center;
}
#card-overview-challenge > div > div > button {
    background-color: #E65A2B;
    border-radius:30px;
    color: #ffffff;
    border: none;
    padding: 8px 22px;
    height: unset;
    font-size: 20px;
}
#card-overview-challenge > div > div > button:hover {
    cursor: pointer;
    opacity: 0.8;
}
#card-overview-challenge > div {
    display: flex;
    flex-direction: column;
}
@media only screen and (min-width:768px) and (max-width: 1000px) {
    #card-overview-challenge > div > div > button {
        border-radius:30px;
        padding: 8px 18px;
        font-size: 16px;
    }
}
@media screen and (max-width: 768px){
    #card-overview-challenge > div > h3 {
        font-size: 26px;
        font-weight: 600;
    }
    #card-overview-challenge > div > div > button {
        padding: 8px 20px;
        font-size: 18px;
    }
}
</style>
