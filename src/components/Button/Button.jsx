// modules
import React from 'react';

// scss
import './Button.scss';

const Button = ({ link, text, type }) => {
    return(
        <div className="Button">
            <button type={type} onClick={link}>{text}</button>
        </div>
    )
}
export default Button;