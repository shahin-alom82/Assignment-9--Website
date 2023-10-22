import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div className="lg:mx-16 p-2">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;