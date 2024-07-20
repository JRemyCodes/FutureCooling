import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import CallHours from "./CallHours";

const Landing = () => {
    return (
        <div id="landing">
            <Nav />
            <Hero />
            <CallHours
                phoneNumber="(123)-345-6789"
                startHour={8}
                endHour={5}
            />
        </div>
    );
};

export default Landing;