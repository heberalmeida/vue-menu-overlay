<template>
  <div>
    <vue-menu-overlay :menus="links" label="Menu" icon="fa fa-bars"></vue-menu-overlay>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMenuOverlay from '../dist/vue-menu-overlay'
  Vue.use(VueMenuOverlay)
  export default {
    data(){
      return {
          links: [
              { title: 'Google Search', url: 'http://www.google.com', target: '_black'},
              { title: 'Yahoo Search', url: 'http://www.yahoo.com', target: '_black'},
              { title: 'Facebook', url: 'http://www.facebook.com', target: '_black'},
              { title: 'Flickr', url: 'http://www.flickr.com', target: '_black'}
          ]
      }
    }
  }
</script>
