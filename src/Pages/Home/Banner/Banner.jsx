import banner1 from "../../../assets/Banner/banner1.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className="w-1/2">
                        <h1 className="mb-5 text-5xl font-bold">Enlighten Your Knowledge of Quran and Hadith</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;