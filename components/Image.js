import React from 'react';

import {
    View,
    Model,
    asset
} from 'react-vr';

class Image extends React.Component {

    render() {

        let index = this.props.index,
            length = this.props.length,
            texture = this.props.texture,
            imageGroupWidth = 0,
            imageWidth = 0.15,
            gutterWidth = 0.03,
            xOffset = 0;

        // Calculation of position.x of each image
        // depending on image width, gutter between the images,
        // length of images array and its index.
        imageGroupWidth = length * imageWidth * 2 + (length - 1) * gutterWidth;
        xOffset = imageWidth * 2 * index + gutterWidth * index + imageWidth - imageGroupWidth / 2;

        return (
            <Model
                style={{
                    transform: [
                        { translate: [xOffset, 0.1, -0.5] },
                        { scale: [imageWidth, imageWidth, 0.001] }
                    ]
                }}
                source={{
                    obj: asset('bg/cube_wall.obj'),
                    mtl: asset('bg/cube_wall.mtl'),
                    texture: asset(texture),
                    lit: true
                }}
            />
        );
    }
}

export default Image