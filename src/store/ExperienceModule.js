const experienceyModule = {
    state: () => ({
        experiences: [
            {
                workName: 'Software Engineer',
                startDate: 'Kasım 2021',
                endDate: "Şubat 2023",
                companyName: "Huawei",
                comment: `2021 yılının Kasım ayında çalışmaya başladığım ve halen devam
                ettiğim Huawei firmasında Appcube takımında Software Engineer olarak
                çalışmaktayım. Hem Huawei için hem de dışarıdan alınan projelerde
                geliştirmeler yapmaktayım. Çoğunlukla Html, Css, Scss, Javascript,
                Typescript, Vue.Js teknolojilerini kullanmaktayım.`
            },
            {
                workName: 'Frontend Developer',
                startDate: 'Ekim 2020',
                endDate: "Kasım 2021",
                companyName: "Desecure Özel Güvenlik",
                comment: `Mezun olduktan sonra girdiğim ve yaklaşık olarak 1 yıl çalıştığım
                Desecure Özel Güvenlik firmasında genel olarak Frontend Developer
                olarak görev aldım. Genel olarak Html, Css, Javascript, Vue.JS,
                Gulp.js, Nunjucks, Wordpress teknolojilerini kullandım. Çoğunlukla
                site oluşturma, mevcut tasarımı koda dökme, SPA projeler üzerinde
                çalıştım.`
            },
            {
                workName: 'Backend Developer',
                startDate: 'Kasım 2019',
                endDate: "Nisan 2020",
                companyName: "Binoplus+",
                comment: `Yönetim Bilişim Sistemleri bölümümün 7+1'lik stajını, Sakarya
                Üniversitesi Teknokentinde bulunan Binoplus+ Yazılım Geliştirme
                Firmasında yaptım. Staj boyunca çoğunlukla web projeleri üzerinde
                Backend rolünde görev aldım ve Staj boyunca çoğunlukla C#, Asp.Net
                MVC, Asp.Net Core, Git, MSSQL, Entity Framework teknolojilerini
                kullandım.`
            }
        ]
    }),
    getters: {
        getExperiences(state) {
            return state.experiences
        }
    }
}

export default experienceyModule;