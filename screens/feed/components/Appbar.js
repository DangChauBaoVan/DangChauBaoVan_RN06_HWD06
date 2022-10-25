import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "../styles/styles"

import camera from "../../../assets/images/camera.png"
import pen from "../../../assets/images/pen.png"

export default class Appbar extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image source={camera} style={styles.header__img} />
                <Text style={styles.header__text}>Feed</Text>
                <Image source={pen} style={styles.header__img} />
            </View>
        )
    }
}