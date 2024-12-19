<template>
  <div id="projects">
    <div class="container-fluid">
      <div class="row" style="padding-bottom: 50px">
        <div class="col-md-12">
          <h1 class="project-first-name">{{ $t("projects") }}</h1>
        </div>
      </div>
      <div class="row">
        <div
          v-for="project in projects"
          :key="project"
          class="col-lg-4 col-md-6 col-sm-12 card-element"
        >
          <div class="card w-h-100">
            <div class="row mx-auto my-auto project-slider carousel-min-device">
              <div
                id="carouselProject1"
                class="carousel slide deneme-slide"
                data-bs-ride="carousel"
                style="position: absolute"
              >
                <div class="carousel-inner deneme-slide">
                  <div
                    v-for="(image, index) in project.images"
                    :key="index"
                    class="carousel-item deneme-slide"
                    :class="{ active: index == 0 }"
                  >
                    <a
                      :href="image.src"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        :src="image.src"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">{{ project.projectName }}</h5>
              <div class="card-area">
                <p class="card-text">
                  {{ project.projectDescription }}
                </p>
              </div>
              <div class="card-button">
                <a
                  :href="project.projectGithubRepo"
                  target="_blank"
                  class="btn btn-yellow"
                  >{{ $t("goToGithubRepo") }}</a
                >
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
      projects: "getProjects",
    }),
  },
  methods: {
    denemee(src, i) {
      console.log("src", src);
      console.log("i", i);
    },
  },
};
</script>

<style>
</style>