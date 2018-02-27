import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Model

} from 'react-vr';

import Lightning from './components/Lightning';
import Room from './components/Room';
import UI from './components/UI';
import GdImages from './components/GdImages';
import World from "./components/World";

export default class WelcomeToVR extends React.Component {

    constructor() {
        super();

        this.state = {
            scrolling: 'none'
        };
    }

  render() {
    return (
      <View>
          <Lightning />
          <World/>
          <Room/>

          <GdImages scrolling={this.state.scrolling} />

          <UI
              onScrollLeftBegin={() => { this.setState({ scrolling: 'left' }); }}
              onScrollRightBegin={() => { this.setState({ scrolling: 'right' }); }}
              onScrollLeftEnd={() => { this.setState({ scrolling: 'none' }); }}
              onScrollRightEnd={() => { this.setState({ scrolling: 'none' }); }}
          />

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
