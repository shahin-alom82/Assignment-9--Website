

const ServiceDetail = ({serviceDetailss}) => {
    const { img, title } = serviceDetailss;
    return (
        <div>
            <div>
                <div className="card  bg-gray-400 ">
                    <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="card-title text-2xl  h-5 mt-2">{title}</h2>
                        <div className="card-actions justify-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;