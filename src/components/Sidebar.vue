<template>
  <div>Hello Sidebar</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component, Prop } from 'vue-property-decorator'
import {
  SidebarExtensionSDK,
} from '@contentful/app-sdk';

@Component
export default class App extends Vue {
  @Prop()
  sdk!: SidebarExtensionSDK;

  mounted() {
    console.log(this.sdk);
  }
}
</script>
