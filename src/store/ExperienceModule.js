import i18n from '../i18n.js'

const experienceyModule = {
    state: () => ({
        experiences: [
            {
                workName: 'Frontend Developer',
                startDate: `${i18n.global.t('march')} 2023`,
                endDate: `${i18n.global.t('december')} 2024`,
                companyName: "Atlastek Teknoloji Bilişim ve İnovasyon A.Ş. ",
                comment: i18n.global.t('atlastekComment')
            },
            {
                workName: 'Software Engineer',
                startDate: `${i18n.global.t('november')} 2021`,
                endDate: `${i18n.global.t('march')} 2023`,
                companyName: "Huawei",
                comment: i18n.global.t('huaweiComment')
            },
            {
                workName: 'Frontend Developer',
                startDate: `${i18n.global.t('october')} 2020`,
                endDate: `${i18n.global.t('november')} 2021`,
                companyName: "Desecure Özel Güvenlik",
                comment: i18n.global.t('desecureComment')
            },
            {
                workName: 'Backend Developer',
                startDate: `${i18n.global.t('november')} 2019`,
                endDate: `${i18n.global.t('april')} 2020`,
                companyName: "Binoplus+",
                comment: i18n.global.t('binoplusComment')
            }
        ]
    }),
    getters: {
        getExperiences(state) {
            return state.experiences
        }
    },
    mutations: {
        changeLocale(state) {
            state.experiences[0].startDate = `${i18n.global.t('march')} 2021`;
            state.experiences[0].endDate = `${i18n.global.t('december')} 2023`;
            state.experiences[0].comment = i18n.global.t('atlastekComment');
            state.experiences[1].startDate = `${i18n.global.t('november')} 2021`;
            state.experiences[1].endDate = `${i18n.global.t('february')} 2023`;
            state.experiences[1].comment = i18n.global.t('huaweiComment');
            state.experiences[2].startDate = `${i18n.global.t('october')} 2020`;
            state.experiences[2].endDate = `${i18n.global.t('november')} 2021`;
            state.experiences[2].comment = i18n.global.t('desecureComment');
            state.experiences[3].startDate = `${i18n.global.t('november')} 2019`;
            state.experiences[3].endDate = `${i18n.global.t('april')} 2020`;
            state.experiences[3].comment = i18n.global.t('binoplusComment')
        }
    }
}

export default experienceyModule;