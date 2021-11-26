<template>
  <div>Hello Entry</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  EditorExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: EditorExtensionSDK;

  mounted() {
    console.log(this.sdk);
  }
}
</script>
