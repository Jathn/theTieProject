import { createStore, combineReducers } from 'redux';
import pointReducer from './reducers/pointReducer';
import positionReducer from './reducers/positionReducer';
// Initial state
const initialState = {
    reportedPoints: []
};

const rootReducer = combineReducers({
    points: pointReducer,
    position: positionReducer
});
// Create store
const store = createStore(rootReducer);

export default store;