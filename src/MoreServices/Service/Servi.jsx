import { Link } from "react-router-dom";


const Servi = ({ service }) => {
    const { id } = service;
    return (
        <div className="rounded-lg">
            <div className="hero object-cover lg:h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/0cczC3n/sn-005.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="lg:text-5xl text-2xl font-bold  text-[#ec5b60] ">All Social Event Service Gallery!</h1>
                        <p className="mt-4 text-xl"> This is enough service. If you want to see the gallery of all our services,
                        <br /> then click on the More button.
                            </p>
                        <Link to={`/service/${id}`}>
                            <button className="bg-[#FF444A] lg:w-72 text-xl font-bold p-4 rounded-lg mt-8">Click Here Service Photo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Servi;
