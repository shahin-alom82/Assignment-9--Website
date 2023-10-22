
const Service = ({service}) => {
    const {img, title} = service;
    return (
        <div>
            <div>
                <div className="card  bg-gray-400 ">
                    <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="card-title text-2xl  h-5 mt-2">{title}</h2>
                        <div className="card-actions justify-center ">
                            {/* <Link to={`/cards/${id}`}> */}
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;


import { useLoaderData } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Service from "./Service/Service";


const Services = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            <Navbar></Navbar>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 p-2">
                    {/* {
                        service.map(service => <Service key={service} service={service}></Service>)
                    } */}
                    Service
                </div>
        </div>
    );
};

export default Services;