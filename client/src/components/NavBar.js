// import { Link } from "react-router-dom";

const NavBar = () => {

    // hamburger function
    const displayNav = () => {
        const dropNav = document.querySelector(".drop-nav");
        const hamburger = document.querySelector(".hamburger");

        dropNav.classList.toggle("displayNav");
        hamburger.classList.toggle("animateHam");
    }

    // navBar animation on scroll
    const navOnScroll = () => {
        const scrollTrigger = window.scrollY;
        const nav = document.querySelector(".nav");

        scrollTrigger > 0 ? nav.classList.add("navOnScroll") : nav.classList.remove("navOnScroll")
    }

    // eventListener on window to trigger navOnScroll function
    window.addEventListener("scroll", navOnScroll);

    return (
        <nav className="nav">
            <div className="logo">
                <span>Brand</span>
            </div>
            <div onClick={displayNav} className="hamburger">
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </div>
            <ul className="drop-nav">
                <li className="nav-item">Admin Directory</li>
                <li className="nav-item">Page Editor</li>
                <li className="nav-item">Order Directory</li>
                <li className="nav-item">Inventory Directory</li>
            </ul>
        </nav>
    )
}

export default NavBar