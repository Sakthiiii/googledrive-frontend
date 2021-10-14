import React from 'react';
import Newfile from './Newfile';
import "../styles/sidebar.css";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Sidebaritems from './Sidebaritems';
import StorageIcon from '@mui/icons-material/Storage';



const index = () => {
    return (
        <div className ="sidebar">
            <Newfile />
            <div className="sidebar__itemsCoontainer">

                <Sidebaritems arrow icon ={(<InsertDriveFileIcon />)} lable={"My Drive"}  />
                <Sidebaritems arrow icon ={(< ImportantDevicesIcon />)} lable={"Computers"}  />
                <Sidebaritems  icon ={(< PeopleAltIcon />)} lable={"Share with me"}  />
                <Sidebaritems icon ={(< QueryBuilderIcon />)} lable={"Recent"}  />
                <Sidebaritems  icon ={(< StarBorderIcon/>)} lable={"Starred"}  />
                <Sidebaritems  icon ={(< DeleteOutlineIcon />)} lable={"Bin"}  />
               
        <hr />
        <Sidebaritems  icon ={(< StorageIcon />)} lable={"Storage"}  />
            </div>
            
        </div>
    )
}

export default index
