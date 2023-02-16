const headerModule = {
    state: () => ({
        navbarList: [
            {
                to: "#main",
                title: "Ana Sayfa"
            },
            {
                to: "#ability",
                title: "Hakkımda"
            },
            {
                to: "#experience",
                title: "Deneyimler"
            },
            {
                to: "#projects",
                title: "Projeler"
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
        }
    }
}

export default headerModule;