
const Detail = ({ card }) => {
    const { img, title, price, description } = card;
    return (
        <div>
            <div className=" ">
                <div className="card bg-pink-400 shadow-xl mb-10">
                    <img className="lg:w-[1300px] lg:h-[450px] rounded-lg md:w-[300px] md:h-[150px] object-cover" src={img} alt="" />
                    <div className='p-2'>
                        <h1 className="text-3xl font-bold mt-2">{title}</h1>
                        <button className="bg-green-400 text-white w-32 h-10 rounded font-bold mt-3">{price}</button>
                        <h1 className="mt-3">{description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;