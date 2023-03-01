<template>
  <div id="projects">
    <div class="container-fluid">
      <div class="row" style="padding-bottom: 50px">
        <div class="col-md-12">
          <h1 class="project-first-name">Projeler</h1>
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
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Rent a Car Frontend -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card w-h-100">
            <div class="row mx-auto my-auto project-slider carousel-min-device">
              <div
                id="carouselProject1"
                class="carousel slide deneme-slide"
                data-bs-ride="carousel"
                style="position: absolute"
              >
                <div class="carousel-inner deneme-slide">
                  <div class="carousel-item deneme-slide active">
                    <a
                      href="../assets/images/RecapProject/anasayfa2.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/anasayfa2.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                      />
                    </a>
                  </div>

                  <!-- 
                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/anasayfa3.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/anasayfa3.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/giris.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/giris.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kaydol.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kaydol.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/arabaekle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/arabaekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/aracguncelle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/aracguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/araclar.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/araclar.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/detay.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/detay.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kiralama.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kiralama.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullaniciduzenle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullaniciduzenle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullanicirolekle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullanicirolekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullanicirolguncelle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullanicirolguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullaniciroller.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullaniciroller.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markaekle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markaekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markaguncelle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markaguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markalar.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markalar.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/odeme.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/odeme.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkekle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkguncelle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkler.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkler.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/rolekle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/rolekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/rolguncelle.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/rolguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/roller.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/roller.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/sepet.png"
                      data-lightbox="image-rent-a-car"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/sepet.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div> -->
                </div>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">Rent a Car Projesi (Frontend)</h5>
              <div class="card-area">
                <p class="card-text">
                  Bu projenin Frontend tarafında Angular framework'u
                  kullanılmıştır. Backend tarafından gelen api isteklerini
                  karşılamak için Services klasörü altında Http Client
                  kullanarak servis işlemleri yazılmıştır. Proje SPA olarak
                  oluşturulduğu için Route yapısı Routing Module altında
                  oluşturulmuştur. Gelen istekleri sayfalarda göstermek için
                  components klasörü altında sayfalar oluşturulmuştur.
                  İnterceptor altında her istekte token gönderimi sağlanmıştır.
                  Guards işlemi ile kullanıcının sisteme girip girmediği kontrol
                  edilmiş, eğer sisteme girmemiş ise login sayfasına yönlendirme
                  işlemi yapılmıştır.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/ReCapProjectFrontEnd"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Rent a Car Backend -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card w-h-100">
            <div class="row mx-auto my-auto project-slider carousel-min-device">
              <div
                id="carouselProject1"
                class="carousel slide deneme-slide"
                data-bs-ride="carousel"
                style="position: absolute"
              >
                <div class="carousel-inner deneme-slide">
                  <div class="carousel-item deneme-slide active">
                    <a
                      href="../assets/images/RecapProject/giris.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/giris.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kaydol.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kaydol.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/anasayfa2.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/anasayfa2.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                      />
                    </a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/anasayfa3.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/anasayfa3.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/arabaekle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/arabaekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/aracguncelle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/aracguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/araclar.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/araclar.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/detay.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/detay.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kiralama.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kiralama.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullaniciduzenle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullaniciduzenle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullanicirolekle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullanicirolekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullanicirolguncelle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullanicirolguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/kullaniciroller.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/kullaniciroller.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markaekle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markaekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markaguncelle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markaguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/markalar.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/markalar.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/odeme.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/odeme.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkekle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkguncelle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/renkler.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/renkler.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/rolekle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/rolekle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/rolguncelle.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/rolguncelle.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/roller.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/roller.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>

                  <div class="carousel-item deneme-slide">
                    <a
                      href="../assets/images/RecapProject/sepet.png"
                      data-lightbox="image-rent-a-car-back"
                      data-title="Rent a Car Projesi"
                    >
                      <img
                        src="../assets/images/RecapProject/sepet.png"
                        class="card-img-top img-fluid"
                        alt="Rent a Car Projesi"
                    /></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">Rent a Car Projesi (Backend)</h5>
              <div class="card-area">
                <p class="card-text">
                  Bu projenin backend tarafında C# dili ve .Net Core teknolojisi
                  kullanılmıştır. Proje katmanlı mimari tekniğine göre
                  oluşturulmuştur. Entities katmanında veritabanına karşılık
                  olarak gelecek varlıklar oluşturulmuştur. DataAccess
                  katmanında entities katmanındaki varlıkların veritabanlarına
                  bağlanması için gerekli kodlamalar yapılmıştır. ORM olarak
                  Entity Framework kullanılmıştır. Proje SOLİD prensiplerine
                  göre oluşturulduğu için veritabanı değişikliğine kolay adapte
                  olabilecek niteliktedir. Business katmanında gerekli iş
                  kodları yazılmıştır. Web api katmanına ise api tarafı
                  kodlanmıştır.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/ReCapProject"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Çalışan Takip Projesi -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card" style="width: 100%">
            <a
              href="images/dotnetcoreproject.png"
              data-lightbox="image-group"
              data-title="Çalışan Takip Projesi"
            >
              <img
                src="images/dotnetcoreproject.png"
                class="card-img-top"
                alt="Çalışan Takip Projesi"
              />
            </a>

            <div class="card-body">
              <h5 class="card-title">Çalışan Takip Projesi</h5>
              <div class="card-area">
                <p class="card-text">
                  Asp.Net Core teknolojisini kullanarak yaptığım bir proje.
                  İçinde kayıt olma işlemi, giriş-çıkış işlemleri, roller ve
                  claimler gibi işlemler var. Projeye facebook, google gibi
                  harici yerlerden de kayıt olunabiliyor ve giriş yapılabiliyor.
                  Kayıt olan birisinin veritabanın da emaili eğer varsa aynı
                  email var hatası veriyor. Ve kayıt olan kullanıcı şifre
                  oluştururken bir de onaylama şifresi girmesi gerekiyor.
                  Uygulama şifrelerin aynı olup olmadığını kontrol ediyor ve
                  aynı değilse hata mesajı veriyor. Kullanıcı kayıt olduktan
                  sonra emailine, emailini onaylama linki gönderiyor. Emailini
                  onaylama işlemini yapmadan giriş yapamıyor. Emailini
                  onayladıktan sonra giriş yapmayı başarıyla yapabilir. Giriş
                  kısmında ise şifresini unutabilen kullanıcılar için bir şifre
                  sıfırlama metni mevcut. Buna tıklayan kullanıcıların daha önce
                  onayladıkları email adresine token vasıtasıyla şifre sıfırlama
                  linki gönderiliyor. Ve o linke tıklayan kullanıcıyı yeni şifre
                  belirleme ekranına yönlendiriyor. Kullanıcı buradan yeni
                  şifresini ve onaylama şifresini yazarak yeni şifre
                  oluşturabiliyor. Aynı zamanda sisteme giren kullanıcıların
                  şifresini değiştirebileceği bir sayfa da var. Ancak şifre
                  sıfırlamadan farklı olarak bu sayfa da eski şifresini de
                  girmesi gerekiyor. Projenin ana sayfasında çalışanları
                  gösteren bir liste var. Roller kısmında listeyi herkesin
                  görebileceği allow anonymous olarak ayarladım. Ancak
                  çalışanların detaylarını görmek isteyen birisinin sisteme
                  girmesi gerekiyor. Eğer sisteme girmeyen bir kullanıcı bu
                  butona tıklarsa login sayfasına yönlendiriyor. Çalışan ekleme
                  veya var olan bir çalışanın bilgilerini düzenleme yada silme
                  işlemlerini rolü user olan yetkililer yapabilmekte. Sisteme
                  girmiş ve user yetkisi olmayan birisi bu işlemleri yapmaya
                  çalışınca hata sayfası gözükür. User rolü dışında bir de admin
                  rolü mevcut. Admin rolü de aslında yeni rol ekleme, silme veya
                  daha önceki olan rollere yeni kişiler verme yada yetkisi olan
                  birisinin rolünü kaldırma gibi işlemleri yapabiliyor.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/DenemeIdentity"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Stok Takip Projesi -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card" style="width: 100%">
            <a
              href="images/mvcstoktakip.png"
              data-lightbox="image-group"
              data-title="Stok Takip Projesi"
            >
              <img
                src="images/mvcstoktakip.png"
                class="card-img-top"
                alt="Stok Takip Projesi"
              />
            </a>

            <div class="card-body">
              <h5 class="card-title">Stok Takip Projesi</h5>
              <div class="card-area">
                <p class="card-text">
                  C# MVC teknolojisini öğrenmek için yaptığım ve geliştirdiğim
                  bir projedir. Projede ilk olarak bir layout kısmı yer
                  almaktadır. Bu kısımda Kategoriler, Ürünler, Müşteriler,
                  Satışlar ve Yardım kısmı yer almaktadır. Kategoriler kısmında
                  yeni kategori ekleme, kategorileri listeleme, güncelleme ve
                  silme butonu vardır. Ürünler ve Müşteriler kısmında da ekleme,
                  silme, düzenleme ve listeleme işlemleri yapılabilmektedir.
                  Satışlar kısmında ise satış işlemini veri tabanımızdaki
                  müşterilerden seçip, stok da olan ürünü seçip satış işlemini
                  gerçekleştirebiliriz.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/MvcStok"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Yemek Sitesi -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card" style="width: 100%">
            <a
              href="images/yemeksitesi.png"
              data-lightbox="image-group"
              data-title="Yemek Sitesi"
            >
              <img
                src="images/yemeksitesi.png"
                class="card-img-top"
                alt="Yemek Sitesi"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Yemek Sitesi</h5>
              <div class="card-area">
                <p class="card-text">
                  Asp.Net öğrenmek için bir kurs da yaptığım projedir. Projede
                  hem kullanıcılar için hem de admin tarafında gerekli
                  düzenlemelerin yapılması için 2 farklı sayfa vardır. Kullanıcı
                  kısmında bir master page kısmı var ve bu kısımda Ana Sayfa,
                  Günün Yemeği, Tarif Öner, Hakkımızda ve İletişim bölümü
                  mevcuttur. Bir de yan kısımda bir master page var ve bu
                  kısımda da Kategoriler bölümü yer almakta. Kategori bölümünde
                  yemek kategorilerine göre ayrılmakta ve yanında o kategoriden
                  kaç adet yemek varsa o miktarda sayısı yazmakta. Ana Sayfa
                  kısmında bütün yemekler alt alta sıralanmaktadır. Günün Yemeği
                  bölümünde admin tarafında belirlenen günün yemeği yer almakta.
                  Yemek Öner kısmında kullanıcıların yemek önerisinde bulunması
                  sağlanmış ama girilen yemekler ilk olarak admin kısmına
                  düşmekte ve o kısımda onaylanan yemekler Ana Sayfaya
                  eklenmektedir. Hakkımızda kısmında bizimle ilgili bilgiler yer
                  almaktadır. İletişim kısmında ise kullanıcıların bize yazmak
                  istedikleri mesajları iletebileceği bir bölümdür. Ayrıca Ana
                  Sayfada yemeklerin üstüne tıklayınca gerekli yemeğe ait yorum
                  kısımları da bulunmaktadır ve bunlar ilk önce admin kısmında
                  onaylanır. Admin tarafında ise Kategorileri düzenleme ve
                  silme, Yemekleri onaylama, silme ve düzenleme, Yemeğe ait
                  yapılan yorumları onaylama veya silme, Günün Yemeğini
                  belirleme gibi kısımlar yer almaktadır.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/Yemek_Tarifleri"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Arıza Bakım Sistemi -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card" style="width: 100%">
            <a
              href="images/ariza_bakim_sistemi.png"
              data-lightbox="image-group"
              data-title="Arıza Bakım Sistemi"
              ><img
                src="images/ariza_bakim_sistemi.png"
                class="card-img-top"
                alt="Çalışan Takip Projesi"
            /></a>

            <div class="card-body">
              <h5 class="card-title">Arıza Bakım Sistemi</h5>
              <div class="card-area">
                <p class="card-text">
                  Kurumsal Kaynak Planlaması adlı dersimde yapmış olduğum
                  projedir. Projeyi 5 kişiden oluşan grubumla yaptık. Projeyi
                  Visual Studio'da MSSQL'den veri akışı şeklinde yaptık.
                  Projenin konusu 2 farklı sistem girişiyle oluşan, Sisteme
                  Operatör girince Tezgah, Bakım Sebebi, Arızayı Bildiren
                  Operatör, Arıza Seviyesi ve Talep Tarihini girebiliyor. Bunlar
                  da Mssql'e kaydediliyor. Aynı zamanda sistem üzerinden talebi
                  silebiliyor. Bakımcı girişi de aynı ekran üzerinden kullanıcı
                  adı ve şifreyle oluyor. Operatörlerin girdiği talep numarasına
                  göre seçim oluyor ve operatörün girmiş olduğu bilgiler burada
                  gözüküyor. Ardından bakımcı hangi parçalardan kaçar adet
                  olduğunu seçip, hesapla butonuna basarak toplam maliyeti
                  hesaplıyor. Başlangıç ve bitiş tarihini girerek kaç günlük
                  duraksama oluştuysa bunun ceza ücretini ortaya çıkarıyor.
                  Ortak Rapor Ekranı sayesinde Operatörler ve Bakımcılar; Açık
                  Olan Bakım Taleplerini, Tamamlanmış Bakımları, Preshane ve
                  Yedek Parçaları görüntüleyebiliyorlar. Tabi Operatörlerin ve
                  Bakımcıların bazılarını görüntülemeye yetkisi olamayabiliyor.
                  Bu durumda hata mesajı döndürerek "Bu raporu görüntülemek için
                  yetkiniz yoktur" ifadesine yer veriyor.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/StokTakipProgrami"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- To Do List -->
        <div class="col-lg-4 col-md-6 col-sm-12 card-element">
          <div class="card" style="width: 100%">
            <a
              href="images/todolist.png"
              data-lightbox="image-group"
              data-title="To Do List"
              ><img
                src="images/todolist.png"
                class="card-img-top"
                alt="Çalışan Takip Projesi"
            /></a>

            <div class="card-body">
              <h5 class="card-title">To Do List</h5>
              <div class="card-area">
                <p class="card-text">
                  Vue.JS öğrenmeye başladığımda yaptığım ilk proje. Biraz basit
                  olsa da öğrendiklerimi kavrama yolumda attığım her adımın
                  önemli olduğunu düşünüyorum. Projenin tasarımları üzerine çok
                  uğraşmadım ama daha sonra tasarımını güzelleştirmeyi
                  düşünüyorum. Projeyi tek bir component üzerinden olmak üzere
                  yaptım.
                </p>
              </div>
              <div class="card-button">
                <a
                  href="https://github.com/oguzhanylcnkaya/ToDoList"
                  target="_blank"
                  class="btn btn-yellow"
                  >Github Reposuna Git</a
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