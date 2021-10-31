import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/carosel 1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Machu Pichu , Peru</h5>
                            <p>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carosel 2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>waterfalls on sweden</h5>
                            <p>Actually there are only two waterfalls in Sweden which have the predicate to be higher than 100 meter. Njupeskär is known as the highest waterfall in Sweden with a total height of 125 meters and a single drop of 70 meters followed by Handölsforsen with a total height of 110 meters.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carosel 3.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Beautiful View of Moraine Lake</h5>
                            <p>One of the Most Beautiful Spots in the World. Moraine Lake is a picturesque beauty spot with vivid turquoise waters you can explore by canoe. ... Vivid, clean turquoise water that's icy fresh with an average temperature of 41F (5C), Moraine Lake is surrounded by the magnificent Canadian Rockies.</p>
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
        </div>
    );
};

export default Banner;