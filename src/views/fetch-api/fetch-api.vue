<template lang="pug">
.wrap 我最厉害
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { logFunc } from '@/util/decorators/logFunc.decorator';

@Options({
  components: {},
})
export default class FetchApi extends Vue {
  async created(): Promise<void> {
    // fetch('www.example.com').then((response) => {
    //   console.log(response);
    //   console.log(response.headers);
    //   return response.body;
    // });

    await this.basicFetch();

    this.syncFunc();
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

  @logFunc()
  syncFunc(): void {
    console.log('我是一个syncFunc');
  }
}
</script>

<style lang="less" scoped></style>
