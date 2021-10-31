import React, { useEffect, useState } from 'react';
import Manage from '../Manage/Manage';

const ManageOrder = () => {

    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }

            })
    }
    return (
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => <Manage key={order._id} order={order} handleDelete={handleDelete}></Manage>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;