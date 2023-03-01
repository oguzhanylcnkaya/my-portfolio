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
        ]
    }),
    getters: {
        getAbility(state) {
            return state.abilities
        }
    }
}

export default abilityModule;