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
        ]
    }),
    getters: {
        getAbility(state){
            return state.abilities
        }
    }
}

export default abilityModule;