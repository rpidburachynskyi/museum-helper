import React from 'react';
import EditableTextField from '../../../../../simple-components/editable-text-field/editable-text-field';

import "./picture-upper-panel-data-item.scss";
import { connect } from 'react-redux';
import { savePictureData } from '../../../../../services/api/api';
import { changePictureSuccessCreator } from '../../../../../actions';

const PictureUpperPanelDataItem = (props) => {

    const { picture, label, option } = props;
    const { onPictureChanged } = props;
    
    const value = picture[option];

    return (
        <div className="picture-upper-panel-data-item">
            <h4
                className="picture-upper-panel-data-item-title"
            >{label}</h4>
            <EditableTextField
                value={value}
                onSaved={(v) => onPictureChanged(picture.id, { [option]: v})} />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { picture } = state.pictureInfoData;
    return {
        picture
    }
}

const mapDipatchToProps = (dispatch, ownProps) => {
    return {
        onPictureChanged: (id, changes) => {
            savePictureData(id, changes)
                .then((data) => {
                    changePictureSuccessCreator(id, changes, dispatch);
                });
        }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(PictureUpperPanelDataItem)