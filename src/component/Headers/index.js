import React from 'react';
import '../../styles/Header.css';
import GDriveLogo from "../../med/Drive.ico";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';

const index = ({userPhoto}) => {
    return (
        <div className="headers">
            <div className="headers__logo" >
                <img src={GDriveLogo} alt="" /><span>Drive</span> </div>

            <div className="headers_searchcontainer">

                <div className="headers_searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search in Drive" />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="headers_icons">
            <span>
                < HelpOutlineIcon />
                < SettingsIcon />

            </span>
            < AppsIcon />
           
            <img src={userPhoto} alt="" />
            </div>
        </div>

            


    )


}
export default index;





