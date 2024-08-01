import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Layout.css'
import Footer_Area from "../Footer/Footer";

const Layout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isOpened = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const handlescroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handlescroll)
        return () => {
            window.addEventListener('scroll', handlescroll)
        }
    }, [])

    return (
        <>
            <header className={`${isScrolled ? "isScrolled" : ""} ${isOpen ? "isopen" : "isclosed"}`}>
            <div className="Logo">
                <Link to="/">
                    <img src="https://qi3.qodeinteractive.com/wp-content/uploads/2020/09/logo-light.png" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={isOpened} className={isOpen ? 'isopen' : 'isclose'}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header >
            <Outlet />
            <Footer_Area />


        </>)
}
export default Layout