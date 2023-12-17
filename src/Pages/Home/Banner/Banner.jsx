import { useEffect } from "react";
import banner1 from "../../../assets/Banner/banner1.jpg"
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        console.log("object");
        AOS.init({
            delay: 1000,
            duration: 500,
        });
    }, []);

    return (
        <div>
            <div data-aos="zoom-out-up" className="hero min-h-screen w-full" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className="w-1/2">
                        <h1 data-aos="zoom-out-down" className="mb-5 text-5xl font-bold">Enlighten Your Knowledge with Quran and Hadith</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="zoom-out-up" className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="absolute right-0 text-lg text-white font-bold  focus:outline-none focus:shadow-outline transform transition-transform animate-bounce" style={{ animationDuration: '1s', animationIterationCount: 'infinite', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h5 className="transform rotate-90 mb-20" style={{ letterSpacing: '0.3em' }}>Scroll Down</h5>
                        <PiArrowFatLinesDownFill className="h-8 w-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;