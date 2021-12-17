import React from 'react';

export default function Order({ details }) {

    if(!details) {
        return <h3> Working to get your order... </h3>
    }

    return (
        <div className='order-container'>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Size: {details.size}</p>
            <p>Toppings: {details.topping1}, {details.topping2}, {details.topping3}, {details.topping4}</p>
            <p>Special Instructions: {details.special}</p>
        </div>
    )

}