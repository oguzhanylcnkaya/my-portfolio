<template>
  <div id="main">
    <SelectLanguage class="language-option" />
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(carousel, index) in getCarousel" :key="carousel">
          <div
            class="carousel-item"
            :class="{ active: index == 0 }"
            :style="{ 'background-image': `url(${carousel.src})`}"
          >
            <div class="overlay"></div>
            <div class="container-fluid container-ort">
              <div class="row">
                <h2 class="name">
                  {{ carousel.name }}
                  <span class="surname"> {{ carousel.surname }}</span>
                </h2>
              </div>
              <div class="row mt-50">
                <h4 class="mail">
                  MAİL:
                  <span class="mailadres"> {{ carousel.mail }}</span>
                </h4>
              </div>
              <div class="row mt-50">
                <p class="yazi1">
                  <span>{{ carousel.carouselTextFirst }}</span>
                  <span>{{ carousel.carouselTextSecond }}</span>
                </p>
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
import SelectLanguage from "./SelectLanguage.vue";
export default {
  computed: {
    ...mapGetters(["getCarousel"]),
  },
  components: {
    SelectLanguage,
  },
};
</script>

<style scoped>
.language-option {
  position: absolute;
  top: -3px;
  right: 10px;
  z-index: 9999999;
}
</style>