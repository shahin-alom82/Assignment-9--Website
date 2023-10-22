

const Testimonial = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 p-2 ">
            
            <div className="card border bg-slate-300">
                <img className="rounded-full object-cover h-20 mx-auto w-20 mt-10" src="https://i.ibb.co/G05Cnz0/lovepik.png" alt="Shoes" />
                <div className="p-6 h-[220px]">
                    <h2 className="card-title text-center text-sm h-5 mt-12">Absolutely delighted with the birthday celebration organized by this team! From personalized decor to seamless coordination, they turned my special day into an extraordinary experience</h2>
                  <h1 className="text-center mt-16 font-bold text-xl">Birthday Parties</h1>
                </div>
            </div>

            <div className="card  border bg-slate-300 ">
                <img className=" object-cover rounded-full  h-20 mx-auto w-20 mt-10" src="https://i.ibb.co/nQtgZh8/images.jpg" alt="Shoes" />
                <div className="p-6">
                    <h2 className="card-title text-center text-sm  h-5 mt-12">Unforgettable moments unfolded on our wedding day, thanks to
                 the meticulous planning and seamless execution by this
                 exceptional team.</h2>
                    <h1 className="text-center mt-16 font-bold text-xl">Weddings</h1>
                </div>
            </div>

            <div className="card  border bg-slate-300">
                <img className="rounded-full  object-cover  h-20 mx-auto w-20 mt-10" src="https://i.ibb.co/9GbL0qc/lovepik.png" alt="Shoes" />
                <div className="p-6">
                    <h2 className="card-title text-center text-sm  h-5 mt-12">The teams dedication and creativity added a special touch,
                 making it a day well forever cherish. Grateful for the
                 unforgettable memories they helped create on our anniversary</h2>
                    <h1 className="text-center mt-16 font-bold text-xl">Anniversaries</h1>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;