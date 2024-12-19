<template>
  <div id="experience">
    <div data-aos="zoom-in" data-aos-duration="2000" class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1 class="experience-name">{{ $t("experiences") }}</h1>
        </div>
      </div>

      <div v-for="experience in experiences" :key="experience" class="row mt-4">
        <div class="col-md-8 col-sm-12 work-name">{{ experience.workName }}</div>
        <div class="col-md-4 col-sm-12 work-date">
          {{ experience.startDate }} - {{ experience.endDate }} 
        </div>
        <div class="col-md-12 col-sm-12 mt-2">
          <h4 class="company-name">{{ experience.companyName }}</h4>
          <p class="work-description">
            {{ experience.comment }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AOS from 'aos'
 AOS.init();
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters({
            experiences : "getExperiences"
        })
    }
};
</script>

<style>
</style>