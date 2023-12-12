import loginBg from "../../assets/Others/login.jpg"
import texture from "../../assets/Others/bgSlice.b9d8c29c.svg"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const LoginText = "Already have an account?"
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className="hero w-full p-0 min-h-screen" style={{ backgroundImage: `url(${loginBg})`, placeItems: "normal" }}>
                <div className="hero-content items-stretch p-0 flex-col lg:flex-row-reverse">
                    <div className="text-center flex flex-col justify-center px-20 lg:text-left w-1/2">
                        <h1 className="text-4xl font-bold ">Welcome Back Siyam Mahdi</h1>
                        <p className="py-6">Reconnect with seamless access. Your trusted login awaits. Embrace familiarity and dive into a world tailored just for you. Happy returning</p>
                        <button onClick={handleBack} className="btn btn-primary w-1/5">Go Back</button>
                    </div>
                    <div className="space-y-3 w-1/2 shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg">
                        <div className=" ">
                            <form className="card-body">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date of Birth</span>
                                        </label>
                                        <input type="date" placeholder="date of birth" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                                <div className="py-6 space-y-4 text-center">
                                    <h6 className="">_____________ Or Sign up using _____________</h6>
                                    <div className="flex space-x-3 justify-center">
                                        <button className="btn btn-outline text-2xl  btn-primary"><FaGoogle /></button>
                                        <button className="btn btn-outline text-2xl  btn-primary"><FaFacebook /></button>
                                        <button className="btn btn-outline text-2xl  btn-primary"><FaTwitter /></button>
                                    </div>
                                    <p>{LoginText} <Link to="/login"><button className="btn btn-link text-blue-500 px-0 text-base">Login</button></Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img className="bottom-6 absolute right-0 pointer-events-none" src={texture} alt="" />
            </div>
        </div>
    );
};

export default Register;