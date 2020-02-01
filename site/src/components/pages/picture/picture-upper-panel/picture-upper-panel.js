import React from 'react';

import './picture-upper-panel.scss';
import PictureQrcodeContainer from './picture-qrcode-container/picture-qrcode-container';

const PictureUpperPanel = (props) => {

    const { picture } = props;

    return ( 
        <div className="picture-upper-panel">
            <h1 className="picture-name">{ picture.name }</h1>
            <PictureQrcodeContainer qrcode={picture.qrcode}/>
        </div>
     );
}

export default PictureUpperPanel;