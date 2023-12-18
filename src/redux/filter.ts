import { IFilter } from "../models/models";
import { SET_CURRENT_FILTER } from "./actions";

const initialState: IFilter = {
    currentFilter: '',
}

export function filterReducer(state = initialState, action: {type: string, payload: string}) {
    switch (action.type) {
        case SET_CURRENT_FILTER:
            return {
                ...state,
                currentFilter: action.payload,
            }
        default:
            return state;
}
}
