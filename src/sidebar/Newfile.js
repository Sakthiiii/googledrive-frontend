import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import "../styles/Newfile.css"

const Newfile = () => {
    return (
        <div className="newfile">
            <div className="newfile_containers">
               
            
                {/* <p>New</p> */}
                <button>    <AddIcon/> New</button>
            </div>
            
        </div>
    )
}

export default Newfile;
