<template>
  <div>
    <a href="#" @click.prevent="openMenu" class="slide-menu-open">
        <i v-if="material" class="material-icons">{{ material }}</i> 
        <i :class="icon" v-else></i> 
        {{ label }}
    </a>
    <div class="side-menu-overlay" style="width: 0px; opacity: 0;" @click.prevent="openMenu"></div>
    <div class="side-menu-wrapper">
        <a href="#" class="menu-close" @click.prevent="openMenu">&times;</a>
        <ul>
            <li v-for="(menu, index) in menus">
                <a :href="menu.url" :target="menu.target" rel="nofollow">
                    <i v-if="menu.material" class="material-icons">{{ menu.material }}</i> 
                    <i :class="menu.icon" v-else></i> 
                    {{ menu.title }}
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-menu-overlay',
  props: {
      menus: { type: Array },
      label: { default: 'Open Menu'},
      icon: { default: String },
      material: { default: String }
  },
  data () {
    return {
        open: false
    }
  },
  methods: {
      openMenu(){
    	this.open = !this.open
        const slide_bar = document.querySelector('.side-menu-wrapper'),
      	overlay = document.querySelector('.side-menu-overlay')
        if(this.open){
            slide_bar.style.right = '0px'
        	overlay.style.opacity = 1
            overlay.style.width = '100%'
        } else {
            slide_bar.style.right = `-290px`
            overlay.style.opacity = 0
            overlay.style.width = 0
        }
    }
  }
}
</script>

<style scoped>
.side-menu-wrapper {
    overflow: hidden;
    background: rgba(0,0,0,.95);
    padding: 40px 0 0 40px;
    position: fixed;
    top: 0;
    right: -290px;
    height: 100%;
    z-index: 2;
    transition: 0.5s;
    width: 250px;
    font: 20px;
}
.side-menu-wrapper > ul{
    list-style:none;
    padding:0;
    margin:0;
    overflow-y: auto;
    width:500px;
    height:95%;
}
.side-menu-wrapper > ul > li > a {
    display: block;
    border-bottom: 1px solid #131313;
    padding: 6px 4px 6px 4px;
    color: #989898;
    transition: 0.3s;
    text-decoration: none;
}
.side-menu-wrapper > a.menu-close {
    padding: 8px 0 4px 23px;
    color: #6B6B6B;
    display: block;
    margin: -30px 0 -10px -20px;
    font-size: 35px;
    text-decoration: none;
}

.side-menu-overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.7);
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    opacity: 0;
    transition: opacity 1s;
}
</style>
