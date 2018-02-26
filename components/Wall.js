import React from 'react';

import {
    View,
    Model,
    asset
} from 'react-vr';

class Wall extends React.Component {

    render() {
        let scale = this.props.scale,
            srcWallMat = {obj:asset('cube_wall.obj'), mtl:asset('cube_wall.mtl'), lit: true},
            srcWindowMat = {obj:asset('cube_window.obj'), mtl:asset('cube_window.mtl'), lit: true},
            translate = this.props.translate,
            wall = null;

        if (this.props.hasWindow && this.props.hasWindow === true) {
            wall = <Model
                style={{
                    transform: [
                        {translate: translate},
                        {scale: scale}
                    ]
                }}
                source={srcWindowMat} />;
        } else {
            wall = <Model
                style={{
                    transform: [
                        {translate: translate},
                        {scale: scale}
                    ]
                }}
                source={srcWallMat} />;
        }

        return (
            wall
        );
    }
}

export default Wall