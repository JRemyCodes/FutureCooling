import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

    const textRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current, 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.3, delay: 0.25, ease: "power2.out" }
        );

        gsap.fromTo(btnRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
    }, []);

    const handleQuoteBtn = () => {

    }

    const handleServicesBtn = () => {

    }

    return (
        <div className="hero">
            <div className="hero-text" ref={textRef}>
                <h1>Breathe Easy, We Fix It!</h1>
                <p>We offer affordable repair services for appliances, electrical systems, disposals,
                garage doors, and HVAC units, keeping your home and business running smoothly.</p>
            </div>
            <div className="btn-group" ref={btnRef}>
                <button id="quote-btn">Get A Quote</button>
                <button id="services-btn">Our Services</button>
            </div>
        </div>
    );
}