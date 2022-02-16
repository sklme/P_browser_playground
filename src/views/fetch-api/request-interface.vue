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
    const testHeaders = new Headers({
      name: 'test',
    });
    // body
    const body = new URLSearchParams({
      name: 'test',
    });
    const req = new Request(
      'https://api.isoyu.com/api/News/new_list?type=1&page=20',
      {
        method: 'POST', // default is GET
        headers: testHeaders, // 请求头
        body, // 请求的body，一般用于
        mode: 'cors', // The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors.
        credentials: 'same-origin', // The request credentials you want to use for the request: omit, same-origin, or include. The default is same-origin.
        cache: 'default', // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
        redirect: 'follow', // he redirect mode to use: follow, error, or manual. The default is follow.
        // referrer: '', //  A USVString specifying no-referrer, client, or a URL. The default is about:client.
        // integrity: '', //Contains the subresource integrity value of the request
      },
    );
    this.log('创建log');
    this.log(req);
    this.log('结束了');

    // 请求
    // const myImageTag = document.createElement('img');
    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');

    const myInit: RequestInit = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    };

    var myRequest = new Request(
      'https://res.wx.qq.com/t/fed_upload/02a4a6d0-71b7-4c48-b8e4-8af9ff50b936/done.svg',
      myInit,
    );
    fetch(myRequest).then((res) => {
      console.log(res);
    });
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
