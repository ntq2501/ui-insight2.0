<script setup lang="ts">
  import { UserBioBox } from '../../apps/myProfile/overview/style';
  import { Main } from '../../styled';
  import SingleChat from '../../apps/chat/SingleChat.vue';
  import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
  import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
  import { ref } from 'vue';

  const title = ref('Thao tác với v-for lồng');

  const codeExample = ref(`<template>
                  <div class="conditional-rendering">
                    <p v-for="item in hocSinh" :key="item">
                      <span>
                      Tên: {{item.name}} có tuổi là {{item.age}} sống tại {{item.address}}. Đã học các môn sau: 
                      <span v-for="sub in item.subject" :key="sub">
                        <span v-html="{{sub}}" ></span>,
                      </span>
                      </span>
                    </p>
                  </div>
                </template>
                <script>
                export default {
                  name: "HelloWorld",
                  data() {
                    return {
                      hocSinh: [
                        {
                          name: "Nguyen Van A",
                          age: 18,
                          address: "Ha Noi",
                          subject: ["Toan", "Ly", "Hoa"]
                        },
                        {
                          name: "Nguyen Van B",
                          age: 20,
                          address: "TPHCM",
                          subject: ["Toan", "Ly"]
                        },
                        {
                          name: "Nguyen Van C",
                          age: 22,
                          address: "Hai Phong",
                          subject: ["Toan", "Hoa"]
                        },
                        {
                          name: "Nguyen Van D",
                          age: 18,
                          address: "Ha Noi",
                          subject: ["Toan"]
                        },
                        {
                          name: "Nguyen Van E",
                          age: 26,
                          address: "Da Nang",
                          subject: ["Ly", "Hoa"]
                        }
                      ]
                    };
                  },
                  methods: {}
                };
                </script`);
</script>

<template>

  <Main>
    <a-row :gutter="30">
      <a-col :xxl="16" :lg="13" :xs="24" :sm="24">
        <SingleChat />
      </a-col>
      <a-col :xxl="7" :lg="11" :xs="24" :sm="24">
        <UserBioBox>
          <sdCards headless>
            <article class="user-info">
              <sdHeading as="h5" class="user-info__title"
                ><p style="font-size: larger">{{ title }}</p></sdHeading
              >
              <a-button>Xem video hướng dẫn</a-button>
            </article>
            <address class="user-info">
              <sdHeading as="h4" class="user-info__title">{{ 'đề bài' }}</sdHeading>
              <perfect-scrollbar
                :options="{
                  wheelSpeed: 1,
                  swipeEasing: true,
                  suppressScrollX: true,
                }"
              >
                <p>Cho mảng sau:<br>
                  hocSinh: [<br>
                  {<br>
                  name: "Nguyen Van A",<br>
                  age: 18,<br>
                  address: "Ha Noi",<br>
                  subject: ["Toan", "Ly", "Hoa"],<br>
                  },<br>
                  {<br>
                  name: "Nguyen Van B",<br>
                  age: 20,<br>
                  address: "TPHCM",<br>
                  subject: ["Toan", "Ly"],<br>
                  },<br>
                  {<br>
                  name: "Nguyen Van C",<br>
                  age: 22,<br>
                  address: "Hai Phong",<br>
                  subject: ["Toan", "Hoa"],<br>
                  },<br>
                  {<br>
                  name: "Nguyen Van D",<br>
                  age: 18,<br>
                  address: "Ha Noi",<br>
                  subject: ["Toan"],<br>
                  },<br>
                  {<br>
                  name: "Nguyen Van E",<br>
                  age: 26,<br>
                  address: "Da Nang",<br>
                  subject: ["Ly", "Hoa"],<br>
                  },<br>
                  ],<br>
                  Hiển thị các đối tượng trên dưới dạng: Tên: 'name' có tuổi là 'age' sống tại 'address'. Đã học các môn sau: subject[0], subject[1], subject[2]....
                </p>
              </perfect-scrollbar>
             
            </address>
            <div class="user-info">
              <sdHeading as="h4" class="user-info__title">Code</sdHeading>
              <perfect-scrollbar
                :options="{
                  wheelSpeed: 1,
                  swipeEasing: true,
                  suppressScrollX: true,
                }"
                style="background-color: rgba(0, 0, 0, 0.717); padding: 10px; border-radius: 5px"
              >
                <code style="white-space: pre-wrap; color: white">
                  {{ codeExample }}
                </code>
              </perfect-scrollbar>
               
            </div>
            <div class="user-info">
              <sdHeading as="h4" class="user-info__title">Chức năng bổ trợ</sdHeading>
              <divs style="display: flex; justify-content: flex-start; gap: 2%"
                ><a-button>Bài tập tương tự</a-button> <a-button>Kiến thức liên quan</a-button></divs
              >
            </div>
          </sdCards>
        </UserBioBox>
      </a-col>
      
    </a-row>
  </Main>
</template>

<style scoped>
.ps {
  height: 310px;
}
:global(#app > div > div > section > section > section > main > div.lmeiNC > div > div.ant-col.ant-col-xs-24.ant-col-lg-12.ant-col-xxl-15 > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-action.d-flex > a),
:global(div.ant-col.ant-col-xs-24.ant-col-lg-12.ant-col-xxl-15 > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-input > span) {
  display: none;
}
:global(.bIdTT .chatbox-reply-form .chatbox-reply-input input) {
  padding: 0 25px 0 25px;
}
:global(#app > div > div > section > section > section > main > div > div) {
  margin-top: 30px;
}
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-lg-12.ant-col-xxl-8 > div > div > div > address > div) {
  height: 300px;
}
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-13.ant-col-xxl-16 > div.bkGFPD.ninjadash-chat-home.ninjadash-chat-home > div > div.ant-card-head) {
  border-bottom: 1px solid #F1F2F6;
}
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-13.ant-col-xxl-16 > div.bkGFPD.ninjadash-chat-home.ninjadash-chat-home > div > div.ant-card-body > ul > div > li > div > div > div > div > div > div) {
  padding: 10px 16px;
}
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-lg-13.ant-col-xxl-16 > div > div > div.ant-card-body > ul > div > li > div > div > div > div > div.ninjadash-chatbox__actions) {
  margin-left: 0;
  cursor: pointer;
}
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-13.ant-col-xxl-16 > div.bkGFPD.ninjadash-chat-home.ninjadash-chat-home > div > div.ant-card-body > ul > div),
:global(#app > div > div > section > section > section > main > div > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-lg-12.ant-col-xxl-15 > div.bkGFPD.ninjadash-chat-home.ninjadash-chat-home > div > div.ant-card-body > ul > div),
:global(.bkGFPD.ninjadash-chat-home .ninjadash-chatbox) {
  height: 380px;
}
:global(.bkGFPD .ninjadash-chatbox .ninjadash-chatbox__single:not(:last-child)) {
  margin-bottom: 16px;
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
