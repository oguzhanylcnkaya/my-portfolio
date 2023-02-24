<template>
  <div id="main">
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
        <div v-for="carousel in getCarousel" :key="carousel">
          <div :class="carousel.class">
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
                  <span v-html="carousel.text"></span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- First Slide -->
        <!-- <div class="carousel-item active firstImg">
          <div class="overlay"></div>
          <div class="container-fluid container-ort">
            <div class="row">
              <h2 class="name">
                Oğuzhan <span class="surname"> Yalçınkaya</span>
              </h2>
            </div>
            <div class="row mt-50">
              <h4 class="mail">
                MAİL:
                <span class="mailadres"> Oguzhanyalcinkaya@gmail.com</span>
              </h4>
            </div>
            <div class="row mt-50">
              <p class="yazi1">
                Azimli, Hırslı ve Sakar bir yazılımcıyım :) <br />
                Kendimi kısaca; kendini geliştiren, yeni şeyler öğrenmekten
                korkmayan, hayata pozitif bakmaya çalışan birisi olarak
                nitelendirebilirim.
              </p>
            </div>
          </div>
        </div>

        <div
          class="carousel-item secondImg">
          <div class="overlay"></div>
          <div class="container-fluid container-ort">
            <div class="row">
              <h2 class="name">
                Oğuzhan <span class="surname2"> Yalçınkaya</span>
              </h2>
            </div>
            <div class="row mt-50">
              <h4 class="mail">
                MAİL:
                <span class="mailadres2"> Oguzhanyalcinkaya@gmail.com</span>
              </h4>
            </div>
            <div class="row mt-50">
              <p class="yazi1">
                Azimli, Hırslı ve Sakar bir yazılımcıyım :) <br />
                Kendimi kısaca; kendini geliştiren, yeni şeyler öğrenmekten
                korkmayan, hayata pozitif bakmaya çalışan birisi olarak
                nitelendirebilirim.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCarousel"]),
  },
};
</script>

<style scoped>
.firstImg {
  background-image: url("../assets/images/raja-sen-8AibBzwWpV4-unsplash.jpg");
}
.secondImg {
  background-image: url("../assets/images/slider2.jpg");
}
</style>