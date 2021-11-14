<script context="module" lang="ts" >

  import HomeGridSetting from "$setting/homegrid-setting/HomeGridSetting.svelte";
  import SearchSetting from "$setting/search-setting/SearchSetting.svelte";
  import DeeplSetting from "$setting/deepl-setting/DeeplSetting.svelte";
  import GitLabSetting from "$setting/gitlab-setting/GitLabSetting.svelte";
  import ShortcutsSetting from "$setting/shortcuts-setting/ShortcutsSetting.svelte";

  export const Modules = [
    {
      name: "Home Grid",
      settingComponent: HomeGridSetting
    },
    {
      name: "Search",
      settingComponent: SearchSetting
    },
    {
      name: "Deepl",
      settingComponent: DeeplSetting
    },
    {
      name: "GitLab",
      settingComponent: GitLabSetting
    },
    {
      name: "Shortcut",
      settingComponent: ShortcutsSetting
    }
  ]
</script>

