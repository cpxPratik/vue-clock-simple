import * as components from './components'

module.exports = {
  install: (Vue, options = {}) => {
    // Register global components
    for (let component in components) {
      Vue.component(component, components[component])
    }
  }
};
