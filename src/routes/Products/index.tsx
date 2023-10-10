import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import ProductsMenu from "../../components/ProductsMenu";

export default function Products() {

    return (
        <>
        <Header />
        <ProductsMenu />
        <Outlet />
        </>
    );
}