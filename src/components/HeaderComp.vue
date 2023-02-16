<template>
  <div id="header">
    <div @click="closeHeader()" id="kapat" class="kapat">&#9747;</div>
    <div class="images">
      <img
        src="../assets/images/oguzhanyalcinkaya.jpg"
        width="200px"
        height="200px"
        alt="Me"
      />
    </div>
    <ul class="navbar-list">
      <li v-for="navbar in getNavbarList" :key="navbar">
        <a :href="navbar.to">{{ navbar.title }}</a>
      </li>
    </ul>
    <ul id="social-icons" class="social-icons">
      <li v-for="link in getSocialLinks" :key="link">
        <a :href="link.to" target="_blank" :class="link.class"></a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  methods : {
    closeHeader(){
      document.getElementById("header").style.left = "-300px";
    }
  },
  computed : {
    ...mapGetters(["getNavbarList", "getSocialLinks"])
  }
};
</script>

<style>
</style>