import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleChange, handleDelete }) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
            />
            <label style={(item.checked) ? { textDecoration: 'line-through' } : null}>
                {item.item}
            </label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onDoubleClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem
