import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Binding extends Component {
    state = {
        imgSelected:require('../../assets/images/haha.png')
    }
    
    data = [
        require('../../assets/images/angry.png'),
        require('../../assets/images/care.png'),
        require('../../assets/images/haha.png'),
        require('../../assets/images/like.png'),
        require('../../assets/images/love.png'),
        require('../../assets/images/sad.png'),
    ]
    _changeEmoji = (data) =>{
        this.setState({
            imgSelected:data
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Bạn đang cảm thấy như thế nào?</Text>
                <Image style={{ margin: 15 }} source={this.state.imgSelected}></Image>
                <View style={styles.imgContainer}>
                    {this.data.map((data, index) => (
                        <TouchableOpacity onPress={()=>this._changeEmoji(data)}>
                            <Image source={data} key={index} style={styles.img} />
                        </TouchableOpacity>

                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize:20,
        fontWeight: "500",
        color:"black"
    },
    imgContainer: {
        flexDirection: 'row'
    },
    img: {
        width: 25,
        height: 25,
        margin: 15
    }
})