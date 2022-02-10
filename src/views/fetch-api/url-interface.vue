<template lang="pug">
.url 
  h2 URLInterface
  .log(
    v-html="renderStr"
  )
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class URLInterface extends Vue {
  //
  renderStr = '';

  created(): void {
    this.createUrl();
    this.testUrl();
    this.testUrlSearchParams();
  }

  log(str: unknown): void {
    console.log('log:', str);
    if (typeof str === 'string') {
      this.renderStr = this.renderStr + str + '<br>';
    } else {
      if ((str as { toString?: () => unknown }).toString) {
        this.renderStr +=
          (str as { toString: () => unknown }).toString() + '<br>';
      } else {
        this.renderStr += JSON.stringify(str) + '<br>';
      }
    }
  }

  head(str: string): void {
    console.log('head:', str);
    this.renderStr += `<h3>${str}</h3>`;
  }

  createUrl(): void {
    console.info('测试创建URL');
    const base = 'https://developer.mozilla.org';
    let a = new URL('/', base);
    let a1 = new URL('http://aa.co.com');
    console.log(a);
    console.log(a1);
  }

  testUrl(): void {
    this.head('测试本地URL');
    const url = new URL(location.href);

    this.log('url对象');
    this.log(url);
    this.log('url searchParams');
    this.log(url.searchParams);

    this.log('toString');
    this.log(url.toString());
    this.log('toJSON');
    this.log(url.toJSON());

    url.hash = '会被encode';
    console.log(url.toString());
  }

  testUrlSearchParams(): void {
    const urlSearchParams = new URL(window.location.href).searchParams;

    this.head('测试URLSearchParams');
    this.log('使用for...of');
    for (const [key, value] of urlSearchParams) {
      this.log(key + '=' + value);
    }
    for (const [key, value] of urlSearchParams.entries()) {
      this.log(key + '=' + value);
    }
    this.log('使用forEach');
    urlSearchParams.forEach((value, key) => {
      this.log(key + '=' + value);
    });
    this.log('keys and values');
    this.log([...urlSearchParams.keys()]);
    this.log([...urlSearchParams.values()]);

    this.log('直接创建');
    const paramsString = 'q=URLUtils.searchParams&topic=api';
    let searchParams = new URLSearchParams(paramsString);
    this.log(searchParams.toString());

    this.log('测试方法');
    this.log(searchParams.has('topic') === true);
    this.log(searchParams.get('topic') === 'api');
    this.log(searchParams.getAll('topic'));
    // append
    searchParams.append('key1', 'v1');
    this.log(searchParams);
    searchParams.set('topic', 'color resd');
    this.log(searchParams);
    searchParams.delete('topic');
    this.log(searchParams);

    this.log('从对象中创建');
    let paramsObj = { foo: 'bar', baz: 'bar' };
    let searchParams2 = new URLSearchParams(paramsObj);
    this.log(searchParams2);

    const paramsString1 = 'http://example.com/search?query=%40';
    const searchParams1 = new URLSearchParams(paramsString1);
    console.log(...searchParams1.keys());
  }
}
</script>
