<template>
    <Main>
        <a-row>
            <a-col :xxl="6" :xl="6" :lg="12" :md="12" :sm="12" :xs="12">
                <a-card :hoverable="true" background="linear-gradient(rgb(0, 111, 146) 0%, rgb(10, 51, 115) 100%)" style="position: relative">
                   <div class="interview_title"> 
                        <h3 class="title">SQL</h3>
                        <p class="des">Ace Coding Interview with 75 Qs</p>
                   </div>
                   <div class="image" style="position: absolute; bottom: 0; right: 0;"> 
                        <img src="https://assets.leetcode.com/static_assets/others/LeetCode_75_3-240x240.png" alt=""> 
                   </div>
                </a-card>
            </a-col>
        </a-row>
        
    </Main>
</template>

<script setup lang="ts">
    import {Main} from '@/views/styled';
    import {CustomBannerCardWrap} from '@/components/banners/Style'
    

</script>