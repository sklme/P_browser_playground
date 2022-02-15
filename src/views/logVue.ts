import { Vue } from 'vue-class-component';

export default class LogVue extends Vue {
  renderStr = '';

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
}
