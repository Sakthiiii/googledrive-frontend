import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "../styles/sidebaritems.css";
const Sidebaritems = ({icon,lable,arrow}) => {
    return (
        <div className ="sidebaritem">
            <div className="sidebaritem_arrow">

            {arrow && (<ArrowRightIcon />)}
            </div>
            <div className="saidebaritem__main">
                {icon}
                <p> {lable} </ p>

            </div>

        </div>
    )
}

export default Sidebaritems
