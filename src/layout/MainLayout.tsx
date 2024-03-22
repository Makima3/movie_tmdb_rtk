import {Outlet} from "react-router-dom";
import {Header} from "../Components";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

