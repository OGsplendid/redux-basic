import { IOnEdit } from "../models/models";
import { MEMORIZE_ONEDIT_ID, SET_INITIAL_FORM, SET_ON_EDIT_FORM } from "./actions";

const initialState: IOnEdit = {
    onEdit: false,
    onEditId: '',
};

export function inputsReducer(state = initialState, action: { type: string; payload: boolean }) {
    switch (action.type) {
        case SET_ON_EDIT_FORM:
            return {
                onEdit: true,
            }
        case SET_INITIAL_FORM:
            return {
                onEdit: false,
            }
        case MEMORIZE_ONEDIT_ID:
            return {
                ...state,
                onEditId: action.payload,
            }
        default:
            return state;
    }
}
