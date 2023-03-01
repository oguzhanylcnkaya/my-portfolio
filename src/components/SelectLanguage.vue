<template>
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    data() {
      return { locales: ["en", "tr"] };
    },
    watch : {
      "$i18n.locale"(){
        this.$store.commit('changeLocale')
      }
    }
  };
  </script>