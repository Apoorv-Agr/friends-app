import { combineReducers } from 'redux';

import { friendsReducer } from './reducers/friendsReducer';

const rootReducer = combineReducers({
    friendsState: friendsReducer
})

export {rootReducer};