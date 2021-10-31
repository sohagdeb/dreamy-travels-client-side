import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ManageOrder from '../../ManageOrder/ManageOrder';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card className='card-container mx-auto shadow p-3 mb-5 bg-body rounded'>
                        <div className='mx-auto'>
                            <Card.Img className='image' variant="top" src={service.img} />
                        </div>
                        <Card.Body className='text-center text-black'>
                            <h3>{service.name}</h3>
                            <hr />
                            <small>{service.description}</small>
                            <br />
                            <br />
                            <h5>
                                price:{service.price}$
                            </h5>

                            <button>Manage Order</button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Booking;