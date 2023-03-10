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
                projectDescription : `Bu projenin Frontend taraf??nda Angular framework'u
                kullan??lm????t??r. Backend taraf??ndan gelen api isteklerini
                kar????lamak i??in Services klas??r?? alt??nda Http Client
                kullanarak servis i??lemleri yaz??lm????t??r. Proje SPA olarak
                olu??turuldu??u i??in Route yap??s?? Routing Module alt??nda
                olu??turulmu??tur. Gelen istekleri sayfalarda g??stermek i??in
                components klas??r?? alt??nda sayfalar olu??turulmu??tur.
                ??nterceptor alt??nda her istekte token g??nderimi sa??lanm????t??r.
                Guards i??lemi ile kullan??c??n??n sisteme girip girmedi??i kontrol
                edilmi??, e??er sisteme girmemi?? ise login sayfas??na y??nlendirme
                i??lemi yap??lm????t??r.`,
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