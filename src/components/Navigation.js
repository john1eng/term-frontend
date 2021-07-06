import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="grid grid-cols-2 h-14 bg-primary_light">
      <div className="col-start-1 col-end-2 flex">
        <div className="border-secondary border-2 text-primary rounded-md bg-white font-bold inline p-1 self-center m-1">
          CARDTERM
        </div>
      </div>

      <div className="col-start-2 col-end-3 flex justify-end items-center">
        <div className="button-container">
          <Link to="/Add">
            <button className="border-secondary border text-primary bg-white font-bold inline self-center m-1 w-16">
              Add
            </button>
          </Link>
          <Link to="/Search">
            <button className="border-secondary border text-primary bg-white font-bold inline self-center m-1 w-16">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
