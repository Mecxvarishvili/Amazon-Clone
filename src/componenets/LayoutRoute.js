import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MENU_PAGE, CART_PAGE, CATEGORY_PAGE, PRODUCT_PAGE, SEARCH_PAGE, } from '../pages/routes';

const LayoutRoute = (props) => useRoutes([
    { path: MENU_PAGE, element: props.element},
    { path: CART_PAGE, element: props.element},
    { path: CATEGORY_PAGE, element: props.element},
    { path: PRODUCT_PAGE, element: props.element},
    { path: SEARCH_PAGE, element: props.element},
])

export default LayoutRoute;