import i18n from '../i18n.js'

const carouselModule = {
    state: () => ({
        carousels : [
            {
                src : require("@/assets/images/raja-sen-8AibBzwWpV4-unsplash.jpg"),
                name : "Oğuzhan",
                surname : "Yalçınkaya",
                mail : "Oguzhanyalcinkaya@gmail.com",
                carouselTextFirst : i18n.global.t('carouselFirstTextFirst'),
                carouselTextSecond : i18n.global.t('carouselFirstTextSecond'),
            },
            {
                src : require("@/assets/images/slider2.jpg"),
                name : "Oğuzhan",
                surname : "Yalçınkaya",
                mail : "Oguzhanyalcinkaya@gmail.com",
                carouselTextFirst : i18n.global.t('carouselSecondTextFirst'),
                carouselTextSecond : i18n.global.t('carouselSecondTextSecond'),
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
            state.carousels[0].carouselTextFirst = i18n.global.t("carouselFirstTextFirst");
            state.carousels[0].carouselTextSecond = i18n.global.t("carouselFirstTextSecond");
            state.carousels[1].carouselTextFirst = i18n.global.t("carouselSecondTextFirst");
            state.carousels[1].carouselTextSecond = i18n.global.t("carouselSecondTextSecond");
        }
    }
}

export default carouselModule;