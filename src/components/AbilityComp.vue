<template>
  <div id="ability">
    <div class="container-fluid">
      <div class="row" style="margin-bottom: 1rem">
        <div class="col-md-12 col-sm-12">
          <div class="aboutme">
            <h1>{{ $t("aboutMe") }}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="aboutme">
            <h6 style="margin-bottom: 2rem">{{ $t("whoAmI") }}</h6>
            <p>
              {{ abilityDescription }}
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12" style="margin: 0 auto">
          <div class="aboutme">
            <h6 style="margin-bottom: 2rem">{{ $t("mySkills") }}</h6>
          </div>

          <div v-for="ability in abilities" :key="ability" class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              :aria-valuenow="ability.percent"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: ability.percent + '%' }"
            >
              <div class="skillbar">
                <span class="skill-name">{{ ability.name }}</span>
                <span class="skill-percent">{{ ability.percent }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      abilities: "getAbility",
      abilityDescription: "getAbilityDescription",
    }),
  },
};
</script>

<style>
</style>