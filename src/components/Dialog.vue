<template>
  <div>Hello Dialog</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  DialogExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: DialogExtensionSDK;

  mounted() {
    console.log(this.sdk);
  }
}
</script>
