import React from 'react';
import './menuItem.css'
import { Link } from 'react-router-dom';

const MenuItem = props => {
    return(
        <Link to={props.to}>
                <i className={`fa fa-${props.icon}`}></i>{props.label}
        </Link>
    )
}

export default MenuItem