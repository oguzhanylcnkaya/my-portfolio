<template>
  <div id="navbar">
    <div @click="openHeader()" id="ac" class="ac">&#9776;</div>
    <div style="height: 100%">
      <ul id="social-icons" class="social-icons">  
        <li v-for="link in getSocialLinks" :key="link">
          <a :href="link.to" target="_blank" :class="link.class"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openHeader() {
      document.getElementById("header").style.left = "0";
    },
  },
  computed: {
    getSocialLinks() {
      let links = this.$store.getters.getSocialLinks;
      return links.reverse();
    },
  },
};
</script>

<style>
</style>