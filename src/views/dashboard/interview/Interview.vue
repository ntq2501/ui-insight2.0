<template>
    <div id="interview-wrapper">
        <Main>
          <ModalTimeout :visible="modalTimeOutVisible" :closeModalTimeOut="closeModalTimeOut" />
          <a-row :gutter="30">
            <a-col :xxl="16" :xl="16" :lg="15" :md="14" :xs="24" :sm="24" class="chat-section">
                <SingleChat :selectedContent="selectedContent" />
            </a-col>
            
            <a-col :xxl="8" :xl="8" :lg="9" :md="10" :xs="24" :sm="24" class="sidebar-section">
                <UserBioBox>
                  <sdCards headless>
                      <article class="user-info" >
                        <sdHeading as="h5" class="user-info__title">
                            <p class="right-sidebar-title" >Còn lại: </p>
                        </sdHeading>
                        <a-statistic-countdown :value="deadline" :format="'mm:ss'" @finish="onFinish" />
                      </article>
                      
                      <article class="user-info">
                        <a-select v-model:value="selectedValue" style="width: 120px" ref="select" @change="handleChange">
                          <a-select-option value="1">Câu hỏi phổ biến</a-select-option>
                          <a-select-option value="2">Câu hỏi mới nhất</a-select-option>
                          <a-select-option value="3">Câu hỏi liên quan</a-select-option>
                        </a-select>
                      </article>

                      <article class="user-info" v-if="selectedValue === '1'">
                          <a-tabs v-model:activeKey="activeKey">
                            <a-tab-pane key="1" tab="Cơ bản">
                              <TabListQuestion :data="dataAdvancedQuestion" @on-click-item-question="handleClickItemQuestion" />
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="Nâng cao">
                              <TabListQuestion  :data="dataExpertQuestion" @on-click-item-question="handleClickItemQuestion" />
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="Chuyên gia">
                              <TabListQuestion  :data="dataBasicQuestion" @on-click-item-question="handleClickItemQuestion" />
                            </a-tab-pane>
                          </a-tabs>
                      </article>

                      <article class="user-info" v-if="selectedValue === '2'">
                        <a-tabs v-model:activeKey2="activeKey2">
                          <a-tab-pane key="4" tab="Cơ bản">
                            <TabListQuestion :data="dataExpertQuestion" @on-click-item-question="handleClickItemQuestion" />
                          </a-tab-pane>
                          <a-tab-pane key="5" tab="Nâng cao">
                            <TabListQuestion  :data="dataBasicQuestion" @on-click-item-question="handleClickItemQuestion" />
                          </a-tab-pane>
                          <a-tab-pane key="6" tab="Chuyên gia">
                            <TabListQuestion  :data="dataAdvancedQuestion" @on-click-item-question="handleClickItemQuestion" />
                          </a-tab-pane>
                        </a-tabs>
                      </article>

                      <article class="user-info" v-if="selectedValue === '3'">
                        <a-tabs v-model:activeKey3="activeKey3">
                          <a-tab-pane key="4" tab="Cơ bản">
                            <TabListQuestion :data="dataAdvancedQuestion" @on-click-item-question="handleClickItemQuestion" />
                          </a-tab-pane>
                          <a-tab-pane key="5" tab="Nâng cao">
                            <TabListQuestion  :data="dataExpertQuestion" @on-click-item-question="handleClickItemQuestion" />
                          </a-tab-pane>
                          <a-tab-pane key="6" tab="Chuyên gia">
                            <TabListQuestion  :data="dataBasicQuestion" @on-click-item-question="handleClickItemQuestion" />
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
    import { ref, onMounted, reactive, inject ,watch } from 'vue';
    import ModalTimeout from '@/views/dashboard/interview/ModalTimeout.vue';
    import TabListQuestion from '@/views/dashboard/interview/ListItemQuestion.vue';

    const selectedValue = ref('1');
    const selectedContent = ref('');
    const activeKey = ref('1');
    const activeKey2 = ref('4');
    const activeKey3 = ref('7');
    onMounted(() => {
        activeKey.value = '1';
        activeKey2.value = '4';
        activeKey3.value = '7';
    });
    const handleChange = (value: any) => {
      console.log(`selected ${value}`);
    };
    const dataBasicQuestion = reactive([
      "Prop component là gì? ",
      "Mô tả lifecycle hooks trong Vuejs",
      "Trong Vuejs, reactivity là gì? ",
      "command-line interface của Vue (hoặc CLI)",
      "Khác nhau giữa v-show và v-if trong Vue",
    ])
    const dataAdvancedQuestion = reactive([
      "Hãy nêu những hiểu biết của bạn về lập trình OOP?",
      "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs Liệt kê các ",
      "Mảng tuần tự là gì? Khác gì với bất tuần tự? Để duyệt mảng ta dùng vòng lặp nào?",
      "PHP có mấy cách khai báo? Những cách nào được xem là chính thống và không ảnh hưởng khi các phiên bản update sau này?",
      "Làm thế nào để xác minh nếu một đột biến (mutation) xảy ra? ",
      "Tại sao component data phải là một function? ",
      "Virtual DOM là gì? ",
      "Lớp trong ngôn ngữ C# gồm mấy loại?",
      "Sự khác nhau của Overload và Override là gì? Sử dụng khi nào?",
      "Vue plugin là gì? ",
      "Hằng trong PHP khác gì so với biến? Nếu 1 hằng được định nghĩa 2 lần, thì liệu có bị lỗi không?",
      "Vue-loader là gì? ",
      "Watchers là gì? ",
      "Mô tả Single File Component (component file riêng biệt) trong Vuejs",
      "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs",
    ])

    const dataExpertQuestion = reactive([
      "Hãy nêu những hiểu biết của bạn về lập trình OOP?",
      "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs Liệt kê các ",
      "Tại sao component data phải là một function? ",
      "Làm thế nào để xác minh nếu một đột biến (mutation) xảy ra? ",
      "Virtual DOM là gì? ",
      "PHP có mấy cách khai báo? Những cách nào được xem là chính thống và không ảnh hưởng khi các phiên bản update sau này?",
      "Vue plugin là gì? ",
      "Vue-loader là gì? ",
      "Watchers là gì? ",
      "Mô tả Single File Component (component file riêng biệt) trong Vuejs",
      "Liệt kê các loại Directives (chỉ thị) có sẵn trong Vuejs",
    ])

    const handleClickItemQuestion = (value: string) => {
      console.log(value);
      
      selectedContent.value = value
    }

    const modalTimeOutVisible = ref(false);
    const openModalTimeOut = () => {
      modalTimeOutVisible.value = true;
    };
    const closeModalTimeOut = () => {
      modalTimeOutVisible.value = false;
    };

    const onFinish = () => {
      openModalTimeOut();
    };
    
    const timeRemaining = ref<number>(10); // minutes
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
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(2)) {
    border: none;
    margin-bottom: 0;
  }
  :global(#rc-tabs-5-panel-1 > div > div.ant-spin-nested-loading > div > ul > li:nth-child(1)) {
    padding-top: 0;
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
    padding-top: 6px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(1) > div) {
    padding-left: 8px;
    color: #dc7c4a;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(2) > h1) {
    margin-bottom: 10px;
  }
  :global(#rc-tabs-75-panel-3 > div > div.ant-spin-nested-loading > div > ul > li:hover),
  :global(#rc-tabs-5-panel-1 > div > div > div > ul > li:hover) {
    color: #21498c;
    cursor: pointer;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-9.ant-col-xxl-8.sidebar-section > div > div > div) {
    padding-top: 0 !important;
  }

  .ant-list-item,
  :global(div > div.ant-spin-nested-loading > div > ul > li)
  {
    padding-left: 0;
    font-size: 16px;
  }
  .ant-list-item:hover,
  :global(div > div.ant-spin-nested-loading > div > ul > li:hover)
 {
    color: #21498c;
    cursor: pointer;
  }
  :global(div > div.ant-spin-nested-loading) {
    height: 385px;
    min-height: 385px;
    max-height: 385px;
  }
  p.right-sidebar-title{
    color: #21498c ; 
    font-size: 18px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(1) > div > div > span) {
    font-size: 22px;
    font-weight: 500;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(2) > div) {
    width: 100% !important;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(2) > div > div > span.ant-select-selection-item) {
    font-size: 18px;
    font-weight: 500;
    color: #21498c;
  }

  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div > div) {
    font-size:16px
  }
  /* css pagination */
  :global(.ant-pagination-disabled button) {
    cursor: default !important;
  }

  :global(.ant-pagination-prev.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
  }

  :global(.ant-pagination-next.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
  }

  :global(.ant-pagination-prev button svg) {
    fill: black !important;
  }

  :global(.ant-pagination-next button svg) {
    fill: black !important;
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
  :global(body > div:nth-child(11) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > ul) {
    margin-bottom: 15px;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div > div) {
    color: #bbbbbb;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div.ant-tabs-tab.ant-tabs-tab-active > div) {
    color: #21498c;
  }
  :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div.ant-tabs-ink-bar.ant-tabs-ink-bar-animated) {
    background: #21498c;
  }
  @media screen and (max-width: 768px) {
    :global(.bIdTT .chatbox-reply-form .chatbox-reply-input input) {
      margin-bottom: 0;
    }
    :global(.bIdTT .chatbox-reply-form) {
      flex-direction: row;
    }
    :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section) {
      margin-top: 16px;
    }
    :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article > div > div.ant-tabs-nav > div.ant-tabs-nav-wrap > div > div > div) {
      font-size: 15px;
    }
    :global(#interview-wrapper > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-10.ant-col-lg-9.ant-col-xl-8.ant-col-xxl-8.sidebar-section > div > div > div > article:nth-child(1) > div > div > span) {
      font-size: 20px;
    }
    :global(div > div.ant-spin-nested-loading > div > ul > li) {
      font-size: 15px;
    }
    p.right-sidebar-title {
      font-style: 17px;
    }
  }
</style>
  