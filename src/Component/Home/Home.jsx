import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Testimonial from "../Testimonial/Testimonial";
import Customer from "../Customer/Customer";

const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>

                <div>
                    <h1 className="text-center text-4xl font-bold mt-8 text-[#e64a50]">Our Services</h1>
                    <h1 className="text-center text-xl mt-2">We provide our best services to make your function more delightfull</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 p-2">
                    {
                        cards.map(cards => <Card cards={cards} key={cards.id}></Card>)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10">Testimonial</h1>
                <p className="text-center mt-2 text-xl">capture positive feedback and can be used to showcase customer
                 satisfaction or reviews in<br /> various contexts,
                  such as websites, product pages, or marketing materials.</p>
                <Testimonial></Testimonial>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10">Customer Review</h1>
                <p className="text-center mt-2 text-xl">They can be displayed on websites, social media, or marketing materials
                    <br /> to build trust and credibility with potential customers.</p>
                <Customer></Customer>
            </div>
        </div>
    );
};

export default Home;