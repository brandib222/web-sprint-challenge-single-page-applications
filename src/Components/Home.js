import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(props) {

    const history = useHistory();

    const routeToForm = () => {
        history.push('/pizza');
    }

    return (
        <div className='home-wrapper'>
            <div className='top-container'>
                <h2> Your favorite food, delivered while you code</h2>
                <button onClick={routeToForm} id='order-pizza'>
                    Pizza?</button>
            </div>
        </div>


    )
} 