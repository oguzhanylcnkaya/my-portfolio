const projectsModule = {
    state: () => ({
        projects : [
            {
                images : [
                    {
                        src : require("@/assets/images/RecapProject/anasayfa2.png")
                    },
                    {
                        src : "../assets/images/RecapProject/anasayfa3.png"
                    },
                    {
                        src : "../assets/images/RecapProject/giris.png"
                    },
                    {
                        src : "images/RecapProject/kaydol.png"
                    },

                    {
                        src : "../assets/images/RecapProject/arabaekle.png"
                    },
                    {
                        src : "images/RecapProject/aracguncelle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/araclar.png"
                    },
                    {
                        src : "images/RecapProject/detay.png"
                    },
                    {
                        src : "../assets/images/RecapProject/kiralama.png"
                    },
                    {
                        src : "images/RecapProject/kullaniciduzenle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/kullanicirolekle.png"
                    },
                    {
                        src : "images/RecapProject/kullanicirolguncelle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/kullaniciroller.png"
                    },
                    {
                        src : "images/RecapProject/markaekle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/markaguncelle.png"
                    },
                    {
                        src : "images/RecapProject/markalar.png"
                    },
                    {
                        src : "../assets/images/RecapProject/odeme.png"
                    },
                    {
                        src : "images/RecapProject/renkekle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/renkguncelle.png"
                    },
                    {
                        src : "images/RecapProject/renkler.png"
                    },
                    {
                        src : "../assets/images/RecapProject/rolekle.png"
                    },
                    {
                        src : "images/RecapProject/rolguncelle.png"
                    },
                    {
                        src : "../assets/images/RecapProject/roller.png"
                    },
                    {
                        src : "images/RecapProject/sepet.png"
                    },
                ],
                projectName : "ozyRent a Car Projesi (Frontend)",
                projectDescription : `Bu projenin Frontend tarafında Angular framework'u
                kullanılmıştır. Backend tarafından gelen api isteklerini
                karşılamak için Services klasörü altında Http Client
                kullanarak servis işlemleri yazılmıştır. Proje SPA olarak
                oluşturulduğu için Route yapısı Routing Module altında
                oluşturulmuştur. Gelen istekleri sayfalarda göstermek için
                components klasörü altında sayfalar oluşturulmuştur.
                İnterceptor altında her istekte token gönderimi sağlanmıştır.
                Guards işlemi ile kullanıcının sisteme girip girmediği kontrol
                edilmiş, eğer sisteme girmemiş ise login sayfasına yönlendirme
                işlemi yapılmıştır.`,
                projectGithubRepo : "https://github.com/oguzhanylcnkaya/ReCapProjectFrontEnd"
            }
        ]
    }),
    getters: {
        getProjects(state){
            return state.projects
        }
    }
}

export default projectsModule;