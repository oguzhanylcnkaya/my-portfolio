<template>
  <div>
    <NavbarComp/>
    <HeaderComp />
    <MainComp />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainComp from '@/components/MainComp.vue';
export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    HeaderComp,
    MainComp
  }
}
</script>
