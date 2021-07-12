import {
    SET_CURRENT_PAGE,
    SET_TOTAL_ITEMS_COUNT
} from "../action-types/pagination-action-types";


export const setCurrentPageCreator = (payload) => ({
    type: SET_CURRENT_PAGE, payload
});
export const setTotalItemsCountCreator = (payload) => ({
    type: SET_TOTAL_ITEMS_COUNT, payload
});