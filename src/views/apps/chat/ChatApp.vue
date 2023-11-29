<script setup lang="ts">
import { UserBioBox } from '../myProfile/overview/style';
import { faFacebookF, faDribbble, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Main } from '../../styled';
import SingleChat from './SingleChat.vue';
import { useStore } from 'vuex';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { ref } from 'vue';

const title = ref('Thao tác với v-for lồng');

</script>

<template>

  <Main>
    <a-row :gutter="30">
      <a-col :xxl="24" :lg="24" :xs="24">
        <SingleChat />
      </a-col>
    </a-row>
  </Main>
</template>

<style scoped>
.ps {
  height: 450px;
}
:global(#app > div > div > section > section > section > main > div > div) {
  margin-top: 30px;
}
</style>
