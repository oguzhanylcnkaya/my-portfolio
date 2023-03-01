<template>
  <div id="spaceship">
    <div class="scene">
      <div class="rocket">
        <img src="../assets/images/rocket.png" alt="Rocket" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stars() {
      let count = 20;
      let scene = document.getElementsByClassName("scene")[0];

      for (let i = 0; i < count; i++) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + "px";
        star.style.width = 1 + "px";
        star.style.height = 50 + h + "px";
        star.style.animationDuration = duration + "s";

        scene.appendChild(star);
      }
    },
    rocketAction() {
      let spaceship = document.getElementById("spaceship");

      spaceship.addEventListener("mouseover", () => {
        document.addEventListener("mousemove", (e) => {
          var rocket = document.querySelector(".rocket");

          rocket.style.left = e.offsetX + "px";
          rocket.style.top = e.offsetY + "px";
        });
      });

      spaceship.addEventListener("mouseleave", () => {
        document.addEventListener("mousemove", () => {
          var rocket = document.querySelector(".rocket");

          rocket.style.left = 50 + "%";
          rocket.style.top = 50 + "%";
        });
      });
    },
  },
  mounted() {
    this.stars();
    this.rocketAction();
  },
};
</script>