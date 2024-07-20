import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Nav() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 800);
        window.addEventListener('resize', handleResize);

        gsap.fromTo(navRef.current, 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
        );

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav ref={navRef}>
            <div className="logo">
                {isLargeScreen ? <img src="src/assets/Images/Logo (Full Text).svg" alt="logo" id="lg-logo"/> :
                <img src="src/assets/Images/Logo Mark.svg" alt="logo" id="sm-logo"/>}
            </div>
            <div className="links">
                {isLargeScreen ? 
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get A Quote</a></li>
                    </ul> : <img src="src/assets/Images/Menu.svg" alt="menu" id="menu"/>}
            </div>
        </nav>
    );
}