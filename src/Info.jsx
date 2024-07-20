import React from "react";

export default function Info() {
    return (
        <div id="info">
            <div id="perks">
                <div className="benefits">
                    <img src="src/assets/Images/Tools.svg" alt="tools"/>
                    <h2>Expert Technicians</h2>
                    <p>Our team is comprised of highly trained and certified technicians
                    with extensive experience in repairing a wide range of appliances.</p>
                </div>
                <div className="benefits">
                    <img src="src/assets/Images/Clock.svg" alt="clock"/>
                    <h2>Fast & Reliable</h2>
                    <p>We offer same-day appointments whenever possible and prioritize
                    punctual arrival within scheduled windows.</p>
                </div>
                <div className="benefits">
                    <img src="src/assets/Images/Money.svg" alt="money"/>
                    <h2>Transparent Pricing</h2>
                    <p>For common electrical repairs, we offer upfront flat-rate pricing.
                    This means you'll see the total cost before we begin.</p>
                </div>
            </div>
            <div id="services-gallery" className="grid-layout">
                <div className="item" id="breaker">
                    <img src="src/assets/Images/Breaker.jpg" alt="breaker" />
                </div>
                <div className="item" id="services-text">Future Cooling keeps your home and business running smoothly.
                Our experts fix appliances, electrical systems, garage doors, and HVAC units – all at affordable prices.
                Let us handle your maintenance needs!</div>
                <div className="item" id="tools">
                    <img src="src/assets/Images/Drill.jpeg" alt="tools" />
                </div>
            </div>
        </div>
    );
}