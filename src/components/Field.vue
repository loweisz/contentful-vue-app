<template>
  <div>Hello Field</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  FieldExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: FieldExtensionSDK;

  mounted() {
    console.log(this.sdk);
  }
}
</script>
