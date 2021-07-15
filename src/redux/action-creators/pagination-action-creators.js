import {
    SET_CURRENT_PAGE,
    SET_TOTAL_ITEMS_COUNT
} from "../action-types/";


export const setCurrentPage = (payload) => ({
    type: SET_CURRENT_PAGE, payload
});


export const setTotalItemsCount = (payload) => ({
    type: SET_TOTAL_ITEMS_COUNT, payload
});