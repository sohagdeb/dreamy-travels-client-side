import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Carts = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/cart';
        fetch(url)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/cart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    const remaining = carts.filter(service => service._id !== id);
                    setCarts(remaining);
                }

            })
    }

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    carts.map((cart) => <Cart handleDelete={handleDelete} key={cart._id} cart={cart}></Cart>)
                }
            </Row >
        </div>

    );
};

export default Carts;