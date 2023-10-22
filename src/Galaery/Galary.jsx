import { useLoaderData } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Galaries from "./Galaries/Galaries";

const Galary = () => {
    const galary = useLoaderData();
    console.log(galary);
    return (
        <div>
             <div>
                <Navbar></Navbar>
                <div className="  w-full lg:h-[620px] md:h-[200px]  object-cover mt-5 ">
                    {
                        galary.map(galary => <Galaries key={galary.id} galary={galary}></Galaries>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Galary;