export enum ModuleType {
  PRIMARY = 0,
  SUB = 1
}

export interface ModuleInterface {
  name: string;
  label: string;
  settingComponent: any;
  type: ModuleType;
}
