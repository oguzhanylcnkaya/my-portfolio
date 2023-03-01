<template>
  <div>
    <NavbarComp/>
    <HeaderComp />
    <MainComp />
    <AbilityComp/>
    <SpaceshipComp />
    <ExperienceComp />
    <ParallaxComp />
    <ProjectCompVue/>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainComp from '@/components/MainComp.vue';
import AbilityComp from '@/components/AbilityComp.vue';
import SpaceshipComp from '@/components/SpaceshipComp.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';
import ParallaxComp from '@/components/ParallaxComp.vue';
import ProjectCompVue from '@/components/ProjectComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    HeaderComp,
    MainComp,
    AbilityComp,
    SpaceshipComp,
    ExperienceComp,
    ParallaxComp,
    ProjectCompVue,
    FooterComp
    
  }
}
</script>
