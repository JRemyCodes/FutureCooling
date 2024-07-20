import React from 'react';

export default function CallHours({ phoneNumber, startHour, endHour }) {
  return (
    <div id="call-hours">
        <div className="icon-flex">
            <img src="src/assets/Images/Call.svg" alt="call" />
            <p>{phoneNumber}</p>
        </div>
        <div className="icon-flex">
            <img src="src/assets/Images/Hours.svg" alt="hours" />
            <p>{startHour}am - {endHour}pm</p>
        </div>
    </div>
  );
}
