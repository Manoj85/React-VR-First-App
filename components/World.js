import React from 'react';

import {
    View,
    Pano,
    asset,
    Model
} from 'react-vr';

class World extends React.Component {

    render() {
        return (
           <View>
               <Pano source={asset('bg/sky_1_by_nic4las-d931tya.png')}/>
               <Model
                   style={{
                       transform: [
                           { translate: [0, -2.8, 0] },
                           { scale: [100, 0.001, 100] }
                       ]
                   }}
                   source={{
                       obj: asset('bg/cylinder_earth.obj'),
                       mtl: asset('bg/cylinder_earth.mtl')
                   }}
                   lit={true}
               />
           </View>
        );
    }
}

export default World