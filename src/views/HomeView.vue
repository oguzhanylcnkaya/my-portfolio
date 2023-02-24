<template>
  <div>
    <NavbarComp/>
    <HeaderComp />
    <MainComp />
    <AbilityComp/>
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainComp from '@/components/MainComp.vue';
import AbilityComp from '@/components/AbilityComp.vue';
export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    HeaderComp,
    MainComp,
    AbilityComp
    
  }
}
</script>
