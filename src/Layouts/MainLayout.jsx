import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;