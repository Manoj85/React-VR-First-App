import React from 'react';

import {
    View,
    AmbientLight,
    PointLight
} from 'react-vr';

class Lightning extends React.Component {

    render() {
        return (
           <View>
               <AmbientLight intensity={ 1.2 } />
               <PointLight intensity={0.25}
                           style={{
                               color: '#fff',
                               transform: [{
                                   translate: [0, 4, 0.25]
                               }]
                           }}
               />
           </View>
        );
    }
}

export default Lightning