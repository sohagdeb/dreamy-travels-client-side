import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleCart = cart => {
        axios.post('http://localhost:5000/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }
    const handleDelete = id => {
        // console.log(id);
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
        <div>
            <div>
                <div className=' pt-5'>
                    <h1 className='text-center'>Tranportation Services</h1>

                    <hr />
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                                handleCart={handleCart}
                                handleDelete={handleDelete}
                            ></Service>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;