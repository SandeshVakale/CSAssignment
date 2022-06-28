import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'; 
import { colors } from '../../themes';

const Button = (props) => {

    const {background, textColor, borderColor, onPress, text} = props;
    return <TouchableOpacity style={{height: 50, backgroundColor: background, borderColor: borderColor, borderRadius: 10, width: 150, justifyContent: 'center', alignItems: 'center', borderWidth: 1}} onPress={onPress} >
        <Text style={{color: textColor}}>{text}</Text>
    </TouchableOpacity>;
};

Button.propTypes = {  
    background: PropTypes.string,  
    textColor: PropTypes.string, 
    borderColor: PropTypes.string, 
    onPress: PropTypes.func.isRequired,  
    text: PropTypes.string.isRequired,   
};  
Button.defaultProps = {  
    background: colors.lightBlood,  
    textColor: colors.white, 
    borderColor: colors.lightBlood, 
}; 

export default Button;