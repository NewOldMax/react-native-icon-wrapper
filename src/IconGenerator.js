import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

class IconGenerator extends React.Component {

    constructor(props) {
        super(props);
    
        this.getIcon = this.getIcon.bind(this);
    }

    getIcon(name, type, iconProps, rest) {
        let icon = null;
        let Generator = null;
        switch(type) {
            case 'entypo':
                Generator = Entypo;
                break;
            case 'evil':
                Generator = EvilIcons;
                break;
            case 'font-awesome':
                Generator = FontAwesome;
                break;
            case 'foundation':
                Generator = Foundation;
                break;
            case 'ion':
                Generator = Ionicons;
                break;
            case 'material':
                Generator = MaterialIcons;
                break;
            case 'oct':
                Generator = Octicons;
                break;
            case 'zocial':
                Generator = Zocial;
                break;
            case 'ico-moon':
                if (rest.icoMoonConfig) {
                    const icoMoon = createIconSetFromIcoMoon(rest.icoMoonConfig)
                    Generator = icoMoon;
                }
                break;
            default:
                console.log('unknown icon type', type);
        }
        if (Generator) {
            icon = <Generator name={name} {...iconProps} {...rest} />
        }
        return icon;
    }

    render() {
        const {name, type, iconProps, ...rest} = this.props;
        return this.getIcon(name, type, iconProps, rest);
    }
}

IconGenerator.propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    iconProps: React.PropTypes.object,
    icoMoonConfig: React.PropTypes.node,
}

export default IconGenerator;