<template>

    <div id="interview-wrapper">
        <Main>
          <ModalTimeout :visible="modalVisible" :closeModal="closeModal" />
          <a-row :gutter="30">
            <a-col :xxl="16" :xl="15" :lg="15" :md="14" :xs="24" :sm="24" class="chat-section">
                <SingleChat :selectedContent="selectedContent" />
            </a-col>
            
            <a-col :xxl="8" :xl="9" :lg="9" :md="10" :xs="24" :sm="24" class="sidebar-section">
                <UserBioBox>
                  <sdCards headless>
                      <article class="user-info" >
                        <sdHeading as="h5" class="user-info__title">
                            <p style="font-size: larger; color: #21498c">Time remaining: </p>
                        </sdHeading>
                        <a-statistic-countdown :value="deadline" :format="'mm:ss'" @finish="onFinish" />
                      </article>
                      <article class="user-info">
                          <sdHeading as="h5" class="user-info__title">
                          <p style="font-size: larger;color: #21498c">Frequently Asked Questions</p>
                          </sdHeading>
                          <a-tabs v-model:activeKey="activeKey">
                            <a-tab-pane key="1" tab="Basic">
                                <a-list  bordered :data-source="dataFresherQuestions">
                                    <template #renderItem="{ item }">
                                      <a-list-item @click="handleItemQuestionClick(item)">{{ item }}</a-list-item>
                                    </template>
                                </a-list>
                            </a-tab-pane>
                          
                            <a-tab-pane key="2" tab="Master" force-render>
                                <a-list  bordered :data-source="dataQuestions">
                                    <template #renderItem="{ item }">
                                      <a-list-item @click="handleItemQuestionClick(item)">{{ item }}</a-list-item>
                                    </template>
                                </a-list>
                            </a-tab-pane>
                          
                          </a-tabs>
                      </article>
                      
                  </sdCards>
                </UserBioBox>
            </a-col>
            
          </a-row>
        </Main>
    </div>
   
  </template>
  
  <script setup lang="ts">
    import { UserBioBox } from '@/views/apps/myProfile/overview/style';
    import { Main } from '@/views/styled';
    import SingleChat from '@/views/dashboard/SingleChat.vue';
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
    import { ref, onMounted, reactive  } from 'vue';
    import ModalTimeout from '@/views/dashboard/interview/ModalTimeout.vue';

    const selectedContent = ref('');
    const activeKey = ref('1');
    onMounted(() => {
        activeKey.value = '1';
    });

    const dataFresherQuestions = reactive([
        "Prop component là gì? ",
        "Mô tả lifecycle hooks trong Vuejs",
        "Trong Vuejs, reactivity là gì? ",
        "command-line interface của Vue (hoặc CLI)",
        "Khác nhau giữa v-show và v-if trong Vue",
    ])
    const dataQuestions = reactive([
        "Tại sao component data phải là một function? ",
        "Virtual DOM là gì? ",
        "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs",
        "Vue plugin là gì? ",
        "Vue-loader là gì? ",
        "Watchers là gì? ",
        "Watchers là gì? ",
        "Vue plugin là gì? ",
        "Watchers là gì? ",
        "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs",

    ])

    const handleItemQuestionClick = (content: string) => {
      selectedContent.value = content;
    }

    const modalVisible = ref(false);
    const openModalRating = () => {
      modalVisible.value = true;
    };
    const closeModal = () => {
      modalVisible.value = false;
    };

    const onFinish = () => {
        console.log('finished!');
        openModalRating();
    };
    
    const timeRemaining = ref<number>(5.1); // minutes

    const deadline = Date.now() + timeRemaining.value * 60 * 1000 ;
    
</script>
  
  
<style scoped>
  :global(#interview-wrapper > div) {
    padding-top: 20px;
    padding-bottom: 0;
    min-height: unset !important;
  }
  :global(body),
  :global(#app > div > div > section > section > section),
  :global(main > #interview-wrapper) {
    background-color: #f2f2f2;
  }
  :global(#app > div > div > section > section > section > main) {
    margin-top: 0;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article) {
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(1)) {
    display: flex;
    align-items: baseline;
    padding-bottom: 0;
    padding-top: 0;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;
    padding-top: 5px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(1) > div) {
    padding-left: 8px;
    color: #dc7c4a;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(2) > h1) {
    margin-bottom: 10px;
  }
  :global(#rc-tabs-5-panel-1 > div > div > div > ul > li:hover) {
    color: #21498c;
    cursor: pointer;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div) {
    padding-top: 0 !important;
  }

  .lmeiNC .ant-list-bordered,
  :global(#rc-tabs-1-panel-2 > div),
  :global(#rc-tabs-1-panel-1 > div),
  :global(#rc-tabs-0-panel-2 > div),
  :global(#rc-tabs-0-panel-1 > div) {
    border: none;
  }
  .ant-list-bordered .ant-list-item,
  :global(#rc-tabs-1-panel-2 > div > div > div > ul > li),
  :global(#rc-tabs-1-panel-1 > div > div > div > ul > li),
  :global(#rc-tabs-0-panel-2 > div > div > div > ul > li),
  :global(#rc-tabs-0-panel-1 > div > div > div > ul > li) {
    padding-left: 0;
  }
  .ant-list-bordered .ant-list-item:hover,
  :global(#rc-tabs-1-panel-2 > div > div > div > ul > li:hover),
  :global(#rc-tabs-1-panel-1 > div > div > div > ul > li:hover),
  :global(#rc-tabs-0-panel-2 > div > div > div > ul > li:hover),
  :global(#rc-tabs-0-panel-1 > div > div > div > ul > li:hover) {
    color: #21498c;
    cursor: pointer;
  }
  
  /*chat*/
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > ul > div > li:nth-child(1)){
    margin-top: 6px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > ul > div > li > div > div > div > div > div.ninjadash-chatbox__message > div) {
    padding: 10px 16px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > ul > div > li) {
    margin-bottom: 10px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div) {
    margin-bottom: 0 !important;
  }
  :global(#app > div > div > section > section > section > main > footer),
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-action.d-flex > a:nth-child(1)),
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-action.d-flex > a:nth-child(2)),
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-input > span > a > div) {
    display: none;
  }
  /**/
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div) {
    height: calc(100vh - 100px);
    overflow: auto;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div::-webkit-scrollbar)
  {
    width: 6px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div::-webkit-scrollbar-track)
  {
    background: #f1f1f1;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div::-webkit-scrollbar-thumb)
  {
    background: #dfdfdf;
    border-radius: 6px;
  }

  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section) {
    height: calc(100vh - 100px);
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section) {
    display: flex;
    height: calc(100vh - 100px);
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div) {
    display: flex;
    flex: 1;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div) {
    display: flex;
    flex-direction: column;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body) {
    flex: 1;
    display: flex !important;
    flex-direction: column;
    justify-content: end;
    padding-top: 0 !important;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > ul) {
    flex: 1;
    display: flex;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div > div.ant-card-body > ul > div) {
    flex: 1;
    height: calc(100vh - 270px);
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-15.ant-col-xxl-16.chat-section > div > div) {
  }

  @media screen and (max-width: 768px) {
    :global(.bIdTT .chatbox-reply-form .chatbox-reply-input input) {
      margin-bottom: 0;
    }
    :global(.bIdTT .chatbox-reply-form) {
      flex-direction: row;
    }
  }
</style>
  