import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import PictureDescriptionContainer from './PictureDescriptionContainer';

import './PictureProductionContainer.scss';
import PictureLanguages from './PictureLanguages';
import { changePictureInfo } from '../../../../../actions/pictures-info-actions.js';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import AddLanguageInfo from '../AddLanguageInfo';
import { tr } from '../../../../../services/i18n/i18n.js';
import { compose } from 'redux';
import withTranslate from '../../../../hocs/withTranslate/index.js';

const PictureProductionContainer = (props) => {

    const [addLanguageDialogVisible, setAddLanguageDialogVisible] = useState(false);
    const { currentIndex, pictureInfo } = props;
    const { changePictureInfo } = props;
    
    const [title, setTitle] = useState("");

    const currentPictureInfo = pictureInfo[currentIndex];

    useEffect(() => {
        if(currentIndex === -1) return;
        setTitle(pictureInfo[currentIndex].title);
    }, [ currentIndex ])

    if(pictureInfo.length === 0) {
        return (
            <Button 
                disabled={addLanguageDialogVisible}
                variant="contained"
                color="primary"
                style={{flexGrow: "1"}}
                onClick={() => setAddLanguageDialogVisible(true)}
            > { tr('picture.addFirstLanguage') }
            <AddLanguageInfo
                    visible={addLanguageDialogVisible}
                    setVisible={setAddLanguageDialogVisible}
                />
            </Button>
        )
    }
    
    return ( 
        <div className="picture-info-container">
            <PictureLanguages 
                setAddLanguageDialogVisible={setAddLanguageDialogVisible}/>
            <div className="picture-info-container-upper-part">
               { 
                currentIndex !== -1 && 
                    <TextField  
                        style={{flexGrow: "1"}}
                        label="Title"
                        variant="filled"
                        value={ title }
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={(e) => currentPictureInfo.title !== title ? changePictureInfo(currentPictureInfo.id, { title }) : {} }/>
               }
            </div>
            <PictureDescriptionContainer />
            
            <AddLanguageInfo
                    visible={addLanguageDialogVisible}
                    setVisible={setAddLanguageDialogVisible}
                />
        </div>
     );
}

const mapStateToProps = (state) => {
    const { currentIndex, pictureInfo } = state.pictureInfo;
    return {
        currentIndex,
        pictureInfo
    }
}
 
export default compose(
    connect(mapStateToProps, { changePictureInfo }),
    withTranslate
)(PictureProductionContainer);