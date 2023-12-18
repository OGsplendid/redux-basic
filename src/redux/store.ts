import { combineReducers, compose, legacy_createStore } from 'redux';

import { tasksReducer } from './tasksReducer';
import { inputsReducer } from './inputsReducer';
import { filterReducer } from './filter';


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configureStore() {
    return legacy_createStore(
        combineReducers({
            todo: tasksReducer,
            inputs: inputsReducer,
            filter: filterReducer,
        }),
        compose(
            ReactReduxDevTools,
        )
    );
}
