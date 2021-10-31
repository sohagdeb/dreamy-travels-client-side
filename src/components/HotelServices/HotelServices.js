import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HotelService from '../HotelService/HotelService';

const HotelServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/hotelServices';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center'>Hotel Services</h1>
                <hr />
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <HotelService key={service.id} service={service}></HotelService>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default HotelServices;