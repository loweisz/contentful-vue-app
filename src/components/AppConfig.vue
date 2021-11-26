<template>
  <div>Hello Config</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  AppExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: AppExtensionSDK;

  mounted() {
    console.log(this.sdk);
  }
}
</script>
