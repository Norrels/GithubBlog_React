import { Outlet } from "react-router-dom";
import { Header } from "../pages/Home/style";

export function DefaultLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}