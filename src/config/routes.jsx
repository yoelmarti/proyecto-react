import React from "react";
import NotFound from "../pages/NotFound/NotFound";

//Lazy Loading de componentes
const Home = React.lazy(() => import("../pages/Home/Home"));
const ProductDetail = React.lazy(()=>import("../pages/ProductDetail/ProductDetail"));
const ProductList = React.lazy(()=>import("../pages/ProductList/ProductList"));
const ShopingCart = React.lazy(()=>import("../pages/ShopingCart/ShopingCart"));

const routes = [
    {
        exact: true,
        path: "",
        element: <Home/>,
    },
    {
        path: "products",
        element: <ProductList/>,
    },
    {
        path: "products/:productId",
        element: <ProductDetail/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "shopingCart",
        element: <ShopingCart/>,
    },
];

export default routes;