<template>
  <div>Hello Page</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  PageExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: PageExtensionSDK;

  mounted() {
    console.log(this.sdk);
    this.sdk.notifier.success('rendered')
  }
}
</script>
