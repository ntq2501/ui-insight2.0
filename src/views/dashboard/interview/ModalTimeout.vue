<template>
    <a-modal title="Notification" @ok="handleOk" :footer="null" :header="null" :closable="false" :mask-closable="true"  :visible="visible" :ok-text="okText">
      <template #default>
        <p>Finished !</p>
        <button id="btnOK" @click="handleOk">OK</button>
      </template>
    </a-modal>
   
</template>
  
<script setup lang="ts">
  import router from '@/router';
  import { defineProps } from 'vue';

  const props = defineProps(['visible','closeModal'])
  const okText = 'OK';
  
  const handleOk = () => {
    props.closeModal();
    router.push('/interview');
  };
  const handleCancel = () => {
    props.closeModal();
  };
</script>

<style scoped>
:global(body > div > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body) {
  text-align: center !important;
}
:global(body > div > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > p) {
  font-size: 28px;
  font-weight: 500;
  color: #21498c;
}
:global(#vcDialogTitle1) {
  color: #21498c;
}
#btnOK {
  padding: 8px 40px;
  color: #fff;
  background-color: #E65A2B;
  border: none;
  border-radius: 130px;
}
#btnOK:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
  