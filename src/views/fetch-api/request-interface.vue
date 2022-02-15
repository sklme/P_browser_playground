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
    this.testHeaders();
  }

  testRequest(): void {
    this.head('测试Request对象');
    const req = new Request(
      'https://api.isoyu.com/api/News/new_list?type=1&page=20',
      {
        method: 'GET', // default is GET
        // headers:
      },
    );
    this.log('结束了');
  }

  testHeaders(): void {
    this.head('测试Headers对象');
    this.log('创建Headers');
    const headers1 = new Headers({
      name: 'test',
      age: '12',
    });
    // 方法
    this.log(headers1.get('name'));
    headers1.append('color', 'red');
    this.log(headers1.get('color'));
    headers1.append('color', 'green');
    this.log(headers1.get('color'));
    headers1.set('hometown', 'nanning');
    this.log(headers1.get('hometown'));
    headers1.set('hometown', 'gz');
    this.log(headers1.get('hometown'));
    this.log(headers1.has('hometown'));
    headers1.delete('hometown');
    this.log(headers1.has('hometown'));

    // 其他创建Header的方法
    const headers2 = new Headers([['Content-Type', 'text/xml']]);
    const headers3 = new Headers(headers2);
    this.log(headers2);
    this.log(headers3);
  }
}
</script>

<style lang="less" scoped></style>
