import React from "react";
import Pagination from "react-js-pagination";
import styles from './Pagination.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageCreator} from "../../redux/action-creators/";


export const Paginator = () => {

    const dispatch = useDispatch();

    const {currPage, totalItemsCount} = useSelector(({paginationReducer}) => paginationReducer);

    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPageCreator(pageNumber));
    }

    return (
        <div>
            <Pagination
                innerClass={ styles.paginationBox }
                itemClass="page-item"
                linkClass="page-link"
                activePage={ currPage }
                itemsCountPerPage={ 20 }
                totalItemsCount={ totalItemsCount }
                pageRangeDisplayed={ 5 }
                onChange={ handlePageChange }
            />
        </div>
    );
};


