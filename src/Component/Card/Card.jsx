import { Link } from "react-router-dom";
const Card = ({ cards }) => {
    const {id, img, title, description } = cards;
    return (
        <div>
            <div>
                <div className="card bg-gradient-to-r bg-[#fdba74]">
                    <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="card-title text-2xl  h-5 mt-2">{title}</h2>
                            {
                                description.length > 180 ? <p className="mt-4">{description.slice(0, 180)} <Link className="text-blue-700 underline">Read More...</Link></p>
                                : <p>{description}</p> 
                            }
                        <div className="card-actions justify-center ">
                            <Link to={`/cards/${id}`}>
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] mt-3">
                                  View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;