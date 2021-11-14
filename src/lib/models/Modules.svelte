<script context="module" lang="ts" >

  import HomeGridSetting from "$setting/homegrid-setting/HomeGridSetting.svelte";
  import SearchSetting from "$setting/search-setting/SearchSetting.svelte";
  import DeeplSetting from "$setting/deepl-setting/DeeplSetting.svelte";
  import GitLabSetting from "$setting/gitlab-setting/GitLabSetting.svelte";
  import ShortcutsSetting from "$setting/shortcuts-setting/ShortcutsSetting.svelte";
  import HomeGridSettingDetails from "$setting/homegrid-setting/HomeGridSettingDetails.svelte";

  export enum ModuleType {
    PRIMARY = 0,
    SUB = 1
  }


  export const Modules: ModuleInterface[] = [
    {
      name: "Home Grid",
      settingComponent: HomeGridSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: "Home Grid Details",
      settingComponent: HomeGridSettingDetails,
      type: ModuleType.SUB
    },
    {
      name: "Search",
      settingComponent: SearchSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: "Deepl",
      settingComponent: DeeplSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: "GitLab",
      settingComponent: GitLabSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: "Shortcut",
      settingComponent: ShortcutsSetting,
      type: ModuleType.PRIMARY
    }
  ];

  export interface ModuleInterface {
    name: string;
    settingComponent: any;
    type: ModuleType;
  }
</script>

