'use strict';

import React from 'react';
import {
    Animated,
    asset,
    View,
} from 'react-vr';
import GdImage from './GdImage';

class GdImages extends React.Component {

    constructor(props) {
        super();

        this.state = {
            scrollValue: new Animated.Value(0),
            scrolling: false,
            translation: 0,
        };
        this.imageWidth = 3.2;
        this.scrollBorder = 5;
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // currently not scrolling, but should be scrolling
        if (this.state.scrolling === false && nextProps.scrolling !== 'none') {
            this.setState({scrolling: true});
            if (nextProps.scrolling === 'right') {
                this.scrollRight();
            } else if (nextProps.scrolling === 'left') {
                this.scrollLeft();
            }
        } else {
            this.setState({scrolling: false});
            this.stopScrolling();
        }
    }

    scrollLeft() {
        Animated.timing(
            this.state.scrollValue,
            {
                toValue: this.scrollBorder,
                duration: 2000,
            }
        ).start();
    }


    scrollRight() {
        Animated.timing(
            this.state.scrollValue,
            {
                toValue: -this.scrollBorder,
                duration: 2000,
            }
        ).start();
    }

    stopScrolling() {
        // Animated.AnimatedValue.stopAnimation();
    }

    render() {

        let images = [],
            imagesConfig = [
                {
                    texture: require('../static_assets/images/1a.jpg')
                },
                {
                    texture: require('../static_assets/images/2.jpg')
                },
                {
                    texture: require('../static_assets/images/3.jpg')
                },
                {
                    texture: require('../static_assets/images/4.jpg')
                },
                {
                    texture: require('../static_assets/images/7.jpg')
                }
            ],
            numberOfImages = 4,
            view = <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            transform: [
                                { translateX: 0 }
                            ]
                        }}>
                        {images}
                    </View>;

        for (let i = 0; i < numberOfImages; i++) {
            images.push(
                <GdImage
                    key={i}
                    texture={imagesConfig[i].texture}
                    index={i}
                    length={numberOfImages}
                    width={this.imageWidth} />
            );
        }

        if (this.state.scrolling !== 'none') {
            view = <Animated.View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    transform: [
                        {translateX: this.state.scrollValue}
                    ]
                }}>
                {images}
            </Animated.View>
        }

        return(
            <View
                style={{

                    alignItems: 'center',
                    flexDirection: 'row',
                    transform: [
                        {translate: [-8.2, 2.2, -4.7]},
                    ]
                }}>
                {view}
            </View>
        );
    }
}

export default GdImages;
