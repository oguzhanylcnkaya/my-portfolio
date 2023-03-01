import i18n from '../i18n.js'

const carouselModule = {
    state: () => ({
        carousels : [
            {
                class : 'carousel-item active firstImg',
                name : "Oğuzhan",
                surname : "Yalçınkaya",
                mail : "Oguzhanyalcinkaya@gmail.com",
                text : i18n.global.t('carouselExplanationFirst')
            },
            {
                class : "carousel-item secondImg",
                name : "Oğuzhan",
                surname : "Yalçınkaya",
                mail : "Oguzhanyalcinkaya@gmail.com",
                text : `Azimli, Hırslı ve Sakar bir yazılımcıyım :) <br />
                Kendimi kısaca; kendini geliştiren, yeni şeyler öğrenmekten
                korkmayan, hayata pozitif bakmaya çalışan birisi olarak
                nitelendirebilirim.`
            }

        ]
    }),
    getters: {
        getCarousel(state){
            return state.carousels
        }
    },
    mutations : {
        changeLocale(state){
            state.carousels[0].text = i18n.global.t("carouselExplanationFirst");
        }
    }
}

export default carouselModule;