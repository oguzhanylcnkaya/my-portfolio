<template>
  <div id="parallax">
    <div class="parallax-effect">
      <a :href="cvLink" target="_blank" class="btn btn-yellow"
        >{{ $t("downloadCV") }}
        <i class="fas fa-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cvLink: "getCVLink",
    }),
  },
};
</script>

<style>
</style>