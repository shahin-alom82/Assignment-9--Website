import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Servi from "../Service/Servi";


const Services = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className="  w-full lg:h-[620px] md:h-[200px]  object-cover mt-5 ">
                    {
                        service.map(service => <Servi key={service} service={service} ></Servi>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;