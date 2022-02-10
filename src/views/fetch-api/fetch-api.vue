<template lang="pug">
.wrap 
  URLInterface
  .result 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { logFunc } from '@/util/decorators/logFunc.decorator';
import URLInterface from './url-interface.vue';

@Options({
  components: { URLInterface },
})
export default class FetchApi extends Vue {
  async created(): Promise<void> {
    await this.basicFetch();
  }

  // basic usage(with string)
  @logFunc()
  async basicFetch(): Promise<unknown> {
    return fetch('https://api.isoyu.com/api/News/new_list?type=1&page=20')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
}
</script>

<style lang="less" scoped></style>
