const initialState = {
    lat: 60.18396231386347,
    lng: 24.828070085671612,
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return action.position;
        default:
            return state;
    }
}

export const setPosition = position => {
    return {
        type: 'SET_POSITION',
        position
    };
}

export default positionReducer;