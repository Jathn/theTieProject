const initialState = {
    reportedPoints: [{
        lat: 60.18396231386347, 
        lng: 24.828070085671612,
        severity: 1
    },
    ]
};

const pointReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POINT':
            return {
                ...state,
                reportedPoints: state.reportedPoints.concat(action.point)
            };
        case 'REMOVE_POINT':
            return {
                ...state,
                reportedPoints: state.reportedPoints.filter(point => point.id !== action.id)
            };
        default:
            return state;
        case 'REMOVE_ALL':
            return {
                ...state,
                reportedPoints: []
            };
    }
};

export const addPoint = point => {
    return {
        type: 'ADD_POINT',
        point
    };
}

export const removePoint = id => {
    return {
        type: 'REMOVE_POINT',
        id
    };
}

export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    };
}

export default pointReducer;