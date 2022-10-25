import { FlatList, Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import Appbar from './components/Appbar'
import styles from './styles/styles'
import more from '../../assets/images/more.png'
import love from '../../assets/images/love.png'
import comment from '../../assets/images/comment.png'
export default class Feed extends Component {
    dataAvatar = [
        {
            name: 'Sahara',
            image: require('../../assets/images/image1.jpeg'),
        },
        {
            name: 'Sophia',
            image: require('../../assets/images/image2.jpeg'),
        },
        {
            name: 'Hana',
            image: require('../../assets/images/image3.jpeg'),
        },
        {
            name: 'Naul',
            image: require('../../assets/images/image4.jpeg'),
        },
        {
            name: 'Kimihana',
            image: require('../../assets/images/image5.jpeg'),
        },
        {
            name: 'Yoko',
            image: require('../../assets/images/image6.jpeg'),
        },
        {
            name: 'Su',
            image: require('../../assets/images/image7.jpeg'),
        },
        {
            name: 'Finnia',
            image: require('../../assets/images/image8.jpeg'),
        },
        {
            name: 'Subana',
            image: require('../../assets/images/image9.jpeg'),
        },
        {
            name: 'Corohe',
            image: require('../../assets/images/image10.jpeg'),
        }
    ]
    dataFeeds = [
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sahara",
            image: require('../../assets/images/image1.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sophia",
            image: require('../../assets/images/image2.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "3 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Hana",
            image: require('../../assets/images/image3.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "5 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Naul",
            image: require('../../assets/images/image4.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "10 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Kimihana",
            image: require('../../assets/images/image5.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        }
    ]
    _renderAvatar = ({ item }) => {

        return <View style={styles.avatarContainer}>
            <Image source={item.image} style={styles.body__img} />
            <Text >{item.name}</Text>
        </View>
    }
    _renderFeed = ({ item }) => {
        return <View style={styles.feedContainer}>
            <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                    <Image source={item.image} style={styles.body__img} />
                    <View style={{paddingLeft:15}}>
                        <Text style={{color:"#2c2c2c"}}>{item.title}</Text>
                        <View style={styles.flexRow}>
                            <Text style={{color:"#d6d6d6"}}>{item.name}</Text>
                            <Text style={{paddingRight:15,color:"#d6d6d6"}}>{item.time}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={styles.icon} source={more}/>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{color:"#2c2c2c"}}>{item.content}</Text>
            </View>
            <View style={styles.reactContainer}>
                <View style={styles.reactIcon}>
                    <Image style={styles.icon} source={love}/>
                    <Text style={{marginLeft:5,color:"#2c2c2c"}}>2</Text>
                </View>
                <View style={styles.reactIcon}>
                    <Image style={styles.icon} source={comment}/>
                    <Text style={{marginLeft:5,color:"#2c2c2c"}}>4</Text>
                </View>
            </View>
        </View>
    }
    render() {
        return (
            <View>
                <Appbar />
                <View style={{ borderBottomColor: "#f2f2f2", borderBottomWidth: 2 }}>
                    <FlatList data={this.dataAvatar}
                        renderItem={this._renderAvatar}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <FlatList data={this.dataFeeds}
                        renderItem={this._renderFeed}

                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}