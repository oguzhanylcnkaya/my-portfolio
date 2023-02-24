const carouselModule = {
    state: () => ({
        carousels : [
            {
                class : 'carousel-item active firstImg',
                name : "Oğuzhan",
                surname : "Yalçınkaya",
                mail : "Oguzhanyalcinkaya@gmail.com",
                text : `Azimli, Hırslı ve Sakar bir yazılımcıyım :) <br />
                Kendimi kısaca; kendini geliştiren, yeni şeyler öğrenmekten
                korkmayan, hayata pozitif bakmaya çalışan birisi olarak
                nitelendirebilirim.`
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
    }
}

export default carouselModule;