// Reference: https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component

import React, { useEffect, useState } from "react";
import "../style.css"

import bttbutton from "./images/BackToTopButton.jpg";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const visibilityToggle = () => {
        if (window.pageYOffset > window.outerHeight/8) {
            setIsVisible(true);
        } 
        else{
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", visibilityToggle);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && <div onClick={scrollToTop}>
                <img src={bttbutton} alt='Scroll to Top' />
            </div>}
        </div>
    );
}

export default ScrollToTop