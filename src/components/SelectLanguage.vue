<template>
  <!-- <select v-model="$i18n.locale">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select> -->

  <div>
    <country-flag
      @click="changeLanguage('en')"
      v-if="$i18n.locale == 'tr'"
      country="us"
      size="normal"
      class="flag"
    />
    <country-flag
      @click="changeLanguage('tr')"
      v-if="$i18n.locale == 'en'"
      country="tr"
      size="normal"
      class="flag"
    />
  </div>
</template>
  
<script>
import CountryFlag from "vue-country-flag-next";
export default {
  data() {
    return {
      locales: ["en", "tr"],
    };
  },
  components: {
    CountryFlag,
  },
  watch: {
    "$i18n.locale"() {
      this.$store.commit("changeLocale");
    },
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style scoped>
  .flag{
    cursor: pointer;
  }
</style>