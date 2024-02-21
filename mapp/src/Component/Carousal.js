import React from 'react';

function Carousal() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner" id='carousel'>
          <div className="carousel-item active">
            <img src="Screenshot 2024-02-04 224423.png" className="d-block w-100 max-height-500" alt="..." style={{ objectFit: "contain" }} />
            <div className="carousel-caption">
              <form className="d-flex">
                <input className="form-control me-2 border-success" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="carousel-item " style={{ objectFit: "contain" }}>
            <img src="Screenshot 2024-02-04 232123.png" className="d-block w-100 max-height-500" alt="..." style={{ objectFit: "contain" }} />
            <div className="carousel-caption">
              <form className="d-flex">
                <input className="form-control me-2 border-success" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/grilled-beef-burger-rustic-bun-with-fresh-tomato-generated-by-artificial-intelligence_188544-126890.jpg?size=626&ext=jpg&ga=GA1.1.1789471885.1696178305&semt=sph" className="d-block w-100 max-height-500" alt="..." style={{ objectFit: "contain" }} />
            <div className="carousel-caption">
              <form className="d-flex">
                <input className="form-control me-2 border-success" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style>{`
        .max-height-500 {
          max-height: 500px;
        }
      `}</style>
    </div>
  );
}

export default Carousal;
