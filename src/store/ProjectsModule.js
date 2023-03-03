const projectsModule = {
    state: () => ({
        projects : [
            {
                images : [
                    {
                        src : require("@/assets/images/RecapProject/anasayfa2.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//anasayfa3.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//giris.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/kaydol.png")
                    },

                    {
                        src : require("@/assets/images/RecapProject//arabaekle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/aracguncelle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//araclar.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/detay.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//kiralama.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/kullaniciduzenle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//kullanicirolekle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/kullanicirolguncelle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//kullaniciroller.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/markaekle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//markaguncelle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/markalar.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//odeme.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/renkekle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//renkguncelle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/renkler.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//rolekle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/rolguncelle.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject//roller.png")
                    },
                    {
                        src : require("@/assets/images/RecapProject/sepet.png")
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