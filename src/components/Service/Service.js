// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, img, price, description } = props.service;
    const { handleCart } = props;
    return (
        <Col>
            <Card className='card-container mx-auto shadow p-3 mb-5 bg-body rounded'>
                <div className='mx-auto'>
                    <Card.Img className='image' variant="top" src={img} />
                </div>
                <Card.Body className='text-center text-black'>
                    <h3>{name}</h3>
                    <hr />
                    <small>{description}</small>
                    <h5>
                        price:{price}$
                    </h5>
                    <Link to={`/carts`}>
                        <button onClick={() => handleCart(props.service)} className="button btn btn-warning">Booking {name.toLowerCase()}</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;