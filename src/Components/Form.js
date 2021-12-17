import React from 'react';

export default function Form(props) {
    const {
        values, 
        submit, 
        change, 
        disabled, 
        errors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='form-group'>
                <h2 className='title'>Time to make a choice</h2>
                <div className='inputs' id='pizza-form'>
                    <label className='name-input'>Name:
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label className='email-input'>Email:
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                    <label className='topping-input-1'> Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.topping1}
                            onChange={onChange}
                        />
                    </label>
                    <label className='topping-input-2'> Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            checked={values.topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label className='topping-input-3'> Extra Cheese
                        <input 
                            type='checkbox'
                            name='cheese'
                            checked={values.topping3}
                            onChange={onChange}
                        />
                    </label>
                    <label className='topping-input-4'> Veggies
                        <input 
                            type='checkbox'
                            name='veggies'
                            checked={values.topping4}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <button id='submit' disabled={disabled}>submit</button>
            </div>
        </form>
    )
}