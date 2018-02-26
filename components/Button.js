import React from 'react';

import {
    View,
    Model,
    asset
} from 'react-vr';

class Button extends React.Component {

    render() {
        return (
            <Model
                style={{
                    transform: [
                        { translate: [-0.2, 0, -0.4] },
                        { scale: [0.075, 0.3, 0.001] }
                    ]
                }}
                source={{
                    obj: asset('bg/cube_idle.obj'),
                    mtl: asset('bg/cube_idle.mtl'),
                    lit: true
                }}
            />
        );
    }
}

export default Button