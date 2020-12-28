import React from 'react';
import {Text} from 'react-native';
import config from '../../config';

export default Sm = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        fontFamily: config.defaultFont,
        fontSize: config.defaultFontSize*1.99,
        marginBottom: 2,
        color: config.defaultFontColor
    };

    return (
        <Text style={[defaultStyle, style]}>{props.children}</Text>
    );
}