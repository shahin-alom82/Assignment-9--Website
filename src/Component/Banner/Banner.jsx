
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[600px] md:h-[200px] object-cover rounded-lg mt-5">
                {/* https://i.ibb.co/5GFc8bn/Wedding.jpg */}
                <div className="hero object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/j6rJ51V/w.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div>
                            <h1 className="lg:text-5xl text-xl font-bold  text-[#ec5b60] ">Your Wedding, Your Way</h1>
                            <p className="mt-4"> Couples are encouraged to infuse their personalities and love story
                                into every aspect of their wedding.<br />

                                This includes choosing colors, themes, and decorations that resonate with them !!</p>
                            <input type="text" placeholder="Search here...." className=" p-3 mt-8 rounded-l   lg:w-72 input-error text-black" />
                            <button className="bg-[#FF444A] lg:w-28 p-3 rounded-r">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;