import React from 'react';
import { connect } from 'react-redux'

import './ProfileMainDataContainer.scss';
import { TextField, InputLabel } from '@material-ui/core';

const ProfileMainDataContainer = (props) => {
    return ( 
        <div className="profile-main-data-container">
            <div className="profile-photo">
                <img src="https://i.pinimg.com/originals/a7/62/2e/a7622e9d64921dbe9792d5cf11fca089.png" alt="123"/>
            </div>
            <div className="profile-main-data-fields">
               
                <TextField label={<InputLabel>Name</InputLabel>} disabled value={"name"} />
                <TextField disabled value={"surname"} />
                <TextField disabled value={"email"} />
                <TextField disabled value={"name"} />
                <TextField disabled value={"name"} />
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDipatchToProps = (dispatch, ownProps) => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDipatchToProps)(ProfileMainDataContainer);