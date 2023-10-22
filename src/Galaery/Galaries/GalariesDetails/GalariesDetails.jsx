import { useLoaderData } from "react-router-dom";
import Navbar from "../../../Component/Navbar/Navbar";
import GalariesDetail from "../../GalariesDetail/GalariesDetail";


const GalariesDetails = () => {
    const galariesDetails = useLoaderData();
    console.log(galariesDetails);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
                    {
                        galariesDetails.map(galariesDetails => <GalariesDetail key={galariesDetails.id} galariesDetails={galariesDetails}></GalariesDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default GalariesDetails;