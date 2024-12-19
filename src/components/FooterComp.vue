<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-title">
              <img
                width="200"
                src="../assets/images/oguzhanyalcinkaya.jpg"
                alt="Oğuzhan Yalçınkaya"
              />
              <span class="footer-name">Oğuzhan</span>
              <span class="pl-20px">Yalçınkaya</span>
            </div>
            <div></div>
          </div>
          <div class="col-md-3 col-sm-6 offset-md-1 mt-40">
            <div class="footer-list">
              <h5>{{ $t("pages") }}</h5>
              <ul class="footer-pages">
                <li v-for="navbar in getNavbarList" :key="navbar">
                  <a :href="navbar.to">{{ navbar.title }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 mt-40">
            <div class="footer-list">
              <h5>{{ $t("communication") }}</h5>
              <ul class="footer-contact">
                <li>
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:oguzhanyalcinkayaa@gmail.com"
                    >Oguzhanyalcinkayaa@gmail.com</a
                  >
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <a href="tel:+905425357531">(542) 535 75 31</a>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <a href="#">Denizli, Türkiye</a>
                </li>
              </ul>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9314.909967237363!2d29.07981284511587!3d37.7738334303303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fabf96345b7%3A0xbeecfdce9cea7974!2sHoroz%20Heykeli!5e0!3m2!1str!2str!4v1633699002808!5m2!1str!2str"
                width="100%"
                height="200"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="container">
        <div class="copy-right-area">
          <div class="terms-rigth">© {{ getNowYear }} - {{ $t("allRights") }}.</div>
          <div>
            <ul class="copy-right-list">
              <li v-for="link in getSocialLinks" :key="link">
                <a :href="link.to" target="_blank" :class="link.class"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNavbarList"]),
    getSocialLinks() {
      let links = this.$store.getters.getSocialLinks;
      return links.reverse();
    },
    getNowYear(){
        return new Date().getFullYear();
    }
  },
};
</script>

<style>
</style>