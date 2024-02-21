import React from "react";
import Nav from "../Component/Nav";
import Foteer from "../Component/Foteer";
function Room() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="part56">
        <div className="part1">
          <h2>
            Rooms Step into our impeccably furnished hotel room, where modern
            comfort meets convenience. Unwind in style with a cozy bed, and stay
            entertained with a sleek TV offering a range of channels. For your
            culinary needs, there’s a handy microwave, a convenient
            refrigerator, and a coffee maker at your service. Need to catch up
            on work? Sit down at the dedicated workspace with a comfortable
            chair and ample lighting. Your comfort is our priority, and every
            detail has been carefully curated to ensure a delightful stay.
          </h2>
        </div>

        <div className="part1">
          <img
            src="https://www.harmonysuites.com/wp-content/uploads/2023/08/Copy-of-Harmony-7-King-1-2048x1365.jpg"
            alt=""
          />
        </div>
      </div>
      <Foteer />
    </div>
  );
}

export default Room;
