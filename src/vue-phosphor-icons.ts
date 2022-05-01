// Import vue components
import * as components from './components/index'

export function install(app) {
  if (this.installed) return;
  this.installed = true;
  Object.entries(components).forEach(([componentName, component]) =>
    app.component(component.name, component)
  );
}

export * from './components/index'