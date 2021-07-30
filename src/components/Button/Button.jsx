// modules
import React from 'react';

// scss
import './Button.scss';

const Button = ({ link, text }) => {
    return(
        <div className="Button">
            <button onClick={link}>{text}</button>
        </div>
    )
}
export default Button;