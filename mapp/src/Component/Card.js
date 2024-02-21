import React from "react";

export default function Card({img,title,des}) {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px", margin:"4vh" }}
        >
        
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{des}</p>
            <div className="container w-100">
              <select className="m-2  h-100 bg-success">
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2  h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="Full">full</option>
              </select>

              <div className=" h-1000 d-inline ">Total Prize</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
