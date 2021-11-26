import { createApp } from "vue";

import {
  init,
  locations,
  AppExtensionSDK,
  FieldExtensionSDK,
  SidebarExtensionSDK,
  DialogExtensionSDK,
  EditorExtensionSDK,
  PageExtensionSDK,
} from '@contentful/app-sdk';

import AppConfig from './components/AppConfig.vue'
import Field from './components/Field.vue'
import Sidebar from './components/Sidebar.vue'
import Entry from './components/Entry.vue'
import Dialog from './components/Dialog.vue'
import Page from './components/Page.vue'


init((sdk) => {
  const ComponentLocationSettings = [
    {
      location: locations.LOCATION_APP_CONFIG,
      component: AppConfig,
      sdk: sdk as AppExtensionSDK,
    },
    {
      location: locations.LOCATION_ENTRY_FIELD,
      component: Field,
      sdk: sdk as FieldExtensionSDK
    },
    {
      location: locations.LOCATION_ENTRY_EDITOR,
      component: Entry,
      sdk: sdk as EditorExtensionSDK
    },
    {
      location: locations.LOCATION_DIALOG,
      component: Dialog,
      sdk: sdk as DialogExtensionSDK
    },
    {
      location: locations.LOCATION_ENTRY_SIDEBAR,
      component: Sidebar,
      sdk: sdk as SidebarExtensionSDK,
    },
    {
      location: locations.LOCATION_PAGE,
      component: Page,
      sdk: sdk as PageExtensionSDK
    },
  ];

  // Select a component depending on a location in which the app is rendered.
  ComponentLocationSettings.forEach((componentLocationSetting) => {
    if (sdk.location.is(componentLocationSetting.location)) {
      createApp(componentLocationSetting.component, { sdk: componentLocationSetting.sdk }).mount("#app");
    }
  });

})


