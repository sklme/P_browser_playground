<template lang="pug">
.wrap 
  h2 RequestInterface
  .request(
    v-html="renderStr"
  )
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import LogVue from '@/views/logVue';

@Options({
  components: {},
})
export default class RequestInterface extends LogVue {
  created(): void {
    this.testRequest();
  }

  testRequest(): void {
    this.head('测试Request对象');
  }
}
</script>

<style lang="less" scoped></style>
