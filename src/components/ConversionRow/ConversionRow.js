import React from 'react'

// Style
import './ConversionRow.css'

function ConversionRow() {
    return (
        <div className='conversion-row'>
            <input type="number" className='input'/>
            <select>
                <option value="Hi">Hi</option>
            </select>
        </div>
    )
};

export default ConversionRow;