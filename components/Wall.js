import React, { Component } from 'react';

import {
    View,
    Model,
    asset
} from 'react-vr';

class Wall extends Component {

    render() {
        let scale = this.props.scale,
            srcWallMat = {obj:asset('bg/cube_wall.obj'), mtl:asset('bg/cube_wall.mtl')},
            srcWindowMat = {obj:asset('bg/cube_window.obj'), mtl:asset('bg/cube_window.mtl')},
            translate = this.props.translate,
            wall = null;

        if (this.props.hasWindow) {
            wall = <Model style={{
                                transform: [
                                    {translate: translate},
                                    {scale: scale}
                                ]
                            }}
                          lit={true}
                          source={srcWindowMat}
                    />;
        } else {
            wall = <Model style={{
                                transform: [
                                    {translate: translate},
                                    {scale: scale}
                                ]
                            }}
                          lit={true}
                          source={srcWallMat}
                    />;
        }

        return (
            wall
        );
    }
}

export default Wall