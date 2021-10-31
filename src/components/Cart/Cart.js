import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const { name, img, _id, description, price } = props.cart;
    const { handleDelete } = props;
    return (


        <Col>
            <Card className='card-cart mx-auto shadow p-3 mb-5 bg-body rounded'>
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
                    <Link to='/orders'>
                        <button className="button btn btn-warning">Purchase {name.toLowerCase()}</button>
                    </Link>
                    <br />
                    <button onClick={() => handleDelete(_id)} className='button btn btn-primary'>Delete</button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Cart;