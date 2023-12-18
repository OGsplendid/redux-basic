import { IInitialState, TTask } from "../models/models";
import { ADD_TASK, CANCEL_EDIT_TASK, DELETE_TASK, FILTER_TASKS, MODIFY_TASK, SET_ONEDIT_TASK, SET_USER_VALUE } from "./actions";

const initialState: IInitialState = {
    userValue: {
        id: '',
        task: '',
        sum: '',
    },
    tasks: [],
    
}

export function tasksReducer(state = initialState, action: { type: string; payload: TTask; }) {
    switch (action.type) {
        case SET_USER_VALUE:
            return {
                ...state,
                userValue: action.payload,
            }
        case ADD_TASK:
            return {
                ...state,
                userValue: {
                    id: '',
                    task: '',
                    sum: '',
                },
                tasks: [{...state.userValue}, ...state.tasks],
            }
        case SET_ONEDIT_TASK:
            return {
                ...state,
                userValue: action.payload,
            }
        case MODIFY_TASK:
            return {
                ...state,
                userValue: {
                    id: '',
                    task: '',
                    sum: '',
                },
                tasks: action.payload,
            }
        case CANCEL_EDIT_TASK:
            return {
                ...state,
                userValue: {
                    id: '',
                    task: '',
                    sum: '',
                },
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: action.payload,
            }
        case FILTER_TASKS:
            return {
                ...state,
                tasks: action.payload,
            }    
        default:
            return state;
    }
}
