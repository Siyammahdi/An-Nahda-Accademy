import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { GiCoconuts } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import logo from '../../assets/Logo/logo.png';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className="flex items-center">
                    <div>
                        <img className="w-44" src={logo} alt="" />
                    </div>
                    <div className="text-base ">
                        <p className="flex items-center gap-2"><LuMail /> annahdaaccademy@gmail.com</p>
                        <p className="flex items-center gap-2"><BsTelephone /> +880 192232838</p>
                        <p className="w-2/3 pt-5">Empowering minds, fostering knowledge, shaping a brighter educational future together</p>
                    </div>
                </div>
                <nav className="pt-6">
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="pt-6">
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <div className="text-4xl">
                        <GiCoconuts />
                    </div>
                    <p> Codonut Technologies <br />Elevate your digital presence with cutting-edge web solutions and technology</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="text-2xl grid grid-flow-col gap-4">
                        <a><FaFacebook /></a>
                        <a><FaTelegram /></a>
                        <a><IoLogoLinkedin /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;