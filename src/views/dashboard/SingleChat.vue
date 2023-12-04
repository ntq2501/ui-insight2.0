<script setup lang="ts">
//import dayjs from 'dayjs';
import { SingleChatWrapper, MessageList, BackShadowEmoji, Footer } from '../apps/chat/style';
import { useStore } from 'vuex';
import { computed, nextTick, watch, onMounted, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRoute } from 'vue-router';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import PropTypes from 'vue-types';
import ModalRating from "./interview/ModalTimeout.vue";

const props = defineProps({
  dashboard: PropTypes.bool,
  selectedContent: PropTypes.string,
});

const { state, dispatch } = useStore();
const { params } = useRoute();
const rtl = computed(() => state.ChangeLayoutMode.rtlData);
const chatData = computed(() => state.chat.privateChat.data);
const left = computed(() => (!rtl.value ? 'left' : 'right'));

const me = ref('woadud@gmail.com');

const singleContent = computed(() => (chatData.value[0] ? chatData.value[0].content : []));
const name = 'AI';

const inputValue = ref('');
const fileList = ref([]);
const fileList2 = ref([]);
const pickerShow = ref(false);
const messageContainer = ref<HTMLElement | null>(null);

const handleChange = (e: any) => {
  inputValue.value = e.target.value;
};

onMounted(() => {
  scrollToBottom();
});

const scrollToBottom = async () => {
  await nextTick();
  const container = messageContainer.value;
  if (container) {
    const divScrollElement = container.querySelector('div.ps');
    if(divScrollElement) {
      divScrollElement.scrollTop = divScrollElement.scrollHeight;
    }
  }
};

const messages = ref<Array<string>>([]);
const updatedContent = ref(singleContent.value);

watch(() => {
  if (props.selectedContent !== null && props.selectedContent !== '') {
    messages.value.push(props.selectedContent);
    scrollToBottom();
  }
});

const handleSubmit = (e: any) => {
  e.preventDefault();
  const pushcontent = {
    content: inputValue.value,
    time: new Date().getTime(),
    seen: false,
    reaction: false,
    email: me.value,
  };
  dispatch('updatePrivateChat', {
    id: params.id,
    pushcontent,
  });
  if(inputValue.value.trim() != '') {
    messages.value.push(inputValue.value);
  }
  updatedContent.value = [...updatedContent.value, pushcontent];
  inputValue.value = '';
  scrollToBottom();
};

const modalVisible = ref(false);
const openModalRating = () => {
  modalVisible.value = true;
};
const closeModal = () => {
  modalVisible.value = false;
};

</script>

<template>
  <ModalRating :visible="modalVisible" :closeModal="closeModal" />

  <SingleChatWrapper :class="dashboard ? 'ninjadash-chat-home' : ''">
    <BackShadowEmoji v-if="pickerShow" @click="() => setPickerShow(false)" />
    <sdCards>
      
      <template #title>
        <sdHeading as="h5">{{ name }}</sdHeading>
        <p>Hoạt động</p>
      </template>

      <ul class="ninjadash-chatbox" v-if="singleContent.length" ref="messageContainer">
        <perfect-scrollbar
          :options="{
            wheelSpeed: 1,
            swipeEasing: true,
            suppressScrollX: true,
          }"
        >
          <li
            v-for="({ time, img, email, content, id }, index) in singleContent"
            :key="time"
            class="ninjadash-chatbox__single"
          >
        
            <div :key="id" :style="{ overflow: 'hidden' }">
              <div :class="email !== me ? 'left' : 'right'">
                <img v-if="email !== me" :src="`/src/assets/img/chat-author/${img}`" alt="" />

                <div class="ninjadash-chatbox__content">
                  <div v-if="email !== me" class="ninjadash-chatbox__contentInner d-flex">
                    <div class="ninjadash-chatbox__message">
                      <MessageList class="message-box">{{ 'bạn có mua ti vi không' }}</MessageList>
                    </div>

                    <div class="ninjadash-chatbox__actions">
                      <unicon name="ellipsis-h" width="18" @click="openModalRating"></unicon>
                    </div>
                  </div>

                  <div v-else class="ninjadash-chatbox__contentInner d-flex" >
                    <div class="ninjadash-chatbox__message">
                      <MessageList class="message-box">{{ 'đến điện máy xanh mua ti vi được không' }}</MessageList>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </li>
          
          <li v-for="(item, index) in messages" :key="index" class="ninjadash-chatbox__single">
            <div :key="index" :style="{ overflow: 'hidden' }">
              <div class="right">
              <div class="ninjadash-chatbox__content">
                <div class="ninjadash-chatbox__contentInner d-flex" >
                  <div class="ninjadash-chatbox__message">
                    <MessageList class="message-box">{{ item }}</MessageList>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </li>

        </perfect-scrollbar>
      </ul>
      <p v-else class="no-data-text">Không có dữ liệu</p>

      <Footer>
        <form @submit="handleSubmit">
          <div :class="`chatbox-reply-form d-flex ${fileList.length && 'hasImage'} ${fileList2.length && 'hasFile'}`">
            <div class="chatbox-reply-input">
              <span class="smile-icon">
                <EmojiPicker :emojiClick="onEmojiClick" v-if="pickerShow" />
                <router-link @click="onPickerShow" to="#">
                  <unicon name="smile" width="24"></unicon>
                </router-link>
              </span>
              <input
                @change="handleChange"
                placeholder="Send a message"
                name="chat"
                id="chat"
                :style="{ width: '100%' }"
                :value="inputValue"
              />
            </div>
            <div class="chatbox-reply-action d-flex">
              <a to="#">
                <a-upload v-bind="propsData">
                  <unicon name="camera" width="18"></unicon>
                </a-upload>
              </a>
              <a to="#">
                <span class="ant-upload-picture-card-wrapper">
                  <div class="ant-upload-select">
                    <unicon name="paperclip" width="18"></unicon>
                  </div>
                </span>
              </a>
              <sdButton @click="handleSubmit" type="primary" class="btn-send">
                <unicon name="message" width="18"></unicon>
              </sdButton>
            </div>
          </div>
        </form>
      </Footer>
    </sdCards>
  </SingleChatWrapper>
</template>

<style scoped>

:global(#app > div > div > section > section > section > main > div > div > div > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-input > span),
:global(#app > div > div > section > section > section > main > div > div > div > div > div > div.ant-card-body > div > form > div > div.chatbox-reply-action.d-flex > a > span > div) {
  display: none;
}
:global(.bIdTT .chatbox-reply-form .chatbox-reply-input input) {
  padding: 0 25px 0 25px;
}

:global(.cemhnt .ninjadash-chatbox .ninjadash-chatbox__single .left .message-box) {
  background-color: #e18b5d;
  color: #fff;
}
:global(.cemhnt .ninjadash-chatbox .ninjadash-chatbox__single .right .message-box) {
  background-color: #5840FF;
  color: #fff;
}
#chat{
  background-color: #e6e5e5;
  font-size: 16px;
  height: 45px;
}
#chat:focus {
  border: 1px solid #9dbfe6;
}

#chat:blur {
  border: none;
}
</style>
