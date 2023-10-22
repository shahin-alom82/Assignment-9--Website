
import { useLoaderData} from "react-router-dom";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Navbar from "../../Component/Navbar/Navbar";
const ServicesDetails = () => {
    // const [service, setCard] = useState({})
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
                    {
                        serviceDetails.map(serviceDetailss => <ServiceDetail key={serviceDetailss.id} serviceDetailss={serviceDetailss}></ServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;