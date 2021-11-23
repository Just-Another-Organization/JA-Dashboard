<script context="module" lang="ts" >


  import ShortcutsSetting from "$setting/shortcuts-setting/ShortcutsSetting.svelte";
  import {ModuleInterface, ModuleType} from "$models/Module";
  import HomeGridSettingDetails from "$setting/homegrid-setting/HomeGridSettingDetails.svelte";
  import HomeGridSetting from "$setting/homegrid-setting/HomeGridSetting.svelte";
  import DeeplSetting from "$setting/deepl-setting/DeeplSetting.svelte";
  import SearchSetting from "$setting/search-setting/SearchSetting.svelte";
  import GitLabSetting from "$setting/gitlab-setting/GitLabSetting.svelte";

  export const Modules: ModuleInterface[] = [
    {
      name: "home_gird",
      label: "Home",
      settingComponent: HomeGridSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: "home_grid_row",
      label: "Home Grid Row",
      settingComponent: HomeGridSettingDetails,
      type: ModuleType.SUB
    },
    {
      name: 'search',
      label: "Search",
      settingComponent: SearchSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: 'deepl',
      label: "Deepl",
      settingComponent: DeeplSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: 'gitlab',
      label: "GitLab",
      settingComponent: GitLabSetting,
      type: ModuleType.PRIMARY
    },
    {
      name: 'shortcut',
      label: "Shortcut",
      settingComponent: ShortcutsSetting,
      type: ModuleType.PRIMARY
    }
  ];



</script>

