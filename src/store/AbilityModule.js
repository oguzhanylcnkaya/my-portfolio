import i18n from '../i18n.js'

const abilityModule = {
    state: () => ({
        abilities: [
            {
                name: 'Html',
                percent: '95'
            },
            {
                name: 'Css',
                percent: '87'
            },


            {
                name: 'Javascript',
                percent: '75'
            },
            {
                name: 'Vue.JS',
                percent: '62'
            },
            {
                name: 'Angular',
                percent: '45'
            },
            {
                name: 'C#',
                percent: '73'
            },
            {
                name: 'Asp.Net MVC',
                percent: '45'
            },
            {
                name: '.Net Core',
                percent: '35'
            },
            {
                name: 'Git',
                percent: '85'
            },
            {
                name: 'MSSQL',
                percent: '67'
            },
            {
                name: 'Wordpress',
                percent: '50'
            },
        ],
        abilityDescription : i18n.global.t('abilityDescription'),
    }),
    getters: {
        getAbility(state) {
            return state.abilities
        },
        getAbilityDescription(state){
            return state.abilityDescription
        }
    },
    mutations : {
        changeLocale(state){
            state.abilityDescription = i18n.global.t("abilityDescription");

        }
    }
}

export default abilityModule;