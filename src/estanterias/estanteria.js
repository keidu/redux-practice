const initalState = {
    arroz: 1231
}

export default (state = initalState, evento) => {
    switch (evento.type) {
        case 'incrementar':
            return { ...state, arroz: state.arroz + 1 }
        case 'decrementar':
            return { ...state, arroz: state.arroz - 1 }
        default:
            return state
    }
}