import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Model,
    AmbientLight,
    PointLight
} from 'react-vr';

import Wall from './components/Wall';
import Button from './components/Button';
import Image from './components/Image';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
          <AmbientLight intensity={ 1.2 }/>
          <Model
              style={{
                  transform: [
                      {scale: [1, 1, 1]}
                  ]
              }}
              source={{
                  obj: asset('bg/cube_sky.obj'),
                  mtl: asset('bg/cube_sky.mtl'),
                  lit: true
              }}
          />
          <Wall
              translate={[0, 0.2, -1]}
              scale={[1, 0.4, 0.001]} />
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
          <Wall
              translate={[0, -0.2, 0]}
              scale={[1, 0.001, 1]} />

          <Image
              texture={'1.jpg'}
              index={0}
              length={5} />
          <Image
              texture={'2.jpg'}
              index={1}
              length={5} />
          <Image
              texture={'3.jpg'}
              index={2}
              length={5} />
          <Image
              texture={'4.jpg'}
              index={3}
              length={5} />
          <Image
              texture={'5.jpg'}
              index={4}
              length={5} />

          <Button/>

          <PointLight intensity={0.25}
                      style={{
                          color:'#ffffff',
                          transform:[{translate : [0, 4, 0.25]}]}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
