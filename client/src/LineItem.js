import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleChange, handleDelete }) => {
    return (
        <li className="item" key={item._id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item._id)}
            />
            <label style={(item.checked) ? { textDecoration: 'line-through' } : null}>
                {item.firstname}
            </label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onDoubleClick={() => handleDelete(item._id)}
                aria-label={`Delete ${item.firstname}`}
            />
        </li>
    )
}

export default LineItem
