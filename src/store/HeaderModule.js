import i18n from '../i18n.js'

const headerModule = {
    state: () => ({
        navbarList: [
            {
                to: "#main",
                title: i18n.global.t('homePage'),
            },
            {
                to: "#ability",
                title: i18n.global.t('about'),
            },
            {
                to: "#experience",
                title: i18n.global.t('experiences'),
            },
            {
                to: "#projects",
                title: i18n.global.t('projects'),
            },
        ],
        socialLinks: [
            {
                to: "https://twitter.com/oguzhanylcnkaya",
                class: "fab fa-twitter"
            },
            {
                to: "https://www.instagram.com/oguzhanylcnkaya/",
                class: "fab fa-instagram"
            },
            {
                to: "https://www.linkedin.com/in/oguzhanyalcinkaya/",
                class: "fab fa-linkedin"
            },
            {
                to: "https://github.com/oguzhanylcnkaya",
                class: "fab fa-github"
            },
            {
                to: "https://oguzhanyalcinkaya.medium.com/",
                class: "fab fa-medium-m"
            },
            {
                to: "mailto:oguzhanyalcinkayaa@gmail.com",
                class: "fas fa-envelope"
            }
        ]
    }),
    getters: {
        getNavbarList(state) {
            return state.navbarList
        },
        getSocialLinks(state) {
            return state.socialLinks
        },
        getCVLink() {
            const language = i18n.global.locale._value;
            if (language == "en") {
                return "/document/CV-en.pdf";
            } else {
                return "/document/CV.pdf";
            }
        }
    },
    mutations: {
        changeLocale(state) {
            state.navbarList[0].title = i18n.global.t("homePage");
            state.navbarList[1].title = i18n.global.t("about");
            state.navbarList[2].title = i18n.global.t("experiences");
            state.navbarList[3].title = i18n.global.t("projects");
        }
    }
}

export default headerModule;