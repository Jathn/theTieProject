const initialState = {
    reportedPoints: [{
        lat: 60.18396231386347, 
        lng: 24.828070085671612,
        severity: 1
    },
    {
        lat: 60.18496231386347, 
        lng: 24.828070085671612,
        severity: 2
    },
    {
        lat: 60.18596231386347, 
        lng: 24.828070085671612,
        severity: 3
    },
    {
        lat: 60.18696231386347,
        lng: 24.828070085671612,
        severity: 4
    }]
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

export default pointReducer;