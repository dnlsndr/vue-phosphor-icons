import _Vue, { PluginFunction } from "vue";

// Import vue components
import * as components from "./components/index";

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}


// install function executed by Vue.use()
export const install: InstallFunction = function installPhosphorVue(
  Vue: typeof _Vue,
) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// export default components
export * from "./components/index"