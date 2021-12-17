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
            <div className='end-container'>
                <h3>Who are you tossing toppings to?</h3>
                <img src='https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='dog with glasses'/>
                <img src='https://images.pexels.com/photos/7444093/pexels-photo-7444093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='dog making funny face'/>
                <img src='https://images.pexels.com/photos/5732456/pexels-photo-5732456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='dog dressed like Harry Potter'/>
            </div>
        </div>


    )
} 