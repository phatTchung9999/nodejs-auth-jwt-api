import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = () => {
    return (
        <form className='addForm'>
            <label htmlFor='addItem'>Add Employee </label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Employee'
                required
            />
            <button
                type='submit'
                aria-label='Add Employee'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
