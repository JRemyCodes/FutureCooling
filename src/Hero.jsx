import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    return (
        <div id="hero">
            <h1>Breathe Easy, We Fix It.</h1>
            <p>We offer affordable repair services for appliances,
            electrical systems, disposals, garage doors, and HVAC units,
            keeping your home and business running smoothly.</p>
            <button>Get A Quote</button>
        </div>
    );
}