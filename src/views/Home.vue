<template lang="pug">
.home test
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Home extends Vue {
  created(): void {
    fetch('www.example.com').then((response) => {
      console.log(response);
      console.log(response.headers);
      return response.body;
    });
  }
}
</script>
