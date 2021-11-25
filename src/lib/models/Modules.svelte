<script context="module" lang="ts" >

  import {ModuleInterface, ModuleType} from "$models/Module";

  import ShortcutsSetting from "$setting/shortcuts-setting/ShortcutsSetting.svelte";
  import HomeGridSettingDetails from "$setting/homegrid-setting/HomeGridSettingDetails.svelte";
  import HomeGridSetting from "$setting/homegrid-setting/HomeGridSetting.svelte";
  import DeeplSetting from "$setting/deepl-setting/DeeplSetting.svelte";
  import SearchSetting from "$setting/search-setting/SearchSetting.svelte";
  import GitLabSetting from "$setting/gitlab-setting/GitLabSetting.svelte";
  import Deepl from "$module/deepl/Deepl.svelte";
  import GitLab from "$module/gitlab/GitLab.svelte";
  import Shortcuts from "$module/shortcuts/Shortcuts.svelte";

  export const Modules: ModuleInterface[] = [
    {
      name: "home_gird",
      label: "Home",
      settingComponent: HomeGridSetting,
      component: null,
      type: ModuleType.PRIMARY
    },
    {
      name: "home_grid_row",
      label: "Home Grid Row",
      settingComponent: HomeGridSettingDetails,
      component: null,
      type: ModuleType.SUB
    },
    {
      name: 'search',
      label: "Search",
      settingComponent: SearchSetting,
      component: null,
      type: ModuleType.PRIMARY
    },
    {
      name: 'deepl',
      label: "Deepl",
      settingComponent: DeeplSetting,
      component: Deepl,
      type: ModuleType.PRIMARY
    },
    {
      name: 'gitlab',
      label: "GitLab",
      settingComponent: GitLabSetting,
      component: GitLab,
      type: ModuleType.PRIMARY
    },
    {
      name: 'shortcut',
      label: "Shortcut",
      settingComponent: ShortcutsSetting,
      component: Shortcuts,
      type: ModuleType.PRIMARY
    }
  ];



</script>

