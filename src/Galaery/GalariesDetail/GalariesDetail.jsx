
const GalariesDetail = ({galariesDetails}) => {
    const {img} = galariesDetails;
    return (
        <div>
        <div>
            <div className="card">
                <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                <div className="p-6">
                    <div className="card-actions justify-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GalariesDetail;