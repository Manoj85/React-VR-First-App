import React from 'react';

import {
    View,
    asset
} from 'react-vr';
import Wall from './Wall';

class Room extends React.Component {

    render() {
        return (
           <View>
               <Wall
                   translate={[0, 0.2, -1]}
                   scale={[1, 0.4, 0.001]}
                   hasWindow={true} />
               <Wall
                   translate={[-1, 0.2, 0]}
                   scale={[0.001, 0.4, 1]}
                   hasWindow={true} />
               <Wall
                   translate={[1, 0.2, 0]}
                   scale={[0.001, 0.4, 1]}
                   hasWindow={true} />
               <Wall
                   translate={[0, 0.2, 1]}
                   scale={[1, 0.4, 0.001]}
                   hasWindow={true} />
               {/*<Wall*/}
                   {/*translate={[0, -0.2, 0]}*/}
                   {/*scale={[1, 0.001, 1]} />*/}
           </View>
        );
    }
}

export default Room