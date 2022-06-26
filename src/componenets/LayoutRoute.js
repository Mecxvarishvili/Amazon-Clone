import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MENU_PAGE, CART_PAGE, CATEGORY_PAGE, PRODUCT_PAGE, SEARCH_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE, PROFILE_PAGE, } from '../pages/routes';

const LayoutRoute = (props) => useRoutes([
    { path: MENU_PAGE, element: props.element},
    { path: CART_PAGE, element: props.element},
    { path: CATEGORY_PAGE, element: props.element},
    { path: PRODUCT_PAGE, element: props.element},
    { path: SEARCH_PAGE, element: props.element},
    { path: PROFILE_PAGE, element: props.element},
    { path: SIGN_IN_PAGE, element: <></>},
    { path: SIGN_UP_PAGE, element: <></>},
])

export default LayoutRoute;