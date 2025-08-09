import './Banner.css'

function Banner() {
    return (
    <>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="public/dolar.png" className="d-block w-100" alt="public/dolar.png"/>
                </div>
                <div className="carousel-item">
                    <img src="public/dolar2.png" className="d-block w-100" alt="public/dolar2.png"/>
                </div>
                <div className="carousel-item">
                    <img src="public/dolar3.png" className="d-block w-100" alt="public/dolar3.png"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
    )
}
export default Banner