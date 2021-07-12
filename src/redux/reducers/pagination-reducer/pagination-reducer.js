import {SET_CURRENT_PAGE, SET_TOTAL_ITEMS_COUNT} from "../../action-types/pagination-action-types";

const initialState = {
    currPage: 1,
    totalItemsCount: 0,
};

export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {...state, currPage: action.payload};
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return {...state, totalItemsCount: action.payload};
        }
        default:
            return state;
    }
}