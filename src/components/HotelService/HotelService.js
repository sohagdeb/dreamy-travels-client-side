import React from 'react';
import { Card, Col } from 'react-bootstrap';


const HotelService = (props) => {
    const { name, img, price, description } = props.service;
    return (
        <div>
            <Col>
                <Card className='card-container mx-auto shadow p-3 mb-5 bg-body rounded'>
                    <div className='mx-auto'>
                        <Card.Img className='image' variant="top" src={img} />
                    </div>
                    <br />
                    <Card.Body className='text-center text-black'>
                        <h3>{name}</h3>
                        <hr />
                        <small>{description}</small>
                        <h5>
                            price:{price}$
                        </h5>

                        <button className="button btn btn-warning">Booking {name.toLowerCase()}</button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HotelService;