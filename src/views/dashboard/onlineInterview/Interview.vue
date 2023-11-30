<template>
    <Main>
        <BreadcrumbWrapperStyle>
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/">Home</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <router-link to="/interview">Interview</router-link>
                </a-breadcrumb-item>
            </a-breadcrumb>
        </BreadcrumbWrapperStyle>

        <div class="" style="padding-top: 10px;"> 
            <h2>Featured</h2>
            <a-row style="margin-left: -10px; margin-right: -10px; ">
                <a-col :xxl="6" :xl="6" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true" class="card bg-1">
                       <div class="interview_title" style=" color: #fff;"> 
                            <h3 class="title" style=" color: #fff;">SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                       <div class="image" style="text-align: right"> 
                            <img src="https://assets.leetcode.com/static_assets/others/LeetCode_75_3-240x240.png" alt="" style="width: 130px"> 
                       </div>
                    </a-card>
                </a-col>
                <a-col :xxl="6" :xl="6" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true" class="card bg-2" >
                        <div class="interview_title" style=" color: #fff;"> 
                            <h3 class="title" style=" color: #fff;">SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                       <div class="image" style="position: absolute; bottom: -95px; right: 10px; width: 130px;height: 130px;"> 
                            <img src="https://assets.leetcode.com/static_assets/others/Top_Interview_150_3-240x240.png" alt="" style="width: 100%"> 
                        </div>
                    </a-card>
                </a-col>
                <a-col :xxl="6" :xl="6" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true" class="card bg-3">
                        <div class="interview_title" style=" color: #fff;"> 
                            <h3 class="title" style=" color: #fff;">SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                       <div class="image" style="position: absolute; bottom: -95px; right: 10px; width: 130px;height: 130px;"> 
                            <img src="https://assets.leetcode.com/static_assets/others/Binary_Search_3-240x240.png" alt="" style="width: 100%"> 
                        </div>
                    </a-card>
                </a-col>
                <a-col :xxl="6" :xl="6" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true" class="card bg-4">
                        <div class="interview_title" style=" color: #fff;"> 
                            <h3 class="title" style=" color: #fff;">SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                       <div class="image" style="position: absolute; bottom: -95px; right: 10px; width: 130px;height: 130px;"> 
                            <img src="https://assets.leetcode.com/static_assets/others/Top_SQL_50_3-240x240.png" alt="" style="width: 100%"> 
                        </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>

        <div style="padding-top: 30px;"> 
            <h2>Sprint Interview</h2>
            <a-row style="margin-left: -10px; margin-right: -10px;  ">
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>

        <div style="padding-top: 30px;"> 
            <h2>Sprint Interview</h2>
            <a-row style="margin-left: -10px; margin-right: -10px;  ">
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
               
            </a-row>
        </div>

        <div style="padding-top: 30px;"> 
            <h2>Sprint Interview</h2>
            <a-row style="margin-left: -10px; margin-right: -10px;  ">
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
               
                <a-col :xxl="8" :xl="8" :lg="12" :md="12" :sm="12" :xs="12" style="padding: 0 10px;">
                    <a-card :hoverable="true">
                        <div > 
                            <img src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover" alt="" style="width: 100%"> 
                        </div>
                        <div class="interview_title" > 
                            <h3 class="title" >SQL</h3>
                            <p class="des">Ace Coding Interview with 75 Qs</p>
                       </div>
                    </a-card>
                </a-col>
               
            </a-row>
        </div>
       
        
    </Main>
</template>

<script setup lang="ts">
    import {Main} from '@/views/styled';
    import { BreadcrumbWrapperStyle } from "@/views/uiElements/ui-elements-styled";
    import {CustomBannerCardWrap} from '@/components/banners/Style'
    

</script>

<style scoped>
:global(#app > div > div > section > section > section > main > div > div > div > div > div > div) {
    display: flex;
    padding: 10px !important;
    height: 100px;
}
:global(#app > div > div > section > section > section > main > div > div > div > div > div) {
    border-radius: 10px !important;
}
:global(#app > div > div > section > section > section > main > div > div > div > div) {
    margin-bottom: 10px;
}
:global(#app > div > div > section > section > section > main > div > div > div > div > div > div > div) {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 8px;
}
:global(#app > div > div > section > section > section > main > div > div > div > div > div > div > div.interview_title) {
    flex: 2;
}
.card {
    border-radius: 15px;
    height: 240px;
    display: flex; 
    justify-content: space-between;
    flex-direction: column; 
}
.bg-1 {
    background: linear-gradient(rgb(18, 92, 204) 0%, rgb(19, 41, 120) 100%);
}
.bg-2 {
    background: linear-gradient(rgb(0, 111, 146) 0%, rgb(10, 51, 115) 100%);
}
.bg-3 {
    background: linear-gradient(rgb(95, 54, 212) 0%, rgb(59, 1, 133) 100%);
}
.bg-4 {
    background: linear-gradient(rgb(8, 118, 117) 0%, rgb(20, 57, 101) 100%)
}
:global(#app > div > div > section > section > section > main > div > div.ant-row) {
    margin-left: -10px;
    margin-right: -10px;
}
:global(#app > div > div > section > section > section > main > div > div.ant-row > div) {
    padding: 10px;
}
:global(#app > div > div > section > section > section > main > div > div.ant-row > div:nth-child(1) > div > div) {
    padding: 16px !important;
}
:global(#app > div > div > section > section > section > main) {
    margin-top: 25px;
}
</style>