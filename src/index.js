import MenuOverlay from './components/MenuOverlay.vue'

const MenuOverlayPlugin = {
  install: function(Vue, options) {
    Vue.component(MenuOverlay.name, MenuOverlay)
  },
}

export default MenuOverlayPlugin
export {
   MenuOverlay as VueMenuOverlay
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MenuOverlayPlugin)
}
