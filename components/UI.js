import React from 'react';

import {
    View,
    asset,
    Model
} from 'react-vr';

import Button from './Button'

class UI extends React.Component {

    constructor() {
        super();
    }

    render() {


        return (
           <View style={{
               flex: 1,
               flexDirection: 'row',
               width: 2,
               alignItems: 'stretch',
               transform: [
                   { translate: [-1.2, 2.85, -2] }
               ]
           }}>
               <Button alignment={'left'}
                       onClick={() => { this.props.onScrollLeftBegin();} }
                       onInteractionEnd={ () => { this.props.onScrollLeftEnd(); }}
               />

               <Button alignment={'right'}
                       onClick={() => { this.props.onScrollRightBegin();}}
                       onInteractionEnd={ () => { this.props.onScrollRightEnd(); }}
               />

           </View>
        );
    }
}

export default UI