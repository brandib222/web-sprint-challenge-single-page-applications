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
                <h2 className='title'>Time to make choices</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.special}</div>
                </div>
                <div className='inputs' id='pizza-form'>
                    <label id='name-input'>Name:
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
                    <label id='size-dropdown'> Select Size:
                        <select value={values.size} onChange={onChange} name='size-dropdown'>
                            <option value="1">Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                            <option value="4">Extra-large</option>
                        </select>
                    </label>
                    <label className='pepperoni'> Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.topping1}
                            onChange={onChange}
                        />
                    </label>
                    <label className='pineapple'> Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            checked={values.topping2}
                            onChange={onChange}
                        />
                    </label>
                    <label className='cheese'> Extra Cheese
                        <input 
                            type='checkbox'
                            name='cheese'
                            checked={values.topping3}
                            onChange={onChange}
                        />
                    </label>
                    <label className='veggies'> Veggies
                        <input 
                            type='checkbox'
                            name='veggies'
                            checked={values.topping4}
                            onChange={onChange}
                        />
                    </label>
                    <label id='special-text'>Special Instructions:
                        <input 
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>
                    <div className='btn-container'>
                        <button id='order-button' disabled={disabled} onClick={onSubmit}>submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}